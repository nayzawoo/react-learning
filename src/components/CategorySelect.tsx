import { EXPENSE_CATEGORIES, type ExpenseCategory } from "../types/expense"

type CategorySelectProps = {
    value: ExpenseCategory | "All";
    onChange: (category: ExpenseCategory) => void;
    includeAll?: boolean;
}

export default function CategorySelect({
    value,
    onChange,
    includeAll,
}: CategorySelectProps
) {
    return (
        <select name="cateory" id="category" value={value} onChange={(e) => onChange(e.target.value as ExpenseCategory)}>
            {includeAll && (
                <option value="All">All</option>
            )}
            {EXPENSE_CATEGORIES.map((category) => (
                <option key={category} value={category}>{category}</option>
            ))}
        </select>
    );
}