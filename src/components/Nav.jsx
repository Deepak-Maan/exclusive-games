import React from 'react'
import PageLogo from "../assets/images/PageLogo.svg"
import CommonBtn from './CommonButton'
import { ButtonBottom } from './Icons'
const Nav = () => {
    return (
        <div className='bg-[rgba(255,255,255,0.10)] backdrop-blur-[26px] py-6'>
            <div className='max-w-[1140px] mx-auto px-3'>
                <nav className='flex items-center justify-between'>
                    <img src={PageLogo} alt="pageLogo" />
                    <ul className='flex gap-[28px]'>
                        <li><a href="" className=' text-[#D2D8DA] text-base font-medium font-inter leading-[160%]'>Hogar</a></li>
                        <li><a href="" className=' text-[#D2D8DA] text-base font-medium font-inter leading-[160%]'>Misión</a></li>
                        <li><a href="" className=' text-[#D2D8DA] text-base font-medium font-inter leading-[160%]'>Tragamonedas</a></li>
                        <li><a href="" className=' text-[#D2D8DA] text-base font-medium font-inter leading-[160%]'>Por qué elegirnos</a></li>
                        <li><a href="" className=' text-[#D2D8DA] text-base font-medium font-inter leading-[160%]'>Ofertas</a></li>
                    </ul>
                    <div className='relative'>
                        <CommonBtn text="Acceso" />
                        <span className='absolute -left-1 -bottom-1'><ButtonBottom /></span>
                    </div>
                </nav>
            </div>

        </div>
    )
}

export default Nav
