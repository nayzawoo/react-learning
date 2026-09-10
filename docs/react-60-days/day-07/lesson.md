# Day 07 — useReducer

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Complex သို့မဟုတ် related State transitions များကို reducer, action နဲ့ dispatch mental model ဖြင့်ခွဲစီမံရန်။

## Previous Day Review

Day 06 — useRef, DOM refs, State vs Ref မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Immutable State updates, functional updaters နဲ့ TypeScript unions
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- `useReducer` — State transition logic ကို reducer function ထဲစုခြင်း
- Reducer purity — current State နဲ့ action မှ next State ပြန်ခြင်း
- `dispatch` နဲ့ action objects
- TypeScript action unions နဲ့ exhaustive handling
- `useState` vs `useReducer` decision

## Mental Model

UI က “ဘယ် value သတ်မှတ်မလဲ” လို့ပြောမည့်အစား “ဘာ event ဖြစ်ခဲ့လဲ” ဆိုသော action ကို dispatch လုပ်ပြီး reducer က next State ကိုဆုံးဖြတ်တယ်။

## Implementation Tasks

1. Expense flow ထဲက related transitions ကိုစာရင်းထုတ်ရန်
2. Reducer State နဲ့ action types ကို design လုပ်ရန်
3. Small, bounded State group တစ်ခုကို reducer ဖြင့် guided refactor လုပ်ရန်
4. Behavior မပြောင်းကြောင်း Add/Edit/Delete/Cancel flows စစ်ရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Action တစ်မျိုးချင်းအတွက် current State → next State examples ရေးရန်
- Reducer ကို React Component ပြင်ပ pure function အဖြစ်စမ်းရန်

## Mini Challenges

Unknown action သို့မဟုတ် missing case ကို TypeScript ဖြင့်ဖမ်းနိုင်မည့် design ရေးရန်။

## Quiz / Review Questions

1. Reducer တစ်ခုက pure ဖြစ်ရသည့်အကြောင်းကဘာလဲ။
2. ဘယ်အခြေအနေမှာ `useState` က `useReducer` ထက်ပိုရိုးရှင်းသလဲ။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 7 review._

## Common Mistakes

- Reducer ထဲမှာ State ကို mutate လုပ်ခြင်း
- Action type ကို broad `string` အဖြစ်ထားခြင်း
- Unrelated State အားလုံးကို reducer တစ်ခုထဲအတင်းထည့်ခြင်း

## Completion Criteria

- [ ] Core concepts ကို student က ကိုယ်ပိုင်စကားဖြင့်ရှင်းပြနိုင်သည်။
- [ ] Planned implementation ကို hint-first workflow နဲ့ student ကရေးပြီး required behavior အောင်မြင်သည်။
- [ ] Guided exercises, mini challenge နဲ့ quiz/review ပြီးသည်။
- [ ] Existing working functionality မပျက်ပါ။
- [ ] `npm run build` အောင်မြင်သည်။
- [ ] `npm run lint` အောင်မြင်သည်။
- [ ] Actual learning, problems နဲ့ repository notes ကို update လုပ်သည်။
- [ ] Git checkpoint ပြုလုပ်သည်။

## What I Actually Learned

_To be completed after finishing Day 7._

## Problems / Mistakes I Made

_To be completed after attempting Day 7; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 7 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Completion criteria ပြည့်ပြီးမှ English commit message သုံးပြီး checkpoint လုပ်ရန်။

```bash
npm run build
npm run lint
git commit -m "Day 07: Complete useReducer"
```

Optional tag: `day-07-complete`. Tag/commit ကို lesson မပြီးမီ မဖန်တီးရ။

## Next Day Context

Day 8 မှာ distant Components များထံ shared value ပေးရန် Context API နဲ့ `useContext` ကိုလေ့လာမည်။
