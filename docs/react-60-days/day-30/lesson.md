# Day 30 — Checkpoint #2 — Task Manager v1

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Task Manager v1 ၏ routing, forms, API, Authentication, Query နဲ့ failure flows ကို acceptance criteria အလိုက်စစ်ပြီး stable checkpoint ဖန်တီးရန်။

## Previous Day Review

Day 29 — Lazy Loading + Suspense မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Days 20–29 Task Manager implementation နဲ့ documented user flows
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- End-to-end feature audit
- Acceptance criteria
- API/cache consistency
- Authentication/authorization UX
- Failure and loading states
- Build/lint checkpoint

## Mental Model

Checkpoint က feature count မဟုတ်ဘဲ core user journeys ကို reliable, explainable နဲ့ maintainable ဖြစ်မဖြစ်စစ်တာဖြစ်တယ်။

## Implementation Tasks

1. Task list/create/update/delete flows ကိုအစမှအဆုံးစစ်ရန်
2. Auth, protected navigation နဲ့ 401/403/422 behaviors စစ်ရန်
3. Cache invalidation, query states နဲ့ lazy routes regression test လုပ်ရန်
4. Scope မတိုးဘဲ blocking issues များပြင်ရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Critical user journey checklist ကို repository-specific အဖြစ်ရေးရန်
- Known limitation တစ်ခုကို evidence နဲ့ document လုပ်ရန်

## Mini Challenges

New developer တစ်ယောက် codebase data flow ကို ၅ မိနစ်အတွင်းနားလည်နိုင်မည့် architecture summary ရေးရန်။

## Quiz / Review Questions

1. Task Manager v1 ရဲ့ authoritative data sources ဘယ်မှာရှိသလဲ။
2. Checkpoint ကို release-ready လို့ခေါ်ရန် ဘယ် evidence တွေလိုသလဲ။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 30 review._

## Common Mistakes

- Happy path သာစစ်ခြင်း
- Known failures ကိုမမှတ်တမ်းတင်ခြင်း
- Checkpoint နေ့မှာ feature အသစ်များထပ်ထည့်ခြင်း

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

_To be completed after finishing Day 30._

## Problems / Mistakes I Made

_To be completed after attempting Day 30; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 30 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Completion criteria ပြည့်ပြီးမှ English commit message သုံးပြီး checkpoint လုပ်ရန်။

```bash
npm run build
npm run lint
git commit -m "Day 30: Complete Checkpoint #2 - Task Manager v1"
```

Optional tag: `day-30-complete`. Tag/commit ကို lesson မပြီးမီ မဖန်တီးရ။

## Next Day Context

Day 31 မှာ application တစ်ခုလုံးအတွက် State Architecture ကိုပြန်လည်သတ်မှတ်မည်။
