import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-white rounded-lg shadow m-4 w-full">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="/superchem-logo.png" className="h-10" alt="SuperChem Logo" />
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Servicios</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Proyectos</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Nosotros</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contacto</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center">© 2023 <a href="https://superchem.com.ar/" className="hover:underline">SuperChem™</a>. All Rights Reserved.</span>
            </div>
        </footer>


    )
}

export default Footer