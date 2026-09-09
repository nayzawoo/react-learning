import type { Expense } from '../types/expense';
import ExpenseItem from './ExpenseItem';

type ExpenseExpenseListProps = {
    expenses: Expense[];
    onDelete: (id: number) => void;
    onEdit: (expense: Expense) => void;
};

export default function ExpenseList({ expenses, onDelete, onEdit}: ExpenseExpenseListProps) {
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