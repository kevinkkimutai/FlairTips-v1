"use client";
import { useGetCurrentUserMutation } from "@/redux/actions/authActions";
import { selectUser } from "@/redux/reducers/AuthReducers";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Cookies from "js-cookie"; 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
    const user = useSelector(selectUser);
    const [currentUser] = useGetCurrentUserMutation();
    const dispatch = useDispatch();

    useEffect(() => {
      const fetchUser = async () => {
        const accessToken = Cookies.get('access_token');
        if (!accessToken) {
          toast.error("Access token not found. Please log in.");
          return;
        }
  
        const requestBody = {
          request: {
            request_id: Date.now(),
            data: {
              access_token: accessToken,
            },
          },
        };
  
        try {
          const response = await currentUser(requestBody).unwrap();
          console.log("User details fetched", response);
          dispatch(response.data);
        } catch (error) {
          toast.error("Please log in.");
        }
      };
  
      fetchUser();
    }, [currentUser, dispatch]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  const navlinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "All Matches",
      href: "/all-matches",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact Us",
      href: "/contact-us",
    },
  ];
  return (
    <div className="w-full bg-green-900 text-white">
      <div className="max-w-[1280px] mx-auto relative">
        <header className="flex  py-4 max-2xl:px-4  font-sans min-h-[70px] tracking-wide relative z-50">
          <div className="flex flex-wrap items-center justify-between gap-4 w-full max-w-screen-xl mx-auto">
            <a href="#" className="max-sm:hidden">
              <p
                className="w-36 font-bold text-xl"
              >Kelvin</p>
            </a>
            <a href="#" className="hidden max-sm:block">
              <p
               
                className="w-9 h-9 bg-green-400 items-center  flex justify-center font-bold text-xl rounded-lg"
              >K</p>
            </a>

            <div
              className={`${
                menuOpen ? "" : "max-lg:hidden"
              }  lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
            >
              <button
                onClick={closeMenu}
                className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5 fill-black"
                  viewBox="0 0 320.591 320.591"
                >
                  <path
                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                    data-original="#000000"
                  ></path>
                  <path
                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>

              <ul className="lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                <li className="mb-6 hidden max-lg:block">
                  <Link href="/">
                    <p
                      
                      className="w-36 font-bold"
                    > FlairTips</p>
                  </Link>
                </li>
                {navlinks.map((nav, index) => (
                  <li className=" max-lg:py-2 relative max-lg:border-b" key={index}>
                    <Link
                      href={nav.href}
                      className="text-white text-[14px] md:text-[16px] font-[700] block md:hover:after:absolute md:after:bg-green-500  md:after:w-0 md:hover:after:w-full md:hover:after:h-[2px] md:after:block  md:after:-bottom-2 md:after:transition-all md:after:duration-300"
                    >
                      {nav.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex  items-center max-lg:ml-auto space-x-4 relative">
              <div className="group  max-lg:px-3 max-lg:py-3 relative max-md:hidden">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#8fc1f6] hover:fill-[#8fc1f6] text-white text-[15px] flex items-center"
                >
            {user?.user?.user?.first_name || "User"}


                  <svg
                    className="w-6 h-6 ms-2 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    stroke="currentColor"
                    height="16px"
                    className="ml-1 inline-block text-white"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                      data-name="16"
                      data-original="#000000"
                    />
                  </svg>
                </a>
                <ul className="absolute top-12 max-lg:top-8 right-0 z-50 block space-y-2 shadow-lg bg-green-800 max-h-0 overflow-hidden min-w-[150px] max-w-[230px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-[400ms]">
                     <li className="border-b py-3">
                    <a
                      href="/profile"
                      className="hover:text-[#8fc1f6] hover:fill-[#8fc1f6] text-white text-[15px] flex items-center"
                    >
                      <svg
                        className="w-6 h-6 fill-current me-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeWidth="2"
                          d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                      Profile
                    </a>
                  </li>
                  <li className="border-b py-3">
                    <a
                      href="/login"
                      className="hover:text-[#8fc1f6] hover:fill-[#8fc1f6] text-white text-[15px] flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 fill-current me-2"
                      >
                        <path d="M10 3H5C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-3h-2v3H5V5h5v3h2V5c0-1.1-.9-2-2-2zm9 9-4-4v3H9v2h6v3l4-4z" />
                      </svg>
                      Login
                    </a>
                  </li>
                 
                </ul>
              </div>

              <button onClick={toggleMenu} className="lg:hidden">
                <svg
                  className="w-7 h-7"
                  fill="#000"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
