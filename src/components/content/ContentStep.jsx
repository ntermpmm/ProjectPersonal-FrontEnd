import React from "react";

function ContentStep({ howToTitle, howToDescription }) {
    return (
        <div className="grid gap-8">
            <h3>{howToTitle}</h3>
            <p className="">{howToDescription}</p>
        </div>
    );
}

export default ContentStep;
