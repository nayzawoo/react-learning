# Day 52 — Pages, Layouts & Navigation

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

App Router route tree နဲ့ shared layouts ကိုအသုံးပြုပြီး persistent UI shell နဲ့ accessible navigation တည်ဆောက်ရန်။

## Previous Day Review

Day 51 — Next.js App Router Introduction မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Next.js App Router structure နဲ့ Capstone route map
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- `page` files
- `layout` files
- Nested layouts
- `Link` navigation
- Route groups where justified
- Navigation accessibility

## Mental Model

Layout က nested route subtree အတွက် shared UI/state boundary ဖြစ်တယ်။ Route structure ကို folder organization သာမဟုတ်ဘဲ URL semantics နဲ့ shared shell responsibility အဖြစ်စဉ်းစားမယ်။

## Implementation Tasks

1. Capstone routes ကိုpages/layouts hierarchy အဖြစ်mapping လုပ်ရန်
2. Shared navigation shell တည်ဆောက်ရန်
3. Nested layout တစ်ခုလို/မလိုဆုံးဖြတ်ရန်
4. Refresh, direct navigation နဲ့ active navigation UX စစ်ရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- URL tree နဲ့ layout nesting diagram ဆွဲရန်
- Repeated page wrapper ကို layout responsibility အဖြစ်ပြောင်းရန်

## Mini Challenges

URL မသက်ရောက်သော organization အတွက် route group သုံးရန်လို/မလိုကာကွယ်ပြောဆိုရန်။

## Quiz / Review Questions

1. Layout နဲ့ reusable wrapper Component ဘာကွာသလဲ။
2. Nested layout က ဘယ် route subtree ကိုသက်ရောက်သလဲ။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 52 review._

## Common Mistakes

- Page တိုင်းမှာ app shell ထပ်ရေးခြင်း
- Folder organization နဲ့ URL behavior ဆက်နွယ်မှုမစဉ်းစားခြင်း
- Navigation semantics/focus feedback မစစ်ခြင်း

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

_To be completed after finishing Day 52._

## Problems / Mistakes I Made

_To be completed after attempting Day 52; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 52 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Completion criteria ပြည့်ပြီးမှ English commit message သုံးပြီး checkpoint လုပ်ရန်။

```bash
npm run build
npm run lint
git commit -m "Day 52: Complete Pages, Layouts & Navigation"
```

Optional tag: `day-52-complete`. Tag/commit ကို lesson မပြီးမီ မဖန်တီးရ။

## Next Day Context

Day 53 မှာ Server Components နဲ့ Client Components responsibilities ကိုတိကျစွာခွဲမည်။
