# Day 43 — Reusable UI / Design System Architecture

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Visual consistency နဲ့ accessible behavior ကို shared UI primitives ထဲထားပြီး flexible သော်လည်း controlled Component APIs တည်ဆောက်ရန်။

## Previous Day Review

Day 42 — Responsive UI Architecture မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

## Prerequisites

- Component Responsibility, TypeScript Props, accessibility နဲ့ responsive design
- `PROGRESS.md` ရှိ previous-day completion evidence
- Lesson မစမီ relevant source files ကို inspect လုပ်ထားခြင်း

## Learning Objectives

- Core concepts များကို Burmese ဖြင့် ကိုယ်ပိုင်စကားနဲ့ရှင်းပြနိုင်ရန်
- Current repository context မှာ ဘယ် problem ကိုဖြေရှင်းပေးသလဲဆုံးဖြတ်နိုင်ရန်
- Small guided implementation ကို student ကိုယ်တိုင်ရေးနိုင်ရန်
- Common mistakes ကိုသိပြီး behavior/build/lint ဖြင့်အတည်ပြုနိုင်ရန်

## Core Concepts

- `Button`
- `Input`
- `Modal`
- `Card`
- `Table`
- Variants and composition
- Component APIs
- Design tokens အခြေခံ

## Mental Model

Design System Component က style wrapper သာမဟုတ်ဘဲ semantics, states နဲ့ allowed variants ပါသော reusable contract ဖြစ်တယ်။ App-specific business logic ကို primitive ထဲမထည့်ဘူး။

## Implementation Tasks

1. Repeated UI patterns ကို evidence ဖြင့်inventory လုပ်ရန်
2. Primitive တစ်ခုကို minimal typed variants နဲ့တည်ဆောက်ရန်
3. Accessibility နဲ့ responsive behavior ကို API ထဲထည့်စဉ်းစားရန်
4. Existing screens တွင် small adoption လုပ်ပြီး duplication လျှော့မလျှော့စစ်ရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Button variants နဲ့ native button Props composition design လုပ်ရန်
- Modal ownership, focus နဲ့ close API ကိုdiagram ဆွဲရန်

## Mini Challenges

Boolean Props အများကြီးမသုံးဘဲ invalid visual/behavior combinations လျှော့သော API ရေးရန်။

## Quiz / Review Questions

1. Reusable Component နဲ့ business-specific Component ဘယ်လိုခွဲမလဲ။
2. Variant API တိုးလွန်းခြင်းက maintenance ကိုဘယ်လိုထိခိုက်သလဲ။
3. ဒီနေ့ရွေးထားသော design ကို simpler alternative တစ်ခုနဲ့နှိုင်းပြီး tradeoff ကိုရှင်းပြပါ။

**Student answers:** _To be completed during Day 43 review._

## Common Mistakes

- Usage တစ်ခုသာရှိသေးသည့် UI ကို premature abstraction လုပ်ခြင်း
- Native element Props/semantics ကိုပိတ်ပင်ခြင်း
- Business rules ကို shared primitive ထဲထည့်ခြင်း

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

_To be completed after finishing Day 43._

## Problems / Mistakes I Made

_To be completed after attempting Day 43; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 43 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Completion criteria ပြည့်ပြီးမှ English commit message သုံးပြီး checkpoint လုပ်ရန်။

```bash
npm run build
npm run lint
git commit -m "Day 43: Complete Reusable UI / Design System Architecture"
```

Optional tag: `day-43-complete`. Tag/commit ကို lesson မပြီးမီ မဖန်တီးရ။

## Next Day Context

Day 44 မှာ loading, skeleton, empty, error, retry နဲ့ disabled states ကို production UX အဖြစ်စုစည်းမည်။
