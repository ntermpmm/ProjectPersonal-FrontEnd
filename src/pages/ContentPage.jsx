import { useEffect, useRef, useState } from "react";
import NavbarContent from "../components/layout/header/navbar/NavbarContent";
import contentBG from "../assets/Image/contentMain.jpg";
import { motion } from "framer-motion";
import ContentDescription from "../components/content/ContentDescription";
import CardStep from "../components/card/CardStep";
import { BeakerIcon } from "@heroicons/react/solid";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import FooterContent from "../components/layout/footer/FooterContent";
import { useContent } from "../contexts/ContentContext";
import ContentStep from "../components/content/ContentStep";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

AOS.init();

function ContentPage() {
    const [content, setContent] = useState([]);
    const [step, setStep] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    // let content = useContent();

    // const updateStep = () => {
    //     const newStep = [...step];
    //     let count = newStep?.length;
    //     for (let i = count; i <= 10; i++) {
    //         newStep.push({
    //             image: contentBG,
    //             description: "Coming Soon",
    //         });
    //     }
    //     setStep(newStep);
    // };
    useEffect(() => {
        setLoading(true);
        const fetchMe = async () => {
            try {
                const resMe = await axios.get(`/contents/${id}`);
                console.log("IN EFFECT");
                setContent(resMe.data.content);
                console.log(resMe.data.content);

                const defualtStep = resMe.data.content.Steps;
                let count = defualtStep.length;
                for (let i = count; i <= 2; i++) {
                    defualtStep.push({
                        image: contentBG,
                        description: "Coming Soon",
                    });
                }
                setStep(defualtStep);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        };
        fetchMe();
        // updateStep();
    }, []);

    // useEffect(() => {
    //     try {
    //         if (step) {
    //             let count = step?.length;

    //             for (let i = count; i <= 10; i++) {
    //                 step.push({
    //                     image: contentBG,
    //                     description: "Coming Soon",
    //                 });
    //             }
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }, [step]);
    const sectionEl = useRef();

    return (
        <>
            {loading ? (
                <h1>Loading</h1>
            ) : (
                <motion.div
                    id="section1"
                    className="relative h-screen"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* ============================== Section 1  =============================== */}
                    <NavbarContent />

                    <div className=" grid gap-36">
                        <div className="relative box text-center ">
                            <img
                                src={content.mainPhoto}
                                alt=""
                                className="absolute opacity-50 -z-10 w-screen h-screen"
                            />
                            <div className="grid grid-rows-3 items-center  h-screen max-w-screen-lg mx-auto">
                                <div
                                    className="  row-start-2 grid text-center content-center box gap-8"
                                    data-aos="fade-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-offset="500"
                                    data-aos-duration="1000"
                                >
                                    <h1>{content.nameContent}</h1>
                                    <p className="tracking-widest text-text_green text-3xl font-semibold">
                                        {content.caption}
                                    </p>
                                </div>
                                <button
                                    onClick={() =>
                                        window.location.replace("#section2")
                                    }
                                    className="row-start-3 flex justify-center"
                                    data-aos="fade-up"
                                    data-aos-offset="100"
                                    data-aos-duration="3000"
                                >
                                    <button
                                        className="animate-pulse arrow-circle-down text-text_color"
                                        data-aos="fade-in"
                                        data-aos-offset="100"
                                        data-aos-duration="3000"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-12 w-12"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>
                                </button>
                            </div>
                        </div>
                        {/* ============================== Section 2  =============================== */}
                        <div
                            className="max-w-screen-lg mx-auto text-center grid gap-20"
                            data-aos="fade-in"
                            data-aos-offset="100"
                            data-aos-duration="1000"
                        >
                            <ContentDescription
                                title={content.title}
                                description={content.description}
                                description2={content.description2}
                            />
                        </div>
                        <div id="section2"></div>
                        <div
                            className="max-w-screen-lg mx-auto text-center grid  gap-12"
                            data-aos="fade-in"
                            data-aos-offset="100"
                            data-aos-duration="1000"
                        >
                            <div className="grid gap-8">
                                <h1 className="p-pick">HOW TO WISH</h1>
                                <h5>{content.type}</h5>
                            </div>
                            {/* ============================== HOW TO WISH =============================== */}

                            <ContentStep
                                howToDescription={content.howToDescription}
                                howToTitle={content.howToTitle}
                            />
                            {step && (
                                <div className="grid gap-16 ">
                                    {step.map((el) => (
                                        <CardStep
                                            key={el.id}
                                            image={el.image}
                                            description={el.description}
                                        />
                                    ))}
                                    {/* <CardStep />
                                <CardStep /> */}
                                </div>
                            )}
                            <button
                                onClick={() =>
                                    window.location.replace("#section1")
                                }
                                className="animate-pulse absolute -bottom-10 -right-36 mr-4 mb-4 text-text_color"
                                data-aos="fade-in"
                                data-aos-offset="100"
                                data-aos-duration="3000"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-12 w-12"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 11l7-7 7 7M5 19l7-7 7 7"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* ================================ Footer ==================================== */}
                        <FooterContent />
                    </div>
                </motion.div>
            )}
        </>
    );
}

export default ContentPage;
