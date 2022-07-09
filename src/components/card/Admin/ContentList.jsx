import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function ContentList({ id, country, type, nameContent, fetchContents }) {
    const handleDeleteContent = async () => {
        try {
            const del = await axios.delete(`/contents/${id}`);
            fetchContents();
        } catch (err) {}
    };
    return (
        <div className=" grid grid-cols-4 py-4 ">
            <button>{country}</button>
            <button>{type}</button>
            <button>{nameContent}</button>

            <button className="text-text_green" onClick={handleDeleteContent}>
                Delete
            </button>
        </div>
    );
}

export default ContentList;
