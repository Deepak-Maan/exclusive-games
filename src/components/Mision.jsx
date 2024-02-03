import React from 'react'
import Poker from "../assets/images/Poker.webp"
import Avaitor from "../assets/images/Avaitor.webp"
const Mision = () => {
    return (
        <div>
            <div className="mx-auto px-3 max-w-[1140px] pt-[75px] pb-[100px]">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div className='max-w-[538px]'>
                        <img src={Poker} alt="poker" />
                        <div className=' pt-[60px]'>
                            <p className='text-white text-5xl font-normal font-anton leading-[120%]'>Nuestra Visión</p>
                            <p className='text-[#CCD0D1] text-base font-medium font-inter leading-[160%] max-w-[444px] pt-4 pb-6'>Nuestra visión es ser líderes indiscutibles en la industria de los juegos de azar y llevar nuestra pasión por el entretenimiento más allá de las fronteras. Imagina un mundo donde la emoción y la diversión no tengan límites, y ese es el mundo que queremos crear contigo.</p>
                            <a className='text-base font-bold font-inter leading-[160%] text-[#7AF57A]' href="">Aprende más {"-->"}</a>
                        </div>
                    </div>
                    <div className='max-w-[538px] flex flex-col-reverse lg:flex-col'>
                        <div className=' pb-[60px]'>
                            <p className='text-white text-5xl font-normal font-anton leading-[120%]'>Nuestra Visión</p>
                            <p className='text-[#CCD0D1] text-base font-medium font-inter leading-[160%] max-w-[444px] pt-4 pb-6'>Nuestra misión es simple pero poderosa: proporcionarte la más amplia gama de soluciones de entretenimiento de alta calidad y rentabilidad. Estamos comprometidos a elevar tus expectativas y brindarte experiencias inigualables.</p>
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
