type InputProps = React.ComponentPropsWithoutRef<'input'> & {
    label?: string;
};
export function Input({
    value,
    onChange,
    type,
    label,
    placeholder,
}: InputProps) {
    return (
        <div>
            {label && <label htmlFor={label}> {label} </label>}
            <input
                id={label}
                name={label}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className="border-2 "
            />
        </div>
    );
}
