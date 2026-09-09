export type ExpenseCategory =
    | "Bill"
    | "Shopping"
    | "Gas"
    | "Food"
    | "Transport"
    | "Other";

export type Expense = {
    id: number;
    title: string;
    amount: number;
    category: ExpenseCategory;
}