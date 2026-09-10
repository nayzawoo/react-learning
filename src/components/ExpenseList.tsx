import type { Expense } from '../types/expense';
import ExpenseItem from './ExpenseItem';

type ExpenseExpenseListProps = {
    expenses: Expense[];
    onDelete: (id: number) => void;
    onEdit: (expense: Expense) => void;
};

export default function ExpenseList({ expenses, onDelete, onEdit}: ExpenseExpenseListProps) {
    if (expenses.length === 0) {
        return (
            <div className="empty-state">
                <p>No expenses found.</p>
                <span>Try another category or add a new expense.</span>
            </div>
        )
    }

    return (
        <ul className="expense-list">
            {expenses.map((expense) => (
                <li className="expense-list-item" key={expense.id}>
                    <ExpenseItem expense={expense} onDelete={onDelete} onEdit={onEdit}/>
                </li>
            ))}
        </ul>
    )
}
