import React from 'react'

const ClientsSection = () => {
    return (
        <div className="py-8 px-4 max-w-screen-xl sm:py-12 lg:px-6 md:mt-16 bg-gray-50 rounded-lg border border-gray-200 rounded-lg shadow gap-6 m-2 md:m-0">
            <div className="flex flex-wrap justify-around items-center">
                <div className="w-full lg:w-1/2 mb-8 lg:mb-16 md:pr-8">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Nuestros clientes nos respaldan</h2>
                    <p className="text-gray-500 sm:text-xl">Las empresas que nos eligen dan constancia de la disciplina y el profesionalismo con el que trabajamos en cada nuevo proyecto</p>
                </div>
                <div className="md:w-1/2 grid grid-cols-2 gap-7 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-3">
                    <img src="/uba-logo-round.png" alt="any2" className='m-auto p-4' />
                    <img src="/exactas_logo.svg" alt="any4" className='m-auto' />
                    <img src="/eni-logo.png" alt="any4" className='m-auto' />
                    <img src="/fabricaciones_militares.png" alt="any3" className='m-auto p-4' />
                    <img src="/ejercito-argentino-logo.png" alt="any" className='m-auto p-4' />
                    <img src="/tgn-logo.png" alt="any" className='m-auto' />
                </div>
            </div>
        </div>
    )
}

export default ClientsSection