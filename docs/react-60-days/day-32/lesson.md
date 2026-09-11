# Day 32 — Zustand

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Native React State boundaries ကိုနားလည်ပြီးနောက် Zustand ရဲ့ external store/subscription model ကို justified Shared Client State အတွက်သုံးကာ Context, `useReducer`, Redux Toolkit, and server-State tools နဲ့ tradeoff နှိုင်းရန်။

## Previous Day Review

Day 31 — State Architecture မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Local/lifted State, Context, `useReducer`, immutable updates နဲ့ State Architecture
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- Why an external client store exists
- `create()` with typed State + actions
- Selectors, subscriptions, `Object.is`, and `useShallow` where relevant
- `persist` and devtools middleware
- Store organization and slices tradeoffs
- Global store vs scoped/provider-created store
- Vanilla stores and testing
- Hydration, SSR, and Next.js per-request-store caveats
- Zustand vs native React/Context/Redux/server-State tools

## Mental Model

Zustand store က React Component tree အပြင်ရှိ external observable State ဖြစ်ပြီး Component က selector ဖြင့်လိုသော slice ကို subscribe လုပ်သည်။ Provider boilerplate နည်းခြင်းက State ownership ပျောက်သွားပြီဟုမဆိုလိုပါ။ Module-global store သည် request-global ဖြစ်နိုင်သဖြင့် SSR/Next.js မှာ per-request scoping နဲ့ hydration ကိုစဉ်းစားရမည်။

## Implementation Tasks

1. Lesson-day Zustand stable API, maintenance, compatibility, peer dependencies, bundle/runtime cost, license, and migration guide ကိုစစ်ရန်
2. Task Manager မှ justified Shared Client State တစ်ခုနှင့် server cache, URL, local form/UI non-candidates ကိုခွဲရန်
3. Typed State + actions store ကို `create()` ဖြင့်တည်ဆောက်ပြီး Components ကို narrow selectors ဖြင့်ချိတ်ရန်
4. Selector output identity နဲ့ `useShallow` လို/မလို behavior ဖြင့်ဆုံးဖြတ်ရန်
5. Persistence လိုလျှင် versioning/runtime validation/hydration tradeoffs ဖြင့် bounded `persist` setup စမ်းရန်
6. Global vs scoped store, vanilla store testing, devtools, and removal cost ကိုreview လုပ်ရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Whole-store subscription နဲ့ narrow selector render behavior နှိုင်းရန်
- Context + `useReducer`, module-global Zustand, and scoped vanilla Zustand store lifecycle နှိုင်းရန်

## Mini Challenges

Zustand မလိုသော scenario တစ်ခုနှင့် module-global store မသင့်သော SSR scenario တစ်ခုကို evidence ဖြင့်ရှင်းပြရန်။

## Quiz / Review Questions

1. Local modal State ကို Zustand ထဲရွှေ့ခြင်းက ဘယ် ownership/maintenance cost တိုးစေမလဲ။
2. Selector က object အသစ်တစ်ခုအမြဲပြန်ပေးလျှင် Zustand v5 behavior နဲ့ renders အပေါ်ဘာသက်ရောက်နိုင်သလဲ။
3. `persist` data ကို TypeScript type တစ်ခုရှိရုံဖြင့်ယုံကြည်လို့မရသည့်အကြောင်းနှင့် migration strategy ကိုရှင်းပြပါ။
4. Next.js server မှ module-global store တစ်ခုကို requests အားလုံး share လုပ်ခြင်းက ဘာကြောင့်အန္တရာယ်ရှိသလဲ။

**Student answers:** _To be completed during Day 32 review._

## Common Mistakes

- Local/URL/Form/Server State အားလုံးကို global store ထဲထည့်ခြင်း
- Whole store ကို subscribe လုပ်ပြီး unnecessary renders ဖြစ်စေခြင်း
- Object/array selector output identity ကိုမစဉ်းစားခြင်း
- Persisted JSON ကို runtime validation/migration မရှိဘဲယုံကြည်ခြင်း
- SSR မှာ module-global singleton ကို request အားလုံး share လုပ်ခြင်း

## Completion Criteria

- [ ] Core concepts ကို student က ကိုယ်ပိုင်စကားဖြင့်ရှင်းပြနိုင်သည်။
- [ ] Planned implementation ကို hint-first workflow နဲ့ student ကရေးပြီး required behavior အောင်မြင်သည်။
- [ ] Guided exercises, mini challenge နဲ့ quiz/review ပြီးသည်။
- [ ] Existing working functionality မပျက်ပါ။
- [ ] `npm run verify` အောင်မြင်သည်။
- [ ] Actual learning, problems နဲ့ repository notes ကို update လုပ်သည်။
- [ ] Git checkpoint ပြုလုပ်သည်။

## What I Actually Learned

_To be completed after finishing Day 32._

## Problems / Mistakes I Made

_To be completed after attempting Day 32; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 32 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Follow the **Complete Current Day** protocol in `../PROTOCOLS.md`.

## Next Day Context

Day 33 မှာ Redux mental model နဲ့ current recommended Redux Toolkit APIs ကိုပေါင်းသင်ပြီး Zustand နှင့်နှိုင်းမည်။
