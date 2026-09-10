import React, { useState, useEffect } from 'react';
import type { Expense, ExpenseCategory } from '../types/expense';
import CategorySelect from './CategorySelect';

type ExpenseFormProps = {
    onAdd: (title: string, amount: number, category: ExpenseCategory) => void;
    onUpdate: (expense: Expense) => void;
    onCancelEdit: () => void;
    editingExpense: Expense | null;
};

export default function ExpenseForm({
    onAdd,
    onUpdate,
    onCancelEdit,
    editingExpense
}: ExpenseFormProps) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [error, setError] = useState("");
    const [category, setCategory] = useState<ExpenseCategory>("Shopping");
    useEffect(() => {
        setError("");
        if (editingExpense) {
            setTitle(editingExpense.title);
            setAmount(String(editingExpense.amount));
            setCategory(editingExpense.category);
        } else {
            setTitle("");
            setAmount("");
            setCategory("Shopping");
        }
    }, [editingExpense]);

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        console.log('submit');
        console.log(title, amount);

        const trimmedTitle = title.trim();
        const numericAmount = Number(amount);

        if (trimmedTitle === '') {
            setError("Title is required");
            return;
        }

        if (numericAmount <= 0) {
            setError("Amount must be greater than 0");
            return;
        }

        setError("");

        if (editingExpense) {
            onUpdate({
                ...editingExpense,
                title: trimmedTitle,
                amount: numericAmount,
                category
            });
            return;
        }

        onAdd(trimmedTitle, numericAmount, category);

        setTitle("");
        setAmount("");
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            { error && <p style={{ color: 'red'}}>{error}</p>}
            <p>Title</p>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

            <p>Amount</p>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <br />
            <CategorySelect value={category} onChange={setCategory}/>
            <br />
            {editingExpense && (

                <button
                    type='button'
                    onClick={onCancelEdit}
                >
                    Cancel
                </button>
            )}
            <button type='submit'>
                {editingExpense ? 'Update Expense' : 'Add Expense'}
            </button>
        </form>
    )
}