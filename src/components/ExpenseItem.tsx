import type { Expense } from "../types/expense";
import { useExpenseDispatch } from "../contexts/ExpenseDispatchContext";

type ExpenseItemProps = {
    expense: Expense;
};

export default function ExpenseItem({ expense }: ExpenseItemProps) {
    const dispatch = useExpenseDispatch();

    return (
        <article className="expense-card">
            <div className="expense-details">
                <h3>{expense.title}</h3>
                <span className="category-badge">{expense.category}</span>
            </div>

            <strong className="expense-amount">${expense.amount.toFixed(2)}</strong>

            <div className="expense-actions">
                <button
                    aria-label={`Edit ${expense.title}`}
                    className="button button-secondary"
                    type="button"
                    onClick={() =>
                        dispatch({
                            type: "expense/editing",
                            expense,
                        })
                    }
                >
                    Edit
                </button>
                <button
                    aria-label={`Delete ${expense.title}`}
                    className="button button-danger"
                    type="button"
                    onClick={() =>
                        dispatch({
                            type: "expense/deleted",
                            id: expense.id,
                        })
                    }
                >
                    Delete
                </button>
            </div>
        </article>
    )
}
