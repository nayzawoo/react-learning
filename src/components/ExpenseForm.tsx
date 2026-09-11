import React, { useState, useRef } from 'react';
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
    const [title, setTitle] = useState(editingExpense?.title ?? "");
    const [amount, setAmount] = useState(editingExpense?.amount ?? "");
    const [error, setError] = useState("");
    const [category, setCategory] = useState<ExpenseCategory>(editingExpense?.category ?? "Shopping");
    const titleRef = useRef<HTMLInputElement>(null);
    const amountRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        console.log('submit');
        console.log(title, amount);

        const trimmedTitle = title.trim();
        const numericAmount = Number(amount);

        if (trimmedTitle === '') {
            setError("Title is required");
            titleRef.current?.focus();
            return;
        }

        if (numericAmount <= 0) {
            setError("Amount must be greater than 0");
            amountRef.current?.focus();
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
        titleRef.current?.focus();
    }

    return (
        <form
            className="expense-form"
            onSubmit={handleSubmit}
        >
            {error && <p className="form-error" role="alert">{error}</p>}

            <div className="form-field">
                <label htmlFor="expense-title">Title</label>
                <input
                    id="expense-title"
                    type="text"
                    ref={titleRef}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Groceries"
                />
            </div>

            <div className="form-field">
                <label htmlFor="expense-amount">Amount</label>
                <div className="amount-input">
                    <span aria-hidden="true">$</span>
                    <input
                        id="expense-amount"
                        type="number"
                        ref={amountRef}
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0.00"
                    />
                </div>
            </div>

            <div className="form-field">
                <label htmlFor="expense-category">Category</label>
                <CategorySelect value={category} onChange={setCategory}/>
            </div>

            <div className="form-actions">
                {editingExpense && (
                    <button
                        className="button button-secondary"
                        type='button'
                        onClick={onCancelEdit}
                    >
                        Cancel
                    </button>
                )}
                <button className="button button-primary" type='submit'>
                    {editingExpense ? 'Update Expense' : 'Add Expense'}
                </button>
            </div>
        </form>
    )
}
