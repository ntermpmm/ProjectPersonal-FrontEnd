import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AccountList from "../components/card/Admin/AccountList";
import { motion } from "framer-motion";
import axios from "axios";
import ItemsList from "../components/card/Admin/ItemsList";

function AdminPageItems() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const fetchItems = async () => {
        try {
            const res = await axios.get("items/all");
            setItems(res.data.items);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        setLoading(true);

        fetchItems();
    }, []);

    console.log(items);
    return (
        <>
            {loading ? (
                <h1>Loading</h1>
            ) : (
                <motion.div
                    className="admin-bg bg-bg_subBg "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="grid   h-full">
                        <div className="grid grid-cols-4 shadow-lg shadow-bg_main ">
                            <div className="  bg-bg_main   p-small  p-8 flex flex-col  justify-between ">
                                <div className="flex flex-col gap-8 ">
                                    <Link to="/AdminAccount">
                                        <button className="text-left ">
                                            Account Management
                                        </button>
                                    </Link>
                                    <Link to="/AdminOrder">
                                        <button className="text-left">
                                            Order Management
                                        </button>
                                    </Link>
                                    <Link to="/AdminItems">
                                        <button className="text-left text-text_green">
                                            Items Management
                                        </button>
                                    </Link>
                                    <Link to="/AdminContent">
                                        <button className="text-left">
                                            Content Management
                                        </button>
                                    </Link>
                                </div>
                                <Link to="/">
                                    <button>Home</button>
                                </Link>
                            </div>
                            <div className=" bg-bg_admin  col-span-3 p-8 flex flex-col gap-8 ">
                                <div className="flex items-baseline justify-between gap-4">
                                    <h4 className=" text-bg_main">
                                        Items Management
                                    </h4>
                                    <Link to="/AdminCreateItems">
                                        <div className=" text-text_green">
                                            Create Items
                                        </div>
                                    </Link>
                                </div>

                                <div className=" shadow-lg shadow-bg_subBg  rounded-b-2xl">
                                    <div className="grid grid-cols-5  bg-nav_admin shadow-lg shadow-bg_subBg rounded-t-2xl p-small py-2">
                                        <button>Type</button>
                                        <button>name</button>
                                        <button>price</button>
                                        <button>shippingPrice</button>
                                        {/* <button>contentname</button>
                                        <button>contentcountry</button> */}
                                    </div>
                                    <div className="py-4">
                                        {items.map((el, idx) => (
                                            <ItemsList
                                                key={idx}
                                                id={el.id}
                                                typeOfItems={el.typeOfItems}
                                                name={el.name}
                                                price={el.price}
                                                shippingPrice={el.shippingPrice}
                                                content={
                                                    el?.Content?.nameContent
                                                }
                                                country={el?.Content?.country}
                                                fetchItems={fetchItems()}
                                            />
                                        ))}
                                    </div>
                                </div>
                                {/* <div className="flex gap-4 justify-center">
                                    <button className=" text-text_green">
                                        1
                                    </button>
                                    <button className="">2</button>
                                    <button className="">3</button>
                                    <button className="">4</button>
                                    <button className="">5</button>
                                    <button className="">{">"}</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    );
}

export default AdminPageItems;
