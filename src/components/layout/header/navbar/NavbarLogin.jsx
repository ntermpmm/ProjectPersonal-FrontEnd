import { Link } from "react-router-dom";
import LOGO from "../../../../assets/Image/LogoRow.png";
import AuthContent from "./AuthContent/AuthContent";

function NavbarLogin() {
    return (
        <div className="box fixed w-screen z-10">
            <div className="flex justify-around items-center z-9  pt-5 ">
                <nav className="flex items-center gap-4">
                    <img className="w-44" src={LOGO} alt="" />
                    <div className="flex gap-4">
                        <Link className="box p-small" to="/">
                            HOME
                        </Link>
                        <Link className="box p-small" to="/Allposts">
                            ALL PLACE
                        </Link>
                        <a className="box p-small" href="/#HIGHLIGHT">
                            HIGHLIGHT
                        </a>
                        <Link className="box p-small" to="/Shop">
                            SHOP
                        </Link>
                    </div>
                </nav>
                <AuthContent />
            </div>
        </div>
    );
}

export default NavbarLogin;
