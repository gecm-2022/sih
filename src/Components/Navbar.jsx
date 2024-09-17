import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/contextapi";

const Navbar = () => {
  const { isLogin } = useAuth();
  const [isSticky, setisSticky] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setisSticky(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleContactClick = async (e) => {
    e.preventDefault();
    navigate("/");

    setTimeout(() => {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    }, 200);
  };
  return (
    <nav
      className={`flex items-center justify-between bg-white/40 p-4 shadow-lg   z-50 ${
        isSticky ? "sticky top-0 z-10 bg-gray-300" : ""
      }`}
    >
      {/* Logo */}

      <div className="flex items-center space-x-4">
        <img src="/img/GECM_logo.png" alt="Logo" className="w-16 h-16" />
        <h1 className="text-2xl font-bold text-black">
          <NavLink to={"/"} className={"removeLinkHover"}>
            GEC Modasa Alumni Association
          </NavLink>
        </h1>
      </div>

      {/* Links */}
      <nav className="flex space-x-6 text-blue-700">
        <NavLink
          to="/"
          className={(e) =>
            `hover:text-blue-900 font-bold  ${
              e.isActive
                ? "text-[#61C408] after:w-[100%] after:bg-[#73a6e1]"
                : ""
            }`
          }
        >
          HOME
        </NavLink>
        <NavLink
          to="/NewsandEvents"
          className={(e) =>
            `hover:text-blue-900 font-bold  ${
              e.isActive
                ? "text-[#61C408] after:w-[100%] after:bg-[#73a6e1]"
                : ""
            }`
          }
        >
          NEWS AND EVENTS
        </NavLink>
        <NavLink
          to="/alumini"
          className={(e) =>
            `hover:text-blue-900 font-bold  ${
              e.isActive
                ? "text-[#61C408] after:w-[100%] after:bg-[#73a6e1]"
                : ""
            }`
          }
        >
          ALUMINI
        </NavLink>
        <NavLink
          to="/donations"
          className={(e) =>
            `hover:text-blue-900 font-bold  ${
              e.isActive
                ? "text-[#61C408] after:w-[100%] after:bg-[#73a6e1]"
                : ""
            }`
          }
        >
          DONATIONS
        </NavLink>
        <NavLink
          to="/contactus"
          className={(e) =>
            `hover:text-blue-900 font-bold  ${
              e.isActive
                ? "text-[#61C408] after:w-[100%] after:bg-[#73a6e1]"
                : ""
            }`
          }
        >
          <div className=" cursor-pointer" onClick={handleContactClick}>
            CONTACT US
          </div>
        </NavLink>
      </nav>

      {/* Login/Signup */}
      <div className="flex gap-5 ">
        {isLogin ? (
          <NavLink
            to="/logout"
            className={(e) =>
              `hover:text-blue-900 font-bold  border p-2 px-3 removeLinkHover rounded-md bg-gray-400 ${
                e.isActive
                  ? "text-white after:w-[100%] after:bg-[#73a6e1] "
                  : ""
              }`
            }
          >
            Logout
          </NavLink>
        ) : (
          <>
            <NavLink
              to="/login"
              className={(e) =>
                `hover:text-blue-900 font-bold  border p-2 px-3 removeLinkHover rounded-md bg-gray-400 ${
                  e.isActive
                    ? "text-white after:w-[100%] after:bg-[#73a6e1] "
                    : ""
                }`
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className={(e) =>
                `hover:text-blue-900 font-bold border p-2 removeLinkHover rounded-md bg-gray-400 ${
                  e.isActive
                    ? "text-white after:w-[100%] after:bg-[#73a6e1] "
                    : ""
                }`
              }
            >
              Sign Up
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
