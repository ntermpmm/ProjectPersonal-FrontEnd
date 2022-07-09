import NavbarContent from "../components/layout/header/navbar/NavbarContent";
import CardContent from "../components/card/CardContent";
import Footer from "../components/layout/footer/Footer";
import { motion } from "framer-motion";
import * as yup from "yup";
import UserIcon from "../components/common/UserIcon";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Input from "../ui/Input";
import { Form } from "../components/Form/Form";
import InputForm from "../components/Form/InputForm";
import UploadImage from "../components/formNotYup/UploadImage";
import Submitbutton from "../components/Form/Submitbutton";

function Profile() {
    const [profilePic, setProfilePic] = useState("");
    const navigate = useNavigate();
    const schema = yup.object().shape({
        firstName: yup.string().required("First Name is requied"),
        lastName: yup.string().required("Last Name is requied"),
        phoneNumber: yup.string().required("Phone Number is requied"),
        dateOfBirth: yup.string().required("Date is requied"),
        addresses: yup.string().required("addresses is requied"),
    });
    const { user, editProfile, logout, fetchMe } = useContext(AuthContext);
    if (!user) {
        return <div>loading</div>;
    }
    console.log(user);

    const handleSubmitEdit = async (data, reset) => {
        try {
            const edit = await editProfile(
                // data.firstName,
                // data.lastName,
                // data.phoneNumber,
                // data.dateOfBirth,
                // data.addresses,
                data,
                profilePic
            );
            navigate("/");
            fetchMe();
            // console.log(data);
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
                onSubmit={handleSubmitEdit}
                defaultValues={{
                    firstName: user.firstName,
                    lastName: user.lastName,
                    phoneNumber: user.phoneNumber,
                    dateOfBirth: user.dateOfBirth,
                    addresses: user.addresses,
                }}
                schema={schema}
                className="relative max-w-screen-lg mx-auto rounded-3xl grid grid-cols-5  text-center pt-12 pb-4 mt-48 gap-8"
            >
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
                            <Link to="/Profile">
                                <p>My Account</p>
                            </Link>
                            <div className="flex flex-col gap-2 p-small">
                                <Link
                                    to="/Profile"
                                    className="text-left text-text_green"
                                >
                                    Profile
                                </Link>
                                {/* <Link to="/Addresses" className="text-left">
                                    Addresses
                                </Link> */}
                                <Link
                                    to="/ChangePassword"
                                    className="text-left"
                                >
                                    Change Password
                                </Link>
                            </div>
                        </div>
                        <Link to="/MyPurchase">
                            <p>My Purchase</p>
                        </Link>
                    </div>
                </div>

                <div className="bg-bg_subBg grid col-span-4 rounded-3xl p-8 gap-8">
                    <div className="text-left flex flex-col gap-2">
                        <h4>My Profile</h4>
                        <div className="flex justify-between">
                            <div className=" text-text_color text-sm">
                                Manage your account
                            </div>
                            <Link to="/AdminAccount">
                                <div className="p-small">Admin</div>
                            </Link>
                        </div>
                        <div className=" line-profile "></div>
                    </div>
                    <div className="grid grid-cols-4 gap-12 ">
                        {/* <div className="flex flex-col justify-evenly gap-8 text-right">
                            
                            <p>Last Name</p>
                            <p>Email</p>
                            <p>Phone Number</p>
                            <p>Gender</p>
                            <p>Date of Birth</p>
                        </div> */}

                        <div className="flex flex-col justify-evenly col-span-3 text-left gap-8">
                            <div className="grid grid-cols-2">
                                <p>First Name</p>
                                <p>
                                    {" "}
                                    <InputForm
                                        className=" rounded-lg text-bg_main px-4"
                                        name={"firstName"}
                                    />
                                    {/* {user.firstName || (
                                        <InputForm
                                            className=" rounded-lg text-bg_main px-4"
                                            name={"firstName"}
                                        />
                                    )} */}
                                </p>
                            </div>
                            <div className="grid grid-cols-2">
                                <p>Last Name</p>
                                <p>
                                    <InputForm
                                        className=" rounded-lg text-bg_main px-4"
                                        name={"lastName"}
                                    />
                                    {/* {user.lastName || (
                                        <InputForm
                                            className=" rounded-lg text-bg_main px-4"
                                            name={"lastName"}
                                        />
                                    )} */}
                                </p>
                            </div>
                            {/* <div className="grid grid-cols-2">
                                <p>Gender</p>
                                <div className="grid grid-cols-3 text-left text-text_color">
                                    {user.gender || (
                                        <div className="flex gap-8">
                                            <div className="flex items-baseline gap-2">
                                                <input
                                                    value="Male"
                                                    type="radio"
                                                    name={"gender"}
                                                />
                                                Male
                                            </div>
                                            <div className="flex items-baseline gap-2 ">
                                                <input
                                                    value="Female"
                                                    type="radio"
                                                    name={"gender"}
                                                />
                                                Female
                                            </div>
                                            <div className="flex items-baseline gap-2">
                                                <input
                                                    value="Other"
                                                    type="radio"
                                                    name={"gender"}
                                                />
                                                Other
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div> */}

                            <div className="grid grid-cols-2">
                                <p>Birth Date</p>
                                <div className="">
                                    <p>
                                        <InputForm
                                            className=" rounded-lg text-center text-lg  shadow-xl bg-bg_subBg text-text_color px-12 "
                                            name={"dateOfBirth"}
                                            type={"date"}
                                        />
                                        {/* {user.dateOfBirth || (
                                            <InputForm
                                                className=" rounded-lg text-center text-lg  shadow-xl bg-bg_subBg text-text_color px-12 "
                                                name={"dateOfBirth"}
                                                type={"date"}
                                            />
                                        )} */}
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <p>Email</p>
                                <p>{user.email}</p>
                            </div>
                            <div className="grid grid-cols-2">
                                <p>Phone Number</p>
                                <p>
                                    {" "}
                                    <InputForm
                                        className=" rounded-lg text-bg_main px-4"
                                        name={"phoneNumber"}
                                    />
                                    {/* {user.phoneNumber || (
                                        <InputForm
                                            className=" rounded-lg text-bg_main px-4"
                                            name={"phoneNumber"}
                                        />
                                    )} */}
                                </p>
                            </div>

                            <div className="grid grid-cols-2">
                                <p>Address</p>
                                <p>
                                    <InputForm
                                        className=" rounded-lg text-bg_main px-4"
                                        name={"addresses"}
                                    />
                                    {/* {user.addresses || (
                                        <InputForm
                                            className=" rounded-lg text-bg_main px-4"
                                            name={"addresses"}
                                        />
                                    )} */}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center ">
                            <UserIcon
                                size="60"
                                src={
                                    profilePic
                                        ? URL.createObjectURL(profilePic)
                                        : user.profilePic
                                }
                            />

                            <input
                                type="file"
                                className="w-20 mt-6  text-xs"
                                onChange={(e) => {
                                    e.stopPropagation();
                                    if (e.target.files[0]) {
                                        setProfilePic(e.target.files[0]);
                                    }
                                }}
                                // onDelete={() => setProfilePic(null)}
                            />

                            {/* <UploadImage
                                className="p-small text-xs bg-bg_subBg p-2 rounded-lg"
                                value={profilePic}
                                type="file"
                                name="profilePic"
                                onChange={(e) => {
                                    e.stopPropagation();
                                    if (e.target.files[0]) {
                                        setProfilePic(e.target.files[0]);
                                    }
                                }}
                                onDelete={() => setProfilePic(null)}
                            /> */}
                            {/* <button className="p-small text-xs bg-bg_subBg p-2 rounded-lg">
                                Select Image
                            </button> */}
                            {/* <div>
                                <div className="p-small  text-xs">
                                    File size : maximum 1 MB
                                </div>
                                <div className="p-small  text-xs">
                                    File extension: .JPEG, .PNG
                                </div>
                            </div> */}
                        </div>
                    </div>

                    <div className="flex gap-4 justify-center">
                        <Submitbutton
                            // onClick={handleSubmitEdit}
                            className="p-small text-text_color bg-bg_submit submit "
                        >
                            Submit
                        </Submitbutton>
                    </div>
                </div>
            </Form>

            <Footer />
        </motion.div>
    );
}

export default Profile;
