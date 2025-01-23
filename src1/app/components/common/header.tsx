'use client'

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import TopBar from "./topBar";
import { MenuItem } from '@/types/menus';
import MainMenu from '../header/mainMenu';
import BrandLogo from './brandLogo';
import Search from './search';

const menus: MenuItem[] = [
    { name: 'home', href: '/' },
    { name: 'entertainment', href: '#' },
    { name: 'news', href: '#' },
    { name: 'sports', href: '#' },
    { name: 'business', href: '#' },
    { name: 'travel', href: '#' },
    { name: 'world', href: '#' },
    { name: 'politics', href: '#' }
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <>
            <TopBar />
            <header className="bg-white border-b border-gray-300 sticky top-0 z-10">
                <nav className="mx-auto max-w-7xl flex items-center justify-between px-2 lg:px-4">

                    <BrandLogo />

                    <div className="flex lg:hidden items-center">
                        <div className="pe-6">
                            <Search />
                        </div>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md px-2.5 text-black"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-9" />
                        </button>
                    </div>
                    <div className="hidden lg:flex items-center lg:justify-end lg:gap-x-4">
                        <MainMenu menus={menus} />
                        <Search />
                    </div>
                </nav>

                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-10" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between pb-6">
                            <BrandLogo />
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-9" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <MainMenu menus={menus} />
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
        </>
    );
}
