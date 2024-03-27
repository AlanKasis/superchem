import React from 'react'
import Image from 'next/image'

const LandingBanner = () => {
  return (

    <div className="w-full min-h-screen bg-landing-banner bg-cover flex justify-center items-center">
      <div className="w-full min-h-screen bg-gradient-to-b from-gray-300/20 via-transparent to-slate-900/40 absolute"></div>
      <div className="max-w-screen-xl m-4 mb-20 md:pr-96">
        <h1 className="text-4xl md:text-5xl 2xl:text-7xl font-bold tracking-tight mb-10">Especialistas en procesos de separación</h1>
        <p className="text-lg md:text-xl 2xl:text-2xl font-semibold">Sabemos que no hay nadie que conozca mejor la fabricación de un producto que el mismo fabricante. Nuestro aporte es dar un enfoque diferente para colaborar en el camino a la eficiencia.</p>
      </div>
    </div>
  )
}

export default LandingBanner