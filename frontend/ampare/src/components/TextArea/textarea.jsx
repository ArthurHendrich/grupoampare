
import React, { forwardRef } from "react";
import "./style.css";

const TextArea = forwardRef(({ label, placeholder, ...props }, ref) => {
    return (
        <div className="textarea-container">
            {label && <label className="textarea-label">{label}</label>}
            <textarea
                ref={ref}
                className="textarea-field"
                placeholder={placeholder}
                {...props}
            />
        </div>
    );
});

export default TextArea;
