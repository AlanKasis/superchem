import React from 'react'
import FeatureCard from './FeautureCard'

const MarketsSection = () => {
    return (
        <div id="markets-section" className="py-8 px-4 max-w-screen-xl sm:py-16 lg:px-6 mt-6 md:mt-16 bg-gray-50 rounded-lg border border-gray-200 rounded-lg shadow m-2 md:mb-0">
            <div className="max-w-screen-md mb-8 lg:mb-16">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Diseñado para su industria</h2>
                <p className="text-gray-500 sm:text-xl">En SuperChem contamos con 30 años de experiencia en procesos de separación industrial, brindando servicio excepcional cualquiera sea el mercado de aplicación.</p>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                <FeatureCard
                    title="Destilación de petroleo, gas y sus derivados"
                    description="Desarrollo de modelos de control predictivo de columnas de destilación. Modelización de Sistemas de almacenaje de Gas Natural por técnicas de adsorción y purificación / deshidratación simultánea."
                    iconUrl="/oil-rig.png"
                />
                <FeatureCard
                    title="Recuperación de solventes"
                    description="Determinación de balances de calor y masa para lograr una separación eficiente, especialmente en procesos de separacion multifásica de solventes para reacción en plantas de resinas"
                    iconUrl="/solvent.png"
                />
                <FeatureCard
                    title="Separación y purificación de productos químicos"
                    description="Consultoría en realización de purificaciones de alto grado. Acondicionamiento de agua para cumplir estandares de farmacopea"
                    iconUrl="/funnel.png"
                />
                <FeatureCard
                    title="Separaciones en la industria de los alimentos"
                    description="Exploramos métodos de separación química para mejorar la calidad y eficiencia en la producción de alimentos. Nuestro enfoque en procesos optimizados garantiza productos finales de primera calidad, cumpliendo con los más altos estándares de la industria alimentaria."
                    iconUrl="/conveyor.png"
                />
                <FeatureCard
                    title="Purificación de bebidas alcóholicas"
                    description="Estudios de factibilidad y estandarización de producto final en el proceso de destilación de bebidas alcoholicas"
                    iconUrl="/drink.png"
                />
                <FeatureCard
                    title="Destilación de productos vegetales para cosmética, fitoquímica y perfumería"
                    description="Especialización en métodos de purificación de esencias aromáticas (destilación - extracción con vapor). Estudios de factibilidad de producción de diéster en la industria del biodiesel."
                    iconUrl="/skincare.png"
                />
            </div>
        </div>
    )
}

export default MarketsSection