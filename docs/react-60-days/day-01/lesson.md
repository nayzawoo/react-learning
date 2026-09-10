# Day 01 — JSX, Components, Props, Events, useState

## Status

Status: Completed

Course record အရ Day 1 ပြီးစီးထားသည်။ မူလ quiz answer နဲ့ exercise conversation ကို repository မှမရသောကြောင့် မဖန်တီးထားပါ။

## Purpose

React UI ကို Component များဖြင့်တည်ဆောက်ပုံ၊ parent က child သို့ Props ပို့ပုံ၊ user Event ကိုတုံ့ပြန်ပုံနဲ့ ပြောင်းလဲနိုင်သော data ကို `useState` ဖြင့်စီမံပုံ၏ အခြေခံ mental model တည်ဆောက်ရန်။

## Previous Day Review

Day 1 ဖြစ်သောကြောင့် previous React lesson မရှိပါ။ JavaScript functions, objects, arrays နဲ့ TypeScript အခြေခံကို starting point အဖြစ်ယူသည်။

## Prerequisites

- JavaScript variables, functions, arrays နဲ့ objects
- TypeScript type annotation အခြေခံ
- HTML form/input အခြေခံ
- Vite development workflow အခြေခံ

## Learning Objectives

- JSX က JavaScript expression နဲ့ UI description ကို ဘယ်လိုပေါင်းပေးသလဲရှင်းပြနိုင်ရန်
- Component ကို reusable UI function အဖြစ်ရေးနိုင်ရန်
- Props နဲ့ State တာဝန်ကွာခြားချက်ကို စတင်ခွဲခြားနိုင်ရန်
- Event handler ကနေ State update လုပ်နိုင်ရန်
- Expense Manager ရဲ့အခြေခံ data flow ကိုတည်ဆောက်ရန်

## Core Concepts

### JSX

JSX ဆိုတာ UI ကို JavaScript/TypeScript ထဲမှာ declarative syntax ဖြင့်ဖော်ပြနိုင်တဲ့ နည်းလမ်းဖြစ်တယ်။ HTML နဲ့ဆင်ပေမယ့် JavaScript expressions ကို `{}` အတွင်းထည့်သုံးနိုင်တယ်။

### Component

Component ဆိုတာ Props ကိုလက်ခံပြီး UI ကိုပြန်ပေးတဲ့ React function ဖြစ်တယ်။ UI ကို အဓိပ္ပာယ်ရှိတဲ့ အပိုင်းများခွဲပေးနိုင်တယ်။

### Props

Props ဆိုတာ parent Component က child Component ထံပို့ပေးတဲ့ input ဖြစ်တယ်။ Child က Props ကို ကိုယ်ပိုင် State လို တိုက်ရိုက်ပြောင်းလဲမလုပ်ရ။

### Events

`onClick` နဲ့ `onSubmit` တို့လို React Events တွေက user action ကို Event handler ဆီပို့ပေးတယ်။

### useState

State ဆိုတာ Component က အချိန်ကြာလာတာနဲ့အမျှ ပြောင်းလဲနိုင်ပြီး render များကြား မှတ်ထားရမယ့် data ဖြစ်တယ်။ `useState` update က React ကို UI ပြန်တွက်ရန်အသိပေးတယ်။

## Mental Model

`UI = render(State, Props)` လို့စဉ်းစားနိုင်တယ်။ User Event တစ်ခုဖြစ်လာတဲ့အခါ Event handler က State ကို update လုပ်ပြီး React က State အသစ်အပေါ်မူတည်ကာ UI ကိုပြန် render လုပ်တယ်။

## Implementation Tasks

Repository history နဲ့ current source က အောက်ပါ Day 1 foundation ကိုအတည်ပြုနိုင်သည်။

- Expense data အတွက် TypeScript shape စတင်သတ်မှတ်ခြင်း
- Expense list နဲ့ total ကို UI ထဲပြခြင်း
- Add/Delete Events ကို handler များနှင့်ချိတ်ခြင်း
- Expenses collection ကို `useState` ဖြင့်သိမ်းခြင်း
- Expense Manager အတွက် Component-based foundation စတင်ခြင်း

## Guided Exercises

Day 1 practice scope:

1. Static JSX ကို Component အဖြစ်ခွဲရေးရန်
2. Parent မှ child သို့ typed Props ပို့ရန်
3. Button Event က handler ကိုခေါ်ပုံကို trace လုပ်ရန်
4. State update မတိုင်ခင်နဲ့ update ပြီးနောက် UI ကိုနှိုင်းယှဉ်ရန်

## Mini Challenges

- Expense count သို့မဟုတ် total က ဘယ် data ကနေတွက်သင့်သလဲ စဉ်းစားရန်
- Props တစ်ခုမပို့လျှင် TypeScript က ဘယ်လိုကာကွယ်ပေးသလဲ စမ်းကြည့်ရန်

## Quiz / Review Questions

1. JSX နဲ့ HTML မှာ ဘာကွာသလဲ။
2. Component တစ်ခုရဲ့ input နဲ့ output ကဘာလဲ။
3. Props ကို child က ဘာကြောင့်တိုက်ရိုက်မပြောင်းသင့်သလဲ။
4. Local variable အစား State လိုအပ်တဲ့အခြေအနေကဘာလဲ။
5. Event handler က UI ပြောင်းလဲမှုကို ဘယ်လိုစတင်စေသလဲ။

Historical student answers: _Not recorded._

## Common Mistakes

- Component function ကို lowercase အမည်ပေးခြင်း
- JSX expression အတွက် `{}` မသုံးခြင်း
- State array/object ကို တိုက်ရိုက် mutate လုပ်ခြင်း
- Event handler ကို function အဖြစ်မပေးဘဲ render အတွင်းချက်ချင်းခေါ်ခြင်း
- Props နဲ့ State ကို တာဝန်မခွဲခြားခြင်း

## Completion Criteria

- Course record အရ Day 1 ကို Completed အဖြစ်အတည်ပြုထားသည်။
- Current repository မှာ JSX, Components, typed Props, Events နဲ့ `useState` အသုံးပြုမှုရှိသည်။
- Expense Manager foundation ကို Git history ကအတည်ပြုသည်။
- မူလ quiz/build/lint result ကို historical record မရှိသောကြောင့် ထပ်မံမခန့်မှန်းထားပါ။

## What I Actually Learned

- JSX ဖြင့် data အပေါ်မူတည်သော UI ဖော်ပြခြင်း
- Component နဲ့ Props သုံးပြီး UI responsibility ခွဲခြင်း
- Event handler မှတစ်ဆင့် `useState` update လုပ်ခြင်း
- Expenses ကဲ့သို့ render များကြားမှတ်ထားရမည့် data ကို State အဖြစ်ထားခြင်း

## Problems / Mistakes I Made

_မူလ Day 1 conversation ထဲက personal problems သို့မဟုတ် mistakes ကို repository မှအတည်မပြုနိုင်သောကြောင့် မှတ်တမ်းမဖန်တီးထားပါ။ နောင် review မှာ evidence ရှိပါကဖြည့်ရန်။_

## Important Code Patterns

```tsx
const [items, setItems] = useState<Item[]>([]);

function handleAction() {
  setItems(nextItems);
}
```

Pattern ရဲ့အဓိကအချက်က render ကိုသက်ရောက်ပြီး မှတ်ထားရမည့် data ကို State ထဲထားကာ Event handler မှ update လုပ်ခြင်းဖြစ်တယ်။

## Git Checkpoint

Git history တွင် `c0e0bf0` (`day 1`) checkpoint ရှိသည်။ Annotated tag `day-01-complete` က ဒီ commit ကိုညွှန်းပြီး `origin` သို့ push ထားသည်။

## Next Day Context

Day 2 မှာ expenses collection ကို `.map()` ဖြင့် render လုပ်ခြင်း၊ stable `key` ရွေးခြင်း၊ TypeScript Props နဲ့ `ExpenseList` / `ExpenseItem` / `ExpenseForm` Component splitting ကိုတိုးချဲ့မည်။
