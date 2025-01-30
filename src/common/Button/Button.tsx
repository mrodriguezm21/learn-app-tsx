type ButtonProps = React.ComponentPropsWithoutRef<'button'>;
export function Button({ type, onClick, children }: ButtonProps) {
    return (
        <button type={type} onClick={onClick}>
            {children}
        </button>
    );
}
