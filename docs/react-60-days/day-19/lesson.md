# Day 19 — API Architecture

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

HTTP details, environment configuration, DTOs နဲ့ domain models ကို boundary များခွဲပြီး maintainable API layer တည်ဆောက်ရန်။

## Previous Day Review

Day 18 — Zod + TypeScript Validation မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Fetch, async error handling, runtime validation နဲ့ TypeScript modeling
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- Service functions
- Shared API client
- Environment variables
- DTO/type boundaries
- Domain mapping
- Consistent error normalization

## Mental Model

Component က URL/header/parsing details မသိသင့်ဘူး။ API boundary က untrusted transport data ကို validate/map လုပ်ပြီး UI အတွက်ရှင်းလင်းသော operation contract ပေးသင့်တယ်။

## Implementation Tasks

1. Current network calls ရှိလျှင် responsibilities audit လုပ်ရန်
2. Base URL နဲ့ request behavior ပါသည့် minimal API client design လုပ်ရန်
3. Feature service operation များရေးရန်
4. DTO → domain mapping နဲ့ normalized error boundary တည်ဆောက်ရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Component-coupled fetch ကို service call အဖြစ်ခွဲရေးရန်
- Environment variable missing case ကို fail-fast လုပ်ရန်

## Mini Challenges

401, validation error, network error တို့ကို UI မှကိုင်တွယ်လွယ်သော error shape အဖြစ် design လုပ်ရန်။

## Quiz / Review Questions

1. API client နဲ့ feature service တာဝန်ဘာကွာသလဲ။
2. DTO ကို application domain type အဖြစ်တိုက်ရိုက်မသုံးသင့်သည့်အခြေအနေကဘာလဲ။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 19 review._

## Common Mistakes

- Secret value ကို client environment variable ထဲထည့်ခြင်း
- Component တိုင်းမှာ fetch headers/error logic ထပ်ရေးခြင်း
- Transport shape ပြောင်းလဲမှုကို UI အနှံ့ပျံ့စေခြင်း

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

_To be completed after finishing Day 19._

## Problems / Mistakes I Made

_To be completed after attempting Day 19; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 19 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Completion criteria ပြည့်ပြီးမှ English commit message သုံးပြီး checkpoint လုပ်ရန်။

```bash
npm run build
npm run lint
git commit -m "Day 19: Complete API Architecture"
```

Optional tag: `day-19-complete`. Tag/commit ကို lesson မပြီးမီ မဖန်တီးရ။

## Next Day Context

Day 20 မှာ Task Manager / Productivity App ကို Mini Project #2 အဖြစ်စတင်မည်။
