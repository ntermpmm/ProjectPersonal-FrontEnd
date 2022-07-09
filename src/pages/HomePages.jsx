import React, { useEffect, useState } from "react";
import VideoBG from "../assets/video/Video.mp4";
import NavbarHome from "../components/layout/header/navbar/NavbarHome";
import Cards from "../assets/Image/Cards.png";
import BGSec2 from "../assets/Image/HomeBGSec2.jpg";
import Carditems from "../components/card/CardItems";
import CardContent from "../components/card/CardContent";
import ItemBGSec2 from "../assets/Image/ItemsBGSec2.png";
import ItemHomeSection3_1 from "../assets/Image/ItemHomeSection3-1.jpg";
import ItemHomeSection3_2 from "../assets/Image/ItemHomeSection3-2.jpg";
import ItemHomeSection3_3 from "../assets/Image/ItemHomeSection3-3.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/layout/footer/Footer";
import axios from "axios";
import { useContent } from "../contexts/ContentContext";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
// ..
AOS.init();

function HomePages() {
    const content = useContent();
    const [items, setItems] = useState([]);
    const [highlightContent, setHighlightContent] = useState([]);
    const [loading, setLoading] = useState(false);
    const { fetchMe } = useContext(AuthContext);

    useEffect(() => {
        setLoading(true);
        const fetchMe = async () => {
            try {
                const resHightlight = await axios.get("/contents/all");
                setHighlightContent(resHightlight.data.contents);
                const defualHightlight = resHightlight.data.contents;
                let countHL = defualHightlight.length;
                for (let i = countHL; i <= 7; i++) {
                    defualHightlight.push({});
                }
                setHighlightContent(defualHightlight);
                console.log(highlightContent);

                const resItems = await axios.get("/items/all");
                setItems(resItems.data.items);

                const defualtItem = resItems.data.items;
                let count = defualtItem.length;
                for (let i = count; i <= 8; i++) {
                    defualtItem.push({});
                }
                setItems(defualtItem);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        };
        fetchMe();
    }, []);

    console.log(highlightContent);

    return (
        <>
            <motion.div
                className="relative h-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {/*=========================================== NavBar =========================================== */}

                <NavbarHome />

                {/*=========================================== VideoBG =========================================== */}
                <div className="abolute w-screen">
                    <video
                        className="object-cover h-screen w-full shadow-md -z-1000 opacity-70"
                        src={VideoBG}
                        autoPlay
                        loop
                        muted
                    ></video>
                </div>

                {/*=========================================== HiLight =========================================== */}
                <div className=" absolute bottom-0 right-0 left-0 bg-bg_hilight py-4 ">
                    <div className=" max-w-screen-lg mx-auto">
                        <div className="flex gap-8 pb-4">
                            <div className="p-pick">LASTEST NEWS</div>
                            <Link className="p-small" to="/Allposts">
                                VIEWS ALL
                            </Link>
                        </div>
                        <div className="grid grid-cols-4 gap-8 w-full  h-full">
                            {highlightContent.slice(0, 4).map((el) => (
                                <CardContent
                                    key={el.id}
                                    id={el.id}
                                    mainPhoto={el.mainPhoto}
                                    nameContent={el.nameContent}
                                />
                            ))}
                            {/* <CardContent /> */}
                        </div>
                    </div>
                </div>

                {/*=========================================== Section 2=========================================== */}
                <div className="relative ">
                    <div className=" w-full h-full box text-center grid grid-rows-1">
                        {/*---------------------------  BG  --------------------------  */}
                        <img
                            src={BGSec2}
                            alt=""
                            className="opacity-10 absolute object-cover h-full w-full -z-10"
                            id="HIGHLIGHT"
                        />
                        <div className="max-w-screen-lg mx-auto grid grid-rows-1 gap-36 py-48">
                            <div className=" box grid grid-rows-1 gap-8 ">
                                {/*---------------------------  First Content Section2  --------------------------  */}
                                <div
                                    className=""
                                    data-aos="fade-up"
                                    data-aos-duration="2000"
                                >
                                    <h2 className="opacity-50">Join</h2>
                                    <h1>Tomorrow Rich</h1>
                                </div>
                                <div className="flex justify-center">
                                    <div className="box line border-2 w-40"></div>
                                </div>
                                <p className="box">
                                    In a region that has suffered many
                                    devastating earthquakes and natural
                                    disasters, the fact that this temple has
                                    survived is nothing short of miraculous, and
                                    not for the reason you might think but more
                                    on that later. Built in 1738, the temple was
                                    originally intended to serve the locally
                                    based settlers that had moved to the area
                                    from the province of Fujian.
                                </p>
                            </div>
                            {/*---------------------------  Second Content Section2  --------------------------  */}
                            <div className="box grid grid-rows-1 gap-16">
                                <div className="flex justify-between box">
                                    <p className="box">THAILAND</p>
                                    <p className="box">LOCATION</p>
                                    <p className="box">LOCATION</p>
                                    <p className="box">LOCATION</p>
                                </div>
                                <div
                                    className="grid grid-cols-4 gap-12"
                                    data-aos="fade-in-up"
                                >
                                    {highlightContent.slice(0, 8).map((el) => (
                                        <CardContent
                                            key={el.id}
                                            id={el.id}
                                            mainPhoto={el.mainPhoto}
                                            nameContent={el.nameContent}
                                        />
                                    ))}
                                    {/* <CardContent />
                                    {/* <CardContent /> */}
                                    {/* <CardContent />
                                    <CardContent />
                                    <CardContent />
                                    <CardContent />
                                    <CardContent /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*=========================================== Section 3 =========================================== */}
                <div className="relative box">
                    <img
                        src={ItemBGSec2}
                        alt=""
                        className="absolute -z-10 h-full w-full object-cover"
                    />

                    <img
                        src={ItemHomeSection3_1}
                        alt=""
                        className="absolute w-1/5 left-56"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="100"
                    />
                    <img
                        src={ItemHomeSection3_2}
                        alt=""
                        className="absolute w-1/5 top-96"
                        data-aos="fade-up"
                        data-aos-duration="3000"
                        data-aos-delay="300"
                    />

                    <img
                        src={ItemHomeSection3_3}
                        alt=""
                        className="absolute w-1/5 right-0 top-48"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        data-aos-delay="200"
                    />

                    {/*---------------------------  First Item Section3  --------------------------  */}
                    <div className="box max-w-screen-lg mx-auto h-screen grid grid-rows-1 items-end text-center gap-8 py-20">
                        <div className="box">
                            {/* <h2 className="opacity-50">Join</h2> */}
                            <h1>Believe Better</h1>
                        </div>
                        <div className="flex justify-center">
                            <div className="box line border-2 w-40"></div>
                        </div>
                        <p className="box">
                            In a region that has suffered many devastating
                            earthquakes and natural disasters, the fact that
                            this temple has survived is nothing short of
                            miraculous, and not for the reason you might think
                            but more on that later. Built in 1738, the temple
                            was originally intended to serve the locally based
                            settlers that had moved to the area from the
                            province of Fujian.
                        </p>
                    </div>
                </div>
                {/*---------------------------  Second Item Section3  --------------------------  */}

                <div className="max-w-screen-lg mx-auto grid grid-row-1 gap-16 ">
                    <div className="box  grid grid-rows-1 gap-16 pt-36 justify-around">
                        <div className="flex justify-between items-baseline box">
                            <h3 className="box">Rich Shop</h3>
                            <div className="flex justify-center gap-8">
                                <button className="box p-pick">THAILAND</button>
                                <button className="box p-small">
                                    LOCATION
                                </button>
                                <button className="box p-small">
                                    SEE MORE
                                </button>
                            </div>
                        </div>
                        <div
                            className="grid grid-cols-3 gap-12 box"
                            data-aos="fade-in-up"
                            data-aos-duration="2000"
                        >
                            {items.slice(0, 9).map((el) => (
                                <Carditems
                                    key={el.id}
                                    id={el.id}
                                    ImgHero={el.ImgHero}
                                    name={el.name}
                                />
                            ))}

                            {/* <Carditems />
                            <Carditems /> */}
                            {/* <Carditems />
                            <Carditems />
                            <Carditems />
                            <Carditems />
                            <Carditems />
                            <Carditems /> */}
                        </div>
                    </div>
                </div>
                {/*===========================================  Footer =========================================== */}

                <Footer />
            </motion.div>
        </>
    );
}

export default HomePages;
