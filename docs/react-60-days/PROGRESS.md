# React + TypeScript 60-Day Progress

> Current Day: 6
> Current Project: Expense Manager

## Current Project

**Expense Manager — Project 1 (Days 1–10)**

`src/` ထဲက application တစ်ခုတည်းကို တဖြည်းဖြည်းတိုးတက်အောင်လုပ်နေသည်။ လက်ရှိ implementation မှာ Add, Edit, Update, Delete, Cancel Edit, reusable category filtering, case-insensitive title search, combined filtered count/total နဲ့ `localStorage` persistence ရှိပြီး Day 5 အထိပြီးစီးထားသည်။

## Current Day

**Day 6 — useRef, DOM refs, State vs Ref**

Status: Current / Not started

## Progress Checklist

- [x] Day 1
- [x] Day 2
- [x] Day 3
- [x] Day 4
- [x] Day 5
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
- Day 5: controlled search input, `searchText` State ownership, case-insensitive substring search, `trim()`/`toLowerCase()` normalization, category + search Boolean composition, named predicates, Derived Value design, duplicate State/Effect avoidance, Component Responsibility

## Current Learning Focus

- Day 6 အတွက် `useRef`, DOM refs နဲ့ State vs Ref ကွာခြားချက်ကို ဆက်လေ့လာရန်
- Day 5 မှ State လိုအပ်သော user-visible query နဲ့ ပြန်တွက်နိုင်သော Derived Value တို့၏ boundary ကို Day 6 Ref mental model နဲ့ချိတ်ဆက်ရန်

## Known Weak Areas

_Day 5 quiz/review ကိုအောင်မြင်ခဲ့ပြီး အတည်ပြုထားသော current weak area မရှိသေးပါ။_

## Important Mistakes / Lessons

- Personal mistake အတိအကျကို historical notes မှမရသောကြောင့် မဖန်တီးထားပါ။
- Repository history က category strings ကို နေရာအများကြီးမှာထပ်ရေးခြင်းမှ `EXPENSE_CATEGORIES` Single Source of Truth သို့ refactor လုပ်ထားကြောင်းပြသည်။
- Current code က array ပြောင်းလဲမှုများအတွက် functional State updates သုံးထားပြီး filtered list နဲ့ total ကို Derived Values အဖြစ်တွက်ထားသည်။
- Combined filter manual review တွင် `Shopping` + `"office"` ကို အစမှာ empty result ဟုမှားယူခဲ့သော်လည်း `Office Chair` သည် category နဲ့ search နှစ်ခုစလုံး match ဖြစ်ကြောင်းပြန်စစ်ပြီးပြင်ခဲ့သည်။ Item တစ်ခုစီအတွက် Boolean conditions နှစ်ခုလုံးကိုစစ်ရမည်။

## Last Completed Exercise

Day 5 တွင် State/Derived Value classification, search State, controlled `SearchInput`, combined category + title filtering, manual search matrix နဲ့ named Boolean readability refactor ကိုပြီးစီးခဲ့သည်။ Whitespace-only query နဲ့ combined filtering mini challenges ကိုစမ်းသပ်ခဲ့သည်။

## Next Lesson

**Day 6 — useRef, DOM refs, State vs Ref** ကိုဆက်မည်။ Day 6 implementation ကိုမစတင်ရသေးပါ။

## Repository State Notes

- Day 5 completion မတိုင်မီ working tree တွင် student ရေးသားထားသော `src/App.tsx` search changes နဲ့ `src/components/SearchInput.tsx` အသစ်ရှိသည်။
- Inspected application versions: React `^19.2.8`, TypeScript `~6.0.2`, Vite `^8.2.2`.
- `src/App.tsx` က `searchText` နဲ့ category filter State ကိုပိုင်ဆိုင်ပြီး normalized combined result ကို Derived Value အဖြစ်တွက်သည်။ Controlled `SearchInput` က `value`/`onChange` Props ကိုသုံးပြီး `ExpenseList`, count နဲ့ total တို့က same filtered result ကိုသုံးသည်။
- `src/` သည် historical copies မပြုလုပ်ဘဲ single evolving source အဖြစ်ဆက်ထားရမည်။
- Day 1–4 annotated completion tags များကို `origin` သို့ push ထားသည်။ Day 5 အတွက် local annotated tag `day-05-complete` ကို verified completion commit တွင်ဖန်တီးထားပြီး push မလုပ်ရသေးပါ။
- Documentation workflow commit မတိုင်မီ `npm run build` နှင့် `npm run lint` နှစ်ခုလုံးအောင်မြင်ပြီး lint warning မရှိပါ။
- Day 5 completion validation တွင် `npm run build` နဲ့ `npm run lint` အောင်မြင်သည်။
- Day 5 source နဲ့ learning documentation ကို completion checkpoint တစ်ခုတည်းတွင် commit လုပ်ပြီး annotated tag ဖန်တီးရန်စစ်ဆေးထားသည်။
- Last updated: 2026-09-10 (Day 5 completed; Day 6 is current and not started).
