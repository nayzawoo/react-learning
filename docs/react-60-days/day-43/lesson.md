# Day 43 — Reusable UI, Headless Components & Data-Heavy UI

## Status

**Planned — Not started**

_ဒီ day ရောက်ချိန်မှာ current repository, installed versions နဲ့ student understanding ကိုပြန်စစ်ပြီးမှ lesson detail ကိုချဲ့ရန်။_

## Purpose

Visual consistency နဲ့ accessible behavior ကို shared UI primitives ထဲထားပြီး native UI, headless libraries, source-owned component ecosystems, icons, and data-table engines ကို need-based နှိုင်းကာ flexible သော်လည်း controlled Component APIs တည်ဆောက်ရန်။

## Previous Day Review

Day 42 — Responsive UI Architecture + CSS Strategy မှ mental model, implementation result နဲ့ မရှင်းသေးသောအချက်များကို review လုပ်ရန်။ Previous lesson file ကို လိုအပ်မှသာဖတ်ရန်။

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
- Native elements vs headless primitives
- shadcn/ui ecosystem vs Base UI, Radix, React Aria, and current alternatives
- Source-owned code vs package-owned APIs and migration cost
- Icon-library accessibility and bundle imports
- Semantic tables vs TanStack Table for justified data-grid behavior

## Mental Model

Design System Component က style wrapper သာမဟုတ်ဘဲ semantics, states နဲ့ allowed variants ပါသော reusable contract ဖြစ်တယ်။ App-specific business logic ကို primitive ထဲမထည့်ဘူး။

## Implementation Tasks

1. Current UI repetitions and difficult interactive widgets ကို evidence ဖြင့်inventory လုပ်ရန်
2. Native implementation လုံလောက်သည့် components နဲ့ headless primitive လိုသည့် components ခွဲရန်
3. Lesson-day shadcn/Base UI/Radix/React Aria alternatives ကို accessibility, maintenance, ownership, bundle, SSR, testing, and migration cost ဖြင့်နှိုင်းရန်
4. Justified subset အတွက် typed Props, composition, tokens, and variants design လုပ်ရန်
5. Icon လိုအပ်လျှင် Lucide/current alternative ကို import granularity, accessible naming, and replacement cost ဖြင့်အကဲဖြတ်ရန်
6. Real sorting/filtering/pagination use case ရှိမှ TanStack Table/current alternative ကို semantic markup and controlled State boundaries ဖြင့်စမ်းရန်
7. Keyboard, focus, screen-reader semantics, hydration, and behavior tests စစ်ရန်

Lesson ရောက်ချိန်မတိုင်မီ ဒီ planned implementation ကို မလုပ်ရသေးပါ။

## Guided Exercises

- Button variants နဲ့ native button Props composition design လုပ်ရန်
- Modal ownership, focus နဲ့ close API ကိုdiagram ဆွဲရန်

## Mini Challenges

Boolean Props အများကြီးမသုံးဘဲ invalid visual/behavior combinations လျှော့သော API ရေးရန်။

## Quiz / Review Questions

1. Native `<button>` ထက် headless primitive ကိုရွေးရန် ဘယ် interaction/accessibility complexity က justified ဖြစ်စေမလဲ။
2. shadcn-style source ownership က package upgrade နှင့် security fixes အပေါ် ဘာ tradeoff ရှိသလဲ။
3. TanStack Table က headless ဖြစ်ခြင်းကြောင့် accessibility responsibility ဘယ်သူ့ဆီကျန်သလဲ။
4. UI foundation ပြောင်းရန်လိုလာပါက selected abstraction ရဲ့ removal/migration cost ဘယ်လောက်ရှိမလဲ။

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
- [ ] `npm run verify` အောင်မြင်သည်။
- [ ] Actual learning, problems နဲ့ repository notes ကို update လုပ်သည်။
- [ ] Git checkpoint ပြုလုပ်သည်။

## What I Actually Learned

_To be completed after finishing Day 43._

## Problems / Mistakes I Made

_To be completed after attempting Day 43; မဖြစ်ခဲ့သော mistake ကိုမဖန်တီးရန်။_

## Important Code Patterns

_To be recorded from the student's actual Day 43 implementation. Source snapshot ကိုဒီ folder ထဲမကူးဘဲ relevant file/commit ကိုသာညွှန်းရန်။_

## Git Checkpoint

Follow the **Complete Current Day** protocol in `../PROTOCOLS.md`.

## Next Day Context

Day 44 မှာ loading, skeleton, empty, error, retry နဲ့ disabled states ကို production UX အဖြစ်စုစည်းမည်။
