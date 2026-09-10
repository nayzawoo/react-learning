# Day 06 — useRef, DOM refs, State vs Ref

## Status

**Planned — Not started**

ဒီ lesson ကို current Expense Manager ရဲ့ form validation နဲ့ focus UX အပေါ်အခြေခံပြီး ပြင်ဆင်ထားသည်။ Day 6 implementation, exercises, quiz, manual tests, build/lint နဲ့ student understanding တို့ကို မစတင်ရသေးပါ။

## Purpose

Render များကြား value သို့မဟုတ် DOM element reference ကိုသိမ်းထားလိုသော်လည်း value ပြောင်းတိုင်း UI re-render မလိုသောအခြေအနေမှာ `useRef` ကိုမှန်ကန်စွာသုံးတတ်ရန်။ Current `ExpenseForm` မှာ validation fail ဖြစ်သော field သို့ focus ရွှေ့ခြင်းနှင့် successful Add ပြီးနောက် Title input သို့ focus ပြန်ပေးခြင်းကို small guided implementation အဖြစ်အသုံးပြုမည်။

အဓိကရည်ရွယ်ချက်က “State အစား Ref သုံးခြင်း” မဟုတ်ဘဲ value တစ်ခု၏ responsibility အပေါ်မူတည်ပြီး State, Props, Ref သို့မဟုတ် Derived Value ကိုရွေးတတ်ရန်ဖြစ်သည်။

## Previous Day Review

Day 5 မှ အောက်ပါအချက်များကို ပြန်ရှင်းပြနိုင်ရမည်။

- `searchText` က user-visible query ဖြစ်သဖြင့် State ဖြစ်ပုံ
- `filteredExpenses` နဲ့ `total` ကို existing State မှပြန်တွက်နိုင်သဖြင့် Derived Values ဖြစ်ပုံ
- Controlled input flow: user input → `onChange` → State update → re-render → updated `value`
- Category + search predicate ကို `matchesCategory && matchesSearch` ဖြင့်ပေါင်းပုံ
- Count, list နဲ့ total တို့က same filtered result ကိုသုံးခြင်းက UI consistency ကိုထိန်းပေးပုံ
- Day 5 manual review မှ combined conditions ကို item တစ်ခုချင်းစီအပေါ်အတိအကျစစ်ရမည့် lesson

Day 6 အတွက်ချိတ်ဆက်မေးခွန်း—`searchText` ကို Ref ထဲပြောင်းထားလျှင် user ရိုက်သည့်အခါ filtered UI က ဘာကြောင့်မယုံကြည်ရတော့သလဲ။

## Prerequisites

- `useState`, controlled inputs နဲ့ Event handlers
- Day 3 မှ `useEffect` အခြေခံအယူအဆ
- State, Props နဲ့ Derived Value ခွဲခြားနိုင်ခြင်း
- TypeScript generic syntax အခြေခံ
- DOM input ရဲ့ `.focus()` method
- Current `ExpenseForm` validation, Add/Edit/Cancel flow ကိုဖတ်ထားခြင်း

## Learning Objectives

Day 6 ပြီးလျှင် student သည်—

- `useRef` က render များကြား stable ref object တစ်ခုကိုပြန်ပေးပုံရှင်းပြနိုင်ရမည်။
- `ref.current` ပြောင်းခြင်းက State update ကဲ့သို့ re-render မဖြစ်စေကြောင်းရှင်းပြနိုင်ရမည်။
- State, Props, Ref, Derived Value နဲ့ ordinary local variable တို့ကို responsibility အလိုက်ခွဲနိုင်ရမည်။
- DOM element တစ်ခုကို TypeScript ဖြင့် type-safe ref ချိတ်နိုင်ရမည်။
- Initial render/unmount အခြေအနေကြောင့် DOM ref က `null` ဖြစ်နိုင်ကြောင်းသိရမည်။
- Optional chaining ဖြင့် DOM method ကို safely ခေါ်နိုင်ရမည်။
- Current form validation မှာ invalid field focus behavior ကို hint-first workflow နဲ့ရေးနိုင်ရမည်။
- Successful Add နောက် Title input သို့ focus ပြန်ပေးနိုင်ရမည်။
- Declarative React data flow နဲ့ imperative DOM action ဘယ်အချိန်သုံးသင့်သည်ကိုခွဲနိုင်ရမည်။
- Ref ကို UI-visible data, duplicate State သို့မဟုတ် render-time mutation အတွက်မသုံးသင့်ကြောင်းရှင်းပြနိုင်ရမည်။

## Core Concepts

### What `useRef` Returns

`useRef(initialValue)` က render များကြား identity တည်ငြိမ်သော mutable object တစ်ခုကိုပြန်ပေးသည်။ သိမ်းထားသော value ကို `current` property မှတစ်ဆင့်ဖတ်/ရေးမည်။

```text
render 1 ─┐
render 2 ─┼──> same ref object ──> ref.current
render 3 ─┘
```

Ordinary local variable က component function run တိုင်းအသစ်ဖြစ်သော်လည်း Ref object က component instance အသက်ရှင်နေသရွေ့ render များကြားဆက်ရှိနေသည်။

### Ref Updates Do Not Trigger Rendering

State setter ကိုခေါ်လျှင် React က render အသစ်ကို schedule လုပ်သည်။ `ref.current` ကိုပြောင်းခြင်းက React ကို render အသစ်လုပ်ရန်မပြောပါ။

```text
setState(next)       → value persists + render scheduled
ref.current = next   → value persists + no render scheduled
localVariable = next → current function call အတွင်းသာယုံကြည်ရ
```

ဒါကြောင့် UI တွင်ချက်ချင်းပြသရမည့် value ကို Ref ထဲမထားရ။ UI က value အသစ်နဲ့ sync ဖြစ်ရန် render လိုလျှင် State ဖြစ်သည်။

### DOM Refs

React က DOM node တစ်ခု create/commit လုပ်ပြီးနောက် `ref` prop နှင့်ချိတ်ထားသော ref object ၏ `current` ထဲသို့ အဲဒီ DOM element ကိုထည့်ပေးနိုင်သည်။ Element မတပ်ရသေးချိန် သို့မဟုတ် unmount ဖြစ်ပြီးချိန်မှာ `current` သည် `null` ဖြစ်နိုင်သည်။

```text
ref object
    ↓ passed to input's ref prop
React commits the input DOM node
    ↓
ref.current points to HTMLInputElement
    ↓ event handler
imperative action such as focus()
```

Focus ရွှေ့ခြင်း၊ text selection သို့မဟုတ် browser media API ခေါ်ခြင်းက DOM refs အတွက်ပုံမှန် use cases ဖြစ်သည်။ DOM value ကို Ref မှဖတ်ပြီး controlled State ကိုရှောင်ခြင်းကတော့ ဒီ lesson ရဲ့ default design မဟုတ်ပါ။

### Imperative Escape Hatch

React UI ကို State/Props မှ declaratively ဖော်ပြခြင်းက default ဖြစ်သည်။ Focus လို “အခု ဒီ DOM element ကို action တစ်ခုလုပ်ခိုင်းမယ်” ဆိုသည့် behavior မှာ DOM ref ကို imperative escape hatch အဖြစ်သုံးနိုင်သည်။

- Visible text/list/count ကိုပြောင်းရန် → State/Props/data flow
- Existing input DOM node ကို focus လုပ်ရန် → DOM ref
- Existing values မှ total တွက်ရန် → Derived Value

`document.querySelector(...)` သုံးနိုင်သော်လည်း component အတွင်း React-managed element ကို ref နှင့်တိုက်ရိုက်ချိတ်ခြင်းက ownership ပိုရှင်းပြီး global selector/ID dependency မလိုအပ်ပါ။

### State / Props / Ref / Derived Value / Local Variable

| Current value or concern | Classification | Reason |
| --- | --- | --- |
| `expenses` | State | CRUD ကြောင့်ပြောင်းပြီး rendered list ကိုသက်ရောက်သည် |
| `editingExpense` | State | Edit mode နဲ့ visible form content ကိုသက်ရောက်သည် |
| `filteredCategory` | State | User selection ကိုမှတ်ပြီး rendered result ကိုသက်ရောက်သည် |
| `searchText` | State | Controlled input နဲ့ filtered UI ကိုသက်ရောက်သည် |
| `ExpenseForm` input values/error | State | Input content/error message ကို render လုပ်ရန်လိုသည် |
| Parent callback များ | Props | Owner မှ child သို့ behavior contract ပို့သည် |
| `filteredExpenses`, `total`, normalized query | Derived Values | Existing State မှ render တိုင်းပြန်တွက်နိုင်သည် |
| Title/amount input DOM nodes | Refs | DOM methods ခေါ်ရန် reference လိုသော်လည်း reference ပြောင်းမှုကို UI မပြရ |
| Event handler ထဲက trimmed/numeric values | Local variables | Handler တစ်ကြိမ်အတွင်း calculation အတွက်သာလိုသည် |

ဆုံးဖြတ်ရန်မေးခွန်းများ—

1. Value ပြောင်းလျှင် rendered UI ပြောင်းရမလား။ ဟုတ်လျှင် State candidate ဖြစ်သည်။
2. Existing State/Props မှတွက်နိုင်သလား။ ဟုတ်လျှင် Derived Value ဖြစ်နိုင်သည်။
3. Parent ကပေးထားသော input/callback လား။ ဟုတ်လျှင် Props ဖြစ်သည်။
4. Render များကြားမှတ်ထားရန် သို့မဟုတ် DOM instance ကိုကိုင်ရန်လိုပြီး update က render မလိုဘူးလား။ ဟုတ်လျှင် Ref candidate ဖြစ်သည်။
5. Function call တစ်ကြိမ်အတွင်းသာလိုသလား။ ဟုတ်လျှင် local variable လုံလောက်နိုင်သည်။

### TypeScript and DOM Ref Types

DOM ref စတင်ချိန်မှာ element မရှိသေးသောကြောင့် initial value သည် `null` ဖြစ်သည်။ Ref ချိတ်မည့် element type ကို generic အဖြစ်ဖော်ပြရန်လိုသည်။ ဒီ lesson မှာ input element ဖြစ်သဖြင့် `HTMLInputElement` ကိုစဉ်းစားမည်။

Student ကဖြည့်ရမည့် shape:

```tsx
const someInputRef = useRef< /* DOM element type */ >( /* initial value */ );
```

DOM method ခေါ်ချိန်မှာ `current` က `null` ဖြစ်နိုင်မှုကို TypeScript ကသတိပေးမည်။ Optional chaining (`?.`) သို့ explicit null check ကိုသုံးပြီး handle လုပ်ရမည်။ Non-null assertion ဖြင့် compiler warning ကိုပိတ်မည့်အစား lifecycle reason ကိုနားလည်ရန်ဦးစားပေးမည်။

### Reading and Writing Refs Safely

Ref ကို event handlers သို့ Effect ကဲ့သို့ render ပြင်ပနေရာများတွင်ဖတ်/ရေးရန်ဦးစားပေးမည်။ Render output ဆုံးဖြတ်ရန် `ref.current` ကိုဖတ်ခြင်း သို့မဟုတ် render အတွင်း ref ကို mutate လုပ်ခြင်းက React data flow ကိုမရှင်းစေဘဲ behavior ခန့်မှန်းရခက်စေနိုင်သည်။

ဒီနေ့ implementation မှာ focus action ကို submit handler ၏ validation/success branches ထဲတွင်သာလုပ်မည်။

### Component Responsibility

Current structure အတွက် responsibility က—

- `App`: expense collection, edit target, filters/search နဲ့ Derived Values ကိုပိုင်သည်။
- `ExpenseForm`: form input State, validation decision နဲ့ form ထဲရှိ input DOM refs ကိုပိုင်သည်။
- `CategorySelect`: category selection UI contract ကိုသာတာဝန်ယူသည်။
- `SearchInput`: controlled search markup/interaction ကိုသာတာဝန်ယူသည်။
- `ExpenseList` / `ExpenseItem`: visible data render နဲ့ Edit/Delete Events ပို့ခြင်းကိုတာဝန်ယူသည်။

Input DOM nodes ကို render လုပ်ပြီး ဘယ် validation branch မှာ focus ရမလဲသိသော `ExpenseForm` ထဲမှာ refs ထားခြင်းက current change အတွက်သင့်လျော်သည်။ Parent `App` ဆီ ref lifting/forwarding မလိုသေးပါ။

## Planned Implementation Scope

Day 6 မှာ student ကိုယ်တိုင် အောက်ပါ behavior ကိုရေးမည်။

1. `ExpenseForm` ၏ Title input နဲ့ Amount input အတွက် DOM refs ဖန်တီးရန်
2. Refs ကို သက်ဆိုင်ရာ `<input>` elements နဲ့ချိတ်ရန်
3. Empty Title validation fail ဖြစ်လျှင် Title input ကို focus လုပ်ရန်
4. Invalid Amount validation fail ဖြစ်လျှင် Amount input ကို focus လုပ်ရန်
5. Successful Add ပြီးနောက် fields reset လုပ်ထားသော existing behavior ကိုထိန်းပြီး Title input ကို focus ပြန်ပေးရန်
6. Successful Update, Cancel Edit, Add/Edit/Delete, search/filter နဲ့ persistence behavior မပျက်ကြောင်းစစ်ရန်

Deliberately out of scope—

- Input values ကို uncontrolled refs အဖြစ်ပြောင်းခြင်း
- Ref forwarding သို့ imperative handle API
- Focus manager library ထည့်ခြင်း
- Day 7 `useReducer` refactor ကိုကြိုလုပ်ခြင်း
- Historical source copy ကို lesson folder ထဲဖန်တီးခြင်း

## Implementation Tasks

### Task 1 — Audit Current Values

Code မပြင်မီ `App.tsx` နဲ့ `ExpenseForm.tsx` ရှိ relevant values ကို State, Props, Ref candidate, Derived Value, local variable အဖြစ်ခွဲရန်။ အထူးသဖြင့် `title`, `amount`, `error`, `trimmedTitle`, `numericAmount`, input DOM nodes နဲ့ `filteredExpenses` ကိုအကြောင်းပြချက်နဲ့ခွဲရန်။

### Task 2 — Import and Create Typed Refs

`ExpenseForm` မှာလိုအပ်သော React Hook ကို import လုပ်ပြီး input DOM nodes နှစ်ခုအတွက် typed refs ဖန်တီးရန်။

Hints:

- Existing imports မှာ `useState` ရှိပြီးသားဖြစ်သည်။
- Both elements are `<input>` elements.
- DOM nodes မတပ်ရသေးသော initial render ကိုစဉ်းစားပါ။
- Ref name က ဘယ် element ကိုညွှန်းသလဲရှင်းရမည်။

### Task 3 — Attach Refs to DOM Inputs

Ref objects ကို Title နဲ့ Amount `<input>` elements ၏ React `ref` prop နှင့်ချိတ်ရန်။ State-controlled `value` နဲ့ `onChange` ကိုမဖယ်ရ။ ဒီ exercise က controlled form ကို uncontrolled form သို့ပြောင်းခြင်းမဟုတ်ပါ။

### Task 4 — Focus the First Invalid Field

Existing validation order ကိုထိန်းပြီး—

- Empty Title branch မှာ error set ပြီး Title input ကို focus လုပ်ရန်
- Non-positive/invalid Amount branch မှာ error set ပြီး Amount input ကို focus လုပ်ရန်

Hints:

- Ref object ၏ DOM node သည် ဘယ် property ထဲမှာရှိသလဲ။
- DOM node မရှိနိုင်သော case ကိုဘယ် operator နဲ့ safely handle မလဲ။
- Focus action က rendered error text ကိုတွက်ရန်သုံးတာမဟုတ်ဘဲ Event handler မှ DOM method ခေါ်ခြင်းဖြစ်သည်။

### Task 5 — Restore Focus After Successful Add

Add mode မှာ successful submission ပြီး `title` နဲ့ `amount` reset လုပ်ထားသော flow ကိုထိန်းကာ Title input သို့ focus ပြန်ပေးရန်။ Update branch က early return လုပ်ထားပုံနှင့် ဘယ် behavior က Add-only ဖြစ်ရမလဲကိုအရင်ခြေရာခံရန်။

Hint: Focus call နေရာကိုရွေးချိန်မှာ validation failure, Edit update နဲ့ successful Add paths သုံးခုလုံးကိုစဉ်းစားပါ။

### Task 6 — Explain Why Input Values Stay in State

`title` နဲ့ `amount` ကို refs ဖြင့်ဖတ်နိုင်တာတစ်ခုတည်းကြောင့် State ကိုဖယ်မပစ်ရသည့်အကြောင်းကို current UI behavior နဲ့ရှင်းပြရန်။ Controlled input, editing data initialization, clearing fields နဲ့ visible values တို့ကိုထည့်စဉ်းစားရန်။ ဒီ task မှာ source refactor မလုပ်ရ။

### Task 7 — Verify and Refactor Carefully

Behavior အောင်မြင်ပြီးနောက်—

- Refs နာမည်များရှင်းမရှင်း
- Null handling ရှိမရှိ
- Repeated focus logic ကို premature abstraction လုပ်ထားမထား
- Existing validation order/State flow မပြောင်းသွားကြောင်း
- Ref က render output ဆုံးဖြတ်ရာမှာပါဝင်မနေကြောင်း

စစ်ပြီး လိုအပ်မှသာ small refactor လုပ်ရန်။

## Guided Exercises

### Exercise 1 — Classification Before Coding

အောက်ပါအရာများကို State, Props, Ref, Derived Value သို့မဟုတ် local variable အဖြစ်ခွဲပြီး reason တစ်ကြောင်းစီရေးရန်။

- `title`
- `error`
- `editingExpense`
- `filteredExpenses`
- `numericAmount`
- Title input DOM node
- “last successfully submitted title” ကို UI မှာပြရမည့် requirement
- timeout ID ကို cancel လုပ်ရန် render များကြားမှတ်ထားရမည့် hypothetical requirement

### Exercise 2 — Predict Render Behavior

State setter ခေါ်ခြင်း၊ `ref.current` ပြောင်းခြင်းနဲ့ local variable ပြောင်းခြင်းတို့အတွက်—

- Value က render များကြားကျန်မကျန်
- React re-render ဖြစ်မဖြစ်
- Visible UI source အဖြစ်သင့်မသင့်

ကို code မrun မီခန့်မှန်းပြီးမှ mental model နဲ့ပြန်စစ်ရန်။

### Exercise 3 — Typed Title Ref

Title input အတွက် typed DOM ref ကို hint များဖြင့်ရေးပြီး TypeScript inferred `current` type ကို editor မှာစစ်ရန်။ Finished line ကို lesson မှ copy/paste မလုပ်ဘဲ student ကိုယ်တိုင် generic type နဲ့ initial value ဖြည့်ရန်။

### Exercise 4 — Validation Focus

Empty Title နဲ့ invalid Amount နှစ်ခုအတွက် error message မှန်ကန်ခြင်းနှင့် focus မှန်သော field သို့ရွှေ့ခြင်းကို implement/test လုပ်ရန်။ Both invalid ဖြစ်ချိန်မှာ current validation order အရ ဘယ် field ကအရင် focus ရမလဲခန့်မှန်းရန်။

### Exercise 5 — Successful Add Focus

Valid expense တစ်ခု add လုပ်ပြီး fields reset ဖြစ်ခြင်း၊ Title input focus ပြန်ရခြင်းနဲ့ new item ပေါ်လာခြင်းကိုအတူစစ်ရန်။ Focus management က State update ကိုအစားမထိုးကြောင်းရှင်းပြရန်။

### Exercise 6 — State vs Ref Counterfactual

`searchText` ကို Ref ထဲပြောင်းလဲသည့် hypothetical design ကို source ထဲမထည့်ဘဲဆွေးနွေးရန်။ User type လုပ်ချိန် filter result ပြောင်းဖို့ render ဘယ်ကလာမလဲ၊ UI sync မယုံကြည်ရနိုင်ပုံကိုရှင်းပြရန်။

### Exercise 7 — Existing Flow Regression Check

Add, Edit, Update, Cancel, Delete, category filter, search, total နဲ့ `localStorage` behavior ကို ref change ကမထိခိုက်ကြောင်း manual matrix ဖြင့်စစ်ရန်။

## Mini Challenges

1. **First invalid field challenge:** Title နဲ့ Amount နှစ်ခုလုံး invalid ဖြစ်ချိန်မှာ Title ကအရင် focus ရခြင်းကို validation order နဲ့ရှင်းပြရန်။
2. **Controlled + ref challenge:** Input တစ်ခုတည်းမှာ controlled `value`/`onChange` နဲ့ DOM `ref` တို့တပြိုင်နက်ရှိနိုင်သည့်အကြောင်း၊ တစ်ခုချင်း၏ responsibility ကိုရှင်းပြရန်။
3. **No render dependency challenge:** Ref value ပြောင်းသော်လည်း visible output မပြောင်းကြောင်း State setter မသုံးဘဲရှင်းပြရန်။ Debug UI အသစ်ကိုမထည့်ရ။
4. **Declarative alternative challenge:** Initial page load တစ်ကြိမ်တည်း focus လိုလျှင် HTML/JSX `autoFocus` ကပိုရိုးရှင်းနိုင်ပုံနှင့် validation event တစ်ခုပြီးမှ focus ရွှေ့ရန် ref လိုအပ်ပုံကိုနှိုင်းရန်။
5. **Ownership challenge:** `App` က form input ကို focus ခိုင်းရသည့် future requirement ပေါ်လာမှသာ component API/ref design ကိုပြန်စဉ်းစားသင့်ပြီး လက်ရှိမှာ `ExpenseForm` local ref လုံလောက်သည့်အကြောင်းရှင်းပြရန်။

အနည်းဆုံး challenge တစ်ခုကို အမှန်တကယ်ကြိုးစားပြီးမှ Session Evidence ထဲမှတ်တမ်းတင်ရန်။

## Manual Test Matrix

Student implementation ပြီးမှ actual result ဖြည့်ရန်။ ကြိုတင် pass မမှတ်ရ။

| Scenario | Expected behavior | Actual result |
| --- | --- | --- |
| Submit with empty Title | “Title is required” ပြပြီး Title input focus ရ | Not tested |
| Submit with valid Title and `0` Amount | Amount error ပြပြီး Amount input focus ရ | Not tested |
| Submit with valid Title and negative Amount | Amount error ပြပြီး Amount input focus ရ | Not tested |
| Submit with both fields invalid | Existing validation order အရ Title error/focus အရင်ဖြစ် | Not tested |
| Submit a valid new expense | Item add, fields clear, Title input focus ပြန်ရ | Not tested |
| Edit and update an expense | Existing item update flow မပျက် | Not tested |
| Start edit then Cancel | Form returns to Add mode correctly | Not tested |
| Search/category filter after ref change | Combined filter, count and total မှန် | Not tested |
| Reload after data change | `localStorage` persistence မပျက် | Not tested |
| Keyboard-only use | Focus indicator မြင်ရပြီး typing ဆက်လုပ်နိုင် | Not tested |

## Quiz / Review Questions

1. `useRef` က render တိုင်း object အသစ်ပြန်ပေးသလား။
2. `ref.current` ပြောင်းလျှင် React က component ကို re-render လုပ်သလား။
3. Local variable နဲ့ Ref တို့က render များကြား persistence ဘာကွာသလဲ။
4. UI မှာပြသမည့် counter ကို Ref ထဲထားလျှင် ဘာပြဿနာရှိသလဲ။
5. DOM input ref ၏ initial value ကို `null` ထားရသည့်အကြောင်းကဘာလဲ။
6. `<input>` element အတွက် TypeScript ref generic type ကဘာဖြစ်သင့်သလဲ။
7. `ref.current` မှာ optional chaining သုံးရသည့်အကြောင်းကဘာလဲ။
8. Controlled input တစ်ခုမှာ State နဲ့ DOM ref နှစ်ခုလုံး အဘယ်ကြောင့်ရှိနိုင်သလဲ။
9. Current form မှာ input DOM refs ကို `App` မဟုတ်ဘဲ `ExpenseForm` ကပိုင်သင့်သည့်အကြောင်းကဘာလဲ။
10. `document.querySelector` အစား React ref သုံးခြင်းက component ownership ကိုဘယ်လိုပိုရှင်းစေသလဲ။
11. Ref ကို render အတွင်းအမြဲဖတ်/ရေးမလုပ်သင့်သည့်အကြောင်းကဘာလဲ။
12. `searchText` ကို Ref အဖြစ်ပြောင်းမထားသင့်သည့်အကြောင်းကို UI behavior နဲ့ရှင်းပြပါ။
13. Initial mount focus နဲ့ validation failure နောက် focus တို့အတွက် declarative `autoFocus` နဲ့ imperative ref ကိုဘယ်လိုရွေးမလဲ။
14. Ref သုံးနိုင်တယ်ဆိုတိုင်း သုံးသင့်သလား။ Simpler State, Derived Value သို့ markup alternative ကိုဘယ်လိုစစ်မလဲ။

**Student answers:** _To be completed during Day 6 review._

## Common Mistakes

- UI မှာပြရမည့် value ကို Ref ထဲထားပြီး re-render ကိုမျှော်လင့်ခြင်း
- `useRef` ကို import မလုပ်ခြင်း
- DOM element type မှားသုံးခြင်း သို့မဟုတ် generic type မစဉ်းစားခြင်း
- Initial `null` / unmount possibility ကိုမhandle လုပ်ခြင်း
- `ref` prop ကိုမှန်သော input နှင့်မချိတ်ခြင်း
- `ref.current.focus()` ကို null safety မရှိဘဲခေါ်ခြင်း
- Controlled input ၏ `value`/`onChange` ကိုဖယ်ပြီး lesson scope မလိုဘဲ uncontrolled form သို့ပြောင်းခြင်း
- Render output တွင် `ref.current` ကိုဖတ်ပြီး hidden mutable dependency ဖန်တီးခြင်း
- Render အတွင်း `ref.current` ကို mutate လုပ်ခြင်း
- DOM query/selectors ဖြင့် component ပြင်ပကိုရှာပြီး ownership မရှင်းစေခြင်း
- Focus ကို render body ထဲတိုက်ရိုက်ခေါ်ခြင်း
- Validation branch မှားသောနေရာမှာ focus ခေါ်ပြီး first-invalid-field order ပြောင်းသွားခြင်း
- `useEffect` သို့ extra State ကိုမလိုအပ်ဘဲထည့်ခြင်း
- Parent ref forwarding/API ကို current requirement မရှိဘဲကြိုတင်တည်ဆောက်ခြင်း
- Strict Mode development behavior ကို Ref update က render ဖြစ်စေသည်ဟုမှားကောက်ခြင်း

## Session Evidence

### Exercises Completed

### Concept Explanations

### Quiz / Review Evidence

### Manual Tests

### Mistakes / Corrections

### Implementation Evidence

### Mini Challenges

## Completion Criteria

Day 6 ကို Completed လို့ update မလုပ်မီ အားလုံးစစ်ရန်။

### Understanding

- [ ] State, Props, Ref, Derived Value နဲ့ local variable ကို current examples ဖြင့်ခွဲပြနိုင်သည်။
- [ ] Ref object identity, `current` mutation နဲ့ no-render behavior ကိုကိုယ်ပိုင်စကားဖြင့်ရှင်းပြနိုင်သည်။
- [ ] DOM ref သည် imperative escape hatch ဖြစ်ပုံနှင့် declarative alternative ကိုရှင်းပြနိုင်သည်။
- [ ] TypeScript DOM ref type နဲ့ nullable `current` ကိုရှင်းပြနိုင်သည်။
- [ ] Controlled input State ကို Ref ကအစားမထိုးသည့်အကြောင်းရှင်းပြနိုင်သည်။

### Functionality

- [ ] Empty Title validation က Title input ကို focus လုပ်သည်။
- [ ] Invalid Amount validation က Amount input ကို focus လုပ်သည်။
- [ ] Successful Add ပြီး Title input သို့ focus ပြန်ရသည်။
- [ ] Existing Add/Edit/Update/Cancel/Delete flow မပျက်ပါ။
- [ ] Search, category filter, count, total နဲ့ persistence မပျက်ပါ။
- [ ] Keyboard focus indicator မြင်ရပြီး form ကိုဆက်အသုံးပြုနိုင်သည်။

### Practice and Quality

- [ ] Student က important ref code ကို hint-first workflow နဲ့ကိုယ်တိုင်ရေးသည်။
- [ ] Guided exercises နဲ့ အနည်းဆုံး mini challenge တစ်ခုပြီးသည်။
- [ ] Quiz/review answers ကိုဆွေးနွေးပြီး evidence မှတ်တမ်းတင်သည်။
- [ ] Manual Test Matrix ကို actual results ဖြင့်စစ်ပြီး evidence မှတ်တမ်းတင်သည်။
- [ ] Unnecessary dependency, Effect, State သို့ premature abstraction မထည့်ထားပါ။
- [ ] `npm run build` အောင်မြင်သည်။
- [ ] `npm run lint` အောင်မြင်သည်။
- [ ] `What I Actually Learned`, mistakes နဲ့ code patterns ကို actual evidence အတိုင်းဖြည့်သည်။
- [ ] Git checkpoint ပြုလုပ်သည်။

## What I Actually Learned

_To be completed from actual Day 6 evidence. ကြိုတင်မဖြည့်ရ။_

## Problems / Mistakes I Made

_To be completed after attempting Day 6. မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရ။_

## Important Code Patterns

_To be recorded from the student's actual Day 6 implementation. Source snapshot ကို lesson folder ထဲမကူးဘဲ relevant source files/patterns ကိုသာညွှန်းရန်။_

## Git Checkpoint

Completion criteria ပြည့်ပြီး Day Completion Protocol run ချိန်မှသာ build/lint, documentation update, commit နဲ့ tag ကိုလုပ်ရန်။

```bash
npm run build
npm run lint
git commit -m "learn: complete React Day 06"
git tag -a day-06-complete -m "React Day 06 complete"
```

Lesson preparation အဆင့်မှာ commit/tag/push မလုပ်ရ။ Day 6 completion အဆင့်မှာလည်း explicit push request မရှိလျှင် push မလုပ်ရ။

## Next Day Context

Day 7 မှာ current Expense Manager ရဲ့ related State transitions ကို `useReducer` နဲ့ action-driven model အဖြစ်စဉ်းစားမည်။ Day 6 မှ “value ရဲ့ responsibility အလိုက် State/Ref ရွေးခြင်း” mental model က Day 7 မှာ “related State changes ကို reducer နဲ့ဘယ်အချိန်စုစည်းမလဲ” ဆုံးဖြတ်ရာတွင်အခြေခံဖြစ်မည်။ Day 7 functionality ကို ဒီ lesson ပြင်ဆင်ချိန်မှာမထည့်ရသေးပါ။
