import { createContext, useContext } from "react";
import type { Dispatch } from "react";
import type { ExpenseAction } from "../reducers/expenseReducer";

type ExpenseDispatch = Dispatch<ExpenseAction>;

export const ExpenseDispatchContext = createContext<ExpenseDispatch | null>(null);

export function useExpenseDispatch() : ExpenseDispatch {
    const dispatch = useContext(ExpenseDispatchContext);

    if (dispatch === null) {
        throw new Error(
            "useExpenseDispatch must be used within ExpenseDispatchContext",
        );
    }

    return dispatch;
}