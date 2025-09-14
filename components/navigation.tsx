"use client"

import { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)
  const [windowWidth, setWindowWidth] = useState<number | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()

  // Set hasMounted to true after mount
  useEffect(() => {
    setHasMounted(true)
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth)
      const handleResize = () => setWindowWidth(window.innerWidth)
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Toggle menu
  const toggleMenu = () => setIsMenuOpen((open) => !open)

  // Close menu on outside click
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  // Close menu on Escape
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsMenuOpen(false)
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  return (
    <>
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-[9999] p-2 text-white bg-teal-800 hover:bg-teal-900 rounded-lg shadow-lg font-semibold transition-all duration-200"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        aria-controls="navigation-menu"
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      {hasMounted && isMenuOpen && windowWidth !== null && createPortal(
        <div
          ref={menuRef}
          id="navigation-menu"
          className="fixed top-16 left-0 right-0 w-screen max-w-screen box-border sm:right-4 sm:left-auto sm:w-64 sm:max-w-[95vw] z-[99999] break-words bg-white shadow-lg rounded-none sm:rounded-lg overflow-hidden transition-all duration-200 origin-top-right opacity-100 scale-100 translate-y-0 p-2"
        >
          <div className="py-2">
            <Link href="/" className={`block px-4 py-2 text-sm hover:bg-teal-50 transition-colors ${pathname === "/" ? "text-teal-800 font-semibold" : "text-gray-700"}`} onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/#about" className="block px-4 py-2 text-sm hover:bg-teal-50 transition-colors text-gray-700" onClick={e => { setIsMenuOpen(false); setTimeout(() => { window.location.hash = '#about'; }, 50); }}>
              About
            </Link>
            {/* Services dropdown mimic */}
            <div className="border-t border-gray-200 my-2" />
            <div className="px-4 py-2">
              <span className="block text-xs text-gray-500 uppercase mb-1">Services</span>
              <Link href="/#services" className="block px-2 py-2 text-sm hover:bg-teal-50 transition-colors text-teal-800 rounded-t-md" onClick={e => { setIsMenuOpen(false); setTimeout(() => { window.location.hash = '#services'; }, 50); }}>
                Overview
              </Link>
              <Link href="/services" className="block px-2 py-2 text-sm hover:bg-teal-50 transition-colors text-teal-800 rounded-b-md" onClick={() => setIsMenuOpen(false)}>
                Details & Pricing
              </Link>
            </div>
            <Link href="/#lgbtq-support" className="block px-4 py-2 text-sm hover:bg-teal-50 transition-colors text-gray-700" onClick={e => { setIsMenuOpen(false); setTimeout(() => { window.location.hash = '#lgbtq-support'; }, 50); }}>
              LGBTQ+ Support
            </Link>
            <Link href="/#education" className="block px-4 py-2 text-sm hover:bg-teal-50 transition-colors text-gray-700" onClick={e => { setIsMenuOpen(false); setTimeout(() => { window.location.hash = '#education'; }, 50); }}>
              Education
            </Link>
            <Link href="/#faq" className="block px-4 py-2 text-sm hover:bg-teal-50 transition-colors text-gray-700" onClick={e => { setIsMenuOpen(false); setTimeout(() => { window.location.hash = '#faq'; }, 50); }}>
              FAQ
            </Link>
            <Link href="/#contact" className="block px-4 py-2 text-sm hover:bg-teal-50 transition-colors text-gray-700" onClick={e => { setIsMenuOpen(false); setTimeout(() => { window.location.hash = '#contact'; }, 50); }}>
              Contact
            </Link>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}