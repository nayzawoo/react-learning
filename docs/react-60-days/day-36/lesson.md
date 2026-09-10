# Day 36 — State Management Decision Patterns

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

State problem တစ်ခုစီအတွက် အလွယ်ဆုံးမှလုံလောက်သော mechanism ကိုရွေးရန် decision framework တည်ဆောက်ခြင်း။

## Previous Day Review

Day 35 — RTK Query vs TanStack Query မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Local/lifted State, Context, `useReducer`, Redux Toolkit နဲ့ server State tools
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- Local State
- Lifted State
- Context
- `useReducer`
- Redux Toolkit
- Server State tools
- Decision criteria and tradeoffs

## Mental Model

State management က library contest မဟုတ်ဘူး။ Ownership, consumers, transition complexity, persistence နဲ့ remote authority ကိုအရင်သတ်မှတ်ပြီး smallest sufficient tool ကိုရွေးမယ်။

## Implementation Tasks

1. Task Manager State inventory ကို decision matrix ဖြင့်ပြန်ခွဲရန်
2. Over-global သို့ duplicated State ရှိမရှိစစ်ရန်
3. ရွေးချယ်မှုတစ်ခုစီအတွက် reason နဲ့ exit condition ရေးရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Same feature ကို local/lifted/Context/Redux options ဖြင့်နှိုင်းရန်
- Server State tool မသုံးသင့်သော UI-only examples ရွေးရန်

## Mini Challenges

State တစ်ခု၏ requirements တိုးလာချိန် ဘယ် signal မှာ mechanism ပြောင်းမလဲရေးရန်။

## Quiz / Review Questions

1. Context နဲ့ Redux ကိုအစားထိုးတူညီသော tools လို့ယူနိုင်သလား။
2. Smallest sufficient tool ဆိုတာဘာကြောင့် production-friendly ဖြစ်နိုင်သလဲ။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 36 review._

## Common Mistakes

- App size ကိုသာကြည့်ပြီး tool ရွေးခြင်း
- Remote ownership ကိုမစဉ်းစားခြင်း
- Future possibility အတွက် premature global abstraction ဆောက်ခြင်း

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

_To be completed after finishing Day 36._

## Problems / Mistakes I Made

_To be completed after attempting Day 36; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 36 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Completion criteria ပြည့်ပြီးမှ English commit message သုံးပြီး checkpoint လုပ်ရန်။

```bash
npm run build
npm run lint
git commit -m "Day 36: Complete State Management Decision Patterns"
```

Optional tag: `day-36-complete`. Tag/commit ကို lesson မပြီးမီ မဖန်တီးရ။

## Next Day Context

Day 37 မှာ Vitest ဖြင့် automated testing fundamentals စတင်မည်။
