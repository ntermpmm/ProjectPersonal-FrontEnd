import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../../contexts/AuthContext";
import UserIcon from "../../../../common/UserIcon";
import defaultUserPic from "../../../../../assets/Image/profileImg.png";

function AuthContent({
    classNameNav = "grid gap-4 grid-cols-4 box content text-center",
    classNameNav2 = "col-start-3",
    classNameNav3 = "grid gap-4 grid-cols-4 box content text-center py-5",
}) {
    const { user, logout } = useContext(AuthContext);
    return user ? (
        <nav className={classNameNav}>
            <Link
                className={classNameNav2}
                to={user.role === "ADMIN" ? "/AdminAccount" : "/Profile"}
            >
                <UserIcon size="60" src={user.profilePic || defaultUserPic} />
            </Link>

            <button className="box p-pick" onClick={logout}>
                Logout
            </button>
        </nav>
    ) : (
        <nav className={classNameNav3}>
            <div className={classNameNav2}>
                <Link className="box p-small" to="/Register">
                    REGISTER
                </Link>
            </div>
            <Link className="box p-pick" to="/Login">
                LOGIN
            </Link>
        </nav>
    );
}

export default AuthContent;

// col-start-3 grid gap-4  grid-cols-2
