/* eslint-disable no-unused-vars */
import { useState } from "react";

const Navbar = () => {
    const [open , setOpen] = useState(false);
    const [active, setActive] = useState('Home');

    const menuItems = [
        { name: "Home", link: "/" },
        { name: "Add Car", link: "/add-car" },
        { name: "All Car", link: "/all-car" },
        { name: "My Car", link: "/my-car" },
    ];
    
    return (
        <div>
 
        </div>
    );
};

export default Navbar;