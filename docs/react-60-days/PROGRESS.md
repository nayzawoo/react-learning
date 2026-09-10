# React + TypeScript 60-Day Progress

> Current Day: 5
> Current Project: Expense Manager

## Current Project

**Expense Manager — Project 1 (Days 1–10)**

`src/` ထဲက application တစ်ခုတည်းကို တဖြည်းဖြည်းတိုးတက်အောင်လုပ်နေသည်။ လက်ရှိ implementation မှာ Add, Edit, Update, Delete, Cancel Edit, category filtering, filtered total နဲ့ `localStorage` persistence ရှိပြီး Day 4 reusable category design အထိရောက်ထားသည်။

## Current Day

**Day 5 — Search + Combined Filtering + Derived State Design**

Status: Current / Not completed

## Progress Checklist

- [x] Day 1
- [x] Day 2
- [x] Day 3
- [x] Day 4
- [ ] Day 5
- [ ] Day 6
- [ ] Day 7
- [ ] Day 8
- [ ] Day 9
- [ ] Day 10
- [ ] Day 11
- [ ] Day 12
- [ ] Day 13
- [ ] Day 14
- [ ] Day 15
- [ ] Day 16
- [ ] Day 17
- [ ] Day 18
- [ ] Day 19
- [ ] Day 20
- [ ] Day 21
- [ ] Day 22
- [ ] Day 23
- [ ] Day 24
- [ ] Day 25
- [ ] Day 26
- [ ] Day 27
- [ ] Day 28
- [ ] Day 29
- [ ] Day 30
- [ ] Day 31
- [ ] Day 32
- [ ] Day 33
- [ ] Day 34
- [ ] Day 35
- [ ] Day 36
- [ ] Day 37
- [ ] Day 38
- [ ] Day 39
- [ ] Day 40
- [ ] Day 41
- [ ] Day 42
- [ ] Day 43
- [ ] Day 44
- [ ] Day 45
- [ ] Day 46
- [ ] Day 47
- [ ] Day 48
- [ ] Day 49
- [ ] Day 50
- [ ] Day 51
- [ ] Day 52
- [ ] Day 53
- [ ] Day 54
- [ ] Day 55
- [ ] Day 56
- [ ] Day 57
- [ ] Day 58
- [ ] Day 59
- [ ] Day 60

## Completed Concepts

- Day 1: JSX, Components, Props, Events, `useState`, Expense Manager foundation
- Day 2: lists, `.map()`, React `key`, TypeScript Props, `ExpenseList`, `ExpenseItem`, `ExpenseForm` Component splitting
- Day 3: `useEffect`, lazy `localStorage` initialization, persistence, CRUD, Edit/Cancel, filtering, total, Derived Values, functional State updates, basic form validation
- Day 4: Single Source of Truth, `EXPENSE_CATEGORIES`, `as const`, `typeof ARRAY[number]`, `ExpenseCategory`, reusable `CategorySelect`, optional/discriminated union props, Type Narrowing, strict equality, State vs Props vs Derived Value, Component Responsibility, Lifting State Up

## Current Learning Focus

- `searchText` ကို controlled input အတွက် State အဖြစ်ပိုင်ဆိုင်စေခြင်း
- search result ကို separate State မထားဘဲ `expenses`, category filter နဲ့ search query ကနေ Derived Value အဖြစ်တွက်ခြင်း
- category filter နဲ့ case-insensitive text search ကို readable boolean conditions ဖြင့်ပေါင်းခြင်း
- filtering logic အတွက် မှန်ကန်သော Component Responsibility သတ်မှတ်ခြင်း

## Known Weak Areas

_အတည်ပြုမှတ်တမ်းတင်ထားသော weak area မရှိသေးပါ။ Day 5 exercises နှင့် quiz အပြီး evidence ရှိမှ update လုပ်ရန်။_

## Important Mistakes / Lessons

- Personal mistake အတိအကျကို historical notes မှမရသောကြောင့် မဖန်တီးထားပါ။
- Repository history က category strings ကို နေရာအများကြီးမှာထပ်ရေးခြင်းမှ `EXPENSE_CATEGORIES` Single Source of Truth သို့ refactor လုပ်ထားကြောင်းပြသည်။
- Current code က array ပြောင်းလဲမှုများအတွက် functional State updates သုံးထားပြီး filtered list နဲ့ total ကို Derived Values အဖြစ်တွက်ထားသည်။

## Last Completed Exercise

Repository မှအတည်ပြုနိုင်သော နောက်ဆုံး implementation checkpoint သည် Day 4 ၏ reusable `CategorySelect` ကို discriminated union props နှင့် Type Narrowing ဖြင့်အသုံးပြုခြင်းဖြစ်သည်။ မူလ conversation ထဲက exercise wording သို့မဟုတ် student answer ကို မှတ်တမ်းမရှိသောကြောင့် မဖန်တီးထားပါ။

## Next Lesson

Day 5 ပြီးနောက် **Day 6 — useRef, DOM refs, State vs Ref** ကိုဆက်မည်။ Day 5 မပြီးမချင်း Day 6 feature ကိုမစတင်ရသေးပါ။

## Repository State Notes

- Documentation စတင်မဖန်တီးမီ Git working tree သည် clean ဖြစ်သည်။
- Inspected application versions: React `^19.2.8`, TypeScript `~6.0.2`, Vite `^8.2.2`.
- `src/App.tsx` က list/filter State ကိုပိုင်ဆိုင်ပြီး `ExpenseForm`, `ExpenseList`, `ExpenseItem`, `CategorySelect` သို့ Props ဖြင့်ချိတ်ဆက်ထားသည်။
- `src/` သည် historical copies မပြုလုပ်ဘဲ single evolving source အဖြစ်ဆက်ထားရမည်။
- Day 1–4 အတွက် annotated completion tags များကို verified lesson checkpoints တွင်ဖန်တီးပြီး `origin` သို့ push ထားသည်: `day-01-complete` → `c0e0bf0`, `day-02-complete` → `453fe01`, `day-03-complete` → `76dca4f`, `day-04-complete` → `677d9c7`။ နောင် tags များကို သက်ဆိုင်ရာ completion criteria ပြည့်ပြီး explicit completion command ရှိမှသာဖန်တီးရမည်။
- Documentation workflow commit မတိုင်မီ `npm run build` နှင့် `npm run lint` နှစ်ခုလုံးအောင်မြင်ပြီး lint warning မရှိပါ။
- Final Git check တွင် `src/`, package files နဲ့ configuration files ပြောင်းလဲမှုမရှိပါ။
- Last updated: 2026-09-10 (learning workflow and historical Day 1–4 checkpoints recorded; Day 5 remains incomplete).
