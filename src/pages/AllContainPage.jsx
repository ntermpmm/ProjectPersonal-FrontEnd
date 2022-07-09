import contentBG from "../assets/Image/contentMain.jpg";
import React from "react";
import NavbarContent from "../components/layout/header/navbar/NavbarContent";
import CardContent from "../components/card/CardContent";
import Footer from "../components/layout/footer/Footer";
import { motion } from "framer-motion";
import { useContent } from "../contexts/ContentContext";

function AllContainPage() {
    const content = useContent();
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <NavbarContent />
            <div>asdas</div>
            <div className="relative max-w-screen-lg mx-auto rounded-3xl bg-bg_subBg text-center pt-12 pb-4 flex flex-col mt-48 gap-8">
                <div className="flex flex-col gap-12">
                    <h3>ALL Place</h3>
                    <div className="flex justify-evenly  box">
                        <button className="box p-small text-text_gold">
                            THAILAND
                        </button>
                        <button className="box p-small">LOCATION</button>
                        <button className="box p-small">LOCATION</button>
                        <button className="box p-small">LOCATION</button>
                    </div>
                </div>
                <div className="px-12 gap-12 grid grid-cols-4">
                    {content.map((el) => (
                        <CardContent
                            key={el.id}
                            id={el.id}
                            mainPhoto={el.mainPhoto}
                            nameContent={el.nameContent}
                        />
                    ))}
                    {/* <CardContent />
                    <CardContent />
                    <CardContent />
                    <CardContent />
                    <CardContent />
                    <CardContent />
                    <CardContent />
                    <CardContent />
                    <CardContent />
                    <CardContent />
                    <CardContent /> */}
                </div>
                <div className="flex gap-4 justify-center">
                    <button className="p-small text-text_gold">1</button>
                    <button className="p-small">2</button>
                    <button className="p-small">3</button>
                    <button className="p-small">4</button>
                    <button className="p-small">5</button>
                    <button className="p-small">{">"}</button>
                </div>
            </div>
            <Footer />
        </motion.div>
    );
}

export default AllContainPage;
