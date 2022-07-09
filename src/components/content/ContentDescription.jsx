import React from "react";

function ContentDescription({ title, description, description2 }) {
    return (
        <div className="grid gap-8">
            <h3>{title}</h3>
            <p className="">{description}</p>
            <p className="">{description2}</p>
        </div>
    );
}

export default ContentDescription;
