"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const sections = [
	{ href: "/#about", label: "About" },
	{ href: "/#lgbtq-support", label: "LGBTQ+ Support" },
	{ href: "/#education", label: "Education" },
	{ href: "/#faq", label: "FAQ" },
	{ href: "/#contact", label: "Contact" },
]

export function DesktopNav() {
	const pathname = usePathname()
	return (
		<nav className="hidden md:flex fixed top-0 left-0 w-full z-[10000] bg-white/90 backdrop-blur shadow-sm h-16 items-center px-8 gap-6">
			<div className="flex-1 flex items-center gap-2">
				<Link
					href="/"
					className="text-teal-800 font-bold tracking-wide text-lg mr-8 hover:underline"
				>
					Early Days Doula
				</Link>
				<Link
					href="/#about"
					className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 hover:bg-teal-50 hover:text-teal-900 ${
						pathname === "/#about"
							? "bg-teal-100 text-teal-900"
							: "text-teal-800"
					}`}
				>
					About
				</Link>
				{/* FAQ link moved after Education */}
				   {/* Services dropdown */}
				   <div className="relative group" tabIndex={0}>
					   <button
						   className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 hover:bg-teal-50 hover:text-teal-900 text-teal-800 focus:outline-none"
						   aria-haspopup="true"
						   aria-expanded="false"
						   tabIndex={0}
					   >
						   Services
					   </button>
					   {/* Submenu is now a child of the group parent, not a sibling of the button */}
					   <div className="absolute left-0 w-44 bg-white shadow-lg rounded-md py-1 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto pointer-events-none transition-opacity duration-150 z-50">
						   <Link
							   href="/#services"
							   className="block px-4 py-2 text-sm text-teal-800 hover:bg-teal-50 rounded-t-md"
						   >
							   Overview
						   </Link>
						   <Link
							   href="/services"
							   className="block px-4 py-2 text-sm text-teal-800 hover:bg-teal-50 rounded-b-md"
						   >
							   Details & Pricing
						   </Link>
					   </div>
				   </div>
				<Link
					href="/#lgbtq-support"
					className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 hover:bg-teal-50 hover:text-teal-900 ${
						pathname === "/#lgbtq-support"
							? "bg-teal-100 text-teal-900"
							: "text-teal-800"
					}`}
				>
					LGBTQ+ Support
				</Link>
				   <Link
					   href="/#education"
					   className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 hover:bg-teal-50 hover:text-teal-900 ${
						   pathname === "/#education"
							   ? "bg-teal-100 text-teal-900"
							   : "text-teal-800"
					   }`}
				   >
					   Education
				   </Link>
				   <Link
					   href="/#faq"
					   className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 hover:bg-teal-50 hover:text-teal-900 ${
						   pathname === "/#faq"
							   ? "bg-teal-100 text-teal-900"
							   : "text-teal-800"
					   }`}
				   >
					   FAQ
				   </Link>
				<Link
					href="/#contact"
					className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 hover:bg-teal-50 hover:text-teal-900 ${
						pathname === "/#contact"
							? "bg-teal-100 text-teal-900"
							: "text-teal-800"
					}`}
				>
					Contact
				</Link>
			</div>
		</nav>
	)
}
