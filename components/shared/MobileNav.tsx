"use client";

import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button';

const MobileNav = () => {
    const pathname = usePathname();
    const navLinks = [
        {
            label: "Home",
            route: "/",
            icon: "/assets/icons/home.svg",
        },
        {
            label: "Image Restore",
            route: "/transformations/add/restore",
            icon: "/assets/icons/image.svg",
        },
        {
            label: "Generative Fill",
            route: "/transformations/add/fill",
            icon: "/assets/icons/stars.svg",
        },
        {
            label: "Object Remove",
            route: "/transformations/add/remove",
            icon: "/assets/icons/scan.svg",
        },
        {
            label: "Object Recolor",
            route: "/transformations/add/recolor",
            icon: "/assets/icons/filter.svg",
        },
        {
            label: "Background Remove",
            route: "/transformations/add/removeBackground",
            icon: "/assets/icons/camera.svg",
        },
        {
            label: "Profile",
            route: "/profile",
            icon: "/assets/icons/profile.svg",
        },
        {
            label: "Buy Credits",
            route: "/credits",
            icon: "/assets/icons/bag.svg",
        },]

    return (
        <header className="header">
            <Link href={"/"} className='flex items-center gap-2 md:py-2'>
                <Image
                    src="/assets/images/logo-text.svg"
                    alt="Imagify"
                    width={120}
                    height={32}
                />
            </Link>

            <nav className="flex gap-2">
                <SignedIn>
                    <UserButton afterSwitchSessionUrl='/' />

                    <Sheet>
                        <SheetTrigger>
                            <Image
                                src={"/assets/icons/menu.svg"}
                                alt="menu"
                                width={32}
                                height={32}
                                className='cursor-pointer'
                            />
                        </SheetTrigger>

                        <SheetContent className='sheet-content sm:w-64'>
                            <>
                                <Image
                                    src="/assets/images/logo-text.svg"
                                    alt="logo"
                                    width={152}
                                    height={23}
                                />

                                <ul className="header-nav_elements">
                                    {navLinks.map((link) => {
                                        const isActive = link.route === pathname

                                        return (
                                            <li
                                                className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}
                                                key={link.route}
                                            >
                                                <Link className="sidebar-link cursor-pointer" href={link.route}>
                                                    <Image
                                                        src={link.icon}
                                                        alt="logo"
                                                        width={24}
                                                        height={24}
                                                    />
                                                    {link.label}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </>
                        </SheetContent>


                    </Sheet>

                </SignedIn>

                <SignedOut>
                    <Button asChild className="button bg-purple-gradient bg-cover">
                        <Link href="/sign-in">Login</Link>
                    </Button>
                </SignedOut>
            </nav>

        </header>
    )
}

export default MobileNav;
