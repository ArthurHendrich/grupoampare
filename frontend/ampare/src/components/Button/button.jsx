import './button.css'

const Button = ({ onClick, text, type = "button" }) => {
    return (
        <button type={type} className='button' onClick={onClick}>
            {text}
        </button>
    );
};

export default Button