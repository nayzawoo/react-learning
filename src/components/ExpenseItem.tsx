import type { Expense } from "../types/expense";

type ExpenseItemProps = {
    expense: Expense;
    onDelete: (id: number) => void;
    onEdit: (expense: Expense) => void;
};

export default function ExpenseItem({ expense, onDelete, onEdit}: ExpenseItemProps) {
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
                    onClick={() => onEdit(expense)}
                >
                    Edit
                </button>
                <button
                    aria-label={`Delete ${expense.title}`}
                    className="button button-danger"
                    type="button"
                    onClick={() => onDelete(expense.id)}
                >
                    Delete
                </button>
            </div>
        </article>
    )
}
