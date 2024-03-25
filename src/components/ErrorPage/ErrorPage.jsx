import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-10 mt-32">
            <h2 className="text-3xl text-center">Oppss! Page not found </h2>
            <Link to="/"><button className="btn text-white bg-[#23BE0A]">Go Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;