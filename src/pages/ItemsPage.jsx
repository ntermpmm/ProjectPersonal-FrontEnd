import Carditems from "../components/card/CardItems";
import CardContent from "../components/card/CardContent";
import NavbarContent from "../components/layout/header/navbar/NavbarContent";
import { Link, useParams } from "react-router-dom";
import FooterContent from "../components/layout/footer/FooterContent";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

function ItemsPage() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const fetchItem = async () => {
            try {
                const res = await axios.get(`/items/${id}`);
                setItems(res.data.item);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        };
        fetchItem();
    }, []);

    console.log(items);
    return (
        <>
            {loading ? (
                <h1>Loading</h1>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <NavbarContent />

                    <div className="flex flex-col justify-between">
                        <div className="max-w-screen-lg mx-auto">
                            <div className="flex flex-col">
                                <div className="my-48">
                                    {/* ========================== ItemsHero ========================= */}
                                    <div className="grid grid-cols-2">
                                        <div className=" my-8 mx-2">
                                            <img
                                                alt=""
                                                src={items?.ImgHero}
                                                className="img items-center rounded-xl"
                                            ></img>
                                        </div>
                                        <div className="p-12 bg-bg_subBg rounded-xl m-8">
                                            <div className="grid gap-8">
                                                <div className="grid gap-4">
                                                    <h4 className=" text-6xl">
                                                        {items?.name}
                                                    </h4>
                                                    {/* <div className="p-small">
                                                        For lover in summer{" "}
                                                    </div> */}
                                                </div>
                                                <div className="flex gap-4 items-baseline">
                                                    <p className=" text-text_green opacity-50 text-2xl line-through">
                                                        ฿{items?.oldPrice}
                                                    </p>
                                                    <p className=" text-text_gold text-3xl">
                                                        ฿{items?.price}
                                                    </p>
                                                </div>
                                                <div className="grid grid-cols-2 ">
                                                    <p className="text-lg">
                                                        Shipping
                                                    </p>
                                                    <p className="text-lg text-right">
                                                        {items?.shippingPrice}
                                                    </p>
                                                </div>
                                                <div className="grid grid-cols-2 text-lg">
                                                    <p className="text-lg">
                                                        Type
                                                    </p>
                                                    <p className="text-lg text-right">
                                                        {items?.typeOfItems}
                                                    </p>
                                                </div>

                                                <div className="grid grid-cols-1 gap-4  text-text_color mt-4">
                                                    <div className=" text-center font-bold py-4 bg-bg_subBg rounded-lg  drop-shadow-xl p-2 col-span-2">
                                                        LIMITED ONLY 1 FOR EACH
                                                    </div>
                                                </div>
                                                <div className="flex justify-center">
                                                    <Link
                                                        className="p-small text-center bg-bg_submit submit w-full"
                                                        to={"/Payment/" + id}
                                                    >
                                                        BUY NOW
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ========================== descrip ========================= */}
                                    <div className="grid gap-8 py-8">
                                        <p className="text-text_gold">
                                            Product Description
                                        </p>
                                        <div className="grid gap-4">
                                            <div>
                                                <p>The Package Includes:</p>
                                                <p>{items?.packageInclude}</p>
                                            </div>
                                            <div>
                                                <p> Description: </p>
                                                <p>
                                                    {items?.packageDescription}
                                                </p>
                                            </div>
                                            <div>
                                                <p>Specification: </p>
                                                <p>
                                                    {
                                                        items?.packageSpecification
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                        <div className="grid gap-4 grid-cols-3 ">
                                            <img
                                                src={items?.ImgDescrip1}
                                                alt=""
                                                className="rounded-xl"
                                            />
                                            <img
                                                src={items?.ImgDescrip2}
                                                alt=""
                                                className="rounded-xl"
                                            />
                                            <img
                                                src={items?.ImgDescrip3}
                                                alt=""
                                                className="rounded-xl"
                                            />
                                        </div>
                                        <div>
                                            <p>
                                                Your Reliable Choice of The
                                                Store!
                                            </p>
                                            <p>
                                                Our focus and our reputation are
                                                built on innovation and quality.
                                                You may find products with lower
                                                prices in other stores, but
                                                their quality and service cannot
                                                be equal to ours. Please trust
                                                and follow our shop!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ============================= Footer  ===================================== */}
                    </div>
                    <div>
                        <FooterContent />
                    </div>
                </motion.div>
            )}
        </>
    );
}

export default ItemsPage;
