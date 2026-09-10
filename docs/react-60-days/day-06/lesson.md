# Day 06 — useRef, DOM refs, State vs Ref

## Status

**Planned — Not started**

Day 6 implementation, exercises, review, tests, and student understanding have not started.

## Purpose

Render များကြား value သို့မဟုတ် DOM reference ကိုသိမ်းထားပြီး update က UI render မလိုသောအချိန်မှာ `useRef` ကိုမှန်ကန်စွာသုံးတတ်ရန်။ Current `ExpenseForm` မှာ validation fail ဖြစ်သော field ကို focus လုပ်ခြင်းနှင့် successful Add ပြီးနောက် Title input သို့ focus ပြန်ပေးခြင်းကို practical exercise အဖြစ်အသုံးပြုမည်။

## Previous Day Review

- `searchText` က rendered UI ကိုသက်ရောက်သဖြင့် State ဖြစ်သည်။
- `filteredExpenses` နဲ့ `total` က existing State မှပြန်တွက်နိုင်သဖြင့် Derived Values ဖြစ်သည်။
- Controlled input flow သည် `onChange` → State update → re-render → updated `value` ဖြစ်သည်။
- Count, list, and total use the same filtered result.

ချိတ်ဆက်မေးခွန်း—`searchText` ကို Ref ထဲထားလျှင် typing လုပ်သည့်အခါ filtered UI က ဘာကြောင့်မပြောင်းနိုင်သလဲ။

## Prerequisites

- `useState`, controlled inputs, and Event handlers
- State, Props, and Derived Value distinctions
- TypeScript generic syntax
- Current `ExpenseForm` validation and Add/Edit flow

## Learning Objectives

Day 6 ပြီးလျှင် student သည်—

- Ref object, `ref.current`, persistence, and no-render behavior ကိုရှင်းပြနိုင်ရမည်။
- State, Props, Ref, Derived Value, and local variable ကို responsibility အလိုက်ခွဲနိုင်ရမည်။
- Type-safe nullable DOM ref ကို input နှင့်ချိတ်နိုင်ရမည်။
- Event handler မှ invalid field သို့ focus ရွှေ့နိုင်ရမည်။
- Controlled input State ကို DOM ref ကအစားမထိုးသည့်အကြောင်းရှင်းပြနိုင်ရမည်။
- Declarative UI နှင့် imperative DOM action ကိုခွဲနိုင်ရမည်။

## Core Concepts

### Ref Mental Model

`useRef(initialValue)` က component instance အသက်ရှင်နေသရွေ့ identity တည်ငြိမ်သော object တစ်ခုကိုပြန်ပေးသည်။ Value ကို `current` property မှဖတ်/ရေးသည်။

```text
setState(next)       → persists + schedules render
ref.current = next   → persists + does not schedule render
localVariable = next → current function call only
```

UI က value အသစ်ကိုပြရန် render လိုလျှင် State သုံးရမည်။ Render မလိုသော value သို့ DOM node ကို render များကြားကိုင်ထားရန် Ref ကိုစဉ်းစားနိုင်သည်။

### DOM Refs

React က `ref` prop နှင့်ချိတ်ထားသော DOM node ကို commit ပြီးနောက် `ref.current` ထဲထည့်ပေးသည်။ Initial render မတိုင်မီ သို့မဟုတ် unmount ပြီးချိန်မှာ `current` သည် `null` ဖြစ်နိုင်သည်။

```text
ref object → input ref prop → HTMLInputElement → focus()
```

Focus, selection, or browser media control ကဲ့သို့ imperative action အတွက် DOM refs သင့်လျော်သည်။ Component-owned DOM element ကို `document.querySelector` ဖြင့်ရှာခြင်းထက် ownership ပိုရှင်းသည်။

### Choosing the Right Storage

| Value | Kind | Why |
| --- | --- | --- |
| `expenses`, `editingExpense`, `searchText` | State | Changes rendered UI |
| Form `title`, `amount`, `error` | State | Controls visible input/error content |
| Parent callbacks | Props | Parent-to-child behavior contract |
| `filteredExpenses`, `total` | Derived Value | Calculable from current State |
| Title/Amount input DOM nodes | Ref | Needed for DOM methods, not rendering |
| `trimmedTitle`, `numericAmount` | Local variable | Needed only during one submit event |

Decision order:

1. Existing State/Props မှတွက်နိုင်သလား → Derived Value
2. Parent ကပေးသလား → Props
3. Update က UI ကိုပြောင်းရမလား → State
4. Render များကြား persist ရပြီး render မလိုဘူးလား → Ref
5. Function call တစ်ကြိမ်အတွင်းသာလိုသလား → local variable

### TypeScript DOM Ref

Input ref အတွက် element type နဲ့ initial `null` ကိုထည့်စဉ်းစားရမည်။ Student ဖြည့်ရန် shape:

```tsx
const inputRef = useRef</* DOM element type */>(/* initial value */);
```

`current` က nullable ဖြစ်နိုင်သောကြောင့် DOM method ခေါ်ချိန်မှာ optional chaining သို့ explicit null check သုံးရန်။ Compiler warning ကို non-null assertion ဖြင့်ဖုံးကွယ်မည့်အစား lifecycle ကိုနားလည်ရန်။

Ref ကို Event handlers သို့ Effects မှာဖတ်/ရေးရန်ဦးစားပေးပြီး render output ဆုံးဖြတ်ရန် hidden mutable input အဖြစ်မသုံးရ။

### Component Responsibility

`ExpenseForm` က inputs ကို render လုပ်ပြီး validation branch ကိုသိသောကြောင့် input refs ကို local ပိုင်သင့်သည်။ `App` က expenses, edit target, search/filter State, and Derived Values ကိုဆက်ပိုင်သည်။ Current requirement အတွက် ref forwarding မလိုပါ။

## Implementation Tasks

Important code ကို student က hints ဖြင့်ကိုယ်တိုင်ရေးရန်။

1. `App.tsx` and `ExpenseForm.tsx` relevant values ကို State/Props/Ref/Derived/local အဖြစ်ခွဲရန်။
2. `ExpenseForm` မှာ Title and Amount inputs အတွက် typed refs ဖန်တီးရန်။
3. Refs ကို correct `<input>` elements ၏ `ref` props နှင့်ချိတ်ရန်။ Existing `value` and `onChange` ကိုမဖယ်ရ။
4. Empty Title branch မှာ Title input ကို focus လုပ်ရန်။
5. Invalid Amount branch မှာ Amount input ကို focus လုပ်ရန်။
6. Successful Add ပြီး fields reset ဖြစ်သည့် existing flow ကိုထိန်းပြီး Title input ကို focus ပြန်ပေးရန်။
7. Add/Edit/Update/Cancel/Delete, search/filter, total, and persistence မပျက်ကြောင်းစစ်ရန်။

Hints:

- Both refs point to `<input>` elements.
- DOM node မတပ်ရသေးသော initial value ကိုစဉ်းစားပါ။
- Ref object ထဲရှိ DOM node ကိုဘယ် property မှရမလဲ။
- Nullable DOM node မှာ `.focus()` ကို safely ဘယ်လိုခေါ်မလဲ။
- Successful Update branch ၏ early return နဲ့ Add-only path ကိုခြေရာခံပါ။

Out of scope: uncontrolled-form refactor, ref forwarding, new libraries, or Day 7 `useReducer` work.

## Guided Exercises

1. **Classification:** `title`, `error`, `filteredExpenses`, `numericAmount`, and input DOM nodes ကိုခွဲပြီး reason ရေးပါ။
2. **Prediction:** State update, Ref mutation, and local assignment တို့၏ persistence/render behavior ကို code မရေးမီခန့်မှန်းပါ။
3. **Typed refs:** Title and Amount refs ကိုရေးပြီး editor မှ inferred `current` type ကိုစစ်ပါ။
4. **Validation focus:** Empty Title, invalid Amount, and both-invalid cases ကို implement/test လုပ်ပါ။
5. **State vs Ref explanation:** Form values နှင့် `searchText` က State အဖြစ်ဆက်ရှိရသည့်အကြောင်း current UI ဖြင့်ရှင်းပြပါ။

## Mini Challenges

- Controlled `value`/`onChange` and DOM `ref` can coexist on one input; explain each responsibility.
- Compare declarative `autoFocus` for initial focus with imperative Ref focus after validation.
- Explain why the first invalid field follows validation order.

အနည်းဆုံး challenge တစ်ခုကို အမှန်တကယ်ကြိုးစားပြီးမှ evidence မှတ်ရန်။

## Manual Test Matrix

Implementation ပြီးမှ actual results ဖြည့်ရန်။ ကြိုတင် pass မမှတ်ရ။

| Scenario | Expected behavior | Actual result |
| --- | --- | --- |
| Empty Title submit | Title error and Title focus | Not tested |
| Valid Title with invalid Amount | Amount error and Amount focus | Not tested |
| Both fields invalid | Title fails first | Not tested |
| Valid Add | Item added, fields cleared, Title focused | Not tested |
| Edit/Update/Cancel/Delete | Existing behavior preserved | Not tested |
| Search/category/count/total | Existing behavior preserved | Not tested |
| Reload | Persistence preserved | Not tested |

## Quiz / Review Questions

1. State, Ref, and local variable differ in persistence and render behavior how?
2. Why are form values State while input DOM nodes are Refs in this app?
3. Why is a DOM ref nullable, and how should TypeScript code handle it?
4. When is imperative Ref focus justified instead of a declarative alternative?
5. Why should `ref.current` not become a hidden input to rendered UI?

**Student answers:** _To be completed during Day 6 review._

## Common Mistakes

- Expecting Ref mutation to re-render visible UI
- Removing controlled State because a DOM ref exists
- Using the wrong DOM type or ignoring nullable `current`
- Reading/writing refs during render
- Focusing from the wrong validation branch
- Adding unnecessary Effects, forwarding, or abstractions

## Session Evidence

### Exercises Completed

### Concept Explanations

### Quiz / Review Evidence

### Manual Tests

### Mistakes / Corrections

### Implementation Evidence

### Mini Challenges

## Completion Criteria

- [ ] Student explains State vs Ref and nullable DOM refs with current examples.
- [ ] Student writes the important ref/focus code using hints.
- [ ] Invalid fields and successful Add receive expected focus.
- [ ] Existing Expense Manager behavior is preserved.
- [ ] Meaningful exercises, review, mini challenge, and manual tests have real evidence.
- [ ] `npm run verify` passes.
- [ ] Actual learning summary, mistakes, and patterns are recorded.

## What I Actually Learned

_Complete from actual Day 6 evidence only._

## Problems / Mistakes I Made

_Record only mistakes that actually occur._

## Important Code Patterns

_Record only patterns from the student's actual implementation._

## Git Checkpoint

Follow the **Complete Current Day** protocol in `../PROTOCOLS.md` only after all completion criteria are met.

## Next Day Context

Day 7 introduces `useReducer` for related State transitions. Do not implement it during Day 6.
