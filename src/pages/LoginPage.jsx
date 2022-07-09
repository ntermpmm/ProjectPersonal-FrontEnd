import React, { useContext, useState } from "react";
import * as yup from "yup";
import NavbarLogin from "../components/layout/header/navbar/NavbarLogin";
import BG from "../assets/Image/LoginBG.png";
import LOGO from "../assets/Image/LOGOFooter1.png";
import { motion } from "framer-motion";
import { AuthContext } from "../contexts/AuthContext";
import { ErrorContext } from "../contexts/ErrorContext";
import { Navigate, useNavigate } from "react-router-dom";
import { Form } from "../components/Form/Form";
import InputForm from "../components/Form/InputForm";
import Submitbutton from "../components/Form/Submitbutton";

function LoginPage() {
    const schema = yup.object().shape({
        Email: yup.string().required("Email is requied").email("Email"),
        Password: yup.string().required("Password is requied"),
    });

    const { login, user } = useContext(AuthContext);
    const { setError } = useContext(ErrorContext);
    const navigate = useNavigate();

    const handleSubmitLogin = async (data, reset) => {
        try {
            const loginAccess = await login(data.Email, data.Password);

            if (loginAccess) {
                navigate("/");
            }
        } catch (err) {
            setError(err.response.data.message);
        }
    };
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <NavbarLogin />
            <Form
                onSubmit={handleSubmitLogin}
                defaultValues={{ Email: "", Password: "" }}
                schema={schema}
                className="relative"
            >
                <img
                    src={BG}
                    alt=""
                    className="w-screen h-screen object-cover absolute  -z-20"
                />
                <div className="max-w-screen-lg h-screen  mx-auto  box grid justify-center text-center z-10">
                    <div className="box flex flex-col  justify-center items-center">
                        <div className="box flex flex-col gap-8 bg-bg_subBg py-8 rounded-lg">
                            <div className="flex flex-col gap-4">
                                <img
                                    src={LOGO}
                                    alt=""
                                    className="w-3/12 mx-auto"
                                />
                                <h4>LOGIN</h4>
                                <p className="p-smaller">Access your believe</p>
                            </div>

                            <div className="grid gap-4 w-3/5 mx-auto text-text_color">
                                <InputForm
                                    name={"Email"}
                                    placeholder="Phone Number or Email "
                                    className="bg-bg_subBg input px-8"
                                />
                                <InputForm
                                    type="password"
                                    name={"Password"}
                                    placeholder="Password "
                                    className="bg-bg_subBg input px-8"
                                />
                            </div>
                            <Submitbutton className="bg-bg_submit submit box  mx-auto">
                                Login
                            </Submitbutton>
                            <div className="flex gap-4 mx-auto">
                                <button className="p-smaller">
                                    Create an Account?
                                </button>
                                <button className="p-footer">Sign up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </motion.div>
    );
}

export default LoginPage;
