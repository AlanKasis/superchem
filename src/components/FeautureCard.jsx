import React from 'react'

const FeatureCard = ({ title, description, iconUrl }) => {
    return (
        <div>
            <div className="flex justify-center items-center mb-4 w-16 h-16 lg:h-20 lg:w-20 bg-[#457B9D] rounded-full mx-auto">
                <img className="w-10 h-10 text-primary-600 invert" src={iconUrl} xmlns="http://www.w3.org/2000/svg" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-center">{title}</h3>
            <p className="text-gray-500">{description}</p>
        </div>
    )
}

export default FeatureCard