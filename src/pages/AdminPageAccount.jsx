import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AccountList from "../components/card/Admin/AccountList";
import { motion } from "framer-motion";
import axios from "axios";

function AdminPageAccount() {
    const [accounts, setAccounts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchAccounts = async () => {
        try {
            const res = await axios.get("users/alluser");
            setAccounts(res.data.user);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        setLoading(true);

        fetchAccounts();
    }, []);

    console.log(accounts);
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
                    <div className=" grid h-full">
                        <div className="grid grid-cols-5 shadow-lg shadow-bg_main ">
                            <div className="  bg-bg_main   p-small  p-8 flex flex-col  justify-between ">
                                <div className="flex flex-col gap-8 ">
                                    <Link to="/AdminAccount">
                                        <button className="text-left text-text_green">
                                            Account Management
                                        </button>
                                    </Link>
                                    <Link to="/AdminOrder">
                                        <button className="text-left">
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
                            <div className=" bg-bg_admin  col-span-4 p-8 flex flex-col gap-8 ">
                                <div className="flex flex-col gap-4">
                                    <h4 className=" text-bg_main">
                                        Account Management
                                    </h4>
                                </div>
                                <div>
                                    <div>
                                        <div className=" shadow-lg shadow-bg_subBg  rounded-b-2xl">
                                            <div className="grid grid-cols-8 gap-12  bg-nav_admin shadow-lg shadow-bg_subBg rounded-t-2xl p-small py-4 px-4">
                                                <button>Role</button>
                                                <button>FirstName</button>
                                                <button>LastName</button>
                                                <button>Gender</button>

                                                <button>Email</button>
                                                <button>PhoneNumber</button>
                                                <button>Address</button>
                                            </div>
                                            {accounts.map((el, idx) => (
                                                <div
                                                    key={idx}
                                                    className="py-4 overflow-scroll"
                                                >
                                                    <AccountList
                                                        id={el.id}
                                                        Role={el.role}
                                                        FirstName={el.firstName}
                                                        LastName={el.lastName}
                                                        Gender={el.gender}
                                                        Email={el.email}
                                                        PhoneNumber={
                                                            el.phoneNumber
                                                        }
                                                        Address={el.addresses}
                                                        fetchAccounts={
                                                            fetchAccounts
                                                        }
                                                    />
                                                </div>
                                            ))}
                                        </div>
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

export default AdminPageAccount;
