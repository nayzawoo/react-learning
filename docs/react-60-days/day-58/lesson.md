# Day 58 — Capstone Hardening

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Capstone ရဲ့ core journeys ကို tests, accessibility, responsive UI, performance, failure handling နဲ့ production build evidence ဖြင့်ခိုင်မာစေရန်။

## Previous Day Review

Day 57 — Production Next.js မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Feature-complete Capstone နဲ့ Days 37–57 quality/production concepts
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- Risk-based testing
- Accessibility audit
- Responsive verification
- Performance profiling
- Failure handling
- Security/config review
- Production build

## Mental Model

Hardening က random polish မဟုတ်ဘဲ release risk အမြင့်ဆုံးနေရာများကို evidence ဖြင့်ရှာပြီး correctness, resilience နဲ့ usability တိုးတက်စေခြင်းဖြစ်တယ်။

## Implementation Tasks

1. Critical journeys နဲ့ failure modes risk matrix ရေးရန်
2. Automated tests gaps ဖြည့်ရန်
3. Keyboard/semantic/responsive audit လုပ်ရန်
4. Profiler/build output ဖြင့်performance bottlenecks စစ်ရန်
5. Network/server failures နဲ့ recovery UX စမ်းရန်
6. Production build အတည်ပြုရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Top release risks ငါးခုကို likelihood/impact ဖြင့်စီရန်
- Bug တစ်ခုအတွက် regression test အရင်ရေးပြီး fix လုပ်ရန်

## Mini Challenges

Cosmetic polish ထက် release-blocking correctness/accessibility issue ကိုရွေးပြီး reason ရေးရန်။

## Quiz / Review Questions

1. Hardening ပြီးကြောင်း ဘယ် measurable evidence နဲ့ပြမလဲ။
2. Test coverage percentage တစ်ခုတည်းက release confidence အတွက်လုံလောက်သလား။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 58 review._

## Common Mistakes

- Happy paths ပဲစစ်ခြင်း
- Lighthouse/coverage score ကို context မရှိဘဲtarget လုပ်ခြင်း
- Production build မစစ်ဘဲ deployment သို့သွားခြင်း

## Completion Criteria

- [ ] Core concepts ကို student က ကိုယ်ပိုင်စကားဖြင့်ရှင်းပြနိုင်သည်။
- [ ] Planned implementation ကို hint-first workflow နဲ့ student ကရေးပြီး required behavior အောင်မြင်သည်။
- [ ] Guided exercises, mini challenge နဲ့ quiz/review ပြီးသည်။
- [ ] Existing working functionality မပျက်ပါ။
- [ ] `npm run verify` အောင်မြင်သည်။
- [ ] Actual learning, problems နဲ့ repository notes ကို update လုပ်သည်။
- [ ] Git checkpoint ပြုလုပ်သည်။

## What I Actually Learned

_To be completed after finishing Day 58._

## Problems / Mistakes I Made

_To be completed after attempting Day 58; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 58 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Follow the **Complete Current Day** protocol in `../PROTOCOLS.md`.

## Next Day Context

Day 59 မှာ professional code review, React/TypeScript interview နဲ့ refactoring challenge ပြုလုပ်မည်။
