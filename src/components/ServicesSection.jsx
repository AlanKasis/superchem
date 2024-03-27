import React from 'react'
import Bullet from './Bullet'

const ServicesSection = () => {
    return (
        <div id="services-section" className="bg-[#1d3557] w-full justify-center flex pt-6 my-6 pb-6">
            <div className="py-8 px-4 max-w-screen-xl sm:py-16 lg:px-6 md:mt-16 bg-gray-50 rounded-lg border border-gray-200 rounded-lg shadow gap-6 m-2 md:m-0">
                <div className="flex flex-wrap justify-between mb-16">
                    <div className="lg:w-1/2 mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Servicios acorde a sus necesidades</h2>
                        <p className="text-gray-500 sm:text-xl">En base a nuestra basta experiencia, ofrecemos los siguientes servicios:</p>
                        <br></br>
                        <hr className="my-6"></hr>
                        <Bullet content="Separaciones en Industria Química y Alimentaria." />
                        <Bullet content="Modelos predictivos de control de unidades de destilación en la industria química en general." />
                        <Bullet content="“Revamping” o rediseño de columnas de destilación. Especialización en cálculos de recuperación vs. número de platos teóricos." />
                        <Bullet content="Modelización de Procesos de almacenaje en Plantas de Gas, integrando los balances de masa y energía y sus flujos (por HYSYS). Purificación por adsorción." />
                        <Bullet content="Diseño y cálculo de Equipos: Tanques y reactores, Intercambiadores de calor, Separadores de gases, bifásicos, calderas, bombas y ventiladores. Válvulas de seguridad en recipientes sometidos a presión. Cálculo de consumo para determinar el Factor de Rendimiento o Relación de Economía." />
                        <Bullet content="Integración de Procesos para el aprovechamiento del calor." />
                        {/* <p className="text-gray-500 sm:text-xl">En SuperChem contamos con 30 años de experiencia en procesos de separación industrial, brindando servicio excepcional cualquiera sea el mercado de aplicación.</p> */}
                    </div>
                    <img className="h-auto sm:max-w-xl rounded-lg shadow-xl md:object-cover" src="/engineer-distillery.jpg" alt="image description" />
                </div>
                <div className="flex flex-wrap justify-between">
                    <img className="h-auto sm:max-w-xl rounded-lg shadow-xl hidden sm:block md:object-cover" src="/engineer.jpg" alt="image description" />
                    <div className="lg:w-1/2 mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Servicios de gestión</h2>
                        <p className="text-gray-500 sm:text-xl">Realizamos certificaciones, pericias y mas servicios relacionados con la optimización y el control de calidad en los procesos productivos</p>
                        <br></br>
                        <hr className="my-6"></hr>
                        <Bullet content="Sistema de Gestión Integrado" />
                        <Bullet content="Certificaciones de norma (ISO 9001 de Aseguramiento de la Calidad, ISO 14001 Compromiso medioambiental, Huella de Carbono)" />
                        <Bullet content="Permisos de trabajo (POW)" />
                        <Bullet content="Check in de equipos" />
                        <Bullet content="Pericias realizadas por personal calificado con aprobación oficial (IRAM)." />
                        <p className="text-gray-500 sm:text-xl">Tres decadas de experiencia nos avalan . Ofrecemos servicios adaptados a diversos mercados con excelencia química garantizada.</p>
                    </div>
                    <img className="h-auto sm:max-w-xl rounded-lg shadow-xl sm:hidden md:object-cover" src="/engineer.jpg" alt="image description" />
                </div>
            </div>

        </div >
    )
}

export default ServicesSection