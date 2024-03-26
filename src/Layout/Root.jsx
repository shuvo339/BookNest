import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto lg:p-0 px-6">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ToastContainer />
        </div>
    );
};

export default Root;