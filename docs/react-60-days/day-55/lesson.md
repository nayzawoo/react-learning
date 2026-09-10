# Day 55 — Dynamic Routes + Search Params

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Dynamic route segments နဲ့ search params ကို server/client boundaries အတွင်းမှန်ကန်စွာဖတ်ပြီး resource identity နဲ့ shareable view State ကိုဖော်ပြရန်။

## Previous Day Review

Day 54 — Next.js Data Fetching မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- App Router route hierarchy, data fetching နဲ့ advanced routing concepts
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- Dynamic segments
- Route `params`
- Search params
- Resource lookup
- Not-found handling
- URL-driven filters/pagination

## Mental Model

Dynamic segment က resource identity ကို URL ထဲသယ်ပြီး search params က optional view configuration ကိုသယ်တယ်။ URL input လည်း untrusted data ဖြစ်လို့ parse/validate လုပ်ရမယ်။

## Implementation Tasks

1. Capstone detail route တစ်ခုအတွက် dynamic segment ဖန်တီးရန်
2. Param ကိုvalidate ပြီး resource fetch နဲ့ not-found behavior ချိတ်ရန်
3. Filter/page/search value ကို search params ဖြင့်ဖော်ပြရန်
4. Direct/shareable URL behavior စစ်ရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Valid, missing နဲ့ malformed param cases စမ်းရန်
- Default search params နဲ့ canonical URL behavior ရေးရန်

## Mini Challenges

Multiple search params ကို typed parser တစ်ခုဖြင့်safe defaults ပြန်စေမည့် design လုပ်ရန်။

## Quiz / Review Questions

1. Dynamic route param က string ဖြစ်လာချိန် domain ID အဖြစ်ဘယ်လိုယုံကြည်ရမလဲ။
2. Search State ကို URL ထဲထားခြင်းရဲ့ shareability benefit နဲ့ complexity ကဘာလဲ။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 55 review._

## Common Mistakes

- Params/search params ကို validation မရှိဘဲသုံးခြင်း
- Not-found နဲ့ server failure ကိုတူညီစွာပြခြင်း
- URL နဲ့ local State နှစ်နေရာမကိုက်အောင်ထားခြင်း

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

_To be completed after finishing Day 55._

## Problems / Mistakes I Made

_To be completed after attempting Day 55; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 55 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Completion criteria ပြည့်ပြီးမှ English commit message သုံးပြီး checkpoint လုပ်ရန်။

```bash
npm run build
npm run lint
git commit -m "Day 55: Complete Dynamic Routes + Search Params"
```

Optional tag: `day-55-complete`. Tag/commit ကို lesson မပြီးမီ မဖန်တီးရ။

## Next Day Context

Day 56 မှာ Forms, Mutations နဲ့ Route Handlers ဖြင့် Capstone write flows တည်ဆောက်မည်။
