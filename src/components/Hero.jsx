import React from 'react'
import SecondaryBtn from './SecondaryBtn'
import { ButtonBottom2 } from './Icons'

const Hero = () => {
    return (
        <div className='max-w-[1140px] mx-auto px-3'>
            <h1 className='text-[21px] sm:text-2xl  md:text-3xl lg:text-7xl font-normal leading-[120%] text-white font-anton uppercase max-w-[505px] mx-auto pt-5 sm:pt-10 md:pt-20 lg:pt-[140px]'>Exclusive Games. Pasión por ganar</h1>
            <p className='text-[#D4CFD3] text-[14px] sm:text-base font-inter leading-[130%] sm:leading-[160%] max-w-[727px] mx-auto text-center pt-4 pb-4 sm:pb-10'>En Exclusive Games somos un equipo apasionado de personas dedicados al desarrollo de multiplataformas para juegos de azar. A lo largo de nuestra vida consumimos todo tipo de juegos hasta que un día decidimos crear los propios.</p>
            <div className="flex justify-center pb-5 sm:pb-12 md:pb-28 lg:pb-[218px]">
                <div className='relative'>
                    <SecondaryBtn text='Empezar' />
                    <span className='absolute -left-1 -bottom-1'><ButtonBottom2 /></span>
                </div>
            </div>
        </div>
    )
}

export default Hero
