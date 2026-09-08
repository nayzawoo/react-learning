import React, { useState } from 'react';

type ExpenseFormProps = {
    onAdd: (title: string, amount: number) => void;
};

export default function ExpenseForm({ onAdd }: ExpenseFormProps) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        console.log('submit');
        console.log(title, amount);

        onAdd(title, Number(amount));

        setTitle("");
        setAmount("");
      }


    return (
        <form action="GET"
            onSubmit={handleSubmit}
        >

            <p>Title</p>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

            <p>Amount</p>
            <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <br />
            <button type='submit'>Submit</button>
        </form>
    )
}