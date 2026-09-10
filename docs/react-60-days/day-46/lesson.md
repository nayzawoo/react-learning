# Day 46 — React Performance Mental Model

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

React render lifecycle, re-render triggers နဲ့ actual bottleneck များကိုနားလည်ပြီး optimization မတိုင်မီတိုင်းတာတတ်ရန်။

## Previous Day Review

Day 45 — Advanced TypeScript for React မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- State/Props/Context data flow နဲ့ browser performance basics
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- Rendering vs DOM commit
- Re-render causes
- Parent/child renders
- State/Props/Context updates
- React Profiler
- Measure before optimizing

## Mental Model

Re-render တစ်ခုက bug သို့ performance problem လို့အလိုအလျောက်မဆိုနိုင်ဘူး။ Costly work နဲ့ user-visible delay ရှိမရှိကို profiler ဖြင့်အရင်တိုင်းပြီး cause ကိုရှာမယ်။

## Implementation Tasks

1. Critical interaction တစ်ခု၏ render path ကိုpredict လုပ်ရန်
2. React Profiler ဖြင့်measurement ယူရန်
3. Actual expensive calculation/Component ရှိမရှိခွဲရန်
4. Structure/State colocation နဲ့အရင်တိုးတက်စေရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- State update တစ်ခုအပြီး re-render ဖြစ်မည့် Components ခန့်မှန်းပြီး profiler နဲ့နှိုင်းရန်
- Render time နဲ့ network wait ကိုခွဲရန်

## Mini Challenges

Optimization API မသုံးဘဲ State colocation သို့ Component boundary ဖြင့် unnecessary work လျှော့ရန်။

## Quiz / Review Questions

1. Render နဲ့ DOM update တူသလား။
2. Re-render count တစ်ခုတည်းက performance conclusion အတွက်လုံလောက်သလား။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 46 review._

## Common Mistakes

- Profiler evidence မရှိဘဲ optimization စလုပ်ခြင်း
- Network latency ကို React render cost လို့ယူခြင်း
- Render ဖြစ်တိုင်း DOM အားလုံးပြန်တည်ဆောက်တယ်လို့ယူခြင်း

## Completion Criteria

- [ ] Core concepts ကို student က ကိုယ်ပိုင်စကားဖြင့်ရှင်းပြနိုင်သည်။
- [ ] Planned implementation ကို hint-first workflow နဲ့ student ကရေးပြီး required behavior အောင်မြင်သည်။
- [ ] Guided exercises, mini challenge နဲ့ quiz/review ပြီးသည်။
- [ ] Existing working functionality မပျက်ပါ။
- [ ] `npm run verify` အောင်မြင်သည်။
- [ ] Actual learning, problems နဲ့ repository notes ကို update လုပ်သည်။
- [ ] Git checkpoint ပြုလုပ်သည်။

## What I Actually Learned

_To be completed after finishing Day 46._

## Problems / Mistakes I Made

_To be completed after attempting Day 46; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 46 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Follow the **Complete Current Day** protocol in `../PROTOCOLS.md`.

## Next Day Context

Day 47 မှာ `memo`, `useMemo`, `useCallback` ကို ဘယ်အချိန်သုံး/မသုံးသင့်သလဲလေ့လာမည်။
