import React from "react";
import { Link } from "react-router-dom";

function NavItems({ title, to, active }) {
    return (
        <li
            className={`items-center gap-2 text-md  text-text_color
        ${active ? " text-text_gold underline-offset-4" : ""}`}
        >
            <Link to={to} className="flex justify-center gap-4">
                <span>{title}</span>
            </Link>
        </li>
    );
}

export default NavItems;
