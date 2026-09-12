import './App.css';
import { useEffect, useReducer, useState } from 'react';
import { type Expense, type ExpenseCategory } from './types/expense';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import CategorySelect from './components/CategorySelect';
import SearchInput from './components/SearchInput';
import { expenseReducer, type ExpenseState } from './reducers/expenseReducer';

function createInitialExpenseState(storageKey: string) : ExpenseState {
  const savedExpense = localStorage.getItem(storageKey);

  return {
    expenses: savedExpense ? JSON.parse(savedExpense) : [],
    editingExpense: null,
  }
}

function App() {
  const [expenseState, dispatch] = useReducer(
    expenseReducer,
    "expenses",
    createInitialExpenseState,
  );

  const {expenses, editingExpense} = expenseState;

  const [filteredCategory, setFilteredCategory] = useState<ExpenseCategory | "All">("All");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const normalizedSearchText = searchText.trim().toLowerCase();

  const filteredExpenses = expenses.filter((expense) => {
    const matchesCategory = filteredCategory === "All" || expense.category === filteredCategory;

    const matchesSearch = expense.title.toLowerCase().includes(normalizedSearchText);

    return matchesCategory && matchesSearch;
  });

  const total = filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0);

  const handleAdd = (
    title: string,
    amount: number,
    category: ExpenseCategory,
  ) => {
    title = title.trim();
    amount = Number(amount);
    if (title === '') {
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

    dispatch({
      type: "expense/added",
      expense: newExpense,
    });
  }

  const handleEdit = (expense: Expense) => {
    console.log("Editing:" + expense.title);
    dispatch({
      type: "expense/editing",
      expense,
    });
  }

  const handleDelete = (id: number) => {
    dispatch({
      type: "expense/deleted",
      id,
    });
  }

  const handleUpdate = (updatedExpense: Expense) => {
    dispatch({
      type: "expense/updated",
      expense: updatedExpense,
    });
  }

  const handleCancelEdit = () => {
    dispatch({
      type: "expense/editing_canceled",
    });
  }

  return (
    <main className="app-shell">
      <header className="app-header">
        <div>
          <p className="app-eyebrow">Personal finance</p>
          <h1>Expense Manager</h1>
        </div>
        <p className="app-header-copy">Keep everyday spending organized in one place.</p>
      </header>

      <div className="app-grid">
        <section className="panel expenses-panel" aria-labelledby="expenses-heading">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Overview</p>
              <h2 id="expenses-heading">Expenses <span>({filteredExpenses.length})</span></h2>
            </div>

            <div className="filter-field">
              <label htmlFor="filter-category">Filter by category</label>
              <CategorySelect value={filteredCategory} onChange={setFilteredCategory} includeAll />
            </div>
          </div>
          <div>
            <SearchInput value={searchText} onChange={setSearchText}/>
          </div>
          <ExpenseList expenses={filteredExpenses} onDelete={handleDelete} onEdit={handleEdit} />

          <div className="total-summary" aria-live="polite">
            <span>Filtered total</span>
            <strong>${total.toFixed(2)}</strong>
          </div>
        </section>

        <section className="panel form-panel" aria-labelledby="form-heading">
          <div className="section-heading form-heading">
            <div>
              <p className="section-kicker">{editingExpense ? 'Editing entry' : 'New entry'}</p>
              <h2 id="form-heading">{editingExpense ? 'Update Expense' : 'Add Expense'}</h2>
            </div>
          </div>

          <ExpenseForm
            key={editingExpense?.id ?? "new"}
            onAdd={handleAdd}
            onUpdate={handleUpdate}
            onCancelEdit={handleCancelEdit}
            editingExpense={editingExpense}
          />

          {editingExpense && (
            <p className="editing-note">Editing: <strong>{editingExpense.title}</strong></p>
          )}
        </section>
      </div>
    </main>
  )
}

export default App
