import React from "react";

function StepForm() {
    return (
        <div className="flex flex-col gap-4">
            <input
                type="text"
                placeholder="Ttitle Description"
                className=" text-center text-lg rounded-lg placeholder:text-bg_admin py-4 shadow-lg shadow-bg_subBg  bg-bg_subBg"
            />
            <input
                type="text"
                placeholder="Description"
                className=" text-center text-lg rounded-lg placeholder:text-bg_admin py-4 shadow-lg shadow-bg_subBg  bg-bg_subBg"
            />
        </div>
    );
}

export default StepForm;
