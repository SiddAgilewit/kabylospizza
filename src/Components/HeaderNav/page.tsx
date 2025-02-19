"use client";
import { useSelector } from "react-redux";
import { FaBars } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

export const NavBar = () => {
    const Log_in = useSelector((state: any) => state.AuthenticationStatus);

    return (
        <div className="flex flex-row justify-between items-center bg-white-100 p-2 w-full">


            <div className="hidden md:flex flex-row bg-white-100">

                <div className="flex flex-row items-center gap-4 ">
                    <img src="/icons/KbloyIcon.png" className="md:h-[40px] md:w-[150px] h-[40px] w-[70px]" />
                    <h1 className="text-[20px] font-bold ml-[40px]">Menu</h1>
                    <h1 className="text-[20px] font-bold">Coupons</h1>
                    <h1 className="text-[20px] font-bold">Orders</h1>

                </div>

            </div>

            <div className="hidden md:flex flex-row bg-white-100">

                <div className=" p-4 flex flex-row items-center gap-4">
                    {Log_in ? <h1 className="text-[20px] font-bold">Sign In</h1> : <h1 className="text-[20px] font-bold">Sidd</h1>}
                    <IoCartOutline size={40} />
                </div>

            </div>

            <div className="md:hidden flex flex-row justify-between items-center bg-white-100 w-full">
                <img src="/icons/KbloyIcon.png" className="md:h-[80px] md:w-[150px] h-[30px] w-[60px]" />
                <FaBars size={30} />
            </div>
        </div>
    );
};
