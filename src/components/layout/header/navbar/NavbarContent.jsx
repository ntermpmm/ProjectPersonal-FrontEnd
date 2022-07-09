import { Link, useLocation } from "react-router-dom";
import LOGO from "../../../../assets/Image/LOGOFooter1.png";
import AuthContent from "./AuthContent/AuthContent";
import NavItems from "./NavItem/NavItems";

const titles = [
    {
        title: "HOME",
        to: "/",
    },
    {
        title: "ALL PLACE",
        to: "/Allposts",
    },
    {
        title: "HIGHLIGHT",
        to: "/#HIGHLIGHT",
    },
    {
        title: "SHOP",
        to: "/Shop",
    },
];

function NavbarContent() {
    const { pathname } = useLocation();

    return (
        <div className="max-w-screen-lg">
            <div className=" box fixed w-screen z-10 bg-bg_nav">
                <Link to="/">
                    <img
                        className="box w-20  right-0 left-0 absolute max-w-screen-lg mx-auto pt-4"
                        src={LOGO}
                        alt=""
                    />
                </Link>
                <div className="flex justify-evenly items-center z-9 py-8">
                    <ul className="flex gap-4 box relative text-center">
                        {titles.map((el) => (
                            <NavItems
                                key={el.title}
                                title={el.title}
                                to={el.to}
                                active={pathname === el.to}
                            />
                        ))}
                    </ul>
                    {/* <nav className="flex gap-4 box relative text-center">
                        <Link className="box p-small" to="/">
                            HOME
                        </Link>
                        <Link className="box p-pick relative " to="/Allposts">
                            ALL PLACE
                        </Link>
                        <Link className="box p-small" to="/Allposts">
                            HIGHLIGHT
                        </Link>
                        <Link className="box p-small" to="/Shop">
                            SHOP
                        </Link>
                        <div></div>
                    </nav> */}

                    <AuthContent />
                    {/* <nav className="grid gap-4 grid-cols-4 box content text-center">
                        <Link
                            className="box p-small col-start-3"
                            to="/Register"
                        >
                            REGISTER
                        </Link>
                        <Link className="box p-small" to="/Login">
                            LOGIN
                        </Link>
                    </nav> */}
                </div>
            </div>
        </div>
    );
}
export default NavbarContent;
