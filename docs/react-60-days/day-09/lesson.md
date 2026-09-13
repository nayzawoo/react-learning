# Day 09 — Custom Hooks

## Status

**Planned — Not started**

Day 9 is prepared from the current Day 8 Expense Manager source. No Day 9 application implementation has started.

## Version Baseline

- React / React DOM: `^19.2.8`
- TypeScript: `~6.0.2`
- Vite: `^8.2.2`
- Lint: Oxlint `^1.79.0`
- Additional Hook library: none

Custom Hooks are a React composition pattern and require no new dependency or configuration.

## Purpose — Why Custom Hooks Exist

Component တစ်ခုထဲမှာ State, Effect, event integration နဲ့ domain behavior တွေစုလာတဲ့အခါ JSX responsibility နဲ့ stateful behavior responsibility ရောထွေးသွားနိုင်တယ်။ တူညီသော behavior ကို component များစွာမှာ copy လုပ်ခြင်းက bug fix နဲ့ lifecycle rule များကိုနေရာတိုင်းပြန်ညှိရစေတယ်။

Custom Hook က React Hooks ကိုပေါင်းစပ်ပြီး stateful logic ကို အမည်ရှိသော input/output API တစ်ခုအဖြစ်ထုတ်ယူစေတယ်။ Custom Hook သည်:

- logic ကို share လုပ်ပေးသော်လည်း State instance ကို အလိုအလျောက် share မလုပ်ပါ;
- UI/JSX မပြန်ပေးပါ;
- ordinary utility function တစ်ခုနှင့်မတူဘဲ React Hooks ကိုခေါ်နိုင်သည်;
- component hierarchy သို့ State ownership ကို အလိုအလျောက်မပြောင်းပါ;
- library သို့မဟုတ် global store မဟုတ်ပါ။

## Current Expense Manager Fit

လက်ရှိ `App.tsx` က responsibility နှစ်မျိုးကိုအတူပိုင်ထားတယ်:

```text
App
├─ renders and coordinates Expense Manager UI
└─ owns expense-state lifecycle
   ├─ useReducer
   ├─ lazy localStorage read
   └─ persistence Effect
```

Day 9 အတွက် natural candidate က reducer State နဲ့ persistence lifecycle ကို bounded Hook တစ်ခုအဖြစ် extract လုပ်ခြင်းဖြစ်တယ်:

```text
usePersistentExpenseState(storageKey)
├─ owns useReducer setup
├─ owns lazy storage initialization
├─ owns persistence Effect
└─ returns { expenseState, dispatch }

App
├─ consumes expenseState and dispatch
└─ continues to own UI composition, filters, handlers, and Provider placement
```

ဒီ extraction က code line လျှော့ရန်သက်သက်မဟုတ်ဘဲ cohesive lifecycle boundary ဖန်တီးရန်ဖြစ်သည်။ Generic `useLocalStorage` abstraction ကို Day 9 မှာမတည်ဆောက်သေးပါ—runtime validation, schema migration, serialization failure, quota, cross-tab synchronization နဲ့ SSR behavior များကိုမဖြေရှင်းဘဲ generic API လုပ်ခြင်းက abstraction ကိုအလွန်ကျယ်စေနိုင်သည်။

## Learning Objectives

Day 9 teaching ပြီးလျှင် အောက်ပါအကြောင်းအရာများကိုအသုံးချနိုင်ရန်:

- Custom Hook က stateful logic ကို share လုပ်ပြီး State instance ကိုမ share ကြောင်းခွဲရန်
- `use...` naming နဲ့ Rules of Hooks ကို component/custom-Hook boundary တွင်လိုက်နာရန်
- Hook input များထဲက reactive values နဲ့ configuration assumptions ကိုခွဲရန်
- tuple နှင့် object return API tradeoffs ကို TypeScript contract ဖြင့်ရွေးရန်
- Effect setup/cleanup responsibility ကို Hook boundary ထဲမှာ cohesive ဖြစ်အောင်ထားရန်
- extraction မသင့်သောနေရာနှင့် premature generic abstraction ကိုရှောင်ရန်
- current persistence lifecycle ကို behavior မပြောင်းဘဲ bounded Hook အဖြစ် refactor လုပ်ရန်

## Mental Model

```text
component renders
  → calls Custom Hook at the top level
  → Custom Hook calls built-in Hooks in the same order
  → React associates that Hook state with this component call site
  → Custom Hook returns a typed API
  → component renders using that API
```

Custom Hook function body သည် component render တိုင်းပြန် run တယ်။ အတွင်း `useState`, `useReducer`, `useRef` တို့က React သိမ်းထားသော State/Ref ကို call order အလိုက်ပြန်ရတယ်။ Hook function ကိုယ်တိုင်က global singleton object မဟုတ်ဘူး။

### Hook Questions

- **What causes it to run?** Custom Hook ကိုခေါ်သော component render တိုင်း Hook function body run တယ်။
- **What persists?** Built-in Hooks ကပိုင်သော State, reducer State, and refs persist ဖြစ်တယ်; ordinary local variables မ persist ပါ။
- **What causes a re-render?** Hook အတွင်း State/reducer update က calling component ကို re-render စေတယ်။
- **What does not cause a re-render?** Local variable assignment နဲ့ `ref.current` mutation က re-render မ schedule လုပ်ပါ။
- **What can become stale?** Effect/callback က reactive input ဟောင်းကို capture လုပ်ပြီး dependency မပြည့်လျှင် stale closure ဖြစ်နိုင်တယ်။
- **When is cleanup required?** Subscription, timer, event listener, network connection စသည့် setup ကို Hook ကပိုင်လျှင် matching cleanup ကိုလည်း Hook ကပိုင်ရမယ်။ `localStorage.setItem` တစ်ခုတည်းမှာ cleanup မလိုပါ။
- **Common misuse?** Conditional Hook calls, vague “utility” Hooks, hidden dependencies, giant return objects, premature generics, and Effects used for Derived Values.

## Share Logic, Not State

Custom Hook တစ်ခုကို components နှစ်ခုကခေါ်လျှင် Hook call တစ်ခုစီမှာ သီးခြား State ရတယ်:

```tsx
function useToggle(initialValue = false) {
  const [isOn, setIsOn] = useState(initialValue);

  return {
    isOn,
    toggle: () => setIsOn(value => !value),
  };
}

function Header() {
  const menu = useToggle(); // Header-owned State
  // ...
}

function Sidebar() {
  const panel = useToggle(); // separate Sidebar-owned State
  // ...
}
```

State instance တစ်ခုကို components များ share ရန်လိုလျှင် State ကို common owner သို့ lift လုပ်ပြီး Props/Context ဖြင့် distribute လုပ်ရန် သို့မဟုတ် justified external store သုံးရန်လိုတယ်။

## Naming and Rules of Hooks

Custom Hook name ကို `use` နဲ့စပြီး နောက်စာလုံးကို uppercase သို့မဟုတ် recognizable word boundary ဖြစ်အောင်ရေးရမယ်—ဥပမာ `usePersistentExpenseState`။ ဒီ naming က function အတွင်း Hooks rules သက်ရောက်ကြောင်း tools နှင့် developer ကိုပြောပေးတယ်။

Built-in Hooks နှင့် Custom Hooks ကို:

- React function component top level မှာခေါ်ရန်;
- Custom Hook top level မှာခေါ်ရန်;
- condition, loop, nested function, event handler, `try`/`catch` ထဲမခေါ်ရန်;
- ordinary function မှာမခေါ်ရန်။

```tsx
// ❌ call order can change
if (enabled) {
  const state = usePersistentExpenseState("expenses");
}

// ✅ call every render; branch on returned data or rendered UI
const state = usePersistentExpenseState("expenses");

if (!enabled) {
  return null;
}
```

React 19 `use` API တွင် conditional/loop rules ကွာနိုင်သော်လည်း `useState`, `useReducer`, `useEffect`, `useContext` နှင့် Custom Hooks အတွက် top-level rule ကိုဆက်လိုက်နာရမယ်။ Day 9 exercise သည် `use` API ကိုမသုံးပါ။

## Hook Inputs and Reactive Values

Hook parameters သည် Props ကဲ့သို့ render တစ်ခုစီ၏ inputs ဖြစ်တယ်။ Effect က input ကိုဖတ်လျှင် dependency list တွင်ထည့်ရန်လိုတယ်:

```tsx
function useChatRoom(serverUrl: string, roomId: string) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();

    return () => connection.disconnect();
  }, [serverUrl, roomId]);
}
```

Dependency ကိုဖျက်ပြီး linter ကိုတိတ်အောင်လုပ်ခြင်းက stale behavior ကိုဖုံးကွယ်နိုင်တယ်။ Input မပြောင်းရဟု API contract သတ်မှတ်ထားလျှင် naming/documentation ဖြင့်ရှင်းစေသင့်ပြီး runtime မှာပြောင်းနိုင်သော input ကို မတော်တဆ fixed value အဖြစ်မယူဆရ။

### Day 9 `storageKey` Caveat

`useReducer` lazy initializer က mount အချိန်မှာသာ initial State ဖန်တီးတယ်။ `storageKey` ပြောင်းသွားလျှင် reducer State ကို key အသစ်မှအလိုအလျောက် reload မလုပ်ဘဲ persistence Effect က လက်ရှိ State ကို key အသစ်သို့ရေးနိုင်တယ်။ ဒီ project မှာ constant `"expenses"` သုံးသောကြောင့် simple contract လုံလောက်တယ်။ Dynamic key support လိုလျှင် behavior ကိုသီးခြား design လုပ်ရမယ်—dependency ဖျောက်ခြင်းဖြင့်မဖြေရှင်းရ။

## Return API Design with TypeScript

### Tuple

```ts
type PersistentExpenseState = readonly [
  ExpenseState,
  Dispatch<ExpenseAction>,
];
```

Tuple က `useState` ကဲ့သို့ small, ordered API အတွက် concise ဖြစ်ပြီး caller က values ကို rename လုပ်လွယ်တယ်။ Item order များလာလျှင်ဖတ်ရခက်နိုင်တယ်။

### Object

```ts
type PersistentExpenseState = {
  expenseState: ExpenseState;
  dispatch: Dispatch<ExpenseAction>;
};
```

Object က property names ဖြင့် responsibility ရှင်းပြီး optional fields ထပ်ချဲ့ရလွယ်တယ်။ Return object အသစ်သည် render တိုင်း identity အသစ်ဖြစ်နိုင်သော်လည်း local destructuring အတွက် correctness problem မဟုတ်ပါ။ Object တစ်ခုလုံးကို dependency/Context value အဖြစ်ပေးမည်ဆိုမှ identity impact ကိုသီးခြားစဉ်းစားရမယ်။

Day 9 exercise အတွက် `{ expenseState, dispatch }` object API ကိုသုံးမယ်။

## Progressive Examples

### 1. Minimal — `useToggle`

`useToggle` က boolean State နဲ့ transition logic ကို name တစ်ခုအောက်စုတယ်။ Caller တစ်ခုစီသီးခြား State ရပြီး UI markup ကို Hook ကမပိုင်ဘူး။

### 2. Expense Manager — `usePersistentExpenseState`

Target public contract:

```ts
function usePersistentExpenseState(storageKey: string): {
  expenseState: ExpenseState;
  dispatch: Dispatch<ExpenseAction>;
}
```

Hook က existing lazy load, `useReducer`, and persistence Effect ကိုပိုင်မယ်။ `App` က filters, search, totals, form handlers, `ExpenseDispatchContext` Provider placement, and JSX ကိုဆက်ပိုင်မယ်။

### 3. Production — Subscription Hook

WebSocket, browser event, or external service subscription Hook တစ်ခုမှာ inputs → setup → cleanup ownership က cohesive ဖြစ်ရမယ်:

```text
useSubscription(sourceId)
├─ subscribes when sourceId changes
├─ exposes current status/data
└─ unsubscribes before reconnect or unmount
```

External store snapshot/subscription problem အတွက် manual Effect subscription ထက် React ရဲ့ `useSyncExternalStore` သင့်နိုင်တယ်။ Custom Hook သည် underlying API ကိုမှန်ကန်စွာရွေးရသေးပြီး abstraction တစ်ခုရှိတာကြောင့် lifecycle bug အလိုအလျောက်မပျောက်ပါ။

## Extraction Decision

| Keep inline | Extract a Custom Hook |
| --- | --- |
| Logic is short and clear in one component | Stateful lifecycle forms one cohesive responsibility |
| Extraction would hide simple data flow | Multiple components need the same behavior |
| No meaningful reusable API name exists | A stable domain-oriented API improves readability |
| Logic is pure calculation | Logic composes React Hooks or lifecycle integration |

Pure calculation ကို Hook မလုပ်သင့်ဘူး:

```ts
// ✅ ordinary function; no React Hook is needed
function calculateTotal(expenses: Expense[]) {
  return expenses.reduce((sum, expense) => sum + expense.amount, 0);
}
```

## DO / DON'T

### DO

- Hook ကို cohesive behavior သို့ lifecycle responsibility တစ်ခုအတွက် name ပေးပါ။
- Inputs နဲ့ returned API ကို extraction မတိုင်မီ design လုပ်ပါ။
- Reactive input အားလုံးကို Effect dependencies ထဲမှန်ကန်စွာထည့်ပါ။
- Setup ကို Hook ကပိုင်လျှင် cleanup ကိုလည်း Hook ထဲမှာထားပါ။
- Domain-specific Hook ဖြင့်စပြီး reuse pressure ရှိမှ generic abstraction ချဲ့ပါ။
- Caller component မှာ UI composition နဲ့ component-specific State ကိုထားပါ။

### DON'T

- Line count လျှော့ရန် logic အားလုံးကို Hook ခွဲမထားပါနှင့်။
- Custom Hook နှစ်ခေါ်ခြင်းက State တစ်ခု share မည်ဟုမယူဆပါနှင့်။
- Hook ကို condition, loop, handler, or nested function ထဲမခေါ်ပါနှင့်။
- Effect dependency ကိုဖျက်ပြီး stale closure ကိုမဖုံးပါနှင့်။
- Derived Value ကို State + Effect ဖြင့် sync လုပ်သည့် Hook မဖန်တီးပါနှင့်။
- `localStorage` data ကို runtime validation မရှိဘဲ trusted domain object အဖြစ် generic API ထဲမကြေညာပါနှင့်။

## Common Mistakes

### Vague Utility Hook

```tsx
// ❌ unrelated responsibilities and an unclear contract
function useUtils() {
  // storage, filters, focus, network, and formatting...
}

// ✅ one cohesive responsibility
function usePersistentExpenseState(storageKey: string) {
  // expense reducer lifecycle and persistence only
}
```

### Hidden Reactive Dependency

```tsx
// ❌ storageKey is read but omitted
useEffect(() => {
  localStorage.setItem(storageKey, JSON.stringify(expenses));
}, [expenses]);

// ✅ dependency contract is explicit
useEffect(() => {
  localStorage.setItem(storageKey, JSON.stringify(expenses));
}, [storageKey, expenses]);
```

### Hook Returning JSX

```tsx
// ❌ UI ownership is hidden in a Hook
function useExpensePanel() {
  return <section>...</section>;
}

// ✅ a Component renders UI; a Hook returns behavior/data
function ExpensePanel() {
  const expenseModel = usePersistentExpenseState("expenses");
  return <section>...</section>;
}
```

## Production Considerations

- **Maintainability:** A focused Hook gives persistence/reducer lifecycle one owner and keeps `App` orchestration readable.
- **API stability:** Return only what callers need. Exposing internal setters, refs, or storage details creates unnecessary coupling.
- **Error handling:** `JSON.parse`, unavailable storage, quota errors, and corrupted/outdated data need deliberate policy in production. Day 9 preserves existing behavior rather than silently expanding scope.
- **SSR/hydration:** `localStorage` does not exist on the server. This Vite app is client-rendered; a framework app would need a client boundary and hydration-safe initialization strategy.
- **Strict Mode:** Hook setup must tolerate development checks and repeated setup/cleanup. Side effects belong in Effects, not render.
- **Performance:** Custom Hook extraction itself does not reduce renders. Measure before memoizing returned callbacks or objects.
- **Testing:** Test observable behavior through a small consumer or component. Avoid tests coupled only to internal Hook implementation details.
- **Security/privacy:** Browser storage is readable by same-origin scripts and is not suitable for secrets or an authorization boundary.
- **Dependencies:** No package is justified for this extraction; React and TypeScript already provide the needed primitives.

## Professional Debugging Tips

- If State resets unexpectedly, confirm the calling component identity and `key` did not change.
- If an Effect sees old input, inspect every reactive value read inside it before changing dependencies.
- If cleanup runs unexpectedly in development, distinguish Strict Mode checks from production behavior.
- If two Hook consumers do not share State, remember that each call owns an independent Hook state chain.
- If extraction makes data flow harder to trace, shrink the Hook API or keep the logic inline.
- Use TypeScript hover/inference to inspect the returned object and dispatch action type before adding assertions.

## Implementation Exercise — Extract the Persistent Expense Lifecycle

Important Hook and integration code ကို student က hint-first workflow ဖြင့်ရေးရန်။

### Scope

1. Create `src/hooks/usePersistentExpenseState.ts`.
2. Move the existing lazy `localStorage` initialization into the Hook module without changing its behavior.
3. Move the expense `useReducer` call and persistence `useEffect` into the Hook.
4. Give the Hook the explicit public return contract `{ expenseState, dispatch }`.
5. Pass `storageKey` as an input and include every reactive Effect dependency.
6. Replace only the corresponding State/persistence setup in `App` with `usePersistentExpenseState("expenses")`.
7. Keep filters, search, totals, form handlers, ID creation, Context Provider placement, and JSX in `App`.
8. Do not create a generic `useLocalStorage` Hook or add a package.
9. Preserve current behavior; validation is a separate explicit workflow and is not required for completion.

### Hints

- Import `useEffect`, `useReducer`, and `type Dispatch` in the Hook module.
- Reuse `ExpenseState`, `ExpenseAction`, and `expenseReducer` types/implementation rather than duplicating them.
- The lazy initializer can accept `storageKey` through the third `useReducer` argument.
- The persistence Effect reads both `storageKey` and `expenseState.expenses`.
- An object return makes the two named responsibilities explicit.
- Search `App.tsx` imports after extraction and remove only imports that became unused.
- Do not move `ExpenseDispatchContext`; `App` still defines its subtree boundary.

### Expected Shape After the Exercise

```text
App
├─ usePersistentExpenseState("expenses")
├─ owns filters, search, totals, handlers, and JSX
└─ ExpenseDispatchContext value={dispatch}
   └─ ExpenseList

usePersistentExpenseState
├─ lazy storage read
├─ useReducer(expenseReducer)
└─ persistence Effect
```

## Optional Validation Reference

Use only when the student explicitly requests validation. Completion itself must not initiate or require these checks.

### Manual scenarios — student-reported only

- Add and successful-Add focus
- Edit, Update, and Cancel
- Delete and delete-edited-item cleanup
- Search + Category, count, and total
- Reload persistence
- Invalid-form validation and focus

### Automated status

- Status: Not run — user preference

## Short Review — Optional Teaching Tool

1. Custom Hook နှစ်ခါခေါ်လျှင် logic နဲ့ State ဘယ်ဟာ share ဖြစ်သလဲ?
2. `storageKey` က Effect dependency ဖြစ်ရသော်လည်း lazy initializer ကို key ပြောင်းတိုင်းမခေါ်သည့်အကြောင်းကဘာလဲ?
3. ဒီ extraction အတွက် domain-specific Hook က generic `useLocalStorage` ထက်ဘာကြောင့်သင့်တော်သလဲ?
4. Tuple နဲ့ object return API ထဲက ဒီ Hook အတွက်ဘယ်ဟာရွေးမလဲ၊ ဘာ tradeoff ရှိသလဲ?

Review questions are optional and are never a completion gate.

## Learning Progress Checklist

### Topic covered

- [ ] Custom Hook purpose and “share logic, not State” covered
- [ ] Naming, Rules of Hooks, and call independence covered
- [ ] Reactive inputs, dependencies, and cleanup ownership covered
- [ ] Tuple/object API design and extraction tradeoffs covered
- [ ] Storage, SSR, Strict Mode, testing, and security caveats covered

### Review completed

- [ ] Optional short review completed with explanations and clarification as needed

### Implementation checkpoints

- [ ] Bounded persistent-expense Hook created
- [ ] Reducer initialization and persistence Effect moved into the Hook
- [ ] Explicit typed object return API implemented
- [ ] `App` integrated with unrelated responsibilities preserved
- [ ] No generic storage abstraction or new dependency added

### Manual tests — student-reported

- Status: No result supplied

### Automated validation

- Status: Not run — user preference

## Completion Checklist

- [ ] User-confirmed completion
- [ ] Topic coverage complete — User-confirmed
- [ ] Review status recorded — User-confirmed
- [ ] Implementation checkpoints complete — User-confirmed
- [ ] Validation status recorded without inventing PASS results
- [ ] Day 9 marked complete
- [ ] Completion commit, annotated tag, and push recorded

## Sources / Modern Notes

Prepared 2026-09-13 for the repository's React 19.2.8 baseline:

- [React: Reusing Logic with Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks) — naming, sharing logic rather than State, reactive Hook code, and focused use-case-oriented APIs.
- [React: Rules of Hooks](https://react.dev/reference/rules/rules-of-hooks) — top-level call rules and valid React call sites.
- [React: `useEffect`](https://react.dev/reference/react/useEffect) — setup/cleanup lifecycle, reactive dependencies, client-only behavior, and Strict Mode caveats.
- [React: Removing Effect Dependencies](https://react.dev/learn/removing-effect-dependencies) — dependency correctness and restructuring code instead of suppressing dependencies.
- [React: `useSyncExternalStore`](https://react.dev/reference/react/useSyncExternalStore) — preferred primitive when a Custom Hook subscribes to a true external store.

Current project note: this lesson uses only stable built-in React Hooks already present in the repository. It does not add React Compiler, a Hook library, or a storage dependency.

## Git Checkpoint

When the user issues a completion trigger, follow **Complete Lesson — User-confirmed** in `../PROTOCOLS.md`. Completion does not run validation unless separately requested.

## Next Day Context

Day 10 မှာ Expense Manager ကို Checkpoint #1 အဖြစ် review/refactor လုပ်ပြီး component responsibilities, naming, error handling, accessibility, and release-readiness tradeoffs ကိုစစ်မည်။
