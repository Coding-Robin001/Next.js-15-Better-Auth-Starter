"use client"

import React from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { auth } from "@/lib/auth"

type Session = typeof auth.$Infer.Session

export default function Navbar({ session }: { session: Session | null }) {

  const pathname = usePathname()

  const navLinks = [
    { name: "Home", href: "/" },
    ...session ? [{ name: "Dashboard", href: "/dashboard" }] : [],
    ...(session ? [] : [{ name: "Login", href: "/auth" }]),]

  return (
    <header className="w-full bg-black text-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">
          <Link href="/">Auth with Better-Auth</Link>
        </div>

        {/* Nav Links */}
        <ul className="flex gap-8">
          {navLinks.map((link, index) => {
            const active =
              pathname === link.href ||
              (pathname.startsWith(link.href) && link.href !== "/")

            return (
              <li key={index}>
                <Link
                  href={link.href}
                  className={`transition-colors duration-200 ${active
                    ? "text-indigo-400 font-semibold border-b-2 border-indigo-400 pb-1"
                    : "hover:text-indigo-300"
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
