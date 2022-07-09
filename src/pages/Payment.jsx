import NavbarContent from "../components/layout/header/navbar/NavbarContent";
import CardContent from "../components/card/CardContent";
import Footer from "../components/layout/footer/Footer";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import UploadImage from "../components/formNotYup/UploadImage";
import { Form } from "../components/Form/Form";
import * as yup from "yup";
import Submitbutton from "../components/Form/Submitbutton";
import { AuthContext } from "../contexts/AuthContext";
import { createPayment } from "../api/postContent";

function Payment() {
    const [items, setItems] = useState("");
    const [slipPhoto, setSlipPhoto] = useState("");

    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const schema = yup.object().shape({});
    const navigate = useNavigate();

    const { user } = useContext(AuthContext);

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

    // console.log(user.id);

    const handleSubmitCreateContent = async (data, reset) => {
        try {
            const itemsId = items?.id;
            const userId = user?.id;
            console.log(userId);
            const submitOrder = await createPayment(slipPhoto, userId, itemsId);
            console.log(submitOrder);
            // if (submit) {
            navigate("/MyPurchase");
            // }
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
            <div>for nav</div>

            <div className="relative max-w-screen-lg mx-auto rounded-3xl  text-center pt-12 pb-4 flex flex-col  mt-48 gap-8">
                <div className="flex flex-col gap-12">
                    <div>
                        <h3>Payment</h3>
                        <p>Make your wish Happen!</p>
                    </div>
                </div>
                <div className="bg-bg_subBg p-12 rounded-3xl">
                    <Form
                        onSubmit={handleSubmitCreateContent}
                        defaultValues={{
                            slip: "",
                        }}
                        schema={schema}
                    >
                        <div className="grid grid-cols-4 pt-8">
                            <div>
                                <img
                                    alt=""
                                    src={items?.ImgHero}
                                    className="img items-center rounded-xl"
                                ></img>
                            </div>
                            <div className="px-8 col-span-2 items-baseline border-x-2 mx-4 ml-6 border-bg_subBg border-opacity-50">
                                <div className="flex flex-col gap-2 -mt-4">
                                    <h4 className=" text-5xl">{items?.name}</h4>
                                    {/* <div className="text-base text-text_color">
                                    {items?.typeOfItems}
                                </div> */}
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-between items-baseline">
                                        <p className="text-base">Order Total</p>
                                        <p className="text-lg">
                                            {items?.price} BATH
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-baseline">
                                        <p className="text-base">
                                            Delivery Charges
                                        </p>
                                        <p className="text-lg">Free</p>
                                    </div>
                                    <div className="flex justify-between items-baseline">
                                        <p className="text-base">Amount</p>
                                        <p className="text-lg">1</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h4 className="mt-8 text-3xl">Address</h4>
                                    <div className="flex justify-between ">
                                        <p className="text-base text-left">
                                            Thawin Kuwattananon
                                        </p>
                                        <p className="text-base text-right">
                                            222/134 thanon Ngamwongwan, Thung
                                            Song Hong, Lak Si, Bangkok 10210
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-8 ">
                                <div className="grid grid-row-2 gap-8 mt-8">
                                    <h4 className="text-3xl">Bank Account</h4>
                                    <div>
                                        <div className="p-small">KASIKORN</div>
                                        <div className="p-small">
                                            112-332-2-23123
                                        </div>
                                        <div className="p-small">
                                            TomorrowRich Coperate
                                        </div>
                                    </div>
                                </div>

                                <UploadImage
                                    value={slipPhoto}
                                    onChange={(e) => {
                                        if (e.target.files[0]) {
                                            setSlipPhoto(e.target.files[0]);
                                        }
                                    }}
                                    onDelete={() => setSlipPhoto(null)}
                                />
                                {/* <button className="p-small">Upload Slip</button> */}
                            </div>
                        </div>

                        <div className="flex gap-4 justify-center">
                            <Submitbutton className="p-small text-center mt-12 bg-bg_submit submit ">
                                BUY NOW
                            </Submitbutton>
                        </div>
                    </Form>
                </div>
            </div>
            <Footer />
        </motion.div>
    );
}

export default Payment;
