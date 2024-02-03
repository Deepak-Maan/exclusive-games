import React from 'react'
import casino from "../assets/images/cashino-img.webp"
import SecondaryBtn from './SecondaryBtn';
import { ButtonBottom2 } from './Icons';
const Cashino = () => {
    return (
        <div className='bg-[100% 100%]'>
            <div className='max-w-[1140px] mx-auto px-3'>
                <div className="grid lg:grid-cols-2 py-5 sm:py-15 md:py-30 lg:pt-[304px] lg:pb-[324px]">
                    <div className='flex flex-col order-2 lg:order-1 justify-center'>
                        <h2 className='text-black text-[23px] sm:text-3xl md:text-3xl lg:text-5xl font-anton font-normal leading-[120%] pb-4'>Por qué elegirnos</h2>
                        <p className='max-w-[526px] text-[#334349] font-inter font-medium text-sm sm:text-base pb-6 leading-[120%]'>Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos todo lo invertido en fichas en la moneda que elijas. En Exclusive Games siempre sumamos nuevos juegos. Juegos crash, los juegos interactivos que más pide la gente. Con Exclusive Games empezás a ganar ya! Creamos tu plataforma en solo 2 semanas.</p>
                        <div className='relative'>
                            <SecondaryBtn text='Aprende más' />
                            <span className='absolute -left-1 -bottom-1'><ButtonBottom2 /></span>
                        </div>
                    </div>
                    <div className='order-1 lg:order-2'>
                        <img className='w-full max-w-[558px] pb-4 lg:pb-0' src={casino} alt="casino" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cashino
