// import './App.css'
import { useEffect, useState } from 'react';
import { EXPENSE_CATEGORIES, type Expense, type ExpenseCategory } from './types/expense';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import CategorySelect from './components/CategorySelect';

function App() {
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const savedExpenses = localStorage.getItem('expenses');
    if (savedExpenses) {
      return JSON.parse(savedExpenses);
    }

    return [];
  });

  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);
  const [filteredCategory, setFilteredCategory] = useState<ExpenseCategory | "All">("All");

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const filteredExpenses = filteredCategory === "All" ? expenses : expenses.filter(
    (expense) => expense.category === filteredCategory
  );

  const total = filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0);

  const handleEdit = (expense: Expense) => {
    console.log("Editing:" + expense.title);
    setEditingExpense(expense);
  }

  const handleDelete = (id: number) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id))
  }

  const handleUpdate = (updatedExpense: Expense) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense
      )
    );
    handleCancelEdit();
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

    if (amount <= 0) {
      return;
    }

    const newExpense = {
      id: Date.now(),
      title,
      amount,
      category,
    };

    setExpenses((prevExpenses) => [
      ...prevExpenses,
      newExpense,
    ]);
  }

  return (
    <>
      <h2>Expenses({filteredExpenses.length})</h2>
      <h4>Filtered By Category</h4>
      <CategorySelect value={filteredCategory} onChange={setFilteredCategory} includeAll/>

      <ExpenseList expenses={filteredExpenses} onDelete={handleDelete} onEdit={handleEdit} />
      <h3>Total : {total}</h3>
      <h2>Add Expense</h2>
      <ExpenseForm onAdd={handleAdd} onUpdate={handleUpdate} onCancelEdit={handleCancelEdit} editingExpense={editingExpense}/>

      <hr />
      Editing { editingExpense && (editingExpense.title)}
    </>
  )
}

export default App
