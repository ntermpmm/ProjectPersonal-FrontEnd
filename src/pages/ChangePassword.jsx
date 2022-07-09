import NavbarContent from "../components/layout/header/navbar/NavbarContent";
import CardContent from "../components/card/CardContent";
import * as yup from "yup";
import Footer from "../components/layout/footer/Footer";
import { motion } from "framer-motion";
import UserIcon from "../components/common/UserIcon";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import InputForm from "../components/Form/InputForm";
import Submitbutton from "../components/Form/Submitbutton";
import { Form } from "../components/Form/Form";

function ChangePassword() {
    const { user, editPassword, logout } = useContext(AuthContext);

    const navigate = useNavigate();
    const schema = yup.object().shape({
        oldPassword: yup.string().required("oldPassword is requied"),
        Password: yup.string().required("newPassword is requied"),
        confirmPassword: yup
            .string()
            .required("confirmPassword is requied")
            .oneOf([yup.ref("Password")], "Password not match"),
    });

    if (!user) {
        return <div>loading</div>;
    }

    const handleSubmitPassword = async (data, reset) => {
        try {
            const regisAccess = await editPassword(
                data.oldPassword,
                data.Password,
                data.confirmPassword
            );
            logout();
            navigate("/");
        } catch (err) {
            console.log(err.response.data.message);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <NavbarContent />
            <div>asdas</div>
            <Form
                onSubmit={handleSubmitPassword}
                defaultValues={{
                    oldPassword: "",
                    password: "",
                    confirmPassword: "",
                }}
                schema={schema}
            >
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
                                    {/* <Link to="/Addresses" className="text-left">
                                        Addresses
                                    </Link> */}
                                    <Link
                                        to="/ChangePassword"
                                        className="text-left text-text_green"
                                    >
                                        Change Password
                                    </Link>
                                </div>
                            </div>
                            <Link className="p-small" to="/MyPurchase">
                                My Purchase
                            </Link>
                        </div>
                    </div>
                    <div className="bg-bg_subBg grid col-span-4 rounded-3xl p-8 gap-8">
                        <div className="text-left flex flex-col gap-2">
                            <h4>Set Password</h4>
                            <div className="flex justify-between">
                                <div className=" text-text_color text-sm">
                                    For your account's security, do not share
                                    your password with anyone else
                                </div>
                            </div>
                            <div className=" line-profile "></div>
                        </div>
                        <div className="relative">
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
                                        name={"Password"}
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
                                        name={"confirmPassword"}
                                        placeholder="Confirm New Password "
                                        className="bg-bg_subBg input px-8"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-4 justify-center mt-8">
                                <Submitbutton className="p-small text-text_color bg-bg_submit submit ">
                                    Submit
                                </Submitbutton>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>

            <Footer />
        </motion.div>
    );
}

export default ChangePassword;
