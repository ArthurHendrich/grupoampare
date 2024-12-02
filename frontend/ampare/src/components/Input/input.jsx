import './Input.css';

const Input = ({ label, type }) => {
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
