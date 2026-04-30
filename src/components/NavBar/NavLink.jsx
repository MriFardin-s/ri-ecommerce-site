'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children, className, activeClassName}) => {
    const pathname = usePathname();
    const isActive = href ===pathname;
    return (
        <Link href={href} className={`flex items-center justify-center gap-2 transition-all ${className || ""} 
                ${isActive 
                    ? (activeClassName || "text-green-700 font-bold") 
                    : "text-gray-700 hover:text-green-700"}`} >
            {children}
        </Link>
    );
};

export default NavLink;