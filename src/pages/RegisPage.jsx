import { useContext, useState } from "react";
import * as yup from "yup";
import NavbarLogin from "../components/layout/header/navbar/NavbarLogin";
import BG from "../assets/Image/LoginBG.png";
import LOGO from "../assets/Image/LOGOFooter1.png";
import { motion } from "framer-motion";
import { AuthContext } from "../contexts/AuthContext";
import { ErrorContext } from "../contexts/ErrorContext";
import { Form } from "../components/Form/Form";
import InputForm from "../components/Form/InputForm";
import Submitbutton from "../components/Form/Submitbutton";
import { useNavigate } from "react-router-dom";

function RegisPage() {
    const navigate = useNavigate();
    const schema = yup.object().shape({
        email: yup
            .string()
            .required("Email is requied")
            .email("Email is fucking requied bitch!!!"),
        password: yup.string().required("Password is requied"),
        confirmPassword: yup
            .string()
            .required("Password is requied")
            .oneOf([yup.ref("password")], "Password not match"),
    });

    const { signUp } = useContext(AuthContext);
    const { setError } = useContext(ErrorContext);

    const handleSubmitSignup = async (data, reset) => {
        try {
            const regisAccess = await signUp(
                data.email,
                data.password,
                data.confirmPassword
            );

            navigate("/");
            // if (regisAccess) {
            // }
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
                defaultValues={{ email: "", password: "", confirmPassword: "" }}
                schema={schema}
                className="relative"
                onSubmit={handleSubmitSignup}
            >
                <img
                    src={BG}
                    alt=""
                    className="w-screen h-screen object-cover absolute  -z-20"
                />
                <div className="max-w-screen-lg h-screen  mx-auto box grid justify-center text-center z-10">
                    <div className="box flex flex-col justify-center items-center">
                        <div className="box flex flex-col gap-8 bg-bg_subBg py-8 px-8 rounded-lg">
                            <div className="flex flex-col gap-4">
                                <img
                                    src={LOGO}
                                    alt=""
                                    className="w-3/12 mx-auto"
                                />
                                <h4>Create An Account</h4>
                                <p className="p-smaller">Create your destiny</p>
                            </div>

                            <div className="grid gap-4 w-3/5 mx-auto text-text_color">
                                <InputForm
                                    name={"email"}
                                    placeholder="Phone Number or Email "
                                    className="bg-bg_subBg input px-8"
                                />
                                <InputForm
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="bg-bg_subBg input px-8"
                                />
                                <InputForm
                                    type="password"
                                    name={"confirmPassword"}
                                    placeholder="Confirm Password "
                                    className="bg-bg_subBg input px-8"
                                />
                            </div>
                            <Submitbutton className="bg-bg_submit submit box  mx-auto">
                                Create an Account
                            </Submitbutton>
                            <div className="flex gap-4 mx-auto">
                                <button className="p-smaller">
                                    Already Have An Account?
                                </button>
                                <button className="p-footer">Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </motion.div>
    );
}

export default RegisPage;
