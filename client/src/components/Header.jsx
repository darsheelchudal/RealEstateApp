import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <header className="bg-slate-200 shadow-md">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
          <Link to="/">
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
              <span className="text-slate-500">Estate</span>
              <span className="text-slate-700">Nepal</span>
            </h1>
          </Link>
          <form className="bg-slate-100 p-3 rounded-lg flex items-center">
            <input
              type="text"
              placeholder="Search...."
              className="bg-transparent focus:outline-none w-24 sm:w-40 md:w-64"
            />
            <FaSearch className="text-slate-600" />
          </form>
          <ul className="flex gap-4 items-center">
            <Link to="/">
              <li className="sm:inline hidden text-slate-600 hover:text-slate-900 hover:underline">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="sm:inline hidden text-slate-600 hover:text-slate-900 hover:underline">
                About
              </li>
            </Link>
            <Link to="/profile">
              {currentUser ? (
                <img
                  className="h-7 rounded-full w-7 object-cover"
                  src={currentUser.avatar}
                  alt="profile"
                />
              ) : (
                <li className="sm:inline hidden text-slate-600 hover:text-slate-900 hover:underline">
                  Sign in
                </li>
              )}
            </Link>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
