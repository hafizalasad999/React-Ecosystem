import React from 'react';

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
    return (
        <div>
            <ul className='flex'>
                {
                    navLinks.map(route => <li className='mr-5' key={route.id}>
                        <a href={route.path} key={route.id}>{route.name}</a>
                        </li>)
                }
            </ul>
        </div>
    );
};

export default NavBar;