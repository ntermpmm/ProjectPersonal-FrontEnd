import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "../components/Form/Form";
import InputForm from "../components/Form/InputForm";
import * as yup from "yup";
import Submitbutton from "../components/Form/Submitbutton";
import { useState } from "react";
import UploadImage from "../components/formNotYup/UploadImage";
import { createItems } from "../api/postContent";

function AdminCreateItems() {
    const [mainItems, setMainItems] = useState("");
    const [imgDescrip1, setImgDescrip1] = useState("");
    const [imgDescrip2, setImgDescrip2] = useState("");
    const [imgDescrip3, setImgDescrip3] = useState("");

    const navigate = useNavigate();

    const schema = yup.object().shape({
        itemName: yup.string().required("itemName is requied"),
        oldPrice: yup.string().required("oldPrice is requied"),
        price: yup.string().required("price is requied"),
        typeOfItems: yup.string().required("itemType is requied"),
        packageInclude: yup.string().required("packageInclude is requied"),
        description: yup.string().required("description is requied"),
        packageSpecification: yup
            .string()
            .required("packageSpecification is requied"),
    });
    const handleSubmitCreateItems = async (data, reset) => {
        try {
            console.log("trigger");
            const resContent = await createItems(
                data,
                mainItems,
                imgDescrip1,
                imgDescrip2,
                imgDescrip3
            );
            console.log("resContent");
            // const contentId = resContent.data.content?.id;
            // console.log(contentId);
            // const submitStep = await createSteps(steps, contentId);
            // console.log(submitStep);
            if (resContent) {
                navigate("/");
            }
        } catch (err) {
            console.log(err.response.data.message);
        }
    };
    return (
        <Form
            onSubmit={handleSubmitCreateItems}
            className=" bg-bg_admin "
            defaultValues={{
                itemName: "",
                oldPrice: "",
                price: "",
                typeOfItems: "",
                packageInclude: "",
                description: "",
                packageSpecification: "",
            }}
            schema={schema}
        >
            <div className="max-w-screen-lg mx-auto py-12 ">
                <h2 className=" text-center pb-12 text-bg_main">
                    Create Items
                </h2>
                <div className="flex gap-4 ">
                    <Link to="/">
                        <p className="text-bg_main">Home</p>
                    </Link>
                    <Link to="/AdminItems">
                        <p className="text-bg_main">Admin Items</p>
                    </Link>
                </div>
                <div className="flex flex-col items-center justify-center  shadow-lg shadow-bg_subBg rounded-xl">
                    <div className="grid grid-cols-2 gap-8">
                        <div className=" bg-nav_admin text-center flex flex-col items-center gap-4 p-24">
                            <UploadImage
                                name="mainItems"
                                value={mainItems}
                                onChange={(e) => {
                                    if (e.target.files[0]) {
                                        setMainItems(e.target.files[0]);
                                    }
                                }}
                                onDelete={(e) => setMainItems(null)}
                            />
                            {/* <button className=" bg-text_green px-8 shadow-lg text-bg_admin shadow-bg_subBg  py-2 rounded-lg">
                                Upload Image Title
                            </button> */}
                        </div>

                        {/* =================================== Description  ======================================== */}
                        <div className=" flex flex-col items-center bg-nav_admin  gap-4 py-12 ">
                            <InputForm
                                name={"itemName"}
                                type="text"
                                placeholder="Items Name"
                                className=" text-center text-lg rounded-lg placeholder:text-bg_admin py-4 shadow-lg shadow-bg_subBg  bg-bg_subBg"
                            />

                            <InputForm
                                name={"oldPrice"}
                                type="text"
                                placeholder="oldPrice"
                                className=" text-center text-lg rounded-lg placeholder:text-bg_admin py-4 shadow-lg shadow-bg_subBg  bg-bg_subBg"
                            />
                            <InputForm
                                name={"price"}
                                type="text"
                                placeholder="Price"
                                className=" text-center text-lg rounded-lg placeholder:text-bg_admin py-4 shadow-lg shadow-bg_subBg  bg-bg_subBg"
                            />
                            {/* <InputForm
                                name={"shippingPrice"}
                                type="text"
                                placeholder="shippingPrice"
                                className=" text-center text-lg rounded-lg placeholder:text-bg_admin py-4 shadow-lg shadow-bg_subBg  bg-bg_subBg"
                            /> */}
                            <InputForm
                                name={"typeOfItems"}
                                type="text"
                                placeholder="Type Of Items"
                                className=" text-center text-lg rounded-lg placeholder:text-bg_admin py-4 shadow-lg shadow-bg_subBg  bg-bg_subBg"
                            />
                        </div>
                    </div>

                    {/* =================================== How to Wish  ======================================== */}
                    <div className=" flex flex-col items-center gap-8 py-12 ">
                        <div className="flex flex-col gap-4">
                            <p className="text-text_gold">
                                Product Description
                            </p>
                            <div>
                                <p className="text-bg_main">
                                    The Package Includes:
                                </p>
                                <InputForm
                                    name={"packageInclude"}
                                    type="text"
                                    placeholder="The Package Includes"
                                    className=" text-center text-lg rounded-lg placeholder:text-bg_admin py-4 shadow-lg shadow-bg_subBg  bg-bg_subBg"
                                />
                            </div>
                            <div>
                                <p className="text-bg_main"> Description: </p>
                                <InputForm
                                    name={"description"}
                                    type="text"
                                    placeholder="Description"
                                    className=" text-center text-lg rounded-lg placeholder:text-bg_admin py-4 shadow-lg shadow-bg_subBg  bg-bg_subBg"
                                />
                            </div>
                            <div>
                                <p className="text-bg_main"> Specification: </p>
                                <InputForm
                                    name={"packageSpecification"}
                                    type="text"
                                    placeholder="packageSpecification"
                                    className=" text-center text-lg rounded-lg placeholder:text-bg_admin py-4 shadow-lg shadow-bg_subBg  bg-bg_subBg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* =================================== How to Wish  ======================================== */}
                    <div className="max-w-screen-lg pl-36 mx-auto flex gap-8 py-12 ">
                        <UploadImage
                            name="imgDescrip1"
                            value={imgDescrip1}
                            onChange={(e) => {
                                if (e.target.files[0]) {
                                    setImgDescrip1(e.target.files[0]);
                                }
                            }}
                            onDelete={(e) => setImgDescrip1(null)}
                        />
                        <UploadImage
                            name="imgDescrip2"
                            value={imgDescrip2}
                            onChange={(e) => {
                                if (e.target.files[0]) {
                                    setImgDescrip2(e.target.files[0]);
                                }
                            }}
                            onDelete={(e) => setImgDescrip2(null)}
                        />
                        <UploadImage
                            name="imgDescrip3"
                            value={imgDescrip3}
                            onChange={(e) => {
                                if (e.target.files[0]) {
                                    setImgDescrip3(e.target.files[0]);
                                }
                            }}
                            onDelete={(e) => setImgDescrip3(null)}
                        />
                        {/* <button className=" bg-text_green px-8 shadow-lg text-bg_admin shadow-bg_subBg  py-2 rounded-lg">
                                Upload Image Title
                            </button>
                            <button className=" bg-text_green px-8 shadow-lg text-bg_admin shadow-bg_subBg  py-2 rounded-lg">
                                Upload Image Title
                            </button>
                            <button className=" bg-text_green px-8 shadow-lg text-bg_admin shadow-bg_subBg  py-2 rounded-lg">
                                Upload Image Title
                            </button> */}
                    </div>
                    <div className=" border-bg_main border-4 shadow-lg shadow-bg_subBg"></div>
                    <div className="flex flex-col items-center p-16">
                        <Submitbutton
                            // onClick={handleSubmitCreateStep}
                            className="bg-bg_submit submit box w-full px-24"
                        >
                            Submit
                        </Submitbutton>
                    </div>
                </div>
            </div>
        </Form>
    );
}

export default AdminCreateItems;
