# Day 57 — Production Next.js

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Metadata, SEO basics, runtime/build behavior, performance နဲ့ deployment configuration ကို Capstone release requirements နဲ့ချိတ်ရန်။

## Previous Day Review

Day 56 — Forms, Mutations & Route Handlers မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Working Next.js Capstone routes, data/mutation flows နဲ့ production build basics
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- Metadata APIs
- SEO basics
- Semantic page structure
- Images/fonts/performance
- Environment configuration
- Production build
- Deployment verification

## Mental Model

Production readiness က deploy command အောင်မြင်ရုံမဟုတ်ဘဲ crawlable/shareable metadata, correct runtime config, stable performance နဲ့ observable failure behavior ပါဝင်တယ်။

## Implementation Tasks

1. Current Next.js metadata/deployment docs ကိုverify လုပ်ရန်
2. Static/dynamic metadata ကိုkey routes အတွက်ထည့်ရန်
3. Images, fonts နဲ့ bundle/runtime behavior audit လုပ်ရန်
4. Production build နဲ့ deployed critical routes စစ်ရန်
5. Environment variables/secrets boundary အတည်ပြုရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Page title/description/share preview requirements ရေးရန်
- Development နဲ့ production behavior difference တစ်ခုကိုစမ်းရန်

## Mini Challenges

Search engines နဲ့ social previews နှစ်ခုစလုံးအတွက် dynamic detail page metadata design လုပ်ရန်။

## Quiz / Review Questions

1. Metadata က visual UI မပြောင်းသော်လည်း ဘာကြောင့်production requirement ဖြစ်သလဲ။
2. Public environment variable နဲ့ server-only secret ဘယ်လိုခွဲမလဲ။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 57 review._

## Common Mistakes

- Development server အောင်မြင်ရုံနဲ့ production build/deploy မစစ်ခြင်း
- Secrets ကိုclient bundle ထဲထည့်ခြင်း
- Every page အတွက်တူညီသော generic metadata ပဲသုံးခြင်း

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

_To be completed after finishing Day 57._

## Problems / Mistakes I Made

_To be completed after attempting Day 57; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 57 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Completion criteria ပြည့်ပြီးမှ English commit message သုံးပြီး checkpoint လုပ်ရန်။

```bash
npm run build
npm run lint
git commit -m "Day 57: Complete Production Next.js"
```

Optional tag: `day-57-complete`. Tag/commit ကို lesson မပြီးမီ မဖန်တီးရ။

## Next Day Context

Day 58 မှာ testing, accessibility, responsive UI, performance နဲ့ failure handling ကို Capstone Hardening အဖြစ်ပေါင်းစစ်မည်။
