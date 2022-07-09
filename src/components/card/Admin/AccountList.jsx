import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function AccountList({
    Role,
    FirstName,
    LastName,
    Gender,
    Email,
    PhoneNumber,
    Address,
    id,
    fetchAccounts,
}) {
    const handleDeleteUser = async () => {
        try {
            const del = await axios.delete(`/users/${id}`);
            fetchAccounts();
        } catch (err) {}
    };
    return (
        <div className=" grid grid-cols-8 py-4 ">
            <button>{Role}</button>
            <button>{FirstName}</button>
            <button>{LastName}</button>
            <button>{Gender}</button>
            <button>{Email}</button>
            <button>{PhoneNumber}</button>
            <button>{Address}</button>

            <button className="text-text_green" onClick={handleDeleteUser}>
                Delete
            </button>
        </div>
    );
}

export default AccountList;
