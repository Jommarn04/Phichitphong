"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

const Links = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Resume',
        path: '/resume',
    },
    {
        name: 'Work',
        path: '/work',
    },
]
export default function Navbar() {

    const pathname = usePathname();

    return  <nav className="flex gap-8">
                {Links.map((link, index) => {
                    return <Link 
                            href={link.path} 
                            key={index} 
                            className={`${link.path === pathname && "text-accent border-b-2 border-accent"
                            } capitalize font-medium hover:text-accent transition-all`}>
                        {link.name}
                    </Link>
                })}
            </nav>
}