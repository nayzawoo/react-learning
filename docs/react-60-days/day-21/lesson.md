# Day 21 — Client State vs Server State

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

UI-local data နဲ့ remote server-owned data တို့၏ lifecycle, ownership နဲ့ synchronization needs ကွာခြားချက်ကိုသိပြီး သင့်လျော်သော tool ရွေးရန်။

## Previous Day Review

Day 20 — Mini Project #2 Start — Task Manager မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Task Manager foundation, API service layer နဲ့ async UI states
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- Client State — UI ကပိုင်သော local/session values
- Server State — remote source ကပိုင်ပြီး cache/sync လိုသော data
- Ownership, freshness နဲ့ synchronization
- Derived UI State
- Manual fetching limitations

## Mental Model

Server State ဟာ fetch ပြီး local State ထဲထည့်လိုက်တာနဲ့ client-owned ဖြစ်သွားတာမဟုတ်ဘူး။ Server က authoritative source ဖြစ်နေဆဲဖြစ်ပြီး cache freshness, refetch နဲ့ concurrent changes ကိုစဉ်းစားရတယ်။

## Implementation Tasks

1. Task Manager values တစ်ခုချင်းကို Client State, Server State သို့ Derived Value အဖြစ်ခွဲရန်
2. Manual fetch State flow ရဲ့ duplication နဲ့ synchronization burden ကိုစာရင်းထုတ်ရန်
3. Query library လိုအပ်မည့် use cases ကို evidence ဖြင့်ရွေးရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Search input, modal open state, task list နဲ့ authenticated user ကို ownership အလိုက်ခွဲရန်
- Same server data ကို Components နှစ်ခုကလိုသည့် scenario ကိုရေးရန်

## Mini Challenges

Server result ကို local edit draft အဖြစ်စတင်ချိန်မှာ ownership boundary ဘယ်နေရာပြောင်းသလဲရှင်းပြရန်။

## Quiz / Review Questions

1. Server State နဲ့ Client State ကို ခွဲရသည့်အဓိကအချက်က storage location သာလား။
2. Derived filter result ကို server state tool ထဲသိမ်းသင့်သလား။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 21 review._

## Common Mistakes

- Fetched data အားလုံးကို global Client State လို့ယူခြင်း
- UI-only State ကို server cache ထဲထည့်ခြင်း
- Remote freshness နဲ့ error/retry behavior ကိုမစဉ်းစားခြင်း

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

_To be completed after finishing Day 21._

## Problems / Mistakes I Made

_To be completed after attempting Day 21; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 21 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Completion criteria ပြည့်ပြီးမှ English commit message သုံးပြီး checkpoint လုပ်ရန်။

```bash
npm run build
npm run lint
git commit -m "Day 21: Complete Client State vs Server State"
```

Optional tag: `day-21-complete`. Tag/commit ကို lesson မပြီးမီ မဖန်တီးရ။

## Next Day Context

Day 22 မှာ TanStack Query `useQuery` ဖြင့် server State read/cache lifecycle ကိုစီမံမည်။
