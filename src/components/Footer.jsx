import React from 'react'
import PageLogo from "../assets/images/PageLogo.svg"
import { Email, Facebook, Instagram, Linkedin, Phone } from './Icons'


const Footer = () => {
    return (
        <>
            <div className=' bg-[#000000] py-[20px] relative overflow-hidden' >
                <div className=' max-w-[1160px] container mx-auto px-3 '>
                    <div className=' flex flex-wrap  flex-row -mx-3 pt-[50px]'>
                        <div className='w-full xl:w-1/3 px-3'>
                            <img src={PageLogo} alt="Footerlogo" />
                            <p className='font-["inter"] font-medium text-[16px]  leading-6  max-w-[369px] text-[#CCCCCC] pt-[16px]'>En Exclusive Games somos un equipo apasionado de personas dedicadas al desarrollo de multiplataformas para juegos de azar</p>
                            <div className=" flex gap-5 pt-6">
                                <a href="https://www.instagram.com/" target="_blank">
                                    <span><Instagram /></span>
                                </a>
                                <a href="https://www.facebook.com/" target="_blank">
                                    <span><Facebook /></span>
                                </a>
                                <a href="https://www.linkedin.com/home?originalSubdomain=in" target="_blank">
                                    <span><Linkedin /></span>
                                </a>
                            </div>
                        </div>
                        <div className='w-full xl:w-2/3 px-3 pt-5 xl:pt-0'>
                            <div className=' flex flex-wrap flex-row -mx-3'>
                                <div className='sm:w-1/2  w-full lg:w-1/3 px-3'>
                                    <ul>
                                        <li className=' font-["inter"] font-bold text-[16px]  leading-6  text-[#FFFFFF] pt-[10px]'>Menú principal</li>
                                        <li className=' pt-4'><a href="#" className=' font-["inter"] font-medium text-[16px] text-[#CCCCCC]  leading-6'>Hogar</a></li>
                                        <li className=' pt-4'><a href="#" className=' font-["inter"] font-medium text-[16px] text-[#CCCCCC]  leading-6'>Misión</a></li>
                                        <li className=' pt-3'><a href="#" className=' font-["inter"] font-medium text-[16px] text-[#CCCCCC]  leading-6'>Tragamonedas</a></li>
                                        <li className=' pt-3'><a href="#" className=' font-["inter"] font-medium text-[16px] text-[#CCCCCC]  leading-6'>Por qué elegirnos</a></li>
                                        <li className=' pt-3'><a href="#" className=' font-["inter"] font-medium text-[16px] text-[#CCCCCC]  leading-6'>Ofertas</a></li>
                                    </ul>
                                </div>
                                <div className='sm:w-1/2  w-full lg:w-1/3 px-3 pt-4 sm:pt-0'>
                                    <ul>
                                        <li className=' font-["inter"] font-bold text-[16px]  leading-6  text-[#FFFFFF] pt-[10px]'>Atención al cliente</li>
                                        <li className=' pt-4'><a href="#" className=' font-["inter"] font-medium text-[16px] text-[#CCCCCC]  leading-6'>¿Necesitas ayuda?</a></li>
                                        <li className=' pt-4'><a href="#" className=' font-["inter"] font-medium text-[16px] text-[#CCCCCC]  leading-6'>política de privacidad</a></li>
                                        <li className=' pt-3'><a href="#" className=' font-["inter"] font-medium text-[16px] text-[#CCCCCC]  leading-6'>Términos de servicios</a></li>
                                    </ul>
                                </div>
                                <div className='w-full lg:w-1/3 px-3 pt-4 lg:pt-0'>
                                    <ul>
                                        <li className=' font-["inter"] font-bold text-[16px]  leading-6  text-[#FFFFFF] pt-[10px]'>Ponerse en contacto</li>
                                        <li className=' '><a href="mailto:juegosexclusivos@gmail.com"><span className=' flex flex-nowrap items-center gap-2 font-["inter"] font-bold text-[16px]  leading-6  text-[#CCCCCC]  pt-[10px]'><span><Email /></span>juegosexclusivos@gmail.com</span></a></li>
                                        <li className=''><a href="tel:(101)342-7873"><span className=' flex flex-nowrap items-center gap-2 font-["inter"] font-bold text-[16px]  leading-6  text-[#CCCCCC]  pt-[10px]'><span><Phone /></span>(101)342-7873</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className=' w-full h-[1px] bg-[#FFFF] mt-[40px]' />
                <p className='font-["inter"] font-medium text-sm sm:text-[16px] leading-4  sm:leading-6  text-[#808080] pt-[20px] mx-auto text-center'> © Juegos exclusivos - Todos los derechos reservados 2023</p>
            </div>
        </>
    )
}

export default Footer