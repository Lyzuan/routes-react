import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const PageLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />

        </>
    );
}

export default PageLayout;