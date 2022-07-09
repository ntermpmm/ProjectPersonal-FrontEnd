import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function OrderList({
    status,
    shippingStatus,
    items,
    quantity,
    slip,
    user,
    id,
    fetchItems,
}) {
    const handleDeleteOrder = async () => {
        try {
            console.log("sadasd");
            const del = await axios.delete(`/orders/${id}`);
            console.log(del);
            fetchItems();
        } catch (err) {}
    };
    return (
        <div className="grid grid-cols-7 py-4">
            <button>{status}</button>
            <button>{shippingStatus}</button>
            <button>{items}</button>
            <button>{quantity}</button>
            <button>{user}</button>
            {/* <Link to={slip || "not upload yet"}> */}
            <Link to={slip}>VIEW</Link>
            {/* <button className="text-text_green">{slip}</button> */}
            {/* </Link> */}
            <button className="text-text_green" onClick={handleDeleteOrder}>
                Delete
            </button>
        </div>
    );
}

export default OrderList;
