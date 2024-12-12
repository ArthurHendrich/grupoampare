
import React, { forwardRef } from "react";
import "./input.css";

const Input = forwardRef(({ label, type, className, heightClass, ...props }, ref) => {
    return (
        <div className="input-container">
            {label && <label className="input-label">{label}</label>}
            <input ref={ref} type={type} className="input-field" {...props} />
        </div>
    );
});

export default Input;
