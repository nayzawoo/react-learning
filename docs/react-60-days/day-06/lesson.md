# Day 06 — useRef, DOM refs, State vs Ref

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Render ဖြစ်စေရန်မလိုသော mutable value နဲ့ DOM element reference ကို `useRef` ဖြင့်ကိုင်တွယ်တတ်ပြီး State သုံးရမည့်အခြေအနေနဲ့ခွဲခြားနိုင်ရန်။

## Previous Day Review

Day 05 — Search + Combined Filtering + Derived State Design မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Day 5 controlled input, State ownership နဲ့ Derived Value design
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- `useRef` — render များကြား object တစ်ခုကိုတည်ငြိမ်စွာသိမ်းထားခြင်း
- `ref.current` — mutable value ကိုဖတ်/ရေးသည့်နေရာ
- DOM refs — input focus ကဲ့သို့ imperative DOM action
- State vs Ref — UI render ကိုသက်ရောက်ခြင်းရှိ/မရှိအပေါ်ရွေးချယ်ခြင်း

## Mental Model

State update က UI ကိုပြန်တွက်စေတယ်။ Ref update က value ကိုမှတ်ထားပေမယ့် render မဖြစ်စေဘူး။ DOM ကို declarative Props နဲ့မလုံလောက်သည့်အချိန်မှာသာ escape hatch အဖြစ် Ref သုံးမယ်။

## Implementation Tasks

1. Current Expense Manager ထဲမှ State နဲ့ Ref candidate များကိုအရင်ခွဲခြားရန်
2. Form/search input တစ်ခုကို DOM ref ဖြင့် focus လုပ်မည့် small guided change စီစဉ်ရန်
3. UI ကိုသက်ရောက်သော value ကို Ref ထဲမရွှေ့ဘဲ behavior ကိုစမ်းရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Counter-like render value နဲ့ previous/non-visual value များကို State/Ref အဖြစ်ခွဲရန်
- Button သို့မဟုတ် relevant event တစ်ခုမှ input focus ကိုထိန်းရန်

## Mini Challenges

Ref ပြောင်းသော်လည်း UI မပြောင်းပုံကိုရှင်းပြပြီး forced render မလုပ်ဘဲသက်သေပြရန်။

## Quiz / Review Questions

1. `useRef` update နဲ့ `useState` update ရဲ့ render behavior ဘာကွာသလဲ။
2. DOM ref ကို declarative React data flow အစား default မသုံးသင့်သည့်အကြောင်းကဘာလဲ။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 6 review._

## Common Mistakes

- UI မှာပြရမည့် value ကို Ref ထဲထားခြင်း
- Render အတွင်း `ref.current` ကိုမလိုအပ်ဘဲဖတ်/ရေးခြင်း
- TypeScript DOM element type သို့မဟုတ် null state ကိုမစဉ်းစားခြင်း

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

_To be completed after finishing Day 6._

## Problems / Mistakes I Made

_To be completed after attempting Day 6; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 6 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Completion criteria ပြည့်ပြီးမှ English commit message သုံးပြီး checkpoint လုပ်ရန်။

```bash
npm run build
npm run lint
git commit -m "Day 06: Complete useRef, DOM refs, State vs Ref"
```

Optional tag: `day-06-complete`. Tag/commit ကို lesson မပြီးမီ မဖန်တီးရ။

## Next Day Context

Day 7 မှာ related State transitions များကို `useReducer` နဲ့ event/action model အဖြစ်စီမံမည်။
