import type { Expense } from '../types/expense';
import ExpenseItem from './ExpenseItem';

type ExpenseExpenseListProps = {
    expenses: Expense[];
    onDelete: (id: number) => void;
};

export default function ExpenseList({ expenses, onDelete }: ExpenseExpenseListProps) {
    return (
        <ul>
            {expenses.map((expense) => (
                <li key={expense.id}>
                    <ExpenseItem expense={expense} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    )
}