export default function Button(
    {className, value, onClick, label, name}
) {
    return (
        <button
            className={className}
            value={value}
            name={name}
            onClick={onClick}
        >
            {label}
        </button>
    );
}