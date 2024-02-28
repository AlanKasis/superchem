import React from 'react'
import FeatureCard from './FeautureCard'

const MarketsSection = () => {
    return (
        <div className="py-8 px-4 max-w-screen-xl sm:py-16 lg:px-6 mt-6 md:mt-16 bg-gray-50 rounded-lg border border-gray-200 rounded-lg shadow m-2">
            <div className="max-w-screen-md mb-8 lg:mb-16">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Diseñado para su industria</h2>
                <p className="text-gray-500 sm:text-xl dark:text-gray-400">En SuperChem contamos con 30 años de experiencia en procesos de separación industrial, brindando servicio excepcional cualquiera sea el mercado de aplicación.</p>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                <FeatureCard
                    title="Destilación de petroleo, gas y sus derivados"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad mollitia sit ipsam ipsa molestiae obcaecati commodi, perspiciatis ut illum eius? Accusantium, architecto sequi rerum ut modi quaerat sunt vel?"
                    iconUrl="/oil-rig.png"
                />
                <FeatureCard
                    title="Recuperación de solventes"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad mollitia sit ipsam ipsa molestiae obcaecati commodi, perspiciatis ut illum eius? Accusantium, architecto sequi rerum ut modi quaerat sunt vel?"
                    iconUrl="/solvent.png"
                />
                <FeatureCard
                    title="Separación y purificación de productos químicos"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad mollitia sit ipsam ipsa molestiae obcaecati commodi, perspiciatis ut illum eius? Accusantium, architecto sequi rerum ut modi quaerat sunt vel?"
                    iconUrl="/funnel.png"
                />
                <FeatureCard
                    title="Separaciones en la industria de los alimentos"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad mollitia sit ipsam ipsa molestiae obcaecati commodi, perspiciatis ut illum eius? Accusantium, architecto sequi rerum ut modi quaerat sunt vel?"
                    iconUrl="/conveyor.png"
                />
                <FeatureCard
                    title="Purificación de bebidas alcóholicas"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad mollitia sit ipsam ipsa molestiae obcaecati commodi, perspiciatis ut illum eius? Accusantium, architecto sequi rerum ut modi quaerat sunt vel?"
                    iconUrl="/drink.png"
                />
                <FeatureCard
                    title="Destilación de productos vegetales para cosmética, fitoquímica y perfumería"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad mollitia sit ipsam ipsa molestiae obcaecati commodi, perspiciatis ut illum eius? Accusantium, architecto sequi rerum ut modi quaerat sunt vel?"
                    iconUrl="/skincare.png"
                />
            </div>
        </div>
    )
}

export default MarketsSection