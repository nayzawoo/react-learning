# Day 04 — Single Source of Truth, Reusable Components & Type Narrowing

## Status

Status: Completed

Course record အရ Day 4 ပြီးစီးထားသည်။ Current source နဲ့ Day 4 commits က concepts နဲ့ implementation ကိုတိုက်ရိုက်အတည်ပြုသည်။

## Purpose

Category data, TypeScript type နဲ့ UI options တို့ကို တူညီသော source တစ်ခုမှရစေပြီး reusable Component API ကို valid prop combinations များသာလက်ခံအောင် design လုပ်ရန်။

## Previous Day Review

- Expenses State နဲ့ CRUD transitions
- `useEffect` / `localStorage` synchronization
- Filtered list နဲ့ total ကို Derived Values အဖြစ်တွက်ခြင်း
- Parent State owner နှင့် callback Props data flow
- Functional State updates

## Prerequisites

- TypeScript arrays, object types နဲ့ unions
- React controlled `select`
- Props နဲ့ Component splitting
- State vs Derived Value အခြေခံ
- JavaScript strict equality

## Learning Objectives

- Category definitions ကို Single Source of Truth ဖြင့်ထိန်းနိုင်ရန်
- `as const` နဲ့ readonly literal tuple inference ကိုရှင်းပြနိုင်ရန်
- `typeof EXPENSE_CATEGORIES[number]` ဖြင့် literal union type derive လုပ်နိုင်ရန်
- Shared options ကို `.map()` ဖြင့်ပြသည့် reusable `CategorySelect` တည်ဆောက်နိုင်ရန်
- Optional props နဲ့ discriminated union props တို့၏ tradeoff ကိုသိရန်
- Discriminant check နောက် Type Narrowing ဘယ်လိုဖြစ်သလဲရှင်းပြနိုင်ရန်
- State, Props, Derived Value နဲ့ Component Responsibility ကိုကွဲပြားစွာသတ်မှတ်နိုင်ရန်
- Shared State ကို common parent ဆီ Lifting State Up လုပ်ရသည့်အကြောင်းသိရန်

## Core Concepts

### Single Source of Truth

Category strings ကို form, filter နဲ့ type declaration နေရာတိုင်းထပ်ရေးလျှင် တစ်နေရာပြောင်းပြီး တစ်နေရာမပြောင်းသော mismatch ဖြစ်နိုင်တယ်။ `EXPENSE_CATEGORIES` တစ်ခုတည်းက valid values နဲ့ rendered options နှစ်ခုလုံးကိုသတ်မှတ်ပေးရမယ်။

### as const and Literal Union

`as const` မပါလျှင် array values ကို broad `string[]` အဖြစ် infer လုပ်နိုင်တယ်။ `as const` ဖြင့် exact literal values ကို readonly tuple အဖြစ်ထိန်းပြီး indexed access type နဲ့ union ထုတ်နိုင်တယ်။

```ts
export const EXPENSE_CATEGORIES = [
  "Shopping",
  "Food",
  "Health",
] as const;

export type ExpenseCategory =
  typeof EXPENSE_CATEGORIES[number];
```

### Reusable CategorySelect

Form မှာ valid expense category သာရွေးရမယ်။ Filter မှာတော့ valid category များအပြင် `"All"` လည်းလိုတယ်။ Shared options rendering ကို Component တစ်ခုထဲထားပြီး mode ပေါ်မူတည်ကာ allowed `value` နဲ့ `onChange` signatures ကို type လုပ်ထားတယ်။

### Optional Props and Discriminated Unions

`includeAll?: false` / `includeAll: true` က discriminant ဖြစ်တယ်။ Union branch တစ်ခုချင်းက valid prop combinations ကိုဖော်ပြလို့ `value` နဲ့ callback type မကိုက်သော invalid usage ကို TypeScript ကကာကွယ်ပေးတယ်။

### Type Narrowing

`if (props.includeAll)` စစ်ပြီးတဲ့ branch ထဲမှာ TypeScript က `props` ကို `includeAll: true` branch လို့ narrow လုပ်ပေးတယ်။ အဲဒါကြောင့် callback ကို `ExpenseCategory | "All"` နဲ့ခေါ်လို့ရတယ်။ Else path မှာ `ExpenseCategory` branch ဖြစ်တယ်။

### State vs Props vs Derived Value

- State: Component ကအချိန်ကြာလာတာနဲ့အမျှ မှတ်ထားရမည့် mutable snapshot
- Props: Parent က child ကိုပေးသော read-only input/contract
- Derived Value: ရှိပြီးသား State/Props မှပြန်တွက်နိုင်သော value
- Constant/type source: Runtime မှာ user action ကြောင့်မပြောင်းသော domain definition

### Component Responsibility and Lifting State Up

Form နဲ့ filter နှစ်နေရာလုံးက category UI ကိုမျှဝေပေမယ့် selected values တွေရဲ့ owners မတူဘူး။ Filtered list ကိုတွက်ဖို့လိုတဲ့ category filter State ကို `App` ကပိုင်ပြီး child ကို Props ပေးတာက Lifting State Up ရဲ့ဥပမာဖြစ်တယ်။

## Mental Model

Data model, UI options နဲ့ TypeScript type ကို သုံးနေရာခွဲမထားဘဲ domain source တစ်ခုမှ derive လုပ်မယ်။ Reusable Component ဆိုတာ markup ပြန်သုံးတာသာမဟုတ်ဘဲ allowed behaviors ကို Props type နဲ့ရှင်းလင်းစွာဖော်ပြထားသော API ဖြစ်တယ်။

## Implementation Tasks

Current repository မှအတည်ပြုနိုင်သော outcomes:

- `src/types/expense.ts` တွင် `EXPENSE_CATEGORIES` ကို `as const` ဖြင့်သတ်မှတ်ခြင်း
- `ExpenseCategory` ကို array values မှ derive လုပ်ခြင်း
- Options ကို `EXPENSE_CATEGORIES.map(...)` ဖြင့် render လုပ်ခြင်း
- Form နဲ့ filter နှစ်နေရာလုံးတွင် reusable `CategorySelect` သုံးခြင်း
- `includeAll` ကို discriminant အဖြစ်သုံးသော union Props type
- `props.includeAll` check နောက် branch-specific callback ကို Type Narrowing ဖြင့်ခေါ်ခြင်း
- Category comparison တွင် strict equality `===` သုံးခြင်း
- `filteredExpenses` နဲ့ `total` ကို Derived Values အဖြစ်ဆက်ထားခြင်း

## Guided Exercises

1. Category string အသစ်ထည့်ရာမှာ ဘယ်နေရာတစ်ခုသာပြင်သင့်သလဲရှင်းပြရန်
2. `as const` ဖြုတ်လိုက်လျှင် inferred type ဘယ်လိုပြောင်းသလဲစစ်ရန်
3. `typeof EXPENSE_CATEGORIES[number]` ကို tuple indexing mental model နဲ့ရှင်းပြရန်
4. Form mode နဲ့ filter mode အတွက် valid/invalid Props combinations ရေးကြည့်ရန်
5. `props.includeAll` branch တစ်ခုချင်းမှာ TypeScript သိထားသော type ကိုရှင်းပြရန်
6. `filteredCategory` State owner ဘာကြောင့် `App` ဖြစ်ရသလဲ trace လုပ်ရန်

## Mini Challenges

- Category အသစ်တစ်ခုကို source တစ်နေရာမှာထည့်ပြီး form/filter နှစ်ခုလုံးမှာရကြောင်းစစ်ရန်
- Invalid `CategorySelect` prop combination တစ်ခုကိုရေးပြီး TypeScript error ကိုဖတ်ရန်
- Duplicate category array ရှိခဲ့ရင် ဖြစ်နိုင်သော drift ကိုဥပမာပေးရန်

## Quiz / Review Questions

1. Single Source of Truth က ဒီ app မှာ ဘယ် duplication ကိုဖယ်ရှားပေးသလဲ။
2. `as const` က runtime value ကိုပြောင်းသလား၊ TypeScript inference ကိုပြောင်းသလား။
3. `typeof ARRAY[number]` က ဘာ type ထုတ်ပေးသလဲ။
4. Optional prop တစ်ခုတည်းထက် discriminated union က ဘယ်အခြေအနေမှာပိုကောင်းသလဲ။
5. Type Narrowing ဖြစ်ဖို့ ဘယ် discriminant ကိုစစ်ထားသလဲ။
6. Filtered expenses ကို State ထပ်ထားရင် ဘာပြဿနာဖြစ်နိုင်သလဲ။
7. Lifting State Up ကို ဘယ်အချိန်မှာသုံးသင့်သလဲ။

Historical student answers: _Not recorded._

## Common Mistakes

- Category values နဲ့ union type ကို သီးခြားလက်ရေးထပ်ရေးခြင်း
- `as const` မသုံးဘဲ literal specificity ပျောက်ခြင်း
- `e.target.value` ကို unchecked cast တစ်ခုနဲ့ valid domain data လို့ယူဆခြင်း
- Discriminated union branches ကိုမစစ်ဘဲ callback ခေါ်ခြင်း
- Reusable Component ထဲမှာ parent-specific State ထည့်ခြင်း
- `==` သုံးပြီး implicit coercion ကိုခွင့်ပြုခြင်း
- Derived Value ကို synchronize လုပ်ရမည့် duplicate State အဖြစ်ထားခြင်း

## Completion Criteria

- Course record အရ Day 4 Completed ဖြစ်သည်။
- Runtime categories နဲ့ `ExpenseCategory` type က source တစ်ခုမှ derive ဖြစ်သည်။
- Form/filter နှစ်ခုလုံး reusable `CategorySelect` ကိုအသုံးပြုသည်။
- Props union က `includeAll` mode အလိုက် valid value/callback pairing ကိုဖော်ပြသည်။
- Current Git history တွင် Single Source of Truth, separate component, discriminated union နဲ့ Type Narrowing checkpoints ရှိသည်။

## What I Actually Learned

- Category domain ကို Single Source of Truth အဖြစ်သတ်မှတ်ခြင်း
- `as const` နဲ့ indexed access type ဖြင့် literal union derive လုပ်ခြင်း
- Shared option UI ကို reusable Component တစ်ခုဖြင့်စီမံခြင်း
- Optional/discriminated union props နဲ့ valid Component API ဖော်ပြခြင်း
- Runtime condition နောက် Type Narrowing အသုံးချခြင်း
- State, Props, Derived Value, constants နဲ့ responsibilities ခွဲခြားခြင်း
- Shared concern အတွက် State ကို common parent ဆီထားခြင်း

## Problems / Mistakes I Made

_Commit sequence က category duplication မှ Single Source of Truth သို့ refactor လုပ်ထားကြောင်းပြသော်လည်း personal mistake wording သို့မဟုတ် failed attempts ကိုမသိနိုင်ပါ။ မဖန်တီးဘဲ evidence ရှိမှဖြည့်ရန်။_

## Important Code Patterns

```ts
export const OPTIONS = ["A", "B", "C"] as const;
export type Option = typeof OPTIONS[number];
```

```ts
type SelectProps =
  | {
      includeAll: true;
      value: Option | "All";
      onChange: (value: Option | "All") => void;
    }
  | {
      includeAll?: false;
      value: Option;
      onChange: (value: Option) => void;
    };
```

Key pattern က runtime source မှ type derive လုပ်ခြင်းနဲ့ discriminant ဖြင့် branch-specific contracts narrow လုပ်ခြင်းဖြစ်တယ်။

## Git Checkpoint

Day 4 history:

- `297e1ef` — Single Source of Truth
- `3ac429f` — separate `CategorySelect`
- `763c8f5` — discriminated union Props
- `677d9c7` — Type Narrowing

Annotated tag `day-04-complete` က documented final Day 4 checkpoint `677d9c7` ကိုညွှန်းပြီး `origin` သို့ push ထားသည်။

## Next Day Context

Day 5 မှာ `searchText` controlled State ထည့်သွင်းမည့် design ကိုလေ့လာပြီး current category filter နဲ့ case-insensitive search ကို ပေါင်းမယ်။ Combined result က separate State မဟုတ်ဘဲ Derived Value ဖြစ်ရမယ်။
