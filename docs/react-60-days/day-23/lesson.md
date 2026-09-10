# Day 23 — TanStack Query Mutations

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Server data create/update/delete commands ကို `useMutation` ဖြင့်စီမံပြီး success နောက် cache ကိုမှန်ကန်စွာ refresh/update လုပ်ရန်။

## Previous Day Review

Day 22 — TanStack Query — useQuery မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Day 22 query keys/cache နဲ့ Task API services
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- `useMutation`
- Mutation function နဲ့ variables
- Pending/error/success mutation states
- Query invalidation
- Create, update နဲ့ delete flows
- Cache consistency

## Mental Model

Query က data ကိုဖတ်တယ်; Mutation က server state ကိုပြောင်းတယ်။ Mutation success ဖြစ်တာနဲ့ UI cache မှန်ပြီလို့အလိုအလျောက်မယူဆဘဲ affected query identities ကို refresh သို့မဟုတ် update လုပ်ရတယ်။

## Implementation Tasks

1. Create/update/delete service functions ကို separate mutations ဖြင့်ချိတ်ရန်
2. Mutation pending/error UI နဲ့ duplicate-submit protection ထည့်ရန်
3. Affected task queries ကို targeted invalidation လုပ်ရန်
4. Success နဲ့ validation error flows စစ်ရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Mutation variables နဲ့ response data types ခွဲရေးရန်
- Broad invalidation နဲ့ precise invalidation tradeoff နှိုင်းရန်

## Mini Challenges

Create, update နဲ့ delete တစ်ခုချင်းအတွက် affected query keys matrix ရေးရန်။

## Quiz / Review Questions

1. Mutation နဲ့ Query ရဲ့ responsibility ဘာကွာသလဲ။
2. Invalidation က cached data ကိုချက်ချင်း delete လုပ်တာနဲ့တူသလား။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 23 review._

## Common Mistakes

- Mutation success နောက် stale list ကိုမဖြေရှင်းခြင်း
- Pending အချိန် submit button မကာကွယ်ခြင်း
- Unrelated queries အားလုံးကို broad invalidation လုပ်ခြင်း

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

_To be completed after finishing Day 23._

## Problems / Mistakes I Made

_To be completed after attempting Day 23; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 23 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Completion criteria ပြည့်ပြီးမှ English commit message သုံးပြီး checkpoint လုပ်ရန်။

```bash
npm run build
npm run lint
git commit -m "Day 23: Complete TanStack Query Mutations"
```

Optional tag: `day-23-complete`. Tag/commit ကို lesson မပြီးမီ မဖန်တီးရ။

## Next Day Context

Day 24 မှာ pagination, searching, filtering နဲ့ stale/fresh data အတွက် Query UX ကိုတိုးချဲ့မည်။
