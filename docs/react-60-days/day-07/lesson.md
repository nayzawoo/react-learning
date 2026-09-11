# Day 07 — `useReducer`

## Status

**Planned — Not started**

Day 7 is prepared from the current Expense Manager and current official documentation. No Day 7 source implementation has started.

## Version Baseline

- React / React DOM: `^19.2.8`
- TypeScript: `~6.0.2`
- Vite: `^8.2.2`
- Lint: Oxlint `^1.79.0`
- Automated test framework: not installed

The current React documentation site identifies React 19.3 as current, while this repository uses React 19.2.8. The stable `useReducer` behavior taught here is compatible with the repository; do not upgrade dependencies as part of this lesson. TypeScript 7 is available, but the repository's TypeScript 6.0.2 remains the compatibility baseline.

## Purpose — Why `useReducer` Exists

`useState` မကောင်းလို့ `useReducer` ပေါ်လာတာမဟုတ်ပါ။ State transition တစ်ခုချင်းစီ ရိုးရှင်းပြီး independent ဖြစ်ရင် `useState` ကပိုရှင်းသည်။ Component ကြီးလာပြီး related State များကို handler အများအပြားက ပြောင်းလာတဲ့အခါတော့ rules တွေက UI event handlers ထဲပျံ့နှံ့သွားနိုင်သည်။

Current `App.tsx` မှာ related application transitions များရှိသည်:

```text
Add expense       → expenses changes
Delete expense    → expenses changes
Start edit        → editingExpense changes
Update expense    → expenses changes + editingExpense clears
Cancel edit       → editingExpense clears
```

အထူးသဖြင့် Update က State နှစ်ခုကို coordinated transition တစ်ခုအဖြစ်ပြောင်းသည်။ `useReducer` က ဒီ transition rules တွေကို pure function တစ်ခုထဲစုစည်းပြီး event handlers ကို “ဘာဖြစ်ခဲ့သလဲ” ဆိုတဲ့ action dispatch များအဖြစ်ရိုးရှင်းစေသည်။

Day 7 ရဲ့ရည်ရွယ်ချက်က State အားလုံးကို reducer ထဲအတင်းထည့်ရန်မဟုတ်ဘဲ related transitions အတွက် reducer သုံးရမည့် boundary ကိုသင်ယူရန်ဖြစ်သည်။

## Learning Objectives

Day 7 ပြီးလျှင် student သည်:

- `state + action → nextState` reducer mental model ကိုရှင်းပြနိုင်ရမည်။
- Reducer, State, Action, `dispatch`, and initializer တို့၏ responsibility ကိုခွဲနိုင်ရမည်။
- TypeScript discriminated union ဖြင့် action payload ကို action type အလိုက်မှန်ကန်စွာ narrow လုပ်နိုင်ရမည်။
- Immutable transition များရေးပြီး exhaustive action handling ကို compiler ဖြင့်စစ်နိုင်ရမည်။
- Reducer ထဲတွင် side effect, mutation, `Date.now()`, or `localStorage` မလုပ်သင့်သည့်အကြောင်းရှင်းပြနိုင်ရမည်။
- `useState` and `useReducer` ကို complexity, cohesion, testability, and maintainability အရရွေးနိုင်ရမည်။
- Existing Expense Manager behavior နှင့် persistence ကိုမပျက်ဘဲ bounded reducer refactor ပြုလုပ်နိုင်ရမည်။

## Mental Model

```text
user event
  → event handler creates an action
  → dispatch(action)
  → React supplies current State + action to reducer
  → reducer calculates a new immutable State
  → React schedules/runs the next render
  → commit updates the DOM
  → Effect persists the committed expenses
```

Reducer သည် event handler မဟုတ်ပါ။ Reducer က DOM event ကိုမယူဘဲ current State နဲ့ domain action ကိုယူသည်။

```ts
type Reducer<State, Action> = (state: State, action: Action) => State;
```

Reducer call တစ်ကြိမ်အတွင်း:

- Persist ဖြစ်သည့်အရာ: React ကသိမ်းထားသော returned State
- Re-render ဖြစ်စေသည့်အရာ: `dispatch` မှ next State update
- Re-render မဖြစ်စေသည့်အရာ: reducer function ကို manual call လုပ်ရုံ၊ local variable assignment
- Stale ဖြစ်နိုင်သည့်အရာ: `dispatch` ပြီးချင်း current handler ထဲမှ `state` snapshot
- Cleanup လိုသည့်အရာ: reducer ကိုယ်တိုင်မရှိ; subscription/timer/network side effects ရှိလျှင် Effect သို့ event workflow ကပိုင်ရမည်

## Current API and TypeScript Syntax

```tsx
const [state, dispatch] = useReducer(reducer, initialArg, init?);
```

- `reducer`: current State နှင့် action မှ next State ပြန်ပေးသော pure function
- `initialArg`: initial State ကိုတိုက်ရိုက်ပေးနိုင်သလို initializer အတွက် input အဖြစ်လည်းပေးနိုင်သည်
- `init` (optional): expensive or environment-backed initialization ကို initial render အတွက်သာတွက်ပေးသည်
- `state`: လက်ရှိ render ၏ State snapshot
- `dispatch(action)`: action ပို့ပြီး next render ကို request လုပ်သည်; return value မရှိ

TypeScript က reducer parameter types မှ `state` နှင့် `dispatch` ကို infer လုပ်နိုင်သည်။ State/Action types ကို explicit ရေးခြင်းက reducer boundary ကို documentation နှင့် compile-time contract နှစ်မျိုးစလုံးဖြစ်စေသည်။

### Discriminated Action Union

```ts
type CounterAction =
  | { type: "incremented" }
  | { type: "added"; amount: number };

function counterReducer(state: number, action: CounterAction): number {
  switch (action.type) {
    case "incremented":
      return state + 1;
    case "added":
      return state + action.amount;
  }
}
```

`type` က discriminant ဖြစ်သည်။ `case "added"` ထဲရောက်လျှင် TypeScript က `action.amount` ရှိကြောင်းသိသည်။ Broad `{ type: string; amount?: number }` ထက် invalid combinations ကိုကာကွယ်ပေးသည်။

### Exhaustive Checking

```ts
function assertNever(value: never): never {
  throw new Error(`Unhandled action: ${JSON.stringify(value)}`);
}
```

Reducer `default` branch မှာ `assertNever(action)` သုံးလျှင် action union member အသစ်ထည့်ပြီး reducer case မရေးသေးသောအခါ compiler ကဖမ်းနိုင်သည်။ Runtime safeguard လည်းရသည်။ Type assertion ဖြင့် error ကိုဖုံးမထားရ။

## Progressive Examples

### 1. Minimal Counter

```tsx
import { useReducer } from "react";

type Action =
  | { type: "incremented" }
  | { type: "decremented" };

function reducer(count: number, action: Action): number {
  switch (action.type) {
    case "incremented":
      return count + 1;
    case "decremented":
      return count - 1;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <button onClick={() => dispatch({ type: "incremented" })}>
      Count: {count}
    </button>
  );
}
```

ဒီ example က mechanics ကိုပြသသော်လည်း production code မှာ counter လောက်ရိုးရှင်းသော State အတွက် `useState` ပိုကောင်းနိုင်သည်။ Syntax ပြနိုင်ခြင်းက API ကိုသုံးသင့်ကြောင်းမဆိုလိုပါ။

### 2. Expense Manager Boundary

Reducer ထဲသို့ natural အဖြစ်ပေါင်းသင့်သည့် State:

```ts
type ExpenseState = {
  expenses: Expense[];
  editingExpense: Expense | null;
};
```

Candidate action language:

```ts
type ExpenseAction =
  | { type: "expense/added"; expense: Expense }
  | { type: "expense/deleted"; id: number }
  | { type: "expense/edit-started"; expense: Expense }
  | { type: "expense/edit-cancelled" }
  | { type: "expense/updated"; expense: Expense };
```

Actions ကို setter language (`set-expenses`) မဟုတ်ဘဲ domain event language (`expense/updated`) ဖြင့်နာမည်ပေးထားသည်။ Action တစ်ခုက user interaction တစ်ခုကိုဖော်ပြပြီး reducer ကလိုအပ်သော minimal data သာသယ်သင့်သည်။

Reducer အပြင်မှာဆက်ထားသင့်သည့် State:

- `filteredCategory`: independent controlled filter State
- `searchText`: independent controlled search State
- `filteredExpenses`, `total`, `normalizedSearchText`: existing State မှတွက်သော Derived Values

ဒီ lesson မှာ form field State ကို reducer ထဲမရွှေ့ရ။ `ExpenseForm` ရဲ့ local controlled State က component responsibility နဲ့ကိုက်ညီနေဆဲဖြစ်သည်။

### 3. Production Workflow Example

Checkout or admin approval workflow မှာ transitions များက တစ်ခုနှင့်တစ်ခုဆက်စပ်နိုင်သည်:

```text
idle → editing → submitting → succeeded
                    ↘ failed
```

`useReducer` က impossible combinations (`isLoading: true` and `status: "success"`) ကိုလျှော့ချနိုင်သည်။ သို့သော် server cache, retries, deduplication, background refetch စသည့် remote-data concerns အတွက် reducer တစ်ခုတည်းကို data-fetching library အစားမသုံးသင့်ပါ။ Reducer က transition logic tool ဖြစ်ပြီး full server-state solution မဟုတ်ပါ။

## Lazy Initialization and Persistence

Current app က `localStorage` ကို lazy `useState` initializer ဖြင့်ဖတ်ထားသည်။ Reducer refactor မှာလည်း initial read ကို render တိုင်းမလုပ်သင့်ပါ:

```ts
function createInitialExpenseState(storageKey: string): ExpenseState {
  const savedExpenses = localStorage.getItem(storageKey);

  return {
    expenses: savedExpenses ? JSON.parse(savedExpenses) : [],
    editingExpense: null,
  };
}

const [expenseState, dispatch] = useReducer(
  expenseReducer,
  "expenses",
  createInitialExpenseState,
);
```

`localStorage` read က initializer ရဲ့ responsibility ဖြစ်ပြီး write က existing Effect ထဲဆက်ရှိသည်။ Reducer ထဲမှာ storage write လုပ်လျှင် purity ပျက်ပြီး Strict Mode debugging, repeatability, and testing ကိုခက်စေသည်။

Production note: `JSON.parse` can throw or persisted data may have an invalid shape. Runtime validation/error recovery က real production hardening ဖြစ်သော်လည်း Day 7 reducer objective မဟုတ်သဖြင့် optional discussion အဖြစ်သာထားမည်။ TypeScript type က runtime storage data ကိုအလိုအလျောက် validate မလုပ်ပေးပါ။

## `useState` vs `useReducer`

| Consideration | `useState` | `useReducer` |
| --- | --- | --- |
| Best fit | Simple or independent values | Related transitions with shared rules |
| Update location | Handlers/setters | Central pure reducer |
| Boilerplate | Lower | Higher |
| Transition visibility | Can become scattered | Centralized action cases |
| Type modeling | Direct value type | State + discriminated Action union |
| Testing | Usually through behavior | Reducer can also be tested as a pure function |
| Performance | Appropriate by default | Not inherently faster |

Reducer ကို line count လျှော့ရန်မရွေးရ။ Transition complexity ကိုရှင်းစေရန်ရွေးရသည်။ Small independent booleans/strings အားလုံးကို mega-reducer ထဲစုခြင်းက coupling ပိုများစေနိုင်သည်။

## Render, Dispatch, and Identity Caveats

- `dispatch` က next render အတွက် update request လုပ်သည်။ Handler ထဲ `dispatch(action)` ပြီးချင်း `state` ကို log လုပ်လျှင် old render snapshot ကိုပဲမြင်မည်။
- React က event handler တစ်ခုအတွင်း updates များကို batch လုပ်နိုင်သည်။ Reducer action order ကို React ကထိန်းသိမ်းထားပေမယ့် current handler snapshot မပြောင်းသေးပါ။
- Returned State က current State နှင့် `Object.is` အရတူလျှင် React က commit ကို skip လုပ်နိုင်သည်။ Existing object ကို mutate ပြီး same reference ပြန်ပေးခြင်းက UI မပြောင်းသော bug ဖြစ်စေနိုင်သည်။
- `dispatch` identity က stable ဖြစ်သည်။ Effect dependencies ထဲထည့်ထားလည်း Effect ကိုမပြန် run စေပါ; linter ခွင့်ပြုလျှင် omit လုပ်လေ့ရှိသည်။
- React Strict Mode က development မှာ reducer နှင့် initializer ကိုနှစ်ကြိမ်ခေါ်နိုင်ပြီး result တစ်ခုကို ignore လုပ်သည်။ Production-only double update မဟုတ်ပါ; impurity ရှာဖွေရန် tool ဖြစ်သည်။
- `useReducer` ကို component/custom Hook top level မှာသာခေါ်ရသည်။ Render အတွင်း unconditional `dispatch` မလုပ်ရ—render loop ဖြစ်မည်။

## Purity and Side-Effect Boundary

Reducer သည်:

```text
same State + same action → same next State
```

ဖြစ်ရမည်။ အောက်ပါအရာများကို reducer ထဲမလုပ်ရ:

- `Date.now()`, `Math.random()`, UUID creation
- `localStorage.setItem`
- API requests
- analytics calls
- DOM focus
- timers/subscriptions
- State arrays/objects ကို mutate လုပ်ခြင်း

Expense ID ကို event handler မှာဖန်တီးပြီး action payload ထဲထည့်ပို့မည်။ Persistence ကို Effect ကပိုင်မည်။ DOM focus ကို `ExpenseForm` event flow/ref ကပိုင်မည်။ ဒီ boundary က reducer ကို deterministic နှင့် testable ဖြစ်စေသည်။

## Common Mistakes

### Mutating and Returning the Same State

```ts
// ❌ Problematic: mutation + same reference
state.expenses.push(action.expense);
return state;

// ✅ Preferred: new array and State object
return {
  ...state,
  expenses: [...state.expenses, action.expense],
};
```

### Side Effects Inside the Reducer

```ts
// ❌ Problematic: reducer may run more than once in development
const expense = { ...action.expense, id: Date.now() };
localStorage.setItem("expenses", JSON.stringify(state.expenses));

// ✅ Preferred: event handler creates the value; Effect persists State
dispatch({ type: "expense/added", expense: newExpense });
```

### Weak Action Type

```ts
// ❌ Payload does not correspond safely to each action
type Action = { type: string; expense?: Expense; id?: number };

// ✅ Each action variant carries exactly its required payload
type Action =
  | { type: "expense/deleted"; id: number }
  | { type: "expense/updated"; expense: Expense };
```

### Returning Partial State

```ts
// ❌ Drops editingExpense from the State shape
return { expenses: nextExpenses };

// ✅ Preserve unchanged fields explicitly or with spread
return { ...state, expenses: nextExpenses };
```

## DO / DON'T

### DO

- Group State only when transitions are related and share invariants.
- Name actions after events that happened.
- Keep actions minimal but sufficient to calculate next State.
- Return new objects/arrays for actual changes.
- Keep reducer and initializer pure and deterministic.
- Use discriminated unions and exhaustive checking.
- Keep Derived Values derived instead of storing them in reducer State.

### DON'T

- Do not move every `useState` into one reducer automatically.
- Do not mutate current State or action payloads.
- Do not perform Effects, storage writes, API calls, ID generation, or DOM work in the reducer.
- Do not expect `dispatch` to change the current render's State variable immediately.
- Do not add Context merely because a reducer exists; Context is Day 8 and solves a different propagation problem.
- Do not add Immer or another dependency for this bounded immutable update exercise.

## Production Considerations

- **Maintainability:** domain-named actions document allowed transitions; too many vague actions hide intent.
- **Testability:** reducer input/output is deterministic and can be unit tested without rendering React. This repository has no test framework yet, so Day 7 uses explicit transition examples and app regression checks rather than adding unrelated tooling.
- **Performance:** `useReducer` is not automatically faster than `useState`. Measure real render problems; do not choose it as a premature optimization.
- **Scalability:** colocate reducer logic with its owning feature until reuse or file size gives a real extraction reason. Avoid a global mega-reducer.
- **Error handling:** unexpected runtime actions should fail loudly during development; exhaustive TypeScript handling catches known missing cases.
- **Persistence:** TypeScript cannot validate untrusted `localStorage` JSON at runtime. Treat storage parsing/validation as a separate boundary.
- **Developer experience:** React DevTools can show component State; action logging can help debugging, but permanent logging middleware is unnecessary for this lesson.

## Professional Debugging Tips

- Call `expenseReducer(sampleState, sampleAction)` in a temporary local check to inspect a predicted next State without React.
- Compare object identity when UI does not update: `Object.is(previousState, nextState)` should be `false` for a real immutable change.
- If Strict Mode exposes duplicates, inspect mutation and nondeterministic work inside reducer/initializer instead of disabling Strict Mode.
- Hover `dispatch` in the editor and intentionally try an invalid action to confirm the discriminated union rejects it; do not keep invalid code.
- Search for every existing `setExpenses` and `setEditingExpense` call before refactoring so no transition is missed.

## Implementation Exercise — Expense Domain Reducer

Important reducer code ကို student က hints ဖြင့်ကိုယ်တိုင်ရေးရန်။

### Scope

1. Audit existing `expenses` and `editingExpense` transitions in `App.tsx`.
2. Define `ExpenseState` and a discriminated `ExpenseAction` union.
3. Write a pure `expenseReducer` with Add/Delete/Edit start/Edit cancel/Update cases.
4. Add exhaustive action checking.
5. Preserve lazy `localStorage` initialization with the third `useReducer` initializer argument.
6. Replace only related setters with `dispatch` calls.
7. Keep search/category State, Derived Values, persistence Effect, ID creation, validation, and DOM focus in their existing responsibilities.
8. Verify all current behavior.

### Hints

- Start by writing the State and Action types before importing `useReducer`.
- Update transition should replace the matching expense and clear `editingExpense` in one returned State.
- Delete transition may clear `editingExpense` if the deleted item is currently being edited; decide and document the intended invariant before coding.
- Existing `useState` lazy initialization maps naturally to `useReducer(reducer, initialArg, init)`.
- Destructure `expenses` and `editingExpense` from reducer State to minimize JSX churn.
- Create `newExpense` and its `Date.now()` ID before dispatching.
- Do not touch `ExpenseForm` unless integration reveals a real issue.

### Transition Design Table

Fill expected next State before implementation:

| Action | `expenses` result | `editingExpense` result |
| --- | --- | --- |
| `expense/added` | append payload expense | unchanged |
| `expense/deleted` | remove matching ID | decide invariant if editing same ID |
| `expense/edit-started` | unchanged | selected expense |
| `expense/edit-cancelled` | unchanged | `null` |
| `expense/updated` | replace matching ID | `null` |

## Manual Test Matrix

Record actual results only after implementation.

| Scenario | Expected behavior | Actual result |
| --- | --- | --- |
| Add expense | Item appears; fields clear; Title focuses | Not tested |
| Delete expense | Correct item is removed | Not tested |
| Start edit | Form and heading show selected expense | Not tested |
| Update expense | Correct item changes; edit mode closes | Not tested |
| Cancel edit | Data remains unchanged; edit mode closes | Not tested |
| Search + category | Combined filtering/count/total remain correct | Not tested |
| Reload | Persisted expenses restore | Not tested |
| Invalid form | Existing validation/focus behavior remains correct | Not tested |

## Short Review — After Implementation

1. Why is `expense/updated` safer as one reducer transition than separate `setExpenses` and `setEditingExpense` calls when maintaining invariants?
2. What bug can occur if the reducer mutates `state.expenses` and returns the same object, and how does `Object.is` relate?
3. Why should `Date.now()` and `localStorage.setItem` remain outside the reducer, especially under Strict Mode?
4. Which current State values intentionally stayed outside the reducer, and what boundary justified that choice?

## Session Evidence

Record only actual student work and verified results after the lesson starts.

### Exercises Completed

### Concept Explanations

### Quiz / Review Evidence

### Manual Tests

### Mistakes / Corrections

### Implementation Evidence

### Mini Challenges

## Completion Criteria

- [ ] Student explains why `useReducer` exists and when `useState` remains preferable.
- [ ] Student explains reducer purity, State snapshots, batching, Strict Mode double calls, and side-effect boundaries.
- [ ] Student designs typed State and discriminated Action unions before implementation.
- [ ] Student writes the important reducer and dispatch integration using hints.
- [ ] Reducer transitions are immutable, exhaustive, and preserve documented invariants.
- [ ] Lazy persistence initialization and the existing persistence Effect remain correct.
- [ ] Existing CRUD, edit/cancel, filtering, totals, validation/focus, and reload behavior are preserved.
- [ ] Meaningful implementation, review answers, and manual tests have real evidence.
- [ ] `npm run verify` and `git diff --check` pass.
- [ ] Actual learning summary, mistakes, and code patterns are recorded.

## Sources / Modern Notes

Checked 2026-09-11:

- [React `useReducer` API reference](https://react.dev/reference/react/useReducer) — current signature, lazy initializer, State snapshot, batching, `Object.is`, stable `dispatch`, and Strict Mode caveats.
- [React: Extracting State Logic into a Reducer](https://react.dev/learn/extracting-state-logic-into-a-reducer) — reducer motivation, action design, immutable updates, and `useState` tradeoffs.
- [TypeScript Handbook: Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html) — discriminated unions, `never`, and exhaustive checking.
- [React 19.2 release](https://react.dev/blog/2025/10/01/react-19-2) — repository major/minor release context. The docs site currently shows 19.3; no upgrade is required for this lesson.
- [TypeScript 6.0 release notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-6-0.html) — repository compiler baseline and transition-era compatibility notes. TypeScript 7 is newer, but is not required for the reducer/action patterns taught here.

Current stable API: `useReducer`.

Legacy note: Redux-style reducer terminology predates Hooks, but using React's built-in `useReducer` for local component State is current—not a deprecated compatibility pattern. Redux or another external store is not required for this lesson.

Experimental/framework note: React Server Components, Server Actions, and third-party server-State tools solve different problems and are not substitutes for this local reducer exercise.

## What I Actually Learned

_Complete from actual Day 7 evidence only._

## Problems / Mistakes I Made

_Record only mistakes that actually occur._

## Important Code Patterns

_Record only patterns from the student's actual implementation._

## Git Checkpoint

Follow the **Complete Current Day** protocol in `../PROTOCOLS.md` only after all completion criteria and evidence requirements are met.

## Next Day Context

Day 8 introduces Context API and `useContext` for shared-value propagation. A reducer does not require Context; keep Day 8 implementation out of Day 7.
