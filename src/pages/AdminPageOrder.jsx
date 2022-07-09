import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AccountList from "../components/card/Admin/AccountList";
import OrderList from "../components/card/Admin/OrderList";
import { motion } from "framer-motion";
import axios from "axios";

function AdminPageOrder() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchOrders = async () => {
        try {
            const res = await axios.get("orders/all");
            setOrders(res.data.orders);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        setLoading(true);

        fetchOrders();
    }, []);

    console.log(orders);
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
                    <div className="grid  h-full">
                        <div className="grid grid-cols-4 shadow-lg shadow-bg_main ">
                            <div className="  bg-bg_main   p-small  p-8 flex flex-col  justify-between ">
                                <div className="flex flex-col gap-8 ">
                                    <Link to="/AdminAccount">
                                        <button className="text-left ">
                                            Account Management
                                        </button>
                                    </Link>
                                    <Link to="/AdminOrder">
                                        <button className="text-left text-text_green">
                                            Order Management
                                        </button>
                                    </Link>
                                    <Link to="/AdminItems">
                                        <button className="text-left">
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
                                <h4 className=" text-bg_main">
                                    Order Management
                                </h4>

                                <div className=" shadow-lg shadow-bg_subBg  rounded-b-2xl">
                                    <div className="grid grid-cols-7  bg-nav_admin shadow-lg shadow-bg_subBg rounded-t-2xl p-small py-2">
                                        <button>Status</button>
                                        <button>Shipping Status</button>
                                        <button>Items</button>
                                        <button>Quantity</button>

                                        <button>User</button>
                                        <button>Slip</button>
                                    </div>
                                    <div className="py-4">
                                        {orders.map((el, idx) => (
                                            <OrderList
                                                id={el.id}
                                                key={idx}
                                                status={el?.status}
                                                shippingStatus={
                                                    el?.shippingStatus
                                                }
                                                items={el?.Item?.name}
                                                quantity={el?.quantity}
                                                slip={el?.slip}
                                                user={el?.User?.email}
                                                fetchItems={fetchOrders()}
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

export default AdminPageOrder;
