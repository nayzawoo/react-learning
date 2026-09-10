# Day 25 — Authentication Fundamentals

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Authentication mechanisms နဲ့ browser security boundaries ကိုနားလည်ပြီး frontend ရဲ့တာဝန်နှင့် server ရဲ့ authoritative responsibility ကိုခွဲရန်။

## Previous Day Review

Day 24 — Query UX မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- HTTP/API architecture, cookies/headers အခြေခံနဲ့ routing
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- Authentication vs authorization
- Sessions
- Cookies
- Tokens နဲ့ JWT concepts
- Credential storage tradeoffs
- Frontend responsibility

## Mental Model

Frontend က user experience ကိုညှိပေးနိုင်ပေမယ့် security boundary မဟုတ်ဘူး။ Identity နဲ့ authorization ကို server ကတိုင်း request မှာအတည်ပြုရတယ်။

## Implementation Tasks

1. Chosen backend auth contract ကို documentation ဖြင့်အတည်ပြုရန်
2. Login/logout/current-user flows ကိုsequence အဖြစ်ရေးရန်
3. Cookie/session သို့ token flow တစ်ခု၏ threat/tradeoff ကိုနှိုင်းရန်
4. Auth State နဲ့ server cache ownership သတ်မှတ်ရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Authentication နဲ့ authorization examples ခွဲရန်
- Expired credential ဖြစ်ချိန် frontend/server responses ကိုtrace လုပ်ရန်

## Mini Challenges

Sensitive token ကို unsafe browser storage ထဲမထားဘဲ auth flow design options နှိုင်းရန်။

## Quiz / Review Questions

1. JWT က encryption လား၊ ဘာကြောင့် payload ကို secret လို့မယူဆသင့်သလဲ။
2. Hidden button တစ်ခုက authorization security ပေးနိုင်သလား။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 25 review._

## Common Mistakes

- Frontend route guard ကို security control အပြည့်လို့ယူခြင်း
- Token/storage choice ကို threat model မရှိဘဲရွေးခြင်း
- 401 နဲ့ 403 ကိုတူညီစွာကိုင်တွယ်ခြင်း

## Completion Criteria

- [ ] Core concepts ကို student က ကိုယ်ပိုင်စကားဖြင့်ရှင်းပြနိုင်သည်။
- [ ] Planned implementation ကို hint-first workflow နဲ့ student ကရေးပြီး required behavior အောင်မြင်သည်။
- [ ] Guided exercises, mini challenge နဲ့ quiz/review ပြီးသည်။
- [ ] Existing working functionality မပျက်ပါ။
- [ ] `npm run verify` အောင်မြင်သည်။
- [ ] Actual learning, problems နဲ့ repository notes ကို update လုပ်သည်။
- [ ] Git checkpoint ပြုလုပ်သည်။

## What I Actually Learned

_To be completed after finishing Day 25._

## Problems / Mistakes I Made

_To be completed after attempting Day 25; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 25 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Follow the **Complete Current Day** protocol in `../PROTOCOLS.md`.

## Next Day Context

Day 26 မှာ authenticated navigation နဲ့ Protected Routes UX ကိုတည်ဆောက်မည်။
