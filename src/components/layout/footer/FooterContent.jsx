import React from "react";
import { Link } from "react-router-dom";
import browser from "../../../assets/Image/icons/browser.png";
import github from "../../../assets/Image/icons/github.png";
import ig from "../../../assets/Image/icons/ig.png";
import twitter from "../../../assets/Image/icons/twitter.png";
import fb from "../../../assets/Image/icons/fb.png";
import LOGOfooter from "../../../assets/Image/LOGOFooter1.png";

function FooterContent() {
    return (
        <div className=" box w-screen z-10 bg-bg_hilight pb-4">
            <div className="max-w-screen-lg mx-auto flex justify-between items-center pt-5 ">
                <nav className="flex flex-col  items-start gap-8 py-8">
                    <Link to="/">
                        <img className="w-20" src={LOGOfooter} alt="" />
                    </Link>
                    <div className="flex gap-4">
                        <Link className="box p-pick" to="/">
                            Home
                        </Link>
                        <Link className="box p-small" to="/Allposts">
                            All Place
                        </Link>
                        <Link className="box p-small" to="/Allposts">
                            Highlight
                        </Link>
                        <Link className="box p-small" to="/Shop">
                            Shop
                        </Link>
                        <div className="p-small">© 2022 Tomorrow Rich</div>
                    </div>
                </nav>
                <div className="grid gap-4 grid-cols-5 box content text-center">
                    <img src={fb} alt="" className="w-6 h-6" />
                    <img src={ig} alt="" className="w-6 h-6" />
                    <img src={twitter} alt="" className="w-6 h-6" />
                    <img src={github} alt="" className="w-6 h-6" />
                    <img src={browser} alt="" className="w-6 h-6" />
                </div>
            </div>
        </div>
    );
}

export default FooterContent;
