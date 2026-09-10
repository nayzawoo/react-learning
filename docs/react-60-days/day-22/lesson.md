# Day 22 — TanStack Query — useQuery

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

TanStack Query ရဲ့ query key, query function နဲ့ cache status model ကိုသုံးပြီး server data reads ကို declaratively စီမံရန်။

## Previous Day Review

Day 21 — Client State vs Server State မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Client State vs Server State, API services နဲ့ Promise-based query functions
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- TanStack Query setup နဲ့ `QueryClientProvider`
- `useQuery`
- Query keys
- Query functions
- Pending/error/success states
- Cache, stale နဲ့ refetch အခြေခံ

## Mental Model

Query key က server data request ရဲ့ identity ဖြစ်တယ်။ Query function က Promise ပြန်ပေးပြီး TanStack Query က result lifecycle နဲ့ cache ကိုစီမံတယ်။

## Implementation Tasks

1. Lesson-day TanStack Query version/API ကိုစစ်ရန်
2. Query client boundary တည်ဆောက်ရန်
3. Task list service ကို typed `useQuery` ဖြင့်ချိတ်ရန်
4. Pending, error, empty နဲ့ success UI ကိုခွဲပြရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Query key ပြောင်းချိန် cache entry ပြောင်းပုံစမ်းရန်
- Same query ကို consumers နှစ်ခုကသုံးချိန် request/cache behavior စစ်ရန်

## Mini Challenges

Unstable object/parameter ကြောင့် query identity မရှုပ်စေမည့် key factory အခြေခံ design ရေးရန်။

## Quiz / Review Questions

1. Query key မှာ query function အသုံးပြုသော parameter များဘာကြောင့်ပါရမလဲ။
2. Cached data ရှိသည့်အခါ pending နဲ့ background fetching ကိုဘယ်လိုခွဲမလဲ။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 22 review._

## Common Mistakes

- Query key မှာ filter/ID dependency လွတ်ခြင်း
- Query function ထဲက error ကို swallow လုပ်ခြင်း
- Query data ကို local State ထပ်ကူးပြီး sync လုပ်ခြင်း

## Completion Criteria

- [ ] Core concepts ကို student က ကိုယ်ပိုင်စကားဖြင့်ရှင်းပြနိုင်သည်။
- [ ] Planned implementation ကို hint-first workflow နဲ့ student ကရေးပြီး required behavior အောင်မြင်သည်။
- [ ] Guided exercises, mini challenge နဲ့ quiz/review ပြီးသည်။
- [ ] Existing working functionality မပျက်ပါ။
- [ ] `npm run verify` အောင်မြင်သည်။
- [ ] Actual learning, problems နဲ့ repository notes ကို update လုပ်သည်။
- [ ] Git checkpoint ပြုလုပ်သည်။

## What I Actually Learned

_To be completed after finishing Day 22._

## Problems / Mistakes I Made

_To be completed after attempting Day 22; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 22 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Follow the **Complete Current Day** protocol in `../PROTOCOLS.md`.

## Next Day Context

Day 23 မှာ `useMutation`, invalidation နဲ့ create/update/delete operations ကိုထည့်မည်။
