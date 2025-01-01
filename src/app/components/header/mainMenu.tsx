'use client'

import {useTranslations} from 'next-intl';
import { usePathname } from 'next/navigation';
import React from "react";
import Link from "next/link";
import {PopoverGroup} from "@headlessui/react";
import { MenuItem } from '@/types/menus';

type MainMenuProps = {
    menus: MenuItem[] | null; // Menu can be an array or null
};
export default function MainMenu({ menus }: MainMenuProps) {
    const pathname = usePathname(); // Call usePathname at the top

    if (!menus || menus.length === 0) {
        return <p>No menu items available.</p>;
    }
    
    const t = useTranslations('header');

    return (
        <>
            <PopoverGroup className="hidden lg:flex items-center lg:gap-x-8">
                {menus.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`nav_link ${pathname === item.href ? 'active' : ''}`}
                    >
                        {t(item.name)}
                    </Link>
                    
                ))}
            </PopoverGroup>

            <div className="space-y-2 py-6 lg:hidden">
            {menus.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className={`-mx-3 mobile_link block rounded-lg px-3 py-2 hover:bg-gray-50 ${pathname === item.href ? 'active' : ''}`}
                >
                    {t(item.name)}
                    {/* {item.name} */}
                </Link>
            ))}
        </div>
        </>
    );
}