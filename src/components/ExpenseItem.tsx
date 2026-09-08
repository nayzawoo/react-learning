import type { Expense } from "../types/expense";

type ExpenseItemProps = {
    expense: Expense;
    onDelete: (id: number) => void;
};

export default function ExpenseItem({ expense, onDelete }: ExpenseItemProps) {
    return (
        <div>
            <p>
                {expense.title} {'=>'} ${expense.amount}
            </p>
            <button onClick={() => onDelete(expense.id)}>Delete</button>
        </div>
    )
}