"use client";

import Image from "next/image";
import { FaArrowLeftLong, FaRegAddressCard } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { PiPaintBrushLight } from "react-icons/pi";
import { CiGrid41, CiChat1, CiLogin } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import ThemeToggle from "./ThemeToggle";
import useSidebar from "@/hooks/useSidebar";

export default function Sidebar() {
  return (
    <>
      <SidebarDesktop />
      <SidebarMobile />
    </>
  );
}

function SidebarMobile() {
  const { active, setActive } = useSidebar();
  const handleClose = () => {
    setActive();
  };
  return (
    <aside
      className={` xl:hidden w-full inset-0 z-50  ${
        active ? "fixed" : " hidden"
      } transition-width duration-300 ease-in-out bg-[#F6F6FF] dark:bg-[#1E1E2E]   border  dark:border-[#2E2E44]  rounded-2xl`}
    >
      <div className="rounded flex justify-between pb-0 p-6   h-full   flex-col">
        <div>
          <div className="flex justify-end">
            <div
              onClick={handleClose}
              className="p-3 w-fit   border-[#dedee6] bg-[#EFEFFD] dark:bg-[#212131] rounded-full border dark:border-[#2E2E44]"
            >
              <IoClose className="text-lg text-[#6A707E]" />
            </div>
          </div>
          <ul className=" pb-6 mt-6 border-b dark:border-b-[#2E2E44]">
            <li
              className={`${
                active ? "items-start" : "items-center"
              } flex overflow-hidden px-4 py-3 text-sm  dark:hover:text-white hover:text-black  rounded-xl border dark:border-[#2E2E44] bg-[#EAECF8] dark:bg-[#171725] font-semibold gap-3`}
            >
              <IoHomeOutline
                className={`${active ? "text-lg" : "text-xl"}  min-w-fit`}
              />
              <span className={`${active ? "inline" : "hidden"} text-nowrap`}>
                Home
              </span>
            </li>
            <li className="flex px-4 text-[#6A707E] dark:hover:text-white hover:text-black py-3 text-sm items-center rounded-xl gap-3">
              <HiOutlineAcademicCap
                className={`${active ? "text-lg" : "text-xl"}   min-w-fit`}
              />
              <span className={`${active ? "inline" : "hidden"} text-nowrap`}>
                Courses
              </span>
            </li>
            <li className="flex px-4 text-[#6A707E] dark:hover:text-white hover:text-black py-3 text-sm items-center rounded-xl gap-3">
              <CiGrid41
                className={`${active ? "text-lg" : "text-xl"}  min-w-fit`}
              />
              <span className={`${active ? "inline" : "hidden"} text-nowrap`}>
                Works
              </span>
            </li>
            <li className="flex px-4 text-[#6A707E] dark:hover:text-white hover:text-black py-3 text-sm items-center rounded-xl gap-3">
              <PiPaintBrushLight
                className={`${active ? "text-lg" : "text-xl"}  min-w-fit`}
              />
              <span className={`${active ? "inline" : "hidden"} text-nowrap`}>
                Services
              </span>
            </li>
            <li className="flex px-4 text-[#6A707E] dark:hover:text-white hover:text-black py-3 text-sm items-center rounded-xl gap-3">
              <FaRegAddressCard
                className={`${active ? "text-lg" : "text-xl"}  min-w-fit`}
              />
              <span className={`${active ? "inline" : "hidden"} text-nowrap`}>
                About
              </span>
            </li>

            <li className="flex px-4 text-[#6A707E] dark:hover:text-white hover:text-black py-3 text-sm items-center rounded-xl gap-3">
              <CiChat1
                className={`${active ? "text-lg" : "text-xl"}  min-w-fit`}
              />
              <span className={`${active ? "inline" : "hidden"} text-nowrap`}>
                Contact
              </span>
            </li>
          </ul>
        </div>
        {/* login */}
        <button className="flex px-4 text-[#6A707E] dark:hover:text-white hover:text-black py-3 text-sm items-center rounded-xl gap-3">
          <CiLogin className={`${active ? "text-lg" : "text-xl"}  min-w-fit`} />
          <span className={`${active ? "inline" : "hidden"} text-nowrap`}>
            Log In
          </span>
        </button>
      </div>
    </aside>
  );
}

function SidebarDesktop() {
  const { active, setActive } = useSidebar();
  const handleClose = () => {
    setActive();
  };

  return (
    <aside
      className={`xl:fixed xl:block hidden  ${
        active ? "w-[280px]" : " w-[86px]"
      } transition-width duration-300 ease-in-out bg-[#F6F6FF] dark:bg-[#1E1E2E]   border  dark:border-[#2E2E44] inset-y-6 rounded-2xl`}
    >
      {/* button for what */}
      <button
        onClick={handleClose}
        className={`z-10 rounded-full transition-all    ${
          active ? "right-5 top-8 rotate-0" : "rotate-180 top-7 -right-4"
        } w-7 border dark:border-[#2E2E44] flex justify-center items-center aspect-square absolute bg-[#EAECF8] dark:bg-[#171725] text-white`}
      >
        <FaArrowLeftLong className="text-xs text-[#6A707E]" />
      </button>

      {/* this is for the content */}
      <div
        className={`absolute inset-y-0  flex flex-col justify-between inset-x-0 overflow-y-auto overflow-x-hidden hidden-scrollbar `}
      >
        <div>
          <header className="flex gap-3 p-5 items-center overflow-hidden">
            <Image
              height={100}
              width={100}
              className="rounded-full aspect-square w-11"
              alt="User Profile"
              src="/images/user.png"
            />
            <div className={`text-nowrap ${active ? "block" : "hidden"}`}>
              <h1 className="font-medium text-sm">Adhis Mauliyahsa A.</h1>
              <div className="flex gap-2 items-center text-sm">
                <div className="w-[6px] aspect-square rounded-full bg-[#65B463]" />
                <p className="text-[#6A707E]">Open for Work</p>
              </div>
            </div>
          </header>

          {/* body sidebar */}
          <div className="rounded">
            <ul className="m-4 pb-6 border-b dark:border-b-[#2E2E44]">
              <li
                className={`${
                  active ? "items-start" : "items-center"
                } flex overflow-hidden px-4 py-3 text-sm  dark:hover:text-white hover:text-black  rounded-xl border dark:border-[#2E2E44] bg-[#EAECF8] dark:bg-[#171725] font-semibold gap-3`}
              >
                <IoHomeOutline
                  className={`${active ? "text-lg" : "text-xl"}  min-w-fit`}
                />
                <span className={`${active ? "inline" : "hidden"} text-nowrap`}>
                  Home
                </span>
              </li>
              <li className="flex px-4 text-[#6A707E] dark:hover:text-white hover:text-black py-3 text-sm items-center rounded-xl gap-3">
                <HiOutlineAcademicCap
                  className={`${active ? "text-lg" : "text-xl"}   min-w-fit`}
                />
                <span className={`${active ? "inline" : "hidden"} text-nowrap`}>
                  Courses
                </span>
              </li>
              <li className="flex px-4 text-[#6A707E] dark:hover:text-white hover:text-black py-3 text-sm items-center rounded-xl gap-3">
                <CiGrid41
                  className={`${active ? "text-lg" : "text-xl"}  min-w-fit`}
                />
                <span className={`${active ? "inline" : "hidden"} text-nowrap`}>
                  Works
                </span>
              </li>
              <li className="flex px-4 text-[#6A707E] dark:hover:text-white hover:text-black py-3 text-sm items-center rounded-xl gap-3">
                <PiPaintBrushLight
                  className={`${active ? "text-lg" : "text-xl"}  min-w-fit`}
                />
                <span className={`${active ? "inline" : "hidden"} text-nowrap`}>
                  Services
                </span>
              </li>
              <li className="flex px-4 text-[#6A707E] dark:hover:text-white hover:text-black py-3 text-sm items-center rounded-xl gap-3">
                <FaRegAddressCard
                  className={`${active ? "text-lg" : "text-xl"}  min-w-fit`}
                />
                <span className={`${active ? "inline" : "hidden"} text-nowrap`}>
                  About
                </span>
              </li>

              <li className="flex px-4 text-[#6A707E] dark:hover:text-white hover:text-black py-3 text-sm items-center rounded-xl gap-3">
                <CiChat1
                  className={`${active ? "text-lg" : "text-xl"}  min-w-fit`}
                />
                <span className={`${active ? "inline" : "hidden"} text-nowrap`}>
                  Contact
                </span>
              </li>
            </ul>

            {/* login */}
            <button className="flex px-8 text-[#6A707E] dark:hover:text-white hover:text-black py-3 text-sm items-center rounded-xl gap-3">
              <CiLogin
                className={`${active ? "text-lg" : "text-xl"}  min-w-fit`}
              />
              <span className={`${active ? "inline" : "hidden"} text-nowrap`}>
                Log In
              </span>
            </button>
          </div>
        </div>
        <div className="border-t dark:border-t-[#2E2E44] py-5 px-8">
          <ThemeToggle active={active} />
        </div>
      </div>
    </aside>
  );
}
