import React from 'react'
import CommonBtn from './CommonButton'
import { ButtonBottom } from './Icons'
import giros from '../assets/images/giros.webp'
import multiplePeople from '../assets/images/multiple-people.webp'
import happyHours from '../assets/images/happy-hours.webp'

const Ellos = () => {
    const jackpotdata = [
        { id: 1, img: giros, title: "Inteligencia", },
        { id: 2, img: multiplePeople, title: "Proactividad", },
        { id: 3, img: happyHours, title: "Innovación", },

    ]
    return (
        <div className='max-w-[1140px] mx-auto px-3 pb-5'>
            <h2 className=' text-[23px] sm:text-2xl md:text-3xl lg:text-5xl text-white font-normal font-anton leading-[120%] text-center pt-7 lg:pt-36 pb-4 md:pb-9 lg:pb-[60px]'>Ellos eligieron apostar con nosotros</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-4 sm:pb-10 md:pb-14 lg:pb-28">
                {
                    jackpotdata.map((listing, index) => (
                        <div key={index} className="relative flex flex-col items-center w-full duration-300 group">
                            <img className="w-full rounded-lg" src={listing.img} alt={listing.title} />
                            <div className="absolute flex items-center justify-center w-full h-full duration-300 bg-black rounded-lg opacity-0 group-hover:opacity-100 bg-opacity-70">
                                <div className="relative"><CommonBtn text="Rcasinovip" />
                                    <span className="absolute -left-1 -bottom-1"><ButtonBottom /></span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <p className=' text-white text-sm sm:text-base font-inter font-semibold leading-[130%] lg:leading-[160%] text-center max-w-[883px] mx-auto'>Clientes satisfechos que confiaron en Exclusive Games y han disfrutado de emocionantes experiencias de juego.
                Ahora, la próxima apuesta está en tus manos.
                Elige ganar. Elige exclusive game.</p>
        </div>
    )
}

export default Ellos
