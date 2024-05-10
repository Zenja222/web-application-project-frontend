import React from "react";
import INavbar from "./components/common/Navbar/INavbar";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import MainPage from "./components/common/MainPage/MainPage";

export default function App() {
    const location = useLocation();
    const params = useParams();

    const showMainPageContent = !["/bookings", "/rooms"].includes(location.pathname) &&
        !location.pathname.startsWith("/booking/") &&
        !location.pathname.startsWith("/room/");

    return (
        <>
            <header>
                <INavbar />
                {showMainPageContent && <MainPage />}
                <Container>
                    <Outlet />
                </Container>
            </header>
        </>
    );
}
