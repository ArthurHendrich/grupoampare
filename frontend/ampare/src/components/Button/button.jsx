import './button.css'

const Button = ({ text, onClick}) => {
    return (
        <button className='button' onClick={onClick} type='button'>
            {text}
        </button>
    );
};

export default Button
