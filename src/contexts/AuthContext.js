import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../config/axios";
import {
    getAccessToken,
    removeAccessToken,
    setAccessToken,
} from "../services/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    console.log(user);
    const navigate = useNavigate;

    const fetchMe = async () => {
        try {
            const token = getAccessToken();
            if (token) {
                const resMe = await axios.get("/users/me");
                setUser(resMe.data.user);
            }
            setLoading(false);
        } catch (err) {
            removeAccessToken();
            navigate("/login");
        }
    };

    useEffect(() => {
        setLoading(true);

        fetchMe();
    }, []);

    // =================================== login ==================================

    const login = async (emailOrPhone, password) => {
        const res = await axios.post("/auth/login", {
            emailOrPhone,
            password,
        });
        setAccessToken(res.data.token);
        const resMe = await axios.get("users/me");
        setUser(resMe.data.user);
        return res.data.token;
    };

    const signUp = async (emailOrPhone, password, confirmPassword) => {
        const res = await axios.post("/auth/signup", {
            emailOrPhone,
            password,
            confirmPassword,
        });
        setAccessToken(res.data.token);
        const resMe = await axios.get("users/me");
        setUser(resMe.data.user);
    };

    // const editProfile = async (
    //     firstName,
    //     lastName,
    //     phoneNumber,
    //     dateOfBirth,
    //     addresses
    // ) => {
    //     const res = await axios.put(`/users/${user.id}`, {
    //         firstName,
    //         lastName,
    //         phoneNumber,
    //         dateOfBirth,
    //         addresses,
    //     });
    //     setUser(res.data.user);
    // };

    const editProfile = async (
        { firstName, lastName, phoneNumber, dateOfBirth, addresses },
        profilePic
    ) => {
        try {
            const formData = new FormData();
            formData.append("firstName", firstName);
            formData.append("lastName", lastName);
            formData.append("phoneNumber", phoneNumber);
            formData.append("dateOfBirth", dateOfBirth);
            formData.append("addresses", addresses);
            formData.append("profilePic", profilePic);

            // console.log(mainProfile);
            const res = await axios.put(`/users/${user.id}`, formData);
            // setUser(res.data.user);
            // console.log(res.data.user);
            return res;
        } catch (err) {
            console.log(err);
        }
    };

    const editPassword = async (oldPassword, password, confirmPassword) => {
        const res = await axios.put(`/users/password/${user.id}`, {
            oldPassword,
            password,
            confirmPassword,
        });
    };

    const logout = () => {
        removeAccessToken();
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                logout,
                loading,
                user,
                signUp,
                editProfile,
                login,
                editPassword,
                fetchMe,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;

export { AuthContext };
