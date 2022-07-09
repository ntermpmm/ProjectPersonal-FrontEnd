import React, { useContext, useState } from "react";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { createContent, createSteps } from "../api/postContent";
// import ContentContext from "../contexts/ContentContext";
import { Form } from "../components/Form/Form";
import InputForm from "../components/Form/InputForm";
import Submitbutton from "../components/Form/Submitbutton";
import { ErrorContext } from "../contexts/ErrorContext";
import UploadImage from "../components/formNotYup/UploadImage";
import StepForm from "../components/formNotYup/StepForm";

function AdminCreateContent() {
    const [mainPhoto, setMainPhoto] = useState("");

    const { setError } = useContext(ErrorContext);
    const navigate = useNavigate();

    const schema = yup.object().shape({
        country: yup.string().required("country is requied"),
        nameContent: yup.string().required("nameContent is requied"),
        caption: yup.string().required("caption is requied"),

        title: yup.string().required("TitleDescription is requied"),
        description: yup.string().required("Description is requied"),
        description2: yup.string().required("Description2 is requied"),
        type: yup.string().required("Type is requied"),
        howToTitle: yup.string().required("howToTitle is requied"),
        howToDescription: yup.string().required("howToDescription is requied"),
    });

    const [steps, setSteps] = useState([
        { stepTitle: "", stepDescription: "", stepPhoto: "" },
    ]);
    const handleStepsPhoto = (e, index) => {
        const values = [...steps];
        // values[index] = { ...values[index], stepPhoto: e.target.files[0] };
        if (e.target.files[0]) {
            values[index].stepPhoto = e.target.files[0];
            setSteps(values);
        }
    };
    const handleDelStepsPhoto = (e, index) => {
        const values = [...steps];
        values[index].stepPhoto = null;
        setSteps(values);
    };

    const handleSubmitStep = (e, index) => {
        const value = [...steps];
        value[index][e.target.name] = e.target.value;
        setSteps(value);
        // setSteps([value, { stepTitle: "", stepDescription: "" }]);
    };

    const handleAddStep = () => {
        setSteps([
            ...steps,
            { stepTitle: "", stepDescription: "", stepPhoto: "" },
        ]);
    };
    // console.log(steps);
    const handleSubmitCreateContent = async (data, reset) => {
        try {
            const resContent = await createContent(data, mainPhoto);
            console.log(resContent);
            const contentId = resContent.data.content?.id;
            console.log(contentId);
            const submitStep = await createSteps(steps, contentId);
            // console.log(submitStep);
            // if (submit) {
            //     // navigate("/");
            // }
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    return (
        <Form
            onSubmit={handleSubmitCreateContent}
            className=" bg-bg_admin "
            defaultValues={{
                country: "",
                nameContent: "",
                caption: "",
                mainPhoto: "",
                title: "",
                description: "",
                description2: "",
                type: "",
                howToTitle: "",
                howToDescription: "",
            }}
            schema={schema}
        >
            <div className="max-w-screen-lg mx-auto py-12 ">
                <h2 className=" text-center pb-12 text-text_color">
                    Create Content
                </h2>
                <div className="flex gap-4 ">
                    <Link to="/">
                        <p className="text-text_color">Home</p>
                    </Link>
                    <Link to="/AdminContent">
                        <p className="text-text_color">Admin Content</p>
                    </Link>
                </div>
                <div className="flex flex-col shadow-lg shadow-bg_subBg rounded-xl">
                    <div className=" bg-nav_admin text-center flex flex-col items-center gap-4 p-24">
                        <InputForm
                            name={"country"}
                            placeholder="Country"
                            className="w-60 h-24 text-center text-6xl rounded-lg bg-nav_admin text-text_color"
                        />
                        <InputForm
                            name={"nameContent"}
                            placeholder="Title"
                            className="w-60 h-24 text-center text-6xl rounded-lg bg-nav_admin text-text_color"
                        />
                        <InputForm
                            name={"caption"}
                            placeholder="Caption"
                            className="h-8 text-center text-2xl rounded-lg bg-nav_admin text-text_color"
                        />
                        {/* <InputForm
                            name={"mainPhoto"}
                            placeholder="mainPhoto"
                            className="h-8 text-center text-2xl rounded-lg bg-nav_admin"
                        /> */}
                        <UploadImage
                            value={mainPhoto}
                            onChange={(e) => {
                                if (e.target.files[0]) {
                                    setMainPhoto(e.target.files[0]);
                                }
                            }}
                            onDelete={() => setMainPhoto(null)}
                        />
                    </div>

                    {/* =================================== Description  ======================================== */}
                    <div className=" flex flex-col items-center gap-4 py-12 text-text_color">
                        <InputForm
                            name={"title"}
                            placeholder="Ttitle Description"
                            className=" text-center text-lg rounded-lg placeholder:text-bg_admin py-4 shadow-lg shadow-bg_subBg  bg-bg_subBg"
                        />
                        <InputForm
                            name={"description"}
                            placeholder="Description"
                            className=" text-center text-lg rounded-lg placeholder:text-bg_admin py-4 shadow-lg shadow-bg_subBg  bg-bg_subBg"
                        />
                        <InputForm
                            name={"description2"}
                            placeholder="Description2"
                            className=" text-center text-lg rounded-lg placeholder:text-bg_admin py-4 shadow-lg shadow-bg_subBg  bg-bg_subBg"
                        />
                    </div>
                    <div className=" border-bg_main border-4 shadow-lg shadow-bg_subBg"></div>

                    {/* =================================== How to Wish  ======================================== */}

                    <div className=" flex flex-col items-center gap-8 py-12 ">
                        <h3 className=" text-text_color">How to Wish</h3>
                        <InputForm
                            name={"type"}
                            placeholder="Type"
                            className=" text-center text-lg rounded-lg placeholder:text-bg_admin py-4 shadow-lg shadow-bg_subBg  bg-bg_subBg text-text_color"
                        />

                        <div className="flex flex-col gap-4 text-text_color">
                            <InputForm
                                name={"howToTitle"}
                                placeholder="howToDescription"
                                className=" text-center text-lg rounded-lg placeholder:text-bg_admin py-4 shadow-lg shadow-bg_subBg  bg-bg_subBg"
                            />
                            <InputForm
                                name={"howToDescription"}
                                placeholder="howToDescription"
                                className=" text-center text-lg rounded-lg placeholder:text-bg_admin py-4 shadow-lg shadow-bg_subBg  bg-bg_subBg"
                            />
                        </div>
                    </div>
                    <div className=" border-bg_main border-4 shadow-lg shadow-bg_subBg"></div>

                    {/* =================================== How to Wish  ======================================== */}
                    <div className=" flex flex-col items-center gap-8 py-12 ">
                        {steps.map((step, index) => (
                            <>
                                <div className="flex flex-col gap-4 text-center">
                                    <h3 className=" text-text_color">
                                        Step {index + 1}
                                    </h3>
                                    <UploadImage
                                        name="stepPhoto"
                                        value={step.stepPhoto}
                                        onChange={(e) =>
                                            handleStepsPhoto(e, index)
                                        }
                                        onDelete={(e) =>
                                            handleDelStepsPhoto(e, index)
                                        }
                                    />
                                    {/* <button className=" bg-text_green px-8 shadow-lg text-bg_admin shadow-bg_subBg  py-2 rounded-lg">
                                        Upload Image Title
                                    </button> */}
                                    <input
                                        onChange={(e) =>
                                            handleSubmitStep(e, index)
                                        }
                                        value={step.stepTitle}
                                        name="stepTitle"
                                        placeholder="Ttitle Description"
                                        className=" text-center text-lg rounded-lg placeholder:text-bg_admin py-4 shadow-lg shadow-bg_subBg  bg-bg_subBg text-text_color"
                                    />
                                    <input
                                        onChange={(e) =>
                                            handleSubmitStep(e, index)
                                        }
                                        name="stepDescription"
                                        value={step.stepDescription}
                                        type="text"
                                        placeholder="Description"
                                        className=" text-center text-lg rounded-lg placeholder:text-bg_admin py-4 shadow-lg shadow-bg_subBg  bg-bg_subBg text-text_color"
                                    />
                                </div>
                            </>
                        ))}
                        <button
                            onClick={handleAddStep}
                            className=" bg-bg_main px-8 shadow-lg text-bg_admin shadow-bg_subBg  py-2 rounded-lg"
                        >
                            Add More Step
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center p-16">
                    <Submitbutton
                        // onClick={handleSubmitCreateStep}
                        className="bg-bg_submit submit box"
                    >
                        Submit
                    </Submitbutton>
                </div>
            </div>
        </Form>
    );
}

export default AdminCreateContent;
