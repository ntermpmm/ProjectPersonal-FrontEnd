import React from "react";

function Input({ value, type, name }) {
    return (
        <div className="flex items-center gap-2 ">
            <input
                className=" w-4 h-4 container "
                type={type}
                value={value}
                name={name}
            />
            <label className=" text-lg" htmlFor={value}>
                {value}
            </label>
        </div>
    );
}

export default Input;
