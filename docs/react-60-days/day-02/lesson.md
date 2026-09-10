# Day 02 — Lists, .map(), key, TypeScript Props, Component Splitting

## Status

Status: Completed

Course record အရ Day 2 ပြီးစီးထားသည်။ မူလ exercise အစဉ်နဲ့ student answers မရှိသဖြင့် repository structure ကနေ အတည်ပြုနိုင်တာကိုသာရေးထားသည်။

## Purpose

Data array တစ်ခုကို React element list အဖြစ်ပြောင်းခြင်း၊ item တစ်ခုချင်းကို stable identity ပေးခြင်းနဲ့ Component Responsibility အစပြုခွဲခြားခြင်းကို လေ့လာရန်။

## Previous Day Review

- JSX က UI ကို declaratively ဖော်ပြပုံ
- Component က Props လက်ခံပြီး UI ပြန်ပုံ
- Events က State update ကိုစတင်ပုံ
- `useState` က render များကြား data ကိုမှတ်ထားပုံ

## Prerequisites

- Day 1 JSX, Components, Props, Events, `useState`
- JavaScript arrays နဲ့ callback functions
- TypeScript object type အခြေခံ

## Learning Objectives

- `.map()` ဖြင့် data array မှ UI list ဖန်တီးနိုင်ရန်
- React `key` ရဲ့ identity role ကိုရှင်းပြနိုင်ရန်
- Component Props ကို TypeScript ဖြင့်တိကျစွာရေးနိုင်ရန်
- List, item နဲ့ form responsibility ကို Component များခွဲနိုင်ရန်
- Callback Props နဲ့ child Event ကို parent State owner ဆီပို့နိုင်ရန်

## Core Concepts

### Lists and .map()

`.map()` က array item တစ်ခုချင်းကို React element တစ်ခုစီအဖြစ်ပြောင်းပေးတယ်။ Render လုပ်နေချိန်မှာ မူလ array ကို mutate မလုပ်ဘူး။

### key

`key` က sibling list items များအကြား ဘယ် item က ဘယ် identity ဖြစ်တယ်ဆိုတာ React ကိုသိစေတယ်။ Stable, unique ID ကိုရွေးရပြီး list index ကို default အဖြစ်မသုံးသင့်ဘူး။

### TypeScript Props

Props type က Component contract ဖြစ်တယ်။ Data နဲ့ callback signature မကိုက်လျှင် compile time မှာသိနိုင်စေတယ်။

### Component Splitting

`ExpenseList` က collection rendering ကို၊ `ExpenseItem` က item display/actions ကို၊ `ExpenseForm` က input flow ကိုတာဝန်ယူတယ်။ State owner က parent ဖြစ်ပြီး child actions ကို callback Props ဖြင့်ပြန်တင်တယ်။

## Mental Model

Array ထဲက data identity နဲ့ UI element identity ကို `key` ကချိတ်ပေးတယ်။ Component splitting ဟာ file အရေအတွက်များအောင်လုပ်တာမဟုတ်ဘဲ responsibility နဲ့ data flow ရှင်းအောင် boundary ခွဲတာဖြစ်တယ်။

## Implementation Tasks

Current repository က အောက်ပါတို့ကိုအတည်ပြုသည်။

- `Expense[]` ကို `.map()` ဖြင့် list အဖြစ် render လုပ်ခြင်း
- `expense.id` ကို list `key` အဖြစ်သုံးခြင်း
- `ExpenseList`, `ExpenseItem`, `ExpenseForm` ကို သီးခြား Components အဖြစ်ထားခြင်း
- Expense data နဲ့ Event callbacks ကို TypeScript Props ဖြင့်ချိတ်ခြင်း
- Empty list အတွက် conditional UI ပြခြင်း

## Guided Exercises

1. Array item က JSX item အဖြစ်ပြောင်းသည့် `.map()` callback ကိုရှင်းပြရန်
2. `ExpenseList` မှ `ExpenseItem` သို့ data flow ကို trace လုပ်ရန်
3. Delete button က parent State update ထိသွားသည့် callback flow ကို trace လုပ်ရန်
4. Wrong Props type တစ်ခုကို စမ်းပြီး TypeScript error ကိုဖတ်ရန်

## Mini Challenges

- Empty array ဖြစ်လျှင် list အစား သင့်လျော်သော message ပြရန်
- `key` အဖြစ် index သုံးလျှင် Edit/Delete/reorder မှာ ဘာကြောင့်ပြဿနာဖြစ်နိုင်သလဲရှင်းပြရန်

## Quiz / Review Questions

1. `.map()` နဲ့ `.forEach()` ကို render list အတွက်သုံးရာမှာ ဘာကွာသလဲ။
2. React က `key` ကို Component Props အဖြစ်အလိုအလျောက်ပို့ပေးသလား။
3. Stable `key` ဘာကြောင့်လိုသလဲ။
4. `ExpenseList` နဲ့ `ExpenseItem` တာဝန်ဘာကွာသလဲ။
5. Child က parent State ကိုဘယ်လိုပြောင်းခိုင်းသလဲ။

Historical student answers: _Not recorded._

## Common Mistakes

- `.map()` callback မှ JSX return မလုပ်ခြင်း
- `key` မထည့်ခြင်း သို့မဟုတ် array index သုံးခြင်း
- Props callback type ကို event/data signature နဲ့မကိုက်အောင်ရေးခြင်း
- Child ထဲမှာ parent data ကို duplicate State အဖြစ်သိမ်းခြင်း
- Component splitting လုပ်ပေမယ့် responsibility မရှင်းခြင်း

## Completion Criteria

- Course record အရ Day 2 Completed ဖြစ်သည်။
- Current source တွင် typed `ExpenseList`, `ExpenseItem`, `ExpenseForm` boundaries ရှိသည်။
- Expense list က `expense.id` key နဲ့ `.map()` ကိုအသုံးပြုသည်။
- မူလ quiz/build/lint result မရှိသဖြင့် မခန့်မှန်းထားပါ။

## What I Actually Learned

- Array data ကို `.map()` ဖြင့် React list အဖြစ်ပြောင်းခြင်း
- `key` က list identity အတွက်ဖြစ်ကြောင်း
- Props က Component API/contract အဖြစ်အလုပ်လုပ်ခြင်း
- List, item, form ကို responsibility အလိုက်ခွဲခြင်း
- Callback Props ဖြင့် child action ကို parent State owner ဆီပြန်ပို့ခြင်း

## Problems / Mistakes I Made

_အတည်ပြုနိုင်သော personal mistake record မရှိသေးပါ။ နောင် review မှာ evidence ရှိပါကဖြည့်ရန်။_

## Important Code Patterns

```tsx
{items.map((item) => (
  <ItemRow key={item.id} item={item} onAction={onAction} />
))}
```

Data ကို parent ကပေးပြီး action ကို callback ဖြင့်ပြန်တင်သည့် one-way data flow ကိုမှတ်ထားရန်။

## Git Checkpoint

Day 2 ၏ နောက်ဆုံး relevant checkpoint သည် `453fe01` (`day 2: expense filtered by category`) ဖြစ်သည်။ Annotated tag `day-02-complete` က ဒီ commit ကိုညွှန်းပြီး `origin` သို့ push ထားသည်။

## Next Day Context

Day 3 မှာ Effects, `localStorage` persistence, CRUD/Edit flow, filtering, totals, Derived Values နဲ့ functional State updates ကိုပေါင်းမည်။
