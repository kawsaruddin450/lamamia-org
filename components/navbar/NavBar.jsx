"use client";
import Link from 'next/link';
import React from 'react';

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
    },
];

const NavBar = () => {
    return (
        <div className="flex justify-between h-24 items-center">
            <Link className="font-bold text-2xl" href="/">Lamamia</Link>
            <div className="flex items-center gap-5">
                {
                    links.map(link => <Link key={link.id} href={link.url}>
                    {link.title}
                    </Link>)
                }
                <button className="px-4 py-1 rounded bg-green-400 cursor-pointer" onClick={()=> console.log("Logged Out")}>
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default NavBar;