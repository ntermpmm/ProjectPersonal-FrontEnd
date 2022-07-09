import { Link } from "react-router-dom";
import Cards from "../../assets/Image/Cards.png";
import defaultPic from "../../assets/Image/profileImg.png";

function Carditems(content) {
    const { id, nameContent, mainPhoto } = content;

    return (
        <Link
            className="    relative text-center    hover:-translate-y-1 hover:scale-110 duration-300 group "
            to={"/Content/" + id}
        >
            <div className="h-72 w-full ">
                <img
                    alt=""
                    src={mainPhoto || Cards}
                    className="img items-center rounded-xl"
                ></img>
                <h6 className=" font-bold absolute bottom-10 right-0 left-0 invisible opacity-0  group-hover:visible group-hover:opacity-100 group-hover:duration-300 ">
                    {nameContent || "Coming Soon"}
                </h6>
            </div>
        </Link>
    );
}

export default Carditems;
