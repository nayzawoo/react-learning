# Day 14 — React Router Fundamentals

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Single-page application အတွင်း URL ကို UI State တစ်မျိုးအဖြစ်အသုံးပြုပြီး declarative routing နဲ့ navigation တည်ဆောက်ရန်။

## Previous Day Review

Day 13 — Effects and Network Correctness မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Component composition, application entry point နဲ့ browser URL အခြေခံ
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- Router setup နဲ့ route configuration
- Routes နဲ့ route elements
- `Link` / `NavLink` navigation
- Programmatic navigation အခြေခံ
- URL as application state

## Mental Model

Route က “ဘယ် Component ပြမလဲ” ဆိုသည့် conditional rendering ကို URL နဲ့ချိတ်ထားတဲ့ declarative mapping ဖြစ်တယ်။ Browser history ကိုပျက်စေမည့် raw page reload မဟုတ်ဘဲ client routing သုံးမယ်။

## Implementation Tasks

1. Lesson-day installed React Router version ကိုစစ်ရန်
2. Task/Expense views အတွက် basic routes စီစဉ်ရန်
3. Navigation links နဲ့ route rendering တည်ဆောက်ရန်
4. Refresh/back/forward behavior စစ်ရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Path နှစ်ခုနဲ့ navigation links တည်ဆောက်ရန်
- `Link` နဲ့ plain anchor behavior ကိုနှိုင်းရန်

## Mini Challenges

Route ownership နဲ့ shared layout ownership ကို Component tree အဖြစ်ရေးရန်။

## Quiz / Review Questions

1. URL ကို State လို့စဉ်းစားနိုင်သည့်အကြောင်းကဘာလဲ။
2. Client-side `Link` နဲ့ full document navigation ဘာကွာသလဲ။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 14 review._

## Common Mistakes

- Router မတပ်ဘဲ routing hooks သုံးခြင်း
- Navigation အားလုံးကို local State condition ဖြင့်ရေးခြင်း
- Installed version မစစ်ဘဲ outdated API သုံးခြင်း

## Completion Criteria

- [ ] Core concepts ကို student က ကိုယ်ပိုင်စကားဖြင့်ရှင်းပြနိုင်သည်။
- [ ] Planned implementation ကို hint-first workflow နဲ့ student ကရေးပြီး required behavior အောင်မြင်သည်။
- [ ] Guided exercises, mini challenge နဲ့ quiz/review ပြီးသည်။
- [ ] Existing working functionality မပျက်ပါ။
- [ ] `npm run verify` အောင်မြင်သည်။
- [ ] Actual learning, problems နဲ့ repository notes ကို update လုပ်သည်။
- [ ] Git checkpoint ပြုလုပ်သည်။

## What I Actually Learned

_To be completed after finishing Day 14._

## Problems / Mistakes I Made

_To be completed after attempting Day 14; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 14 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Follow the **Complete Current Day** protocol in `../PROTOCOLS.md`.

## Next Day Context

Day 15 မှာ nested routes, route params, search params နဲ့ 404 handling ကိုတိုးချဲ့မည်။
