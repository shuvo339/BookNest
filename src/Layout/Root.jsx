import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto lg:p-0 px-6">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;