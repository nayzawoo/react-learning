# Day 50 — Architecture Review + Capstone Design

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

လေ့လာထားသော patterns ကို architecture decision များအဖြစ်စုစည်းပြီး Days 50–60 Production Capstone အတွက် scope, risks နဲ့ delivery plan တည်ဆောက်ရန်။

## Previous Day Review

Day 49 — Modern React Patterns မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Task Manager architecture, testing, accessibility, performance နဲ့ production UX
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- Architecture review
- Capstone problem statement
- Functional/non-functional requirements
- Domain and data flow
- Risk-driven planning
- Vertical slices
- Architecture Decision Records

## Mental Model

Capstone က technology checklist ပြသရန်သာမဟုတ်ဘဲ real problem ကို maintainable, testable နဲ့ deployable solution ဖြင့်ဖြေရှင်းရမယ်။ Architecture decision တိုင်းမှာ context နဲ့ tradeoff ရှိရမယ်။

## Implementation Tasks

1. Capstone problem, target user နဲ့ success criteria ရေးရန်
2. CRUD, auth, routing, API, server State နဲ့ form flows scope သတ်မှတ်ရန်
3. Accessibility, responsive, testing, failure နဲ့ performance requirements ထည့်ရန်
4. Small vertical slices နဲ့ risks/milestones ခွဲရန်
5. Next.js သို့ရွှေ့မည့် repository structure ကိုအဲဒီနေ့ context ဖြင့်ဆုံးဖြတ်ရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- System context/data flow diagram ဆွဲရန်
- Architecture choices သုံးခုအတွက် alternatives/tradeoffs ရေးရန်

## Mini Challenges

Days 51–60 အတွင်းအပြီးသတ်နိုင်ရန် must-have နဲ့ nice-to-have scope ကိုပြတ်သားစွာခွဲရန်။

## Quiz / Review Questions

1. Capstone ရဲ့ primary user problem ကဘာလဲ။
2. Architecture decision တစ်ခုကို reversible/irreversible အဖြစ်ဘယ်လိုခွဲမလဲ။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 50 review._

## Common Mistakes

- Technology များကို problem မရှိဘဲအတင်းထည့်ခြင်း
- Scope ကြီးလွန်းပြီး end-to-end slice မပြီးခြင်း
- Non-functional requirements ကိုနောက်ဆုံးနေ့မှစဉ်းစားခြင်း

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

_To be completed after finishing Day 50._

## Problems / Mistakes I Made

_To be completed after attempting Day 50; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 50 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Completion criteria ပြည့်ပြီးမှ English commit message သုံးပြီး checkpoint လုပ်ရန်။

```bash
npm run build
npm run lint
git commit -m "Day 50: Complete Architecture Review + Capstone Design"
```

Optional tag: `day-50-complete`. Tag/commit ကို lesson မပြီးမီ မဖန်တီးရ။

## Next Day Context

Day 51 မှာ Capstone အတွက် Next.js App Router fundamentals ကိုစတင်မည်။
