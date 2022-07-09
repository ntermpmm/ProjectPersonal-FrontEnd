import axios from "axios";
import React from "react";

function ItemsList({
    typeOfItems,
    name,
    price,
    shippingPrice,
    content,
    country,
    id,
    fetchItems,
}) {
    const handleDeleteItems = async () => {
        try {
            console.log("sadasd");
            const del = await axios.delete(`/items/${id}`);
            console.log(del);
            fetchItems();
        } catch (err) {}
    };
    return (
        <div className=" grid grid-cols-5 py-4 ">
            <button>{typeOfItems}</button>
            <button>{name}</button>
            <button>{price}</button>
            <button>{shippingPrice}</button>
            {/* <button>{content}</button>
            <button>{country}</button> */}
            <button className="text-text_green" onClick={handleDeleteItems}>
                Delete
            </button>
        </div>
    );
}

export default ItemsList;
