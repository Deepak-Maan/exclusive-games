import React from 'react'
import casinoSpin from "../assets/images/casino-spin.png";
import cards777 from "../assets/images/777withcards.webp";
import { ButtonBottom, ButtonBottom2, DoubleTick } from './Icons';
import CommonBtn from './CommonButton';
import SecondaryBtn from './SecondaryBtn';
const Spin = () => {
    return (
        <div className='relative overflow-x-clip'>
            <div className='w-[440px] h-[440px] rounded-full bg-blue-307 absolute bottom-0 left-0 z-[3] blur-[180px] animate-pulse'></div>
            <div className='w-[440px] h-[440px] rounded-full bg-blue-307 absolute bottom-0 right-0 z-[3] blur-[180px] animate-pulse'></div>
            <div className="max-w-[1140px] mx-auto px-3">
                <h2 className='text-white font-anton font-normal text-[23px] sm:text-2xl md:text-3xl lg:text-[48px] leading-[130%] sm:leading-[57px] text-center'>Nuestras ofertas</h2>
                <p className='text-white font-inter pt-4 pb-3 md:pb-7 lg:pb-[60px] font-medium leading-[25px] text-sm sm:text-[16px] text-center opacity-80'>Te ofrecemos las mejores experiencias de juegos para tus clientes.</p>
                <div className="w-full border-[0.5px] border-white bg-[#051D23] rounded-[16px]">
                    <div className="grid lg:grid-cols-2 pt-[57px] pb-[32px] items-center">
                        <div >
                            <img className='w-full' src={casinoSpin} alt="casinoSpin-img" />
                        </div>
                        <div className=' ps-3 lg:ps-0'>
                            <h4 className='text-white text-[32px] font-anton font-normal leading-[41px]'>Silver</h4>
                            <p className=' font-inter font-medium text-[16px] leading-[25px] text-white pt-4 opacity-80'>Diseño predeterminado, atractivo y fácil de navegar, tecnología HTLM5.</p>
                            <p className='pt-[32px] font-anton font-normal text-[48px] leading-[57px] text-white'>$5000</p>
                            <div className="flex pt-4 items-start gap-1 sm:gap-2">
                                <div className="w-6 h-6">
                                    <DoubleTick />
                                </div>
                                <p className=' font-inter font-medium text-xs sm:text-[16px] leading-[25px] text-white opacity-80'>Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales</p>
                            </div>
                            <div className="flex pt-3 items-start gap-1 sm:gap-2">
                                <div className="w-6 h-6">
                                    <DoubleTick />
                                </div>
                                <p className=' font-inter font-medium text-xs sm:text-[16px] leading-[25px] text-white opacity-80'>Control de RTP (controlás qué porcentaje pagar)</p>
                            </div>
                            <div className="flex pt-3 items-start gap-1 sm:gap-2">
                                <div className="w-6 h-6">
                                    <DoubleTick />
                                </div>
                                <p className=' font-inter font-medium text-xs sm:text-[16px] leading-[25px] text-white opacity-80'>Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo</p>
                            </div>
                            <div className="flex pt-3 items-start gap-1 sm:gap-2">
                                <div className="w-6 h-6">
                                    <DoubleTick />
                                </div>
                                <p className=' font-inter font-medium text-xs sm:text-[16px] leading-[25px] text-white opacity-80'>Aplicación para Android y Windows de regalo.</p>
                            </div>
                            <div className="flex pt-3 items-start gap-1 sm:gap-2 pb-[40px]">
                                <div className="w-6 h-6">
                                    <DoubleTick />
                                </div>
                                <p className=' font-inter font-medium text-xs sm:text-[16px] leading-[25px] text-white opacity-80'>Tiempo de creación 2 a 3 semanas</p>
                            </div>
                            <div className="relative">
                                <CommonBtn text="Reproducir ahora" />
                                <span className="absolute -left-1 -bottom-1"><ButtonBottom /></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full px-3 my-[64px] border-[0.5px] bg-[url('../src/assets/images/luxery-bg.png)'] bg-size bg-no-repeat h-full border-white bg-[#051D23] rounded-[16px] py-[45px] flex items-center flex-col">
                    <div className='max-w-[419px]'>
                        <h4 className='text-white text-[32px] font-anton font-normal leading-[41px] text-center'>Luxury</h4>
                        <p className='font-inter font-medium text-sm sm:text-[16px] leading-[25px] text-white pt-4 text-center opacity-80'>lleva tu experiencia de juego al siguiente nivel. Con todas las características de la versión Silver y la potencia adicional de la tecnología React .</p>
                        <h2 className='text-white font-anton font-normal text-[48px] leading-[57px] text-center pt-8 pb-4'>$9000</h2>
                        <div className="flex items-start gap-2">
                            <div className="w-6 h-6">
                                <DoubleTick />
                            </div>
                            <p className=' font-inter font-medium text-xs sm:text-[16px] leading-[25px] text-white lg:text-center opacity-80'>Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales</p>
                        </div>
                        <div className="flex items-start gap-2 pt-3">
                            <div className="w-6 h-6">
                                <DoubleTick />
                            </div>
                            <p className=' font-inter font-medium text-xs sm:text-[16px] leading-[25px] text-white lg:text-center opacity-80'>Control de RTP (controlás qué porcentaje pagar)</p>
                        </div>
                        <div className="flex items-start gap-2 pt-3">
                            <div className="w-6 h-6">
                                <DoubleTick />
                            </div>
                            <p className=' font-inter font-medium text-xs sm:text-[16px] leading-[25px] text-white lg:text-center opacity-80'>Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo</p>
                        </div>
                        <div className="flex items-start gap-2 pt-3">
                            <div className="w-6 h-6">
                                <DoubleTick />
                            </div>
                            <div className='text-center w-full'>
                                <p className=' font-inter font-medium text-xs sm:text-[16px] leading-[25px] text-white text-start lg:text-center opacity-80'>Aplicación para Android y Windows de regalo.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2 pt-3 pb-9">
                            <div className="w-6 h-6">
                                <DoubleTick />
                            </div>
                            <div className='text-center w-full'>
                                <p className=' font-inter font-medium text-xs sm:text-[16px] leading-[25px] text-white text-start lg:text-center opacity-80'>Tiempo de creación 2 a 3 semanas</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className='relative'>
                                <SecondaryBtn text='Leer más' />
                                <span className='absolute -left-1 -bottom-1'><ButtonBottom2 /></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full border-[0.5px] px-3 sm:px-5 md:px-[40px] py-[38px] border-white bg-[#051D23] rounded-[16px]">
                    <div className="grid lg:grid-cols-2 justify-between items-center">
                        <div className=' max-w-[364px] order-2 lg:order-1'>
                            <h4 className='text-white text-[32px] font-anton font-normal leading-[41px] pt-5 lg:pt-0'>Platinum</h4>
                            <p className='font-inter font-medium text-[16px] leading-[25px] text-white pt-4 opacity-80'>Diseño totalmente personalizado. Contáctanos para un presupuesto.</p>
                            <h2 className='text-white font-anton font-normal text-[23px] sm:text-2xl md:text-3xl lg:text-[48px]  leading-[120%] sm:leading-[57px] md:pt-8 py-4'>Consultar precio</h2>
                            <div className="flex items-start gap-2">
                                <DoubleTick />
                                <p className=' font-inter font-medium text-[16px] leading-[25px] text-white text-center pb-4 sm:pb-7 lg:pb-[40px] opacity-80'>Personalizable</p>
                            </div>
                            <div className="relative">
                                <CommonBtn text="Reproducir ahora" />
                                <span className="absolute -left-1 -bottom-1"><ButtonBottom /></span>
                            </div>
                        </div>
                        <div className=" px-3 order-1 lg:order-2">
                            <img className='w-full' src={cards777} alt="cards777" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spin