# Day 29 — Lazy Loading + Suspense

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Initial JavaScript cost ကိုလျှော့ရန် route/Component code splitting လုပ်ပြီး Suspense fallback ကို UX အလိုက်နေရာချရန်။

## Previous Day Review

Day 28 — Error Boundaries + Failure UX မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Routing, async mental model, boundaries နဲ့ build output အခြေခံ
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- Dynamic `import()`
- `lazy`
- `Suspense`
- Code splitting
- Fallback boundaries
- Loading/error distinction

## Mental Model

Lazy Loading က data loading မဟုတ်ဘဲ code chunk ကိုလိုချိန်မှယူခြင်းဖြစ်တယ်။ Suspense boundary placement က ဘယ် UI အပိုင်းတည်ငြိမ်ပြီး ဘယ်အပိုင်း fallback ပြမလဲဆုံးဖြတ်တယ်။

## Implementation Tasks

1. Build output/bundle candidates ကိုစစ်ရန်
2. Route-level Component တစ်ခုကို lazy load လုပ်ရန်
3. Layout မပျက်သော Suspense fallback ထည့်ရန်
4. Chunk load failure နဲ့ normal loading UX စစ်ရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Static import နဲ့ dynamic import build output နှိုင်းရန်
- Boundary ကို root/route နှစ်နေရာထားသော UX ကိုနှိုင်းရန်

## Mini Challenges

Frequently used tiny Component ကိုမခွဲဘဲ meaningful route boundary ကိုရွေးသည့်အကြောင်းပြရန်။

## Quiz / Review Questions

1. Lazy Loading က network data cache ကိုစီမံပေးသလား။
2. Suspense fallback ကို app root မှာပဲထားရင် ဘာ UX ဖြစ်နိုင်သလဲ။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 29 review._

## Common Mistakes

- Component တိုင်းကို lazy လုပ်ပြီး requests/chunks များစေခြင်း
- Fallback ကြောင့် layout shift ကြီးစေခြင်း
- Code loading error နဲ့ API error ကိုရောခြင်း

## Completion Criteria

- [ ] Core concepts ကို student က ကိုယ်ပိုင်စကားဖြင့်ရှင်းပြနိုင်သည်။
- [ ] Planned implementation ကို hint-first workflow နဲ့ student ကရေးပြီး required behavior အောင်မြင်သည်။
- [ ] Guided exercises, mini challenge နဲ့ quiz/review ပြီးသည်။
- [ ] Existing working functionality မပျက်ပါ။
- [ ] `npm run verify` အောင်မြင်သည်။
- [ ] Actual learning, problems နဲ့ repository notes ကို update လုပ်သည်။
- [ ] Git checkpoint ပြုလုပ်သည်။

## What I Actually Learned

_To be completed after finishing Day 29._

## Problems / Mistakes I Made

_To be completed after attempting Day 29; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 29 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Follow the **Complete Current Day** protocol in `../PROTOCOLS.md`.

## Next Day Context

Day 30 မှာ Task Manager v1 ကို Checkpoint #2 အဖြစ် end-to-end review လုပ်မည်။
