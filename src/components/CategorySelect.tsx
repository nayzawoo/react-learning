import { EXPENSE_CATEGORIES, type ExpenseCategory } from "../types/expense"

type CategorySelectProps =
    | {
        value: ExpenseCategory | "All";
        onChange: (category: ExpenseCategory | "All") => void;
        includeAll: true;
    }
    | {
        value: ExpenseCategory;
        onChange: (category: ExpenseCategory) => void;
        includeAll?: false;
    }

export default function CategorySelect(props: CategorySelectProps
) {
    return (
        <select name="category" id="category" value={props.value} onChange={(e) => {
            if (props.includeAll) {
                props.onChange(e.target.value as ExpenseCategory | "All");
                return;
            }

            props.onChange(e.target.value as ExpenseCategory);
        }}>
            {props.includeAll && (
                <option value="All">All</option>
            )}
            {EXPENSE_CATEGORIES.map((category) => (
                <option key={category} value={category}>{category}</option>
            ))}
        </select>
    );
}