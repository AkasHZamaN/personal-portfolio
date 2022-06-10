import React from "react";
import { Link } from "react-router-dom";
import portLogo from '../../portfolio-img/portLogo.png';
import avatar from '../../portfolio-img/avatar.png';
import Profile from "./Profile";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link to={"/"}>HOME</Link>
      </li>
      <li>
        <Link to={"/service"}>SERVICE</Link>
      </li>
      <li>
        <Link to={"/blog"}>BLOGS</Link>
      </li>
      <li>
        <Link to={"/about"}>ABOUT</Link>
      </li>
      <li>
        <Link to={"/project"}>MY PROJECTS</Link>
      </li>
      <li>
        <Link to={"/contact"}>CONTACT</Link>
      </li>
      <li>
      <a className="border-2 border-slate-300" href="https://drive.google.com/file/d/11UVY6uHlyoR-iv1SqY5XoQcbvnn5F-_z/view?usp=sharing">
            <button className="uppercase rounded-full">Download Resume</button>
            </a>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-primary">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to={"#"} className="text-xl text-white">
            <img className="w-15 h-16" src={portLogo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-white">{menuItems}</ul>
        </div>

        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex="1" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={avatar}
                  alt=""
                />
              </div>
            </label>
            <ul
              tabIndex="1"
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <label htmlFor="profile-modal">Profile</label>
              </li>
              <li>
                <Link to={"#"}>Settings</Link>
              </li>
              <li>
                <Link to={"#"}>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Profile></Profile>
    </div>
  );
};

export default Navbar;
