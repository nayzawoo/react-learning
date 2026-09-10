# Day 35 — RTK Query vs TanStack Query

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Server State tools နှစ်ခု၏ integration model, cache APIs နဲ့ ecosystem fit ကိုနှိုင်းပြီး project တစ်ခုအတွက် rationale ပါသောရွေးချယ်မှုလုပ်ရန်။

## Previous Day Review

Day 34 — Advanced Redux Toolkit မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- TanStack Query, Redux Toolkit နဲ့ server State concepts
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- RTK Query architecture
- TanStack Query architecture
- Query/mutation cache patterns
- Redux integration
- Invalidation models
- Migration/adoption cost

## Mental Model

Tool comparison ကို feature checklist တစ်ခုတည်းနဲ့မလုပ်ဘဲ existing architecture, team familiarity, cache needs နဲ့ operational cost အပေါ်ဆုံးဖြတ်မယ်။ Project တစ်ခုမှာ redundant server caches နှစ်ခုမထားသင့်ဘူး။

## Implementation Tasks

1. Lesson-day official APIs/versions နှစ်ခုစစ်ရန်
2. Task Manager needs matrix ရေးရန်
3. Existing code integration cost နဲ့ cache model နှိုင်းရန်
4. ရွေးချယ်မှုနှင့် non-choice reason ကို architecture note အဖြစ်ရေးရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Same task-list read/mutation flow ကို tools နှစ်ခုဖြင့် conceptual mapping လုပ်ရန်
- Team/project constraints ပြောင်းလျှင် decision ဘယ်လိုပြောင်းသလဲစမ်းရန်

## Mini Challenges

Marketing claims မသုံးဘဲ measurable criteria ဖြင့် recommendation ရေးရန်။

## Quiz / Review Questions

1. RTK Query သုံးရန် Redux store မရှိလျှင် adoption cost ဘာဖြစ်နိုင်သလဲ။
2. Tools နှစ်ခုကိုတစ်ပြိုင်တည်းသုံးခြင်းက ဘယ် cache consistency problem ဖန်တီးနိုင်သလဲ။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 35 review._

## Common Mistakes

- အသုံးများမှုတစ်ခုတည်းအပေါ် tool ရွေးခြင်း
- Current investment/migration cost မတွက်ခြင်း
- Same endpoint data ကို caches နှစ်ခုထဲသိမ်းခြင်း

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

_To be completed after finishing Day 35._

## Problems / Mistakes I Made

_To be completed after attempting Day 35; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 35 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Completion criteria ပြည့်ပြီးမှ English commit message သုံးပြီး checkpoint လုပ်ရန်။

```bash
npm run build
npm run lint
git commit -m "Day 35: Complete RTK Query vs TanStack Query"
```

Optional tag: `day-35-complete`. Tag/commit ကို lesson မပြီးမီ မဖန်တီးရ။

## Next Day Context

Day 36 မှာ local, lifted, Context, reducer, Redux နဲ့ server State tools ရွေးချယ်မှုကို framework တစ်ခုအဖြစ်စုစည်းမည်။
