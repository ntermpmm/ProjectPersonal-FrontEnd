import contentBG from "../../assets/Image/contentMain.jpg";

function CardStep(Steps) {
    const { image, description } = Steps;
    console.log(image);
    return (
        <div
            className="relative max-w-screen-lg mx-auto rounded-3xl bg-bg_subBg text-center py-12 grid  gap-8"
            data-aos="fade-in"
            data-aos-offset="100"
            data-aos-duration="1000"
        >
            <div className="px-12">
                <img src={image || contentBG} alt="" className="rounded-3xl " />
            </div>
            <p className="p_small px-12">{description || "Coming Soon"}</p>
        </div>
    );
}

export default CardStep;
