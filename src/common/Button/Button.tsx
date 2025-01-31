type ButtonProps = React.ComponentPropsWithoutRef<'button'>;
export function Button({ type, onClick, children, disabled }: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className='cursor-pointer py-2 rounded-lg bg-zinc-900 disabled:bg-gray-300 disabled:cursor-auto hover:bg-slate-900"'
        >
            {children}
        </button>
    );
}
