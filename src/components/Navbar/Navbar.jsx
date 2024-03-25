import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li><NavLink className={({isActive})=>isActive? 'px-3 py-2 rounded-lg border border-[#23BE0A] text-[#23BE0A]':'border px-3 py-2 rounded-xl'} to="/">Home</NavLink></li>
        <li><NavLink className={({isActive})=>isActive? 'px-3 py-2 rounded-lg border border-[#23BE0A] text-[#23BE0A]':'border px-3 py-2 rounded-xl'} to="/listedbook">Listed Books</NavLink></li>
        <li><NavLink className={({isActive})=>isActive? 'px-3 py-2 rounded-lg border border-[#23BE0A] text-[#23BE0A]':'border px-3 py-2 rounded-xl'}  to="/pagestoread">Pages to Read</NavLink></li>
      
    </>
  );
  return (
    <div className="navbar bg-base-100 my-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 gap-2"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-2xl font-bold">BookNest</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal px-1 gap-2">{links}</ul>
      </div>
      <div className="navbar-end gap-2 ">
        <a className="btn text-white px-4 bg-[#23BE0A] rounded-lg">Sign In</a>
        <a className="btn bg-blue-300 text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
