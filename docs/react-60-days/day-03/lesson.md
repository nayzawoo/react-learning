# Day 03 — useEffect, localStorage, CRUD, Filtering, Totals & Derived Values

## Status

Status: Completed

Course record အရ Day 3 ပြီးစီးထားသည်။ Repository history နဲ့ current implementation က lesson concepts ကိုအတည်ပြုသည်။

## Purpose

Expense Manager ကို static/local interaction အဆင့်မှ browser persistence ပါသော CRUD application အဖြစ်တိုးချဲ့ပြီး Effect နဲ့ Derived Value တို့ရဲ့မတူညီသောတာဝန်ကိုနားလည်ရန်။

## Previous Day Review

- `.map()` နဲ့ `key` သုံး၍ expense list render လုပ်ခြင်း
- TypeScript Props နဲ့ Component contract သတ်မှတ်ခြင်း
- `ExpenseList`, `ExpenseItem`, `ExpenseForm` responsibility ခွဲခြင်း
- Callback Props မှတစ်ဆင့် parent State update လုပ်ခြင်း

## Prerequisites

- Day 1–2 State, Events, lists နဲ့ Component data flow
- JavaScript `map`, `filter`, `reduce`
- JSON serialization အခြေခံ
- Browser `localStorage` အခြေခံ

## Learning Objectives

- `useEffect` ကို external system synchronization အတွက်သုံးရသည့်အကြောင်းရှင်းပြနိုင်ရန်
- `localStorage` မှ lazy initialization လုပ်ပြီး State ပြောင်းတိုင်း persist လုပ်နိုင်ရန်
- Add, Edit, Update, Delete, Cancel Edit CRUD flow ကို immutable State updates ဖြင့်တည်ဆောက်နိုင်ရန်
- Category filter နဲ့ total ကို extra State မဟုတ်ဘဲ Derived Values အဖြစ်တွက်နိုင်ရန်
- Previous State အပေါ်မူတည်သော update တွင် functional updater သုံးနိုင်ရန်

## Core Concepts

### useEffect and localStorage

`useEffect` ဆိုတာ render အပြင်ဘက် external system တစ်ခု—ဒီ lesson မှာ browser `localStorage`—နဲ့ React State ကို synchronize လုပ်ဖို့အသုံးပြုတယ်။ Derived calculation တစ်ခုလုပ်ဖို့ Effect မလိုဘူး။

Initial State ကို function ပေးပြီး storage ကိုတစ်ကြိမ်ဖတ်ခြင်းဟာ lazy initialization ဖြစ်တယ်။ Expenses ပြောင်းတိုင်း dependency array `[expenses]` နဲ့ Effect က serialized data ကိုသိမ်းတယ်။

### CRUD

- Create: expense အသစ်ထည့်ခြင်း
- Read: list ပြခြင်း
- Update: matching ID ရှိ expense ကို item အသစ်ဖြင့်အစားထိုးခြင်း
- Delete: matching ID ကို list မှဖယ်ခြင်း
- Edit/Cancel: လက်ရှိ edit target ကို State ဖြင့်ရွေးပြီး form mode ပြောင်းခြင်း

### Functional State Updates

Next array က previous array အပေါ်မူတည်ရင် `setExpenses((prevExpenses) => ...)` pattern က update intent ကိုရှင်းစေပြီး stale snapshot အန္တရာယ်ကိုလျှော့တယ်။

### Derived Values

Derived Value ဆိုတာ ရှိပြီးသား State သို့မဟုတ် Props ကနေ render အတွင်းပြန်တွက်ထုတ်နိုင်တဲ့ value ဖြစ်တယ်။ `filteredExpenses` နဲ့ `total` ကို separate State ထားစရာမလိုဘူး။

## Mental Model

Effect ကို “State တစ်ခုကနေ တခြား State တစ်ခုတွက်ရန်” မသုံးဘဲ “React အပြင်ဘက် system နဲ့ sync လုပ်ရန်” သုံးတယ်။ Filtered list နဲ့ total က current State snapshot မှ deterministic အဖြေရနိုင်သောကြောင့် render အတွင်း Derived Values အဖြစ်တွက်တယ်။

## Implementation Tasks

Current repository မှအတည်ပြုနိုင်သော outcomes:

- `localStorage.getItem('expenses')` ဖြင့် lazy State initialization
- `useEffect` နဲ့ expenses persistence
- Add, Edit, Update, Delete နဲ့ Cancel Edit handlers
- Array `filter` / `map` ဖြင့် immutable Delete/Update
- Category selection ကို State အဖြစ်ထားခြင်း
- Filtered expense list နဲ့ filtered total ကို Derived Values အဖြစ်တွက်ခြင်း
- Form validation နဲ့ trimmed title / positive amount checks
- Array changes တွင် functional State updater သုံးခြင်း

## Guided Exercises

1. App စဖွင့်ချိန် storage read နဲ့ expenses update ဖြစ်ချိန် storage write ကိုခွဲရေးရန်
2. Delete, Update နဲ့ Add တစ်ခုချင်းစီအတွက် previous array မှ next array ဘယ်လိုရသလဲရှင်းပြရန်
3. Edit target ရှိ/မရှိအပေါ်မူတည်သော form mode ကို trace လုပ်ရန်
4. `filteredExpenses` နဲ့ `total` ကို State ထပ်ထားရင် ဘာကြောင့် sync bug ဖြစ်နိုင်သလဲရှင်းပြရန်
5. Refresh ပြီး data ပြန်ရခြင်းကို manual test လုပ်ရန်

## Mini Challenges

- Invalid title နဲ့ non-positive amount ကို State မပြောင်းဘဲတားရန်
- Edit ပြီးလျှင် edit mode ကိုရှင်းရန်
- Selected category အလိုက် count နဲ့ total နှစ်ခုစလုံးတူညီသော filtered data ကိုသုံးကြောင်းစစ်ရန်

## Quiz / Review Questions

1. `useEffect` ကို ဘယ်လိုအလုပ်အတွက်အသုံးပြုသင့်သလဲ။
2. Lazy State initializer က render တိုင်း storage ဖတ်ခြင်းနဲ့ဘာကွာသလဲ။
3. `map`, `filter` နဲ့ `reduce` ကို ဒီ app မှာ မည်သည့်တာဝန်အတွက်သုံးသလဲ။
4. `filteredExpenses` က State မဟုတ်ဘဲ Derived Value ဖြစ်ရတဲ့အကြောင်းကဘာလဲ။
5. Functional State updater ကို ဘယ်အချိန်မှာဦးစားပေးသင့်သလဲ။
6. Cancel Edit က ဘယ် State transition ကိုဖြစ်စေသလဲ။

Historical student answers: _Not recorded._

## Common Mistakes

- Storage read/write ကို render body ထဲမှာ အကာအကွယ်မရှိဘဲလုပ်ခြင်း
- Dependency array မှ `expenses` ကိုလွတ်ခြင်း သို့မဟုတ် Effect loop ဖြစ်စေခြင်း
- State array/object ကို mutate လုပ်ခြင်း
- Filtered list နဲ့ total ကို duplicate State အဖြစ်ထားခြင်း
- Update ပြီး editing State မရှင်းခြင်း
- `JSON.parse` result ကို runtime validation မရှိဘဲ trusted typed data လို့ယူဆခြင်း

## Completion Criteria

- Course record အရ Day 3 Completed ဖြစ်သည်။
- Current implementation တွင် persistence, CRUD/Edit/Cancel, filtering, total နဲ့ functional updates ရှိသည်။
- `filteredExpenses` နဲ့ `total` ကို Derived Values အဖြစ်တွက်ထားသည်။
- Historical personal quiz result မရှိသဖြင့် မဖန်တီးထားပါ။

## What I Actually Learned

- `useEffect` ဖြင့် browser storage နဲ့ React State synchronize လုပ်ခြင်း
- Lazy initialization ဖြင့် initial persisted data ဖတ်ခြင်း
- Add/Edit/Update/Delete/Cancel CRUD transitions
- Immutable array transforms နဲ့ functional State updates
- Category filter နဲ့ total ကို Derived Values အဖြစ်ထားခြင်း

## Problems / Mistakes I Made

_Repository history တွင် form validation ပြင်ဆင်မှု commits ရှိသော်လည်း personal mistake အဖြစ်သတ်မှတ်နိုင်သော conversation record မရှိပါ။ အတိအကျ မဖန်တီးဘဲ နောင် evidence ရှိမှဖြည့်ရန်။_

## Important Code Patterns

```tsx
const [items, setItems] = useState<Item[]>(() => {
  const savedItems = localStorage.getItem("items");
  return savedItems ? JSON.parse(savedItems) : [];
});

useEffect(() => {
  localStorage.setItem("items", JSON.stringify(items));
}, [items]);

setItems((previousItems) =>
  previousItems.filter((item) => item.id !== id),
);
```

Derived calculation ကို State setter မသုံးဘဲ current values မှတွက်ရန်။

## Git Checkpoint

Related history တွင် `9d254a3` (`start useEffect`), `42663c2` (lazy initialization + persistence), `ced5a94` နဲ့ `76dca4f` (form validation) commits ရှိသည်။ Annotated tag `day-03-complete` က နောက်ဆုံး substantive Day 3 checkpoint `76dca4f` ကိုညွှန်းပြီး `origin` သို့ push ထားသည်။ နောက်မှရှိသော `minor` commits နှစ်ခုက whitespace ထည့်ပြီးပြန်ဖယ်ထားခြင်းသာဖြစ်သောကြောင့် completion checkpoint အဖြစ်မသုံးထားပါ။

## Next Day Context

Day 4 မှာ category values ကို Single Source of Truth သို့စုစည်းပြီး literal union types, reusable `CategorySelect`, discriminated union props, Type Narrowing နဲ့ Component Responsibility ကိုပိုတိကျစေမည်။
