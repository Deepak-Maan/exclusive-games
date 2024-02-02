import React from 'react'
import JackpotImg from '../assets/images/Jackpot.webp'
import { ButtonBottom, DoubleTick } from './Icons'
import CommonBtn from './CommonButton'
import ezuki from '../assets/images/ezuki.webp'
import betting from '../assets/images/betting.webp'
import roulette from '../assets/images/roulette.webp'
const Jackpot = () => {
    const jackpotdata = [
        { id: 1, img: ezuki, title: "Inteligencia", },
        { id: 2, img: roulette, title: "Proactividad", },
        { id: 3, img: betting, title: "Innovación", },

    ]
    return (
        <div>
            <div className="mx-auto px-3 max-w-[1140px] pt-[90px]">
                <div className="grid grid-cols-2 gap-10 pb-[150px]">
                    <div>
                        <img src={JackpotImg} alt="jackpotImg" />
                    </div>
                    <div>
                        <h2 className=' text-5xl font-normal font-anton leading-[120%] text-white pb-4 text-nowrap'>Potenciando sus elecciones</h2>
                        <p className='text-base text-[#CDD0D1] font-inter font-medium pb-3'>Con Exclusive Game lo mejor está de tu lado.</p>
                        <div className='flex gap-2 pb-3'>
                            <DoubleTick />
                            <p className='text-base font-medium font-inter leading-[160%] text-[#CDD0D2]'>Tecnología HTML5</p>
                        </div>
                        <div className='flex gap-2 pb-3'>
                            <DoubleTick />
                            <p className='text-base font-medium font-inter leading-[160%] text-[#CDD0D2]'>Versión PC y móvil</p>
                        </div>
                        <div className='flex gap-2 pb-3'>
                            <DoubleTick />
                            <p className='text-base font-medium font-inter leading-[160%] text-[#CDD0D2]'>Control de RTP (controlás qué porcentaje pagar)</p>
                        </div>
                        <div className='flex gap-2 pb-3'>
                            <DoubleTick />
                            <p className='text-base font-medium font-inter leading-[160%] ma text-[#CDD0D2] max-w-[380px]'>Bonos editables, happy hours, Jackpots, códigos  promocionales.</p>
                        </div>
                        <div className='flex gap-2 pb-6'>
                            <DoubleTick />
                            <p className='text-base font-medium font-inter leading-[160%] text-[#CDD0D2]'>Aplicación para android y windows de regalo.</p>
                        </div>
                        <p className='text-base text-[#CDD0D1] font-inter font-medium'>Te reintegramos todo lo invertido en fichas en la moneda que elijas.</p>
                    </div>
                </div>
                <div className='bg-jackpot2 max-w-[1043px] mx-auto rounded-2xl py-24 px-[262px] backdrop-blur-[29px]'>
                    <h2 className='font-anton font-normal text-white text-5xl max-w-[520px] text-center leading-[120%]'>lanza tu propia plataforma en sólo 2 semanas</h2>
                </div>
                <h2 className='font-anton font-normal text-white text-5xl  text-center leading-[120%] pt-[150px] pb-[60px]'>Juegos en vivo</h2>
                <div className="grid grid-cols-3 gap-6 pb-28">
                    {
                        jackpotdata.map((listing, index) => (
                            <div key={index} className="relative flex flex-col items-center w-full duration-300 group">
                                <img className="w-full rounded-lg" src={listing.img} alt={listing.title} />
                                <div className="absolute flex items-center justify-center w-full h-full duration-300 bg-black rounded-lg opacity-0 group-hover:opacity-100 bg-opacity-70">
                                    <div className="relative"><CommonBtn text="Reproducir ahora" />
                                        <span className="absolute -left-1 -bottom-1"><ButtonBottom /></span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Jackpot
