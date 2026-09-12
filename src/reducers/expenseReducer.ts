import type { Expense } from "../types/expense";

export type ExpenseState = {
    expenses: Expense[];
    editingExpense: Expense | null;
}

export type ExpenseAction =
    | { type: "expense/added"; expense: Expense }
    | { type: "expense/deleted"; id: number }
    | { type: "expense/editing"; expense: Expense }
    | { type: "expense/editing_canceled" }
    | { type: "expense/updated"; expense: Expense }

export function expenseReducer(
    state: ExpenseState,
    action: ExpenseAction
): ExpenseState {
    switch (action.type) {
        case "expense/added":
            return {
                ...state,
                expenses: [...state.expenses, action.expense],
            };
        case "expense/editing":
            return {
                ...state,
                editingExpense: action.expense,
            };
        case "expense/deleted":
            return {
                ...state,
                expenses: state.expenses.filter((expense) => expense.id !== action.id),
                editingExpense: state.editingExpense?.id === action.id ? null : state.editingExpense,
            };
        case "expense/updated":
            return {
                ...state,
                expenses: state.expenses.map((expense) =>
                    expense.id === action.expense.id ? action.expense : expense
                ),
                editingExpense: null,
            };
        case "expense/editing_canceled":
            return {
                ...state,
                editingExpense: null,
            };
    }

    const unhandleAction: never = action;

    throw new Error(`Unhandled action: ${JSON.stringify(unhandleAction)}`);
}