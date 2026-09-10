# Day 33 — Redux Toolkit

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Redux Toolkit ၏ recommended APIs ဖြင့် typed store/slice တည်ဆောက်ပြီး React Redux hooks နဲ့ UI ကိုချိတ်ရန်။

## Previous Day Review

Day 32 — Redux Mental Model မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Redux mental model နဲ့ TypeScript action/state types
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- `configureStore`
- `createSlice`
- Immer-powered reducer syntax
- `Provider`
- Typed `useDispatch` / `useSelector` hooks
- Slice actions နဲ့ selectors

## Mental Model

Redux Toolkit က Redux principles ကိုမဖျောက်ဘဲ boilerplate နဲ့ immutable update risk ကိုလျှော့ပေးတယ်။ Slice က cohesive domain State နဲ့ transition logic boundary ဖြစ်တယ်။

## Implementation Tasks

1. Lesson-day Redux Toolkit/React Redux versions ကိုစစ်ရန်
2. Minimal store နဲ့ Provider boundary တည်ဆောက်ရန်
3. Justified client State တစ်ခုအတွက် slice ဖန်တီးရန်
4. Typed hooks နဲ့ selector-based rendering ချိတ်ရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Slice reducer action နှစ်မျိုးရေးပြီး DevTools flow စစ်ရန်
- Direct State selection နဲ့ memoized/derived selector concept နှိုင်းရန်

## Mini Challenges

Server task list ကို duplicate store State မလုပ်ဘဲ Redux candidate တစ်ခုသာရွေးရန်။

## Quiz / Review Questions

1. `createSlice` reducer code ထဲ mutation လိုရေးနိုင်ရသည့်အကြောင်းကဘာလဲ။
2. Typed hooks ကို app-level ထုတ်ထားခြင်းကဘာကူညီသလဲ။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 33 review._

## Common Mistakes

- Server State ကို TanStack Query နဲ့ Redux နှစ်နေရာသိမ်းခြင်း
- Store type မ derive လုပ်ဘဲ handwritten ထပ်ရေးခြင်း
- State အားလုံးကို slice တစ်ခုထဲထည့်ခြင်း

## Completion Criteria

- [ ] Core concepts ကို student က ကိုယ်ပိုင်စကားဖြင့်ရှင်းပြနိုင်သည်။
- [ ] Planned implementation ကို hint-first workflow နဲ့ student ကရေးပြီး required behavior အောင်မြင်သည်။
- [ ] Guided exercises, mini challenge နဲ့ quiz/review ပြီးသည်။
- [ ] Existing working functionality မပျက်ပါ။
- [ ] `npm run verify` အောင်မြင်သည်။
- [ ] Actual learning, problems နဲ့ repository notes ကို update လုပ်သည်။
- [ ] Git checkpoint ပြုလုပ်သည်။

## What I Actually Learned

_To be completed after finishing Day 33._

## Problems / Mistakes I Made

_To be completed after attempting Day 33; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 33 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Follow the **Complete Current Day** protocol in `../PROTOCOLS.md`.

## Next Day Context

Day 34 မှာ selectors, normalized data, async coordination နဲ့ slice design ကိုတိုးချဲ့မည်။
