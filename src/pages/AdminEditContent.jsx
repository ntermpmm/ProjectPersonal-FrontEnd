import React from "react";
import { Link } from "react-router-dom";

function AdminEditContent() {
    return (
        <div className=" bg-bg_admin ">
            <div className="max-w-screen-lg mx-auto py-12 ">
                <h2 className=" text-center pb-12 text-bg_main">
                    Create Content
                </h2>
                <div className="flex gap-4 ">
                    <Link to="/">
                        <p className="text-bg_main">Home</p>
                    </Link>
                    <Link to="/AdminContent">
                        <p className="text-bg_main">Admin Content</p>
                    </Link>
                </div>
                <div className="flex flex-col shadow-lg shadow-bg_subBg rounded-xl">
                    <div className=" bg-nav_admin text-center flex flex-col items-center gap-4 p-24">
                        <input
                            type="text"
                            placeholder="Title"
                            className="w-60 h-24 text-center text-6xl rounded-lg bg-nav_admin"
                        />
                        <input
                            type="text"
                            placeholder="sub title"
                            className="h-8 text-center text-2xl rounded-lg bg-nav_admin"
                        />
                        <button className=" bg-text_green px-8 shadow-lg text-bg_admin shadow-bg_subBg  py-2 rounded-lg">
                            Upload Image Title
                        </button>
                    </div>

                    {/* =================================== Description  ======================================== */}
                    <div className=" flex flex-col items-center gap-4 py-12 ">
                        <input
                            type="text"
                            placeholder="Ttitle Description"
                            className=" text-center text-lg rounded-lg placeholder:text-bg_admin py-4 shadow-lg shadow-bg_subBg  bg-bg_subBg"
                        />
                        <input
                            type="text"
                            placeholder="Description"
                            className=" text-center text-lg rounded-lg placeholder:text-bg_admin py-4 shadow-lg shadow-bg_subBg  bg-bg_subBg"
                        />
                        <button className=" bg-bg_main px-8 shadow-lg text-bg_admin shadow-bg_subBg  py-2 rounded-lg">
                            Add More Title & Description
                        </button>
                    </div>
                    <div className=" border-bg_main border-4 shadow-lg shadow-bg_subBg"></div>

                    {/* =================================== How to Wish  ======================================== */}
                    <div className=" flex flex-col items-center gap-8 py-12 ">
                        <h3 className=" text-bg_main">How to Wish</h3>
                        <input
                            type="text"
                            placeholder="Type of Wish"
                            className=" text-center text-lg rounded-lg placeholder:text-bg_admin py-4 shadow-lg shadow-bg_subBg  bg-bg_subBg"
                        />
                        <div className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Ttitle Description"
                                className=" text-center text-lg rounded-lg placeholder:text-bg_admin py-4 shadow-lg shadow-bg_subBg  bg-bg_subBg"
                            />
                            <input
                                type="text"
                                placeholder="Description"
                                className=" text-center text-lg rounded-lg placeholder:text-bg_admin py-4 shadow-lg shadow-bg_subBg  bg-bg_subBg"
                            />
                        </div>
                        <button className=" bg-bg_main px-8 shadow-lg text-bg_admin shadow-bg_subBg  py-2 rounded-lg">
                            Add More Title & Description
                        </button>
                    </div>
                    <div className=" border-bg_main border-4 shadow-lg shadow-bg_subBg"></div>

                    {/* =================================== How to Wish  ======================================== */}
                    <div className=" flex flex-col items-center gap-8 py-12 ">
                        <h3 className=" text-bg_main">STEP</h3>
                        <button className=" bg-text_green px-8 shadow-lg text-bg_admin shadow-bg_subBg  py-2 rounded-lg">
                            Upload Image Title
                        </button>

                        <div className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Ttitle Description"
                                className=" text-center text-lg rounded-lg placeholder:text-bg_admin py-4 shadow-lg shadow-bg_subBg  bg-bg_subBg"
                            />
                            <input
                                type="text"
                                placeholder="Description"
                                className=" text-center text-lg rounded-lg placeholder:text-bg_admin py-4 shadow-lg shadow-bg_subBg  bg-bg_subBg"
                            />
                        </div>
                        <button className=" bg-bg_main px-8 shadow-lg text-bg_admin shadow-bg_subBg  py-2 rounded-lg">
                            Add More Step
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminEditContent;
