import './style.css';

const TextArea = ({ label, placeholder, className, ...props }) => {
  return (
    <div className={`textarea-container ${className || ""}`}>
      {label && <label className="textarea-label">{label}</label>}
      <textarea
        className="textarea-field"
        placeholder={placeholder}
        {...props}
      ></textarea>
    </div>
  );
};

export default TextArea;
