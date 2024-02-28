'use client'

import React from 'react'
import Slider from 'react-infinite-logo-slider'

const LogoSlider = () => {
    return (
        <Slider
            width="250px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={'#fff'}
            className="overflow-x-hidden"
        >
            <Slider.Slide>
                <img src="/transportadora_de_gas_del_norte_logo.jpeg" alt="any" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/uba-logo.png" alt="any2" className='w-48' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/fabricaciones_militares.png" alt="any3" className='w-28' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/eni-logo.png" alt="any4" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/exactas_logo.svg" alt="any4" className='w-36' />
            </Slider.Slide>
        </Slider>
    )
}

export default LogoSlider