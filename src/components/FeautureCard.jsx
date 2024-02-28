import React from 'react'

const FeatureCard = ({ title, description, iconUrl }) => {
    return (
        <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 lg:h-20 lg:w-20 bg-[#457B9D] rounded-full mx-auto dark:bg-primary-900">
                <img className="w-5 h-5 text-primary-600 lg:w-12 lg:h-12 dark:text-primary-300 invert" src={iconUrl} xmlns="http://www.w3.org/2000/svg" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white text-center">{title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{description}</p>
        </div>
    )
}

export default FeatureCard