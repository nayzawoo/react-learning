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

- Local State and lifted State
- Context + `useReducer`
- Zustand
- Redux Toolkit
- TanStack Query and RTK Query
- URL, Form, Persisted, and Derived State boundaries
- Decision criteria, dependency cost, and migration/removal tradeoffs

## Mental Model

State management က library contest မဟုတ်ဘူး။ Ownership, consumers, transition complexity, persistence နဲ့ remote authority ကိုအရင်သတ်မှတ်ပြီး smallest sufficient tool ကိုရွေးမယ်။

## Implementation Tasks

1. Task Manager State inventory ကို category ခွဲပြီး decision matrix ဖြင့်ပြန်စစ်ရန်
2. Ownership, scope, lifetime, transition complexity, shareability, persistence, and server synchronization အရဆုံးဖြတ်ရန်
3. `useState`, `useReducer`, Context, Zustand, Redux Toolkit, TanStack Query, and RTK Query alternatives/costs နှိုင်းရန်
4. Over-global or duplicated State တစ်ခုကို simpler authoritative boundary သို့ပြန်ထားရန်
5. ရွေးချယ်မှုတစ်ခုစီအတွက် reason, dependency cost, and exit/migration condition ရေးရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Same feature ကို local/lifted/Context/Redux options ဖြင့်နှိုင်းရန်
- Server State tool မသုံးသင့်သော UI-only examples ရွေးရန်

## Mini Challenges

State တစ်ခု၏ requirements တိုးလာချိန် ဘယ် signal မှာ mechanism ပြောင်းမလဲရေးရန်။

## Quiz / Review Questions

1. Context, Zustand, and Redux Toolkit တို့၏ propagation, store, and convention responsibilities ဘယ်လိုကွာသလဲ။
2. Server State ကို client store ထဲထပ်ကူးလျှင် ownership/freshness ဘာပြဿနာဖြစ်နိုင်သလဲ။
3. Smallest sufficient tool နဲ့ long-term team convention ကြားဘယ်လိုညှိမလဲ။
4. Tool တစ်ခုရွေးရာမှာ exit/migration cost ကိုအစကတည်းကဘာကြောင့်ရေးသင့်သလဲ။

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
- [ ] `npm run verify` အောင်မြင်သည်။
- [ ] Actual learning, problems နဲ့ repository notes ကို update လုပ်သည်။
- [ ] Git checkpoint ပြုလုပ်သည်။

## What I Actually Learned

_To be completed after finishing Day 36._

## Problems / Mistakes I Made

_To be completed after attempting Day 36; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 36 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Follow the **Complete Current Day** protocol in `../PROTOCOLS.md`.

## Next Day Context

Day 37 မှာ Vitest dependency ကို professional evaluation/install workflow ဖြင့်ထည့်ပြီး automated testing fundamentals စတင်မည်။
