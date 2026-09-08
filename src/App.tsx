import './App.css'
import React, { useState } from 'react';
import type { Expense } from './types/expense';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);


  const deleteExpense = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id != id))
  }

  const handleAdd = (title: string, amount: number) => {
    const newExpense = {
      id: Date.now(),
      title,
      amount,
    };
    setExpenses([...expenses, newExpense]);
  }

  return (
    <>
      <h2>Expenses</h2>
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
      <h3>Total : {total}</h3>
      <h2>Add Expense</h2>
      <ExpenseForm onAdd={handleAdd} />
    </>
  )
}

export default App
