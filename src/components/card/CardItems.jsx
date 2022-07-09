import { Link } from "react-router-dom";
import Items from "../../assets/Image/ItemsCards.png";
import defaultPic from "../../assets/Image/profileImg.png";

function Carditems(items) {
    const { id, ImgHero, name } = items;
    const itemsId = () => {
        const pathId = id;
        if (!pathId) {
            return "/";
        }
        return pathId;
    };

    return (
        <Link
            className=" relative text-center  hover:-translate-y-1 hover:scale-110 duration-300 group"
            to={"/Items/" + itemsId()}
        >
            <div className="h-72 w-full">
                <img
                    alt=""
                    src={ImgHero || Items}
                    className="rounded-xl img items-center"
                ></img>
            </div>
            <h6 className=" font-bold absolute bottom-10 right-0 left-0 invisible  opacity-0  group-hover:visible group-hover:opacity-100 group-hover:duration-300">
                {name || "Coming Soon"}
            </h6>
        </Link>
    );
}

export default Carditems;
