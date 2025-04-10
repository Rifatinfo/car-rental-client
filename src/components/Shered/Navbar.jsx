/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BiX } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState('');

    const menuItems = [
        { name: "Home", link: "/" },
        { name: "Available Cars", link: "/available-car" },
        { name: "Add Car", link: "/add-car" },
        { name: "All Cars", link: "/all-car" },
        { name: "My Cars", link: "/my-cars" },
        { name: "My Bookings ", link: "/my-bookings" },
    ];

    const handleNavClick = (item) => {
        setActive(item);
        setOpen(false);
    }

    return (
        <div>
            <div>
                <header className="max-w-7xl mx-auto sticky top-0 left-0 w-full flex justify-between items-center px-5 py-3  text-black  z-50">
                    {/* logo */}
                    <div>
                        <img className="h-[40px] w-auto" src="" alt="logo" />
                    </div>

                    {/* desktop menu */}
                    <ul className="hidden xl:flex items-center gap-2 font-semibold text-xl">
                        {menuItems.map(item => (
                            <li key={item.name}
                                onClick={() => handleNavClick(item.name)}
                                className={`text-xl px-4 py-2 rounded-md cursor-pointer transition-all ${active === item.name ? "text-orange-600" : "hover:text-orange-600"}`}
                            >
                                <a href={item.link}>{item.name}</a>
                            </li>
                        ))}
                    </ul>

                    {/* button  */}
                    <div className="hidden md:flex items-center gap-3 font-semibold text-lg">
                        <button className="btn px-8 rounded-md py-2 border-none bg-orange-600 text-white">Sign In</button>
                        <button className="btn px-8 rounded-md py-2 border-none bg-orange-600 text-white">Register</button>
                    </div>

                    {/* mobile Menu Toggle Button  */}
                    <span className="lg:hidden block text-xl cursor-pointer mr-3"
                        onClick={() => setOpen(true)}
                    >
                        <IoMenu />
                    </span>
                </header>

                {/* background Overlay with Slide-in Effect */}
                <div className={`fixed inset-0 h-screen bg-gradient-to-r to-orange-600/70 z-50 transition-transform duration-500 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}>
                    {/* Click Outside to close  */}
                    <div className="absolute insert-0" onClick={() => setOpen(false)}></div>
                </div>

                {/* Mobile menu contain with Roll down effect  */}
                <div className={`fixed top-0 left-0 h-full bg-white w-full max-w-[350px] shadow-lg z-50 transition-all duration-500 ease-in-out transform ${open ? "translate-x-0" : "-translate-x-full"} ${open ? "max-h-screen overflow-hidden" : "max-h-0"}`}>
                    {/* close Button */}
                    <span className="absolute top-4 right-6 text-3xl cursor-pointer"
                        onClick={() => setOpen(false)}
                    >
                        <BiX />
                    </span>

                    {/* Mobile menu Item */}
                    <ul className="font-semibold flex flex-col pt-10">
                        {menuItems.map((item) => (
                            <li key={item.name}
                                onClick={() => handleNavClick(item.name)}
                                className={`w-full list-none border-b text-xl px-6 py-3 cursor-pointer transition-all ${active === item.name ? "text-orange-600" : "text-black"}`}>
                                <a href={item.link}>{item.name}</a>
                            </li>
                        ))}

                    </ul>
                </div>


            </div>
        </div>
    );
};

export default Navbar;