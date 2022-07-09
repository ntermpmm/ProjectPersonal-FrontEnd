import LogoFooter from "../../../assets/Image/LOGOFooter1.png";

import React from "react";

function Footer() {
    return (
        <div className="max-w-screen-lg mx-auto box text-center pt-36 pb-12  opacity-50">
            <div className="flex flex-col justify-center gap-8 box ">
                <p className="line"></p>
                <div className="w-full box flex justify-center">
                    <img src={LogoFooter} alt="" className="box w-1/12 " />
                </div>
                <div className="w-full box">
                    <div className=" grid grid-cols-1 gap-8 w-full items-baseline">
                        <div className="flex justify-evenly box ">
                            <button className="box p-footer text-text_gold">
                                THAILAND
                            </button>
                            <button className="box p-footer text-text_gold">
                                LOCATION
                            </button>
                            <button className="box p-footer text-text_gold">
                                LOCATION
                            </button>
                            <button className="box p-footer text-text_gold">
                                LOCATION
                            </button>
                        </div>
                    </div>
                </div>
                <p className="text-text_gold text-base opacity-50">
                    © 2022 Tomorrow Rich
                </p>
            </div>
        </div>
    );
}

export default Footer;
