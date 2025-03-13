"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import logo from "../assets/logo.png"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    return (
        <header className="w-full border-b border-gray-200 bg-white z-[50] relative">
            <div className=" px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 mr-2">
                        <a href="/" className="flex items-center">
                            <img src={logo} alt="logo" className="h-8 w-8" />

                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6 ml-2">
                        <div className="relative">
                            <button
                                className="flex items-center text-sm font-medium"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                What we offer <ChevronDown className="ml-1 h-4 w-4 text-[#0E121B] leading-[24px]" />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                                    <div className="py-1">
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Product 1
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Product 2
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Product 3
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>

                        <a href="/about" className="text-[#0E121B] leading-[24px] text-sm font-medium">
                            About us
                        </a>

                        <a href="/blog" className="text-[#0E121B] leading-[24px] text-sm font-medium">
                            Blog
                        </a>

                        <a href="/contact" className="text-[#0E121B] leading-[24px] text-sm font-medium">
                            Contact us
                        </a>
                    </nav>

                    {/* Right side buttons */}
                    <div className="hidden md:flex items-center space-x-4 ml-auto">
                        <a href="/partner" className="text-[#0E121B] leading-[24px] text-sm font-medium">
                            Partner with Us
                        </a>

                        <a
                            href="/explore"
                            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                        >
                            Explore Our Ecosystem
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden ml-auto">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <div className="relative">
                            <button
                                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                <div className="flex items-center justify-between">
                                    What we offer
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </div>
                            </button>

                            {isDropdownOpen && (
                                <div className="pl-4">
                                    <a href="#" className="block px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50">
                                        Product 1
                                    </a>
                                    <a href="#" className="block px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50">
                                        Product 2
                                    </a>
                                    <a href="#" className="block px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50">
                                        Product 3
                                    </a>
                                </div>
                            )}
                        </div>

                        <a href="/about" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">
                            About us
                        </a>

                        <a href="/blog" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">
                            Blog
                        </a>

                        <a href="/contact" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">
                            Contact us
                        </a>

                        <a href="/partner" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">
                            Partner with Us
                        </a>

                        <a
                            href="/explore"
                            className="block px-3 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                        >
                            Explore Our Ecosystem
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}

