// import './App.css'
import { useState } from 'react';
import type { Expense, ExpenseCategory } from './types/expense';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);
  const [filteredCategory, setFilteredCategory] = useState<ExpenseCategory | "All">("All");
  const filteredExpenses = filteredCategory == "All" ? expenses : expenses.filter(
    (expense) => expense.category == filteredCategory
  );

  const total = filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0);

  const handleEdit = (expense: Expense) => {
    console.log("Editing:" + expense.title);
    setEditingExpense(expense);
  }

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id != id))
  }

  const handleUpdate = (updatedExpense: Expense) => {
    setExpenses(
      expenses.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense
      )
    );
  }

  const handleCancelEdit = () => {
    setEditingExpense(null);
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
      <h2>Expenses({filteredExpenses.length})</h2>
      <h4>Filtered By Category</h4>
      <select name="category" value={filteredCategory} onChange={(e) => setFilteredCategory(e.target.value as ExpenseCategory | "All")}>
        <option value="All">All</option>
        <option value="Shopping">Shopping</option>
        <option value="Food">Food</option>
        <option value="Bill">Bill</option>
      </select>

      <ExpenseList expenses={filteredExpenses} onDelete={handleDelete} onEdit={handleEdit} />
      <h3>Total : {total}</h3>
      <h2>Add Expense</h2>
      <ExpenseForm onAdd={handleAdd} onUpdate={handleUpdate} onCancleEdit={handleCancelEdit} editingExpense={editingExpense}/>

      <hr />
      Editing { editingExpense && (editingExpense.title)}
    </>
  )
}

export default App
