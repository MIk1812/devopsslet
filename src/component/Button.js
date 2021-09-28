const Button = ({ color, text, onClick }) => {
    return (
        <button style = {{ backgroundColor: color }}
                className = "btn"
                data-testid = "btn-test"
                onClick={onClick}>
            {text}
        </button>
    )
}

export default Button