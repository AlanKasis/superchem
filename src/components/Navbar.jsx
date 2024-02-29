import React from 'react'
import { Navbar as FlowbiteNavbar } from "flowbite-react";

const Navbar = ({ showBackground }) => {
    return (
        <FlowbiteNavbar
            fluid={true}
            className={`fixed z-30 w-full ${showBackground ? "bg-white border-b-2" : "bg-transparent"}`}
        >
            <FlowbiteNavbar.Brand href="https://superchem.com.ar/">
                <img
                    src="/superchem-logo.png"
                    className="mr-3 h-6 sm:h-9"
                    alt="SuperChem Logo"
                />
            </FlowbiteNavbar.Brand>
            <FlowbiteNavbar.Toggle className="text-black" />
            <FlowbiteNavbar.Collapse >
                <FlowbiteNavbar.Link
                    href="/"
                >
                    Home
                </FlowbiteNavbar.Link>
                <FlowbiteNavbar.Link href="#markets-section">
                    Mercados
                </FlowbiteNavbar.Link>
                <FlowbiteNavbar.Link href="#services-section">
                    Servicios
                </FlowbiteNavbar.Link>
                <FlowbiteNavbar.Link href="#contact-section">
                    Contacto
                </FlowbiteNavbar.Link>
            </FlowbiteNavbar.Collapse>
        </FlowbiteNavbar>
        // <nav className={`${showBackground ? "bg-white" : "bg-transparent"} fixed w-full z-30 top-0 start-0`}>
        //     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
        //         <a href="https://superchem.com.ar/" className="flex items-center space-x-3 rtl:space-x-reverse">
        //             <img src="superchem-logo.png" className="mx-2 h-8 lg:h-10" alt="Superchem Logo" />
        //         </a>
        //         <div className="md:hidden flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        //             <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
        //                 <span className="sr-only">Open main menu</span>
        //                 <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        //                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
        //                 </svg>
        //             </button>
        //         </div>
        //         <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        //             <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
        //                 <li>
        //                     <a href="#" className="text-lg font-bold block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:p-0" aria-current="page">Home</a>
        //                 </li>
        //                 <li>
        //                     <a href="#" className="text-lg font-bold block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:p-0">About</a>
        //                 </li>
        //                 <li>
        //                     <a href="#" className="text-lg font-bold block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:p-0">Services</a>
        //                 </li>
        //                 <li>
        //                     <a href="#" className="text-lg font-bold block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:p-0">Contact</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    )
}

export default Navbar