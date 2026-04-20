import { Menu } from 'lucide';
import React, { useState } from 'react';
import { FaAlignLeft } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const navLinks = [
    {
        id: 1,
        name: "Home",
        pathURL: "/",
        path: "home"
    },
    {
        id: 2,
        name: "About",
        pathURL: "/about",
        path: "about"
    },
    {
        id: 3,
        name: "Services",
        pathURL: "/services",
        path: "services"
    },
    {
        id: 4,
        name: "Blog",
        pathURL: "/blog",
        path: "blog"
    },
    {
        id: 5,
        name: "Contact",
        pathURL: "/contact",
        path: "contact"
    }
];
const NavBar = () => {
    const [open, setOpen] = useState(false);

    const Links = navLinks.map(route => <li className='mr-5' key={route.id}>
                        <a href={route.path} key={route.id}>{route.name}</a>
                    </li>)

    return (
        <nav className='flex justify-between max-w-10/12 mx-auto mt-3'>
            <span className='flex items-center gap-2' onClick={() => setOpen(!open)}>

                {
                    open ?
                        <IoMdClose className=' md:hidden'></IoMdClose> :
                        <FaAlignLeft className=' md:hidden'></FaAlignLeft>
                }
                <ul className={`md:hidden absolute duration-1000
                ${open ? 'top-11' : '-top-40'}
                     bg-gray-600 px-6 py-4 rounded-2xl`}>
                    {Links}
                </ul>
                <h3 className='btn btn-soft  hidden md:flex'>Hello?</h3>
            </span>
            <ul className='hidden md:flex'>
                {
                    Links
                }
            </ul>
            <button className='btn btn-primary'>Sign In</button>
        </nav>
    );
};

export default NavBar;