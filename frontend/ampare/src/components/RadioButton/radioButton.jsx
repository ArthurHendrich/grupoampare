import './style.css';

const RadioButton = ({ label, name, value, checked, onChange }) => {
return (
    <div className="radio-button-container">
    <input
        type="radio"
        id={value}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="radio-input"
    />
    <label htmlFor={value} className="radio-label">
        {label}
    </label>
    </div>
);
};

export default RadioButton;
