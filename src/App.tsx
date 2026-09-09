// import './App.css'
import { useState } from 'react';
import type { Expense, ExpenseCategory } from './types/expense';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  const handleEdit = (expense: Expense) => {
    console.log("Editing:" + expense.title);
    setEditingExpense(expense);
  }

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id != id))
  }

  const handleAdd = (
    title: string,
    amount: number,
    category: ExpenseCategory,
  ) => {
    title = title.trim();
    amount = Number(amount);
    if (title == '') {
      return;
    }

    if (amount < 0) {
      return;
    }

    const newExpense = {
      id: Date.now(),
      title,
      amount,
      category,
    };

    setExpenses([...expenses, newExpense]);
  }

  return (
    <>
      <h2>Expenses</h2>
      <ExpenseList expenses={expenses} onDelete={handleDelete} onEdit={handleEdit} />
      <h3>Total : {total}</h3>
      <h2>Add Expense</h2>
      <ExpenseForm onAdd={handleAdd} editingExpense={editingExpense}/>

      <hr />
      Editing { editingExpense && (editingExpense.title)}
    </>
  )
}

export default App
