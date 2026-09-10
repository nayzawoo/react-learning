# Day 51 — Next.js App Router Introduction

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Next.js App Router ၏ file-system routing, rendering boundaries နဲ့ project conventions ကို current official version အတိုင်းနားလည်ရန်။

## Previous Day Review

Day 50 — Architecture Review + Capstone Design မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- React Router, React Component model, server/client architecture နဲ့ Capstone plan
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- Next.js App Router
- `app` directory conventions
- Route segments
- Pages and layouts အခြေခံ
- Server-first rendering model
- Framework setup and configuration

## Mental Model

Next.js က React Component model အပေါ် framework-level routing, rendering, data နဲ့ build conventions ပေးတယ်။ Vite SPA assumptions ကိုတစ်ပုံစံတည်းမကူးဘဲ server/client boundaries ကိုအသစ်စဉ်းစားမယ်။

## Implementation Tasks

1. Lesson-day Next.js/React compatibility နဲ့ official setup ကိုverify လုပ်ရန်
2. Capstone အတွက် minimal App Router structure တည်ဆောက်ရန်
3. Initial route/page ကိုrun လုပ်ပြီး server/client behavior ကြည့်ရန်
4. Existing project assets/code ပြောင်းရွှေ့မှုကိုscope အတိုင်းသာလုပ်ရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- App Router file tree မှ URL mapping ရေးရန်
- Vite entry point နဲ့ Next.js route entry responsibilities နှိုင်းရန်

## Mini Challenges

Legacy Pages Router tutorial ကိုမကူးဘဲ current App Router equivalent ကိုofficial docs ဖြင့်ရှာရန်။

## Quiz / Review Questions

1. App Router မှာ file-system routing ဆိုတာဘာလဲ။
2. Next.js သုံးခြင်းက Components အားလုံး Client Components ဖြစ်တယ်လို့ဆိုနိုင်သလား။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 51 review._

## Common Mistakes

- Installed version မစစ်ဘဲ outdated setup သုံးခြင်း
- Pages Router နဲ့ App Router APIs ရောခြင်း
- Client SPA mental model ကို server-first framework ထဲတိုက်ရိုက်ကူးခြင်း

## Completion Criteria

- [ ] Core concepts ကို student က ကိုယ်ပိုင်စကားဖြင့်ရှင်းပြနိုင်သည်။
- [ ] Planned implementation ကို hint-first workflow နဲ့ student ကရေးပြီး required behavior အောင်မြင်သည်။
- [ ] Guided exercises, mini challenge နဲ့ quiz/review ပြီးသည်။
- [ ] Existing working functionality မပျက်ပါ။
- [ ] `npm run verify` အောင်မြင်သည်။
- [ ] Actual learning, problems နဲ့ repository notes ကို update လုပ်သည်။
- [ ] Git checkpoint ပြုလုပ်သည်။

## What I Actually Learned

_To be completed after finishing Day 51._

## Problems / Mistakes I Made

_To be completed after attempting Day 51; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 51 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Follow the **Complete Current Day** protocol in `../PROTOCOLS.md`.

## Next Day Context

Day 52 မှာ Pages, Layouts နဲ့ Navigation ကို Capstone route hierarchy အဖြစ်တည်ဆောက်မည်။
