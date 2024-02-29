import React from 'react'

const Bullet = ({ content }) => {
    return (
        <div className="flex items-center mb-6">
            <div className="bg-[#457B9D] rounded-full p-1">
                <img className="h-6 min-w-6 invert" src="/check-mark.png" />
            </div>
            <p className="ml-6 md:ml-10 font-semibold sm:text-xl text-black">{content}</p>
        </div>
    )
}

export default Bullet