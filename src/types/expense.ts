export const EXPENSE_CATEGORIES = [
    "Shopping",
    "Food",
    "Health",
    "Bill",
    "Gas",
    "Transport",
    "Education",
    "Other",
] as const;

export type ExpenseCategory = typeof EXPENSE_CATEGORIES[number];

export type Expense = {
    id: number;
    title: string;
    amount: number;
    category: ExpenseCategory;
}