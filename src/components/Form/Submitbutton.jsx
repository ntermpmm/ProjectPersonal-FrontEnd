import React from "react";

function Submitbutton({ children, className }) {
    return (
        <button type="submit" className={className}>
            {children}
        </button>
    );
}

export default Submitbutton;
