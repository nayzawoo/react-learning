type SearchInputProps = {
    value: string;
    onChange: (value: string) => void;
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
    return (
        <div>
            <label htmlFor="search-expense">Search</label>
            <input type="text" id="search-expense" value={value} onChange={(e) => onChange(e.target.value)} />
        </div>
    );
}