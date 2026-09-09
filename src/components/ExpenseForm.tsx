import React, { useState, useEffect } from 'react';
import type { Expense, ExpenseCategory } from '../types/expense';

type ExpenseFormProps = {
    onAdd: (title: string, amount: number, category: ExpenseCategory) => void;
    editingExpense: Expense | null;
};

export default function ExpenseForm({ onAdd, editingExpense }: ExpenseFormProps) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState<ExpenseCategory>("Shopping");
    useEffect(() => {
        if (editingExpense) {
            setTitle(editingExpense.title);
            setAmount(String(editingExpense.amount));
            setCategory(editingExpense.category);
        }
    }, [editingExpense]);

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        console.log('submit');
        console.log(title, amount);

        onAdd(title, Number(amount), category);

        setTitle("");
        setAmount("");
      }


    return (
        <form
            onSubmit={handleSubmit}
        >

            <p>Title</p>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

            <p>Amount</p>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <br />
            <select name="cateory" id="category" value={category} onChange={(e) => setCategory(e.target.value as ExpenseCategory)}>
                <option value="Shopping">Shopping</option>
                <option value="Food">Food</option>
            </select>
            <br />
            <button type='submit'>Submit</button>
        </form>
    )
}