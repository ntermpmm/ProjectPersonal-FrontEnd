import NavbarContent from "../components/layout/header/navbar/NavbarContent";
import CardContent from "../components/card/CardContent";
import Footer from "../components/layout/footer/Footer";
import { motion } from "framer-motion";
import UserIcon from "../components/common/UserIcon";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import Input from "../ui/Input";

function Profile() {
    const { user } = useContext(AuthContext);
    if (!user) {
        return <div>loading</div>;
    }

    return (
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
                            {user.firstName}
                            {user.lastName}
                        </div>
                        <div className="p-smaller">Edit Profile</div>
                    </div>
                    <div className="text-left flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <p>My Account</p>
                            <div className="flex flex-col gap-2 p-small">
                                <Link to="/Profile" className="text-left ">
                                    Profile
                                </Link>
                                <Link
                                    to="/Addresses"
                                    className="text-left text-text_green"
                                >
                                    Addresses
                                </Link>
                                <Link
                                    to="/ChangePassword"
                                    className="text-left"
                                >
                                    Change Password
                                </Link>
                            </div>
                        </div>
                        <p>My Purchase</p>
                    </div>
                </div>
                <div className="bg-bg_subBg grid col-span-4 rounded-3xl p-8 gap-8">
                    <div className="text-left flex flex-col gap-2">
                        <h4>My Addresses</h4>

                        <div className=" line-profile "></div>
                    </div>
                    <div className="grid grid-cols-4 gap-12 ">
                        <div className="flex flex-col justify-evenly col-span-3 text-left gap-8">
                            <div className="grid grid-cols-2">
                                <p>Fullname</p>
                                <p>{user.firstName + user.lastName || "add"}</p>
                            </div>
                            <div className="grid grid-cols-2">
                                <p>Phone</p>
                                <p>{user.phoneNumber || "add"}</p>
                            </div>
                            <div className="grid grid-cols-2">
                                <p>Address</p>
                                <p>{user.addresses || "add"}</p>
                            </div>
                            <div className="grid grid-cols-2">
                                <p>Phone Number</p>
                                <p>{user.phoneNumber || "Add"}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <button className="p-small text-xs bg-bg_subBg p-2 rounded-lg">
                                Change Addresses
                            </button>
                        </div>
                    </div>
                    <div className=" line-profile "></div>
                    <div className="flex gap-4 justify-center">
                        <button className="p-small text-text_color bg-bg_submit submit ">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </motion.div>
    );
}

export default Profile;
