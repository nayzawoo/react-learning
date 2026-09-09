import type { Expense } from '../types/expense';
import ExpenseItem from './ExpenseItem';

type ExpenseExpenseListProps = {
    expenses: Expense[];
    onDelete: (id: number) => void;
    onEdit: (expense: Expense) => void;
};

export default function ExpenseList({ expenses, onDelete, onEdit}: ExpenseExpenseListProps) {
    if (expenses.length == 0) {
        return <p>No Expense Found.</p>
    }

    return (
        <ul>
            {expenses.map((expense) => (
                <li key={expense.id}>
                    <ExpenseItem expense={expense} onDelete={onDelete} onEdit={onEdit}/>
                </li>
            ))}
        </ul>
    )
}