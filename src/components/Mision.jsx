import React from 'react'
import Poker from "../assets/images/Poker.webp"
import Avaitor from "../assets/images/Avaitor.webp"
import { Ellipse } from './Icons'
const Mision = () => {
    return (
        <div className='relative overflow-x-clip'>
            <div className='w-[484px] max-lg:hidden h-[484px] rounded-full bg-blue-307 absolute top-0 left-[-20%] blur-[180px] animate-pulse'></div>
            <div className='w-[484px] max-lg:hidden h-[484px] rounded-full bg-blue-307 absolute bottom-[-10%] right-[-20%] blur-[180px] animate-pulse'></div>
            <div className='w-[100px] max-lg:hidden h-[100px] rounded-full bg-blue-307 absolute top-[35%] left-[47%] blur-[60px] animate-pulse'></div>
            <div className="mx-auto px-3 max-w-[1140px] pt-7 sm:pt-9 md:pt-[75px] pb-4 sm:pb-8 md:pb-12 lg:pb-[100px]">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div className='max-w-[538px]'>
                        <img src={Poker} alt="poker" />
                        <div className=' pt-4 sm:pt-8 md:pt-[60px]'>
                            <p className='text-white text-[21px] sm:text-2xl md:text-3xl lg:text-5xl font-normal font-anton leading-[120%]'>Nuestra Visión</p>
                            <p className='text-[#CCD0D1] text-sm sm:text-base font-medium font-inter leading-[130%] sm:leading-[160%] max-w-[444px] pt-4 pb-4 sm:pb-6'>Nuestra visión es ser líderes indiscutibles en la industria de los juegos de azar y llevar nuestra pasión por el entretenimiento más allá de las fronteras. Imagina un mundo donde la emoción y la diversión no tengan límites, y ese es el mundo que queremos crear contigo.</p>
                            <a className='text-base font-bold font-inter leading-[160%] text-[#7AF57A]' href="">Aprende más {"-->"}</a>
                        </div>
                    </div>
                    <div className='max-w-[538px] flex flex-col-reverse lg:flex-col'>
                        <div className=' md:pb-[60px]'>
                            <p className='text-white sm:text-2xl md:text-3xl lg:text-5xl font-normal font-anton leading-[120%]'>Nuestra Visión</p>
                            <p className='text-[#CCD0D1] text-sm sm:text-base font-medium font-inter leading-[130%] sm:leading-[160%] max-w-[444px] pt-4 pb-4 sm:pb-6'>Nuestra misión es simple pero poderosa: proporcionarte la más amplia gama de soluciones de entretenimiento de alta calidad y rentabilidad. Estamos comprometidos a elevar tus expectativas y brindarte experiencias inigualables.</p>
                            <a className='text-base font-bold font-inter leading-[160%] text-[#7AF57A]' href="">Aprende más {"-->"}</a>
                        </div>
                        <img className='pb-5 lg:pb-0' src={Avaitor} alt="poker" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Mision
