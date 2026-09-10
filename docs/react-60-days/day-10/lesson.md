# Day 10 — Checkpoint #1 + Expense App Refactor

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Days 1–9 concepts ကို Expense Manager တစ်ခုလုံးအပေါ်ပြန်လည်သုံးသပ်ပြီး behavior မပျက်ဘဲ types, responsibilities နဲ့ data flow ကိုရှင်းစေရန်။

## Previous Day Review

Day 09 — Custom Hooks မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Phase 1 lessons အားလုံးနှင့် working Expense Manager
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- Checkpoint-based review
- State ownership audit
- Derived Value audit
- Component/Hook responsibility
- TypeScript contract quality
- Regression checks နဲ့ refactoring discipline

## Mental Model

Refactor ဆိုတာ behavior အသစ်ထည့်ခြင်းမဟုတ်ဘဲ observable behavior ကိုထိန်းထားပြီး structure ပိုနားလည်လွယ်အောင်လုပ်ခြင်းဖြစ်တယ်။ Checkpoint က understanding နဲ့ correctness နှစ်ခုစလုံးကိုစစ်တယ်။

## Implementation Tasks

1. Expense Manager features နဲ့ data flow အပြည့်အစုံ review လုပ်ရန်
2. Duplicate State, overly broad Props နဲ့ unclear responsibilities ရှာရန်
3. Small, evidence-backed refactors များသာလုပ်ရန်
4. Core Add/Edit/Delete/Filter/Search/Persistence flows regression test လုပ်ရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Component tree နဲ့ State ownership map ရေးရန်
- Phase 1 concepts ကို code location တစ်ခုချင်းနှင့်ချိတ်ပြရန်

## Mini Challenges

Feature တစ်ခုရွေးပြီး Event → State transition → Derived Value → UI flow ကိုမကြည့်ဘဲရှင်းပြရန်။

## Quiz / Review Questions

1. Current app ရဲ့ Single Source of Truth များကဘာတွေလဲ။
2. ဘယ် refactor က readability တိုးစေပြီး ဘယ် refactor က unnecessary abstraction ဖြစ်နိုင်သလဲ။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 10 review._

## Common Mistakes

- Checkpoint ကို feature expansion အဖြစ်ပြောင်းခြင်း
- Behavior အများကြီးကို refactor တစ်ကြိမ်တည်းဖြင့်ပြောင်းခြင်း
- Compile ဖြစ်ရုံနဲ့ lesson complete လုပ်ခြင်း

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

_To be completed after finishing Day 10._

## Problems / Mistakes I Made

_To be completed after attempting Day 10; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 10 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Completion criteria ပြည့်ပြီးမှ English commit message သုံးပြီး checkpoint လုပ်ရန်။

```bash
npm run build
npm run lint
git commit -m "Day 10: Complete Checkpoint #1 + Expense App Refactor"
```

Optional tag: `day-10-complete`. Tag/commit ကို lesson မပြီးမီ မဖန်တီးရ။

## Next Day Context

Day 11 မှာ network work အတွက်လိုအပ်သော Async JavaScript mental model ကိုစတင်မည်။
