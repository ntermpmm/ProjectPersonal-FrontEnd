import React, { useContext } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import AdminPageAccount from "../pages/AdminPageAccount";
import AllContainPage from "../pages/AllContainPage";
import ContentPage from "../pages/ContentPage";
import HomePages from "../pages/HomePages";
import ItemsPage from "../pages/ItemsPage";
import LoginPage from "../pages/LoginPage";
import Payment from "../pages/Payment";
import Profile from "../pages/Profile";
import ProfileAddresses from "../pages/ProfileAddresses";
import ChangePassword from "../pages/ChangePassword";
import RegisPage from "../pages/RegisPage";
import ShopPage from "../pages/ShopPage";
import MyPurchase from "../pages/MyPurchase";
import AdminPageOrder from "../pages/AdminPageOrder";
import AdminPageContent from "../pages/AdminPageContent";
import AdminPageItems from "../pages/AdminPageItems";
import AdminCreateContent from "../pages/AdminCreateContent";
import AdminCreateItems from "../pages/AdminCreateItems";
import UpdateContent from "../pages/UpdateContent";
import { AuthContext } from "../contexts/AuthContext";

function Router() {
    const { user } = useContext(AuthContext);
    return (
        <Routes>
            <Route path="/" element={<HomePages />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/Register" element={<RegisPage />} />
            <Route path="/Allposts" element={<AllContainPage />} />
            <Route path="/Content/:id" element={<ContentPage />} />
            <Route path="/Shop" element={<ShopPage />} />
            <Route path="/Items/:id" element={<ItemsPage />} />

            {/* <Route path="/profile" element={<Navigate to="/Login" />} /> */}

            {user?.role === "ADMIN" && (
                <>
                    <Route path="/Payment/:id" element={<Payment />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="/Addresses" element={<ProfileAddresses />} />
                    <Route
                        path="/ChangePassword"
                        element={<ChangePassword />}
                    />

                    <Route path="/MyPurchase" element={<MyPurchase />} />
                    <Route
                        path="/AdminAccount"
                        element={<AdminPageAccount />}
                    />
                    <Route path="/AdminOrder" element={<AdminPageOrder />} />
                    <Route path="/AdminItems" element={<AdminPageItems />} />
                    <Route
                        path="/AdminContent"
                        element={<AdminPageContent />}
                    />
                    <Route
                        path="/UpdateContent/:id"
                        element={<UpdateContent />}
                    />
                    <Route
                        path="/AdminCreateContent"
                        element={<AdminCreateContent />}
                    />
                    <Route
                        path="/AdminCreateItems"
                        element={<AdminCreateItems />}
                    />
                    <Route path="*" element={<Navigate to="/" />} />
                </>
            )}

            {user?.role === "USER" && (
                <>
                    <Route path="/Payment/:id" element={<Payment />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="/Addresses" element={<ProfileAddresses />} />
                    <Route
                        path="/ChangePassword"
                        element={<ChangePassword />}
                    />
                    <Route path="/MyPurchase" element={<MyPurchase />} />

                    <Route path="*" element={<Navigate to="/" />} />
                </>
            )}
            {/* {user ? (
                <>
                    <Route path="/Payment/:id" element={<Payment />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="/Addresses" element={<ProfileAddresses />} />
                    <Route
                        path="/ChangePassword"
                        element={<ChangePassword />}
                    />
                    <Route path="/MyPurchase" element={<MyPurchase />} />
                    <Route
                        path="/AdminAccount"
                        element={<AdminPageAccount />}
                    />
                    <Route path="/AdminOrder" element={<AdminPageOrder />} />
                    <Route path="/AdminItems" element={<AdminPageItems />} />
                    <Route
                        path="/AdminContent"
                        element={<AdminPageContent />}
                    />
                    <Route
                        path="/UpdateContent/:id"
                        element={<UpdateContent />}
                    />
                    <Route
                        path="/AdminCreateContent"
                        element={<AdminCreateContent />}
                    />
                    <Route
                        path="/AdminCreateItems"
                        element={<AdminCreateItems />}
                    />
                    <Route path="*" element={<Navigate to="/" />} />
                </>
            ) : (
                <>
                    <Route
                        path="/Payment/:id"
                        element={<Navigate to="/Login" />}
                    />
                    <Route path="*" element={<Navigate to="/" />} />
                </>
            )} */}
            <Route path="/Payment/:id" element={<Navigate to="/Login" />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}

export default Router;
