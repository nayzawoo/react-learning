# React + TypeScript 60-Day Progress

> Current Day: 7
> Current Project: Expense Manager

## Current Project

**Expense Manager — Project 1 (Days 1–10)**

`src/` ထဲက application တစ်ခုတည်းကို တဖြည်းဖြည်းတိုးတက်အောင်လုပ်နေသည်။ လက်ရှိ implementation မှာ Add, Edit, Update, Delete, Cancel Edit, reusable category filtering, case-insensitive title search, combined filtered count/total, `localStorage` persistence, typed DOM refs, validation focus, and successful-Add focus ရှိပြီး Day 6 အထိပြီးစီးထားသည်။

## Current Day

**Day 7 — useReducer**

Status: Planned — Not started

## Progress Checklist

- [x] Day 1
- [x] Day 2
- [x] Day 3
- [x] Day 4
- [x] Day 5
- [x] Day 6
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
- Day 6: `useRef`, typed nullable DOM refs, `ref.current`, State vs Ref vs local variable, controlled State with DOM refs, validation focus, successful-Add focus, Declarative vs Imperative behavior

## Current Learning Focus

- Reducer purity and current State → action → next State flow
- `dispatch` and action objects as event language
- TypeScript discriminated unions for reducer actions
- Choosing `useState` vs `useReducer` by transition complexity and responsibility

## Known Weak Areas

- `Derived Value` နဲ့ function-scoped `Local Variable` boundary ကို သတိထားရန် (`numericAmount` ကိုအစမှာ Derived Value ဟုခွဲခဲ့ပြီး ပြန်ပြင်ခဲ့သည်)။
- TypeScript generic syntax for DOM refs ကို `<HTMLInputElement>` ပုံစံနဲ့ရေးရန် (`useRef(HTMLInputElement)(null)` မဟုတ်)။

## Important Mistakes / Lessons

- `numericAmount` သည် `handleSubmit` call တစ်ကြိမ်အတွင်းသာလိုသောကြောင့် Derived Value မဟုတ်ဘဲ Local Variable ဖြစ်သည်။
- DOM ref မှာ element type ကို generic အဖြစ် `useRef<HTMLInputElement>(null)` ရေးရပြီး initial `current` သည် `null` ဖြစ်နိုင်သည်။
- Controlled input မှာ State က rendered value ကိုပိုင်ပြီး Ref က `focus()` လို DOM action အတွက် handle ပေးသည်။
- `ref.current?.focus()` သည် imperative action ဖြစ်ပြီး Ref mutation/action ကိုယ်တိုင် React render မ schedule လုပ်ပါ။

## Last Completed Exercise

Day 6 တွင် State/Ref/Derived/Local classification, render-persistence prediction, typed nullable DOM refs, optional chaining, validation and successful-Add focus, controlled State vs DOM Ref responsibility, and Declarative vs Imperative classification တို့ကို လေ့လာပြီး implementation ပြုလုပ်ခဲ့သည်။ Focus-related scenarios လေးခုကို student က pass ဟု report လုပ်ခဲ့ပြီး source regression review, `npm run verify`, and `git diff --check` အောင်မြင်ခဲ့သည်။

## Next Lesson

Day 7 — `useReducer` ကို reducer purity, action design, `dispatch`, and typed discriminated unions ဖြင့်စတင်ရန်။ Current repository အပေါ်မူတည်ပြီး exact exercise scope နှင့် completion criteria ကို refine လုပ်ရန်။

## Repository State Notes

- Inspected application versions: React `^19.2.8`, TypeScript `~6.0.2`, Vite `^8.2.2`.
- `src/App.tsx` က `searchText` နဲ့ category filter State ကိုပိုင်ဆိုင်ပြီး normalized combined result ကို Derived Value အဖြစ်တွက်သည်။ Controlled `SearchInput` က `value`/`onChange` Props ကိုသုံးပြီး `ExpenseList`, count နဲ့ total တို့က same filtered result ကိုသုံးသည်။
- `src/` သည် historical copies မပြုလုပ်ဘဲ single evolving source အဖြစ်ဆက်ထားရမည်။
- Day 5 completion validation တွင် `npm run build` နဲ့ `npm run lint` အောင်မြင်သည်။
- Day 6 completion validation တွင် `npm run verify` နဲ့ `git diff --check` အောင်မြင်သည်။ Typed Title/Amount refs and scoped focus behavior are present in `ExpenseForm` while existing application flows remain unchanged.
- Last updated: 2026-09-11 (Day 6 completed; Day 7 current).
