import type { Expense } from "../types/expense";

type ExpenseItemProps = {
    expense: Expense;
    onDelete: (id: number) => void;
    onEdit: (expense: Expense) => void;
};

export default function ExpenseItem({ expense, onDelete, onEdit}: ExpenseItemProps) {
    return (
        <div>
            <p>
                {expense.title} {'=>'} ${expense.amount}
            </p>
            <p>{expense.category}</p>
            <button onClick={() => onEdit(expense)}>Edit</button>
            <button onClick={() => onDelete(expense.id)}>Delete</button>
        </div>
    )
}