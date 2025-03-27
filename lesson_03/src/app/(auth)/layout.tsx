"use client";
import Link from 'next/link';
import {usePathname} from 'next/navigation';

const navLinks = [
    {name: 'Register', href: '/register'},
    {name: 'Login', href: '/login'},
    {name: 'Forgot_password', href: '/password'},
];




export default function Layout({children}: {children: React.ReactNode}) {
    const pathname = usePathname();
    return (
        <div>
            {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                    <Link 
                    className={isActive?"font-bold":""}
                    href={link.href} key={link.name}>
                        {link.name}
                    </Link>     
                );
            })}
{children}               
        </div>
    )
}
