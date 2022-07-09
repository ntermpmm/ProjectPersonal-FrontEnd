import NavbarContent from "../components/layout/header/navbar/NavbarContent";
import CardContent from "../components/card/CardContent";
import Footer from "../components/layout/footer/Footer";
import { motion } from "framer-motion";
import UserIcon from "../components/common/UserIcon";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import InputForm from "../components/Form/InputForm";
import { Form } from "../components/Form/Form";
import items from "../assets/Image/ItemsCards.png";
import axios from "axios";

function MyPurchase() {
    const { user, loading, fetchMe } = useContext(AuthContext);

    const Orders = user?.Orders;
    console.log(user?.Orders);
    console.log("item term");
    console.log(user?.Orders[0]?.Item);
    console.log("item");

    useEffect(() => {
        fetchMe();
    }, []);

    if (!user) {
        return <div>loading</div>;
    }

    return (
        <>
            {loading ? (
                <h1>Loading</h1>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <NavbarContent />
                    <div>asdas</div>
                    <div className="relative max-w-screen-lg mx-auto rounded-3xl grid grid-cols-5  text-center pt-12 pb-4 flex flex-col mt-48 gap-8">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col text-center  items-center">
                                <UserIcon size="60" src={user.profilePic} />
                                <div className="p-small">
                                    {user.firstName + user.lastName || " "}
                                </div>
                                <div className="p-smaller">Edit Profile</div>
                            </div>
                            <div className="text-left flex flex-col gap-8">
                                <div className="flex flex-col gap-2">
                                    <Link className="p-small" to="/Profile">
                                        My Account
                                    </Link>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Link className="p-small" to="/MyPurchase">
                                        My Purchase
                                    </Link>

                                    <div className="flex flex-col gap-2 p-small">
                                        <Link
                                            to="/MyPurchase"
                                            className="text-left text-text_green"
                                        >
                                            Items
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-bg_subBg grid col-span-4 rounded-3xl p-8 gap-8">
                            <div className="text-left flex flex-col gap-2">
                                <h4>Your Purchase</h4>
                                <div className="flex justify-between">
                                    <div className=" text-text_color text-sm">
                                        For your account's security, do not
                                        share your password with anyone else
                                    </div>
                                </div>
                                <div className=" line-profile "></div>
                            </div>

                            {Orders.map((el, idx) => (
                                <div
                                    key={idx}
                                    className="grid grid-cols-4 gap-8"
                                >
                                    <div>
                                        <img
                                            src={el.Item.ImgHero || items}
                                            alt=""
                                        />
                                    </div>

                                    <div className=" col-span-3 text-left ">
                                        <div className="flex flex-col  h-full gap-8">
                                            <div className="grid grid-cols-3 ">
                                                <div className="p-small text-left">
                                                    Name:
                                                </div>
                                                <div className="p-small col-span-2">
                                                    {el?.Item.name}
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-3 ">
                                                <div className="p-small text-left">
                                                    Price:
                                                </div>
                                                <div className="p-small col-span-2">
                                                    {el?.Item.price} BATH
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-3 ">
                                                <div className="p-small text-left">
                                                    Status:
                                                </div>
                                                <div className="p-small col-span-2">
                                                    {el?.status}
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-3 ">
                                                <div className="p-small text-left">
                                                    Shipping Status:
                                                </div>
                                                <div className="p-small col-span-2">
                                                    {el?.shippingStatus}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-10 line-profile "></div>
                                    </div>
                                    <div className=" line-profile "></div>
                                </div>
                            ))}
                            {/* <Form>
                        <div className="flex flex-col gap-8">
                            <div className="grid grid-cols-3 items-baseline">
                                <div className="p-small">Old Password</div>
                                <InputForm
                                    type="password"
                                    name={"oldPassword"}
                                    placeholder="Old Password "
                                    className="bg-bg_subBg input px-8"
                                />
                            </div>
                            <div className="grid grid-cols-3 items-baseline">
                                <div className="p-small">New Password</div>
                                <InputForm
                                    type="password"
                                    name={"NewPassword"}
                                    placeholder="New Password "
                                    className="bg-bg_subBg input px-8"
                                />
                            </div>
                            <div className="grid grid-cols-3 items-baseline">
                                <div className="p-small">
                                    Confirm New Password
                                </div>
                                <InputForm
                                    type="password"
                                    name={"ConfirmPassword"}
                                    placeholder="Confirm New Password "
                                    className="bg-bg_subBg input px-8"
                                />
                            </div>
                        </div>
                    </Form> */}
                            <div className="flex gap-4 justify-center">
                                <button className="p-small text-text_color bg-bg_submit submit ">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </motion.div>
            )}
        </>
    );
}

export default MyPurchase;
