# Day 08 — Context API + `useContext`

## Status

**Planned — Not started**

Day 8 is prepared from the completed Day 7 reducer implementation, the current Expense Manager component tree, and current official React documentation. No Day 8 source implementation has started.

## Version Baseline

- React / React DOM: `^19.2.8`
- TypeScript: `~6.0.2`
- Vite: `^8.2.2`
- Lint: Oxlint `^1.79.0`
- Automated test framework: not installed

React 19.3 is the current stable release documented by React, while this repository remains on React 19.2.8. Both support rendering `<SomeContext value={...}>` directly as a Provider. No dependency upgrade is part of Day 8.

## Purpose — Why Context Exists

Props က explicit data flow အတွက် React ရဲ့ default choice ဖြစ်သည်။ Parent မှ child ကို data/action ပေးရခြင်းက problem မဟုတ်ဘဲ component contract ကိုရှင်းစေသည်။ သို့သော် component အလယ်အလွှာများက value ကိုမသုံးဘဲ အောက်ဆုံး consumer ဆီရောက်အောင် pass-through လုပ်နေရသောအခါ prop drilling ဖြစ်လာနိုင်သည်။

Context က component tree အပိုင်းတစ်ခုအတွင်း dependency တစ်ခုကို Provider မှတစ်ဆင့်ပေးပြီး descendant consumer က intermediate Props မပါဘဲဖတ်နိုင်စေသည်။ Context သည်:

- global variable မဟုတ်ပါ;
- State ကိုကိုယ်တိုင်မသိမ်းပါ;
- reducer သို့မဟုတ် external State manager မဟုတ်ပါ;
- server cache, persistence, URL State, or form State solution မဟုတ်ပါ။

Current tree မှာ:

```text
App
└─ ExpenseList       receives onDelete/onEdit but only forwards them
   └─ ExpenseItem    actually uses onDelete/onEdit
```

ဒီ pass-through က တစ်လွှာသာဖြစ်သောကြောင့် Props က production code အတွက် ရိုးရှင်းနေသေးသည်။ Day 8 exercise သည် Context လိုအပ်လို့မဖြစ်မနေပြောင်းခြင်းမဟုတ်ဘဲ Day 7 မှ stable reducer `dispatch` ကို bounded dependency အဖြစ်ပေးပြီး tradeoff ကိုလက်တွေ့လေ့လာမည့် deliberate refactor ဖြစ်သည်။

## Learning Objectives

Day 8 ပြီးလျှင် student သည်:

- Context ကို tree-scoped dependency-injection channel အဖြစ်ရှင်းပြနိုင်ရမည်။
- Props/composition, lifted State, and Context တို့အကြား smallest-correct-tool ကိုရွေးနိုင်ရမည်။
- React 19 Provider syntax, `createContext`, and `useContext` ကို TypeScript ဖြင့်သုံးနိုင်ရမည်။
- Meaningful default နှင့် `null` + guarded custom Hook strategy ကိုခွဲနိုင်ရမည်။
- Consumer က nearest Provider ကိုဘယ်လိုဖတ်သလဲနှင့် Provider placement rule ကိုရှင်းပြနိုင်ရမည်။
- Context value identity, `Object.is`, consumer re-renders, and `memo` limitation ကိုရှင်းပြနိုင်ရမည်။
- State and actions/dispatch ကိုခွဲခြင်း၏ render and responsibility tradeoff ကိုသိရမည်။
- Existing Expense Manager behavior ကိုမပျက်ဘဲ bounded dispatch Context refactor ပြုလုပ်နိုင်ရမည်။

## Mental Model

```text
owner creates/retains a value
  → Provider exposes that value to one subtree
  → descendant calls useContext(Context)
  → React finds the nearest matching Provider above it
  → consumer receives the current value and subscribes to changes
```

Context object ကိုယ်တိုင်က value ကိုမသိမ်းပါ။ Provider ရဲ့ `value` Prop က value ကိုသတ်မှတ်ပြီး `useContext` က calling component အပေါ်ဘက်ရှိ nearest matching Provider ကိုရှာသည်။ Provider မရှိလျှင် `createContext(defaultValue)` မှ static fallback ကိုရသည်။

Provider value ပြောင်းသည့် flow:

```text
owner State/action changes
  → Provider renders with next value
  → React compares previous/next value with Object.is
  → subscribed consumers render with the current value
  → commit updates affected DOM
```

### Hook Questions

- **What causes `useContext` to run?** Consumer component render တိုင်း Hook call က run ပြီး current nearest value ကိုဖတ်သည်။
- **What persists?** Provider owner ရဲ့ State/Reducer State က persist ဖြစ်သည်; Context object သည် stable module-level identity ဖြစ်သည်။
- **What causes a re-render?** Parent render က normal child render ဖြစ်စေနိုင်ပြီး Provider `value` identity ပြောင်းလျှင် subscribed consumers ကို Context update ဖြစ်စေသည်။
- **What does not cause a re-render?** Same Provider value ကို `Object.is` အရတူစွာပြန်ပေးခြင်းသည် Context-change notification မဖြစ်စေပါ။
- **What can become stale?** Event handler တစ်ခုထဲက State/Context value သည် အဲဒီ render ရဲ့ snapshot ဖြစ်သည်။ Provider value object တွင် stale callback ထည့်ထားလျှင် closure problem ဖြစ်နိုင်သည်။
- **When is cleanup required?** `useContext` ကိုယ်တိုင် cleanup မလိုပါ။ Context မှရသော service က subscription/timer/network connection ဖွင့်လျှင် ထို owner/Effect က cleanup ပိုင်သည်။
- **Common misuse?** Local State အားလုံးထည့်ခြင်း, meaningless defaults, unstable object values, Provider placement မှားခြင်း, and Context ကို server-State cache အဖြစ်သုံးခြင်း။

## Current React 19 API and TypeScript Syntax

### Create a Context

`createContext` ကို component အပြင် module scope မှာတစ်ကြိမ်ဖန်တီးရသည်:

```tsx
import { createContext } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<Theme>("light");
```

`"light"` သည် Provider မရှိသည့်အခါ အသုံးဝင်သော meaningful fallback ဖြစ်သည်။ Fallback သည် dynamic မဟုတ်ဘဲ static ဖြစ်သည်။

### Provide a Value

React 19 current syntax:

```tsx
<ThemeContext value={theme}>
  <Page />
</ThemeContext>
```

Older/common tutorial syntax:

```tsx
<ThemeContext.Provider value={theme}>
  <Page />
</ThemeContext.Provider>
```

`<SomeContext.Provider>` သည် React 19 မှာ compatibility အတွက်အလုပ်လုပ်ဆဲဖြစ်သော်လည်း React 19 project အသစ်မှာ `<SomeContext>` Provider syntax ကိုရွေးမည်။ React 18 and older codebases မှာ `.Provider` လိုအပ်သည်။ Legacy `contextTypes` / `getChildContext` APIs ကို React 19 ကဖယ်ရှားထားပြီး Day 8 မှာမသုံးရ။

### Read and Subscribe

```tsx
import { useContext } from "react";

function Toolbar() {
  const theme = useContext(ThemeContext);
  return <div data-theme={theme}>...</div>;
}
```

`useContext` သည် Hook ဖြစ်သောကြောင့် component or custom Hook top level မှာသာခေါ်ရသည်။ Event handler, condition, loop, or nested function ထဲမှာလိုသလိုခေါ်၍မရပါ။

## Meaningful Default vs Guarded Context

Context dependency မရှိဘဲ component အလုပ်မလုပ်နိုင်လျှင် fake no-op default က configuration error ကိုဖုံးကွယ်နိုင်သည်:

```tsx
// ❌ Provider ပျောက်နေခြင်းကို silent ဖြစ်စေသည်
const ExpenseDispatchContext = createContext<ExpenseDispatch>(() => {});
```

`null` sentinel နှင့် custom guard Hook က failure ကိုရှင်းစေသည်:

```tsx
import { createContext, useContext, type Dispatch } from "react";
import type { ExpenseAction } from "../reducers/expenseReducer";

type ExpenseDispatch = Dispatch<ExpenseAction>;

export const ExpenseDispatchContext =
  createContext<ExpenseDispatch | null>(null);

export function useExpenseDispatch(): ExpenseDispatch {
  const dispatch = useContext(ExpenseDispatchContext);

  if (dispatch === null) {
    throw new Error(
      "useExpenseDispatch must be used within ExpenseDispatchContext",
    );
  }

  return dispatch;
}
```

TypeScript generic က Context value ကို `ExpenseDispatch | null` ဟုမှန်ကန်စွာသတ်မှတ်သည်။ Guard ပြီးနောက် narrowing ကြောင့် caller က nullable check ထပ်ရေးရန်မလိုတော့ပါ။ Type assertion (`as ExpenseDispatch`) ဖြင့် configuration error ကိုဖုံးမထားရ။

## Progressive Examples

### 1. Minimal Read-Only Preference

Locale, theme, date format ကဲ့သို့ tree-wide configuration တွင် meaningful default ရှိနိုင်သည်:

```tsx
type Density = "comfortable" | "compact";

const DensityContext = createContext<Density>("comfortable");

function CompactTable() {
  const density = useContext(DensityContext);
  return <table data-density={density}>...</table>;
}
```

Value ကို component အလွှာများစွာကတစ်ပြိုင်နက်ဖတ်ပြီး intermediate components မသုံးသည့်အခါ Context ကသင့်လျော်သည်။ Component တစ်ခုတည်းအတွက် local preference ဆိုလျှင် Prop or local State ပိုရှင်းသည်။

### 2. Expense Manager — Dispatch-Only Context

Day 7 မှ `dispatch` identity သည် stable ဖြစ်သည်။ Provider က list subtree ကို dispatch ပေးနိုင်သည်:

```tsx
<ExpenseDispatchContext value={dispatch}>
  <ExpenseList expenses={filteredExpenses} />
</ExpenseDispatchContext>
```

`ExpenseItem` က guarded Hook ကိုသုံးပြီး domain actions dispatch လုပ်နိုင်သည်:

```tsx
const dispatch = useExpenseDispatch();

dispatch({ type: "expense/editing", expense });
dispatch({ type: "expense/deleted", id: expense.id });
```

ဒီ bounded design မှာ:

- `ExpenseList` က `onEdit` / `onDelete` pass-through Props မယူတော့ပါ။
- `expenses` ကို Context ထဲမထည့်ဘဲ list data Prop အဖြစ်ဆက်ပေးသည်။
- `searchText`, filters, totals, form State, persistence, and reducer ownership မပြောင်းပါ။
- `ExpenseItem` က expense-domain action contract ကိုတိုက်ရိုက်မှီသွားသော coupling ရှိသည်။ Reusable presentational component လိုလျှင် callback Props ကပိုကောင်းနိုင်သည်။

### 3. Production Application — State and Actions Split

Authentication or checkout workflow တစ်ခုတွင် State နဲ့ actions နှစ်မျိုးလုံး deep consumers လိုနိုင်သည်:

```text
SessionStateContext   → user/status readers
SessionActionsContext → signIn/signOut callers
```

Action-only consumer က State change တိုင်း Context update မခံရစေရန် State/action Context ခွဲနိုင်သည်။ သို့သော် Context တစ်ခုစီထပ်ဖန်တီးခြင်းက API surface/boilerplate တိုးသည်။ App အရွယ်သေးလျှင် combined Context ကလုံလောက်နိုင်ပြီး performance problem မတိုင်းတာရသေးခင် premature splitting မလုပ်ရ။

Remote server data ရဲ့ cache, request deduplication, retry, freshness, invalidation တို့ကို Context + reducer တစ်ခုနဲ့ပြန်တည်ဆောက်ခြင်းမလုပ်သင့်ပါ။ ထို concern များမှာ later server-State lesson/tool ရဲ့ responsibility ဖြစ်သည်။

## Provider Placement and Override Rules

- Consumer က Provider ၏ descendant ဖြစ်ရမည်။ Component တစ်ခုက `useContext` ခေါ်ပြီး အဲဒီ component return ထဲမှာ Provider ထည့်ထားခြင်းက အဲဒီ Hook call ကိုမသက်ရောက်ပါ။
- Nested Providers ရှိလျှင် consumer က nearest Provider value ကိုရသည်။ ဒီ behavior ကို theme override, test fixtures, or scoped configuration အတွက်သုံးနိုင်သည်။
- Provider ကိုလိုအပ်သည်ထက်အပေါ်ဆုံးမတင်ရ။ Narrow boundary က dependency scope နဲ့ rerender surface ကိုရှင်းစေသည်။
- Provide/read လုပ်သည့် Context object သည် exact same object ဖြစ်ရသည်။ Duplicate modules or problematic symlinks ကြောင့် Context instances နှစ်ခုဖြစ်လျှင် value မရနိုင်ပါ။

## Context Value Identity and Re-renders

React က previous/next Provider values ကို `Object.is` ဖြင့်နှိုင်းသည်။ Render တိုင်း object/function အသစ်ဖန်တီးလျှင် contents တူသော်လည်း identity အသစ်ဖြစ်သည်:

```tsx
// ⚠️ Provider render တိုင်း object အသစ်
<AuthContext value={{ currentUser, login }}>
  <Page />
</AuthContext>
```

ထို Context ကိုဖတ်သည့် consumers အားလုံး Context update ရနိုင်သည်။ `memo` နဲ့ consumer ကို wrap လုပ်ထားခြင်းသည် fresh Context value ရောက်ခြင်းကိုမတားပါ။

Production response order:

1. Context ထဲက values အားလုံးအမှန်တကယ် shared ဟုတ်မဟုတ်စစ်ပါ။
2. Provider boundary ကိုကျဉ်းစေပါ။
3. Unrelated State and actions Context ခွဲရန်စဉ်းစားပါ။
4. Profiler/measurement မှ real cost တွေ့မှ `useMemo` / `useCallback` ဖြင့် object/function identity stabilize လုပ်ပါ။

Day 8 Expense Manager exercise မှ `dispatch` သည် React ပေးသော stable identity ဖြစ်သောကြောင့် dispatch-only value အတွက် `useMemo` မလိုပါ။ Manual memoization ကို correctness tool အဖြစ်မသုံးရ။

## Context vs Alternatives

| Choice | Best fit | Main tradeoff |
| --- | --- | --- |
| Props | Direct/short parent-child data flow | Intermediate pass-through can grow |
| Composition / `children` | Parent controls structure without forwarding every detail | Not suitable for every dynamic dependency |
| Lifted State | Siblings need one shared owner | Still needs Props or Context for distribution |
| Context | Many/deep descendants need a tree-scoped dependency | Dependencies become less visible at call sites; consumers follow value changes |
| External client store | Broad complex shared client State with selector/tooling needs | New dependency and architectural cost |
| Server-State tool | Remote cache/freshness/request lifecycle | Solves a different State category |

Context does not replace ownership. State can remain in `useState`/`useReducer` at the correct owner, while Context only distributes its current value or actions.

## DO / DON'T

### DO

- Start with Props; introduce Context when sharing depth/scope justifies it.
- Create Context at module scope and keep Provider above every consumer.
- Use a meaningful static default only when standalone behavior is genuinely valid.
- Use `null` plus a guarded custom Hook for required dependencies.
- Type the complete Context contract and let TypeScript narrow it.
- Keep Provider boundaries as narrow as the dependency scope permits.
- Consider separate State/action Contexts when consumers need different update frequencies.
- Keep server State, URL State, form State, and Derived Values in their proper categories.

### DON'T

- Do not put every value into a single “global” Context.
- Do not use a fake no-op function default to hide a missing Provider.
- Do not call `useContext` conditionally or inside an event handler.
- Do not mutate objects merely because they are supplied through Context.
- Do not assume `memo` blocks Context-driven consumer updates.
- Do not add `useMemo`/`useCallback` automatically without a value-identity reason or measurement.
- Do not use Context alone as a replacement for remote-data caching or external synchronization.

## Common Mistakes

### Provider Below the Reader

```tsx
// ❌ This useContext call cannot read the Provider returned below it
function Panel() {
  const value = useContext(SettingsContext);
  return <SettingsContext value="compact">...</SettingsContext>;
}

// ✅ Put the Provider in an ancestor
function App() {
  return (
    <SettingsContext value="compact">
      <Panel />
    </SettingsContext>
  );
}
```

### Unsafe Default Assertion

```tsx
// ❌ Compiler is silenced, runtime Provider mistake remains
const Context = createContext<ExpenseDispatch>(null as never);

// ✅ Model absence and guard it
const Context = createContext<ExpenseDispatch | null>(null);
```

### Mega Context

```tsx
// ❌ Unrelated changes notify every consumer of this object value
value={{ expenses, editingExpense, searchText, category, total, dispatch }}

// ✅ Provide only the cohesive dependency needed by this subtree
value={dispatch}
```

## Production Considerations

- **Maintainability:** Custom consumer Hooks give one import/API, centralize the missing-Provider error, and allow the internal Context shape to evolve.
- **Testability:** A required guarded Context fails clearly when test setup omits its Provider. Tests can wrap consumers with a scoped Provider and a typed fake/spy dispatch.
- **Performance:** Context has no selector API by itself; any changed Provider value notifies all consumers of that Context. Split boundaries by responsibility before adding memoization.
- **Developer experience:** React DevTools can help inspect component hierarchy and Provider placement. A custom Hook error is faster to diagnose than a silent fallback.
- **Accessibility:** Context itself does not improve accessibility. Existing button labels, form behavior, focus, and live total must remain intact during refactoring.
- **Security:** Context is in-memory client data distribution, not an authorization boundary. Hiding UI through Context does not secure server operations.
- **SSR / frameworks:** Context is tree-scoped in each render. This Vite app is client-rendered; framework Server Component rules are not needed for the exercise. React 19.3 adds direct Context rendering from Server Components, but that does not change this client-side lesson.
- **Build implications:** Context is built into React; no package or Vite configuration change is required.

## Professional Debugging Tips

- If a consumer gets `null`/fallback, trace the rendered tree upward and confirm the Provider is actually above it.
- Confirm provider and consumer import the same exported Context object; never call `createContext` separately in both files.
- Temporarily log or inspect Provider value identity only when diagnosing unexpected consumer renders.
- Use the React Profiler before optimizing Context value identity or splitting providers.
- Let TypeScript reject invalid dispatch actions; do not widen dispatch to `(action: any) => void`.
- Search `onDelete` / `onEdit` usages before removing Props so every call site and type contract is handled.

## Implementation Exercise — Bounded Expense Dispatch Context

Important Context and integration code ကို student က hints ဖြင့်ကိုယ်တိုင်ရေးရန်။

### Scope

1. Draw the current `App → ExpenseList → ExpenseItem` action-prop flow and state which component actually uses each callback.
2. Create a dedicated Context module for `Dispatch<ExpenseAction> | null`.
3. Create and export a guarded `useExpenseDispatch` Hook with an explicit return type.
4. In `App`, provide the existing reducer `dispatch` only around the expense-list subtree that needs it.
5. In `ExpenseItem`, read dispatch through the custom Hook and dispatch typed edit/delete domain actions.
6. Remove only the now-unnecessary `onEdit` / `onDelete` pass-through Props from `ExpenseList` and `ExpenseItem`.
7. Keep `expenses` as an explicit `ExpenseList` Prop. Do not move reducer State, filters, total, form fields, storage, IDs, or focus behavior into Context.
8. Preserve all current behavior and record only actual manual-test results.

### Hints

- Import `type Dispatch` from React and `type ExpenseAction` from the reducer module.
- `createContext<ExpenseDispatch | null>(null)` represents a required Provider honestly.
- Check `dispatch === null` in the custom Hook; do not use an assertion.
- React 19.2.8 supports `<ExpenseDispatchContext value={dispatch}>`.
- `dispatch` is stable, so do not wrap it in `useMemo`.
- After updating `ExpenseItem`, use repository search to find stale callback Prop declarations/usages.
- If the refactor feels more coupled than Props, record that observation—it is part of the lesson, not a failure.

### Expected Tree After the Exercise

```text
App owns useReducer
└─ ExpenseDispatchContext value={dispatch}
   └─ ExpenseList receives expenses
      └─ ExpenseItem receives expense and reads dispatch
```

## Manual Test Matrix

Record actual student-reported results only after implementation. Do not start a server or repeat explicit student tests unless browser testing or visual verification is explicitly requested.

| Scenario | Expected behavior | Actual result |
| --- | --- | --- |
| Add expense | Existing Add and focus behavior remains unchanged | Not tested |
| Start edit | Correct item opens in edit mode | Not tested |
| Update expense | Item changes and edit mode closes | Not tested |
| Cancel edit | Data remains unchanged and edit mode closes | Not tested |
| Delete expense | Correct item is removed | Not tested |
| Delete edited item | Item is removed and edit mode clears | Not tested |
| Search + category | Filtering, count, and total remain correct | Not tested |
| Reload / invalid form | Persistence and validation/focus remain correct | Not tested |

## Short Review — After Teaching and Implementation

1. Why are Props still a valid or possibly simpler choice for the current one-level `ExpenseList` pass-through, even after the Context refactor works?
2. What is the difference between a Context object, its Provider value, and the State owner?
3. Why is `null` plus a guarded custom Hook safer than a fake no-op dispatch default for this dependency?
4. If one Context value contains `{ expenses, dispatch }`, which consumers update when `expenses` changes, and why might separate State/dispatch Contexts help?
5. Why can `memo(ExpenseItem)` not prevent a render caused by a changed Context value?

## Session Evidence

Record only actual student work, explanations, corrections, and student-reported manual results after the lesson starts.

### Exercises Completed

### Concept Explanations

### Quiz / Review Evidence

### Manual Tests

### Mistakes / Corrections

### Implementation Evidence

### Mini Challenges

## Completion Criteria

- [ ] Student explains Context's purpose, nearest-Provider lookup, subscription behavior, and when Props remain preferable.
- [ ] Student explains meaningful defaults versus required guarded Context dependencies.
- [ ] Student explains Context value identity, `Object.is`, consumer re-renders, and why `memo` does not block Context updates.
- [ ] Student implements the typed Context, guard Hook, Provider, and consumer integration using hints.
- [ ] Only dispatch distribution moves to Context; State ownership and unrelated State categories remain correct.
- [ ] Existing reducer invariants and Expense Manager behaviors remain preserved.
- [ ] Meaningful implementation, review coverage, and manual tests have real evidence.
- [ ] `npm run verify` and `git diff --check` pass once, or eligible successful results are reused according to `PROTOCOLS.md`.
- [ ] Actual learning summary, mistakes, and code patterns are recorded.

## Sources / Modern Notes

Checked 2026-09-12:

- [React `createContext` API reference](https://react.dev/reference/react/createContext) — module-level creation, static fallback, React 19 Provider syntax, nearest Provider behavior, and legacy forms.
- [React `useContext` API reference](https://react.dev/reference/react/useContext) — subscription behavior, `Object.is` comparison, `memo` caveat, provider placement, and exact Context-object identity.
- [React: Passing Data Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context) — Props/composition-first motivation and tree-scoped data flow.
- [React: Using TypeScript](https://react.dev/learn/typescript#typing-usecontext) — typed defaults and guarded custom Context Hooks.
- [React 19 release notes](https://react.dev/blog/2024/12/05/react-19#context-as-a-provider) — `<Context>` as the current Provider syntax.
- [React 19.3 release notes](https://react.dev/blog/2026/09/09/react-19-3) — current stable release context and framework/Server Component note; no repository upgrade is required.

Current stable client API: `createContext` with `<SomeContext value={...}>` and `useContext(SomeContext)`.

Compatibility note: `<SomeContext.Provider>` remains relevant to React 18 and older codebases. React 19 removed the much older legacy `contextTypes` / `getChildContext` system.

Experimental/framework note: React Server Components cannot create Context. React 19.3 allows a Server Component to render a Context imported from a client module, but this Vite client-rendered application does not need that pattern.

## What I Actually Learned

_Complete from actual Day 8 evidence only._

## Problems / Mistakes I Made

_Record only mistakes that actually occur._

## Important Code Patterns

_Record only patterns from the student's actual implementation._

## Git Checkpoint

Follow the **Complete Current Day** protocol in `../PROTOCOLS.md`.

## Next Day Context

Day 9 မှာ Context consumer guard ကဲ့သို့ reusable stateful/integration logic ကို cohesive Custom Hooks အဖြစ် design လုပ်ခြင်း၊ Rules of Hooks, reactive inputs, cleanup ownership, and extraction tradeoffs ကိုလေ့လာမည်။
