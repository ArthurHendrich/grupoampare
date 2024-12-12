import './Input.css';

const Input = ({ label, type, className, heightClass, ...props }) => {
return (
    <div className="input-container">
        {label && <label className="input-label">{label}</label>}
        <input
        type={type}
        className="input-field"
        />
    </div>
);
};

export default Input;
