# Day 24 — Query UX

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Pagination, searching နဲ့ filtering က query identity/cache behavior အပေါ်သက်ရောက်ပုံကိုနားလည်ပြီး smooth loading/freshness UX တည်ဆောက်ရန်။

## Previous Day Review

Day 23 — TanStack Query Mutations မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- TanStack Query reads/mutations, route/search params နဲ့ combined filtering
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- Pagination
- Server-side searching နဲ့ filtering
- Parameterized query keys
- Stale vs fresh data
- Background refetch indicators
- Previous/placeholder data UX

## Mental Model

Filter/page parameter ပြောင်းခြင်းက server dataset တစ်ခု၏ view identity ပြောင်းခြင်းဖြစ်တယ်။ UI က initial empty load နဲ့ cached-data background refresh ကိုမတူသလိုပြသင့်တယ်။

## Implementation Tasks

1. Page, query နဲ့ filter parameters ကို URL/State ownership အတိုင်းသတ်မှတ်ရန်
2. Parameters ပါသည့် stable query key တည်ဆောက်ရန်
3. Pagination controls နဲ့ search/filter requests ချိတ်ရန်
4. Initial loading နဲ့ background fetching UI ခွဲရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Parameter combinations နဲ့ expected cache entries ဇယားရေးရန်
- Rapid search changes မှ request/cache behavior စစ်ရန်

## Mini Challenges

Blank screen မဖြစ်ဘဲ page transition UX တိုးတက်စေမည့် data retention policy ရွေးရန်။

## Quiz / Review Questions

1. Stale data ဆိုတာ incorrect data လို့ဆိုလိုသလား။
2. Search/filter parameter တစ်ခုကို query key မှလွတ်လျှင် ဘာဖြစ်နိုင်သလဲ။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 24 review._

## Common Mistakes

- Client filter နဲ့ server filter ownership ရောခြင်း
- Page/filter change တိုင်း cached data အားလုံးဖျက်ခြင်း
- Background refetch ကို full-page loading အဖြစ်ပြခြင်း

## Completion Criteria

- [ ] Core concepts ကို student က ကိုယ်ပိုင်စကားဖြင့်ရှင်းပြနိုင်သည်။
- [ ] Planned implementation ကို hint-first workflow နဲ့ student ကရေးပြီး required behavior အောင်မြင်သည်။
- [ ] Guided exercises, mini challenge နဲ့ quiz/review ပြီးသည်။
- [ ] Existing working functionality မပျက်ပါ။
- [ ] `npm run verify` အောင်မြင်သည်။
- [ ] Actual learning, problems နဲ့ repository notes ကို update လုပ်သည်။
- [ ] Git checkpoint ပြုလုပ်သည်။

## What I Actually Learned

_To be completed after finishing Day 24._

## Problems / Mistakes I Made

_To be completed after attempting Day 24; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 24 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Follow the **Complete Current Day** protocol in `../PROTOCOLS.md`.

## Next Day Context

Day 25 မှာ sessions, cookies, tokens နဲ့ frontend Authentication responsibility ကိုလေ့လာမည်။
