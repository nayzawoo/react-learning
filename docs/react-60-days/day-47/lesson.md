# Day 47 — memo, useMemo, useCallback

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Memoization APIs ၏ costs နဲ့ identity semantics ကိုနားလည်ပြီး measured bottleneck ရှိမှမှန်ကန်စွာအသုံးပြုရန်။

## Previous Day Review

Day 46 — React Performance Mental Model မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- React Performance mental model, profiling, reference identity နဲ့ dependency arrays
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- `memo`
- `useMemo`
- `useCallback`
- Referential equality
- Dependency correctness
- Memoization cost
- When NOT to use memoization

## Mental Model

Memoization က semantic correctness tool မဟုတ်ဘဲ performance tradeoff ဖြစ်တယ်။ Calculation/cache management cost ရှိသောကြောင့် profiler evidence နဲ့ stable dependencies ရှိမှသုံးမယ်။

## Implementation Tasks

1. Profiler မှ actual candidate ရှိ/မရှိအရင်ဆုံးဖြတ်ရန်
2. Expensive calculation သို့ memoized child case တစ်ခုကိုသာစမ်းရန်
3. Before/after measurement နှိုင်းရန်
4. Benefit မရှိသော memoization ကိုဖယ်ရှားရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Object/function identity က `memo` comparison ကိုဘယ်လိုသက်ရောက်သလဲစမ်းရန်
- Missing dependency နဲ့ stale value scenario ရေးရန်

## Mini Challenges

`useCallback` မလိုသော handler သုံးခုနဲ့တကယ်လိုနိုင်သော handler တစ်ခုကိုခွဲပြရန်။

## Quiz / Review Questions

1. `useMemo` က correctness guarantee ပေးသလား။
2. `useCallback` သုံးတိုင်း child render ရပ်သလား။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 47 review._

## Common Mistakes

- Values/functions အားလုံးကို default memoize လုပ်ခြင်း
- Dependency လွတ်ပြီး stale closure ဖြစ်ခြင်း
- Measurement မရှိဘဲ complexity ထည့်ခြင်း

## Completion Criteria

- [ ] Core concepts ကို student က ကိုယ်ပိုင်စကားဖြင့်ရှင်းပြနိုင်သည်။
- [ ] Planned implementation ကို hint-first workflow နဲ့ student ကရေးပြီး required behavior အောင်မြင်သည်။
- [ ] Guided exercises, mini challenge နဲ့ quiz/review ပြီးသည်။
- [ ] Existing working functionality မပျက်ပါ။
- [ ] `npm run verify` အောင်မြင်သည်။
- [ ] Actual learning, problems နဲ့ repository notes ကို update လုပ်သည်။
- [ ] Git checkpoint ပြုလုပ်သည်။

## What I Actually Learned

_To be completed after finishing Day 47._

## Problems / Mistakes I Made

_To be completed after attempting Day 47; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 47 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Follow the **Complete Current Day** protocol in `../PROTOCOLS.md`.

## Next Day Context

Day 48 မှာ `useTransition` နဲ့ `useDeferredValue` ဖြင့် urgent/non-urgent updates ကိုခွဲမည်။
