import React from 'react'
import seven from "../assets/images/777img.webp";
import bulb from "../assets/images/blub7.svg";
import people from "../assets/images/people-group.svg";
import money from "../assets/images/currency.svg";

const TripleSeven = () => {
    return (
        <div>
            <div className="max-w-[1140px] mx-auto px-3 pt-[100px] pb-[150px]">
                <div className="grid grid-cols-2 -mx-3 justify-between">
                    <div className=" px-3 max-w-[558px]">
                        <img className='w-full h-full' src={seven} alt="seven" />
                    </div>
                    <div className=" px-3">
                        <h2 className='text-white pb-[50px] font-Anton font-normal text-[48px] leading-[57px]'>Más razones para elegirnos</h2>
                        <div className=' bg-people p-[0.5px] pl-[1px] duration-300 hover:shadow-[0px_5px_10px_#7AF57A] rounded-[16px] max-w-[374px]'>
                            <div className=" px-[56px] bg-[#051D23] py-6 flex items-center gap-[37px] rounded-[16px]">
                                <img className='w-[68px] h-[68px]' src={bulb} alt="bulb" />
                                <p className='max-w-[127px] font-Inter font-medium leading-[25px] text-[16px] text-white'><span className=' font-Anton text-[32px] leading-[41px] font-normal'>200</span> Páginas creadas</p>
                            </div>
                        </div>
                        <div className='bg-people mt-6 p-[0.5px] duration-300 hover:shadow-[0px_5px_10px_#7AF57A] pl-[1px] rounded-[16px] max-w-[374px]'>
                            <div className="max-w-[374px] bg-[#051d23]  px-[56px] py-6 flex items-center gap-[37px] rounded-[16px]">
                                <img className='w-[68px] h-[68px]' src={people} alt="people" />
                                <p className='max-w-[127px] font-Inter font-medium leading-[25px] text-[16px] text-white'><span className=' font-Anton text-[32px] leading-[41px] font-normal'>98%</span> Clientes Satisfechas</p>
                            </div>
                        </div>
                        <div className='bg-people mt-6 p-[0.5px] duration-300 hover:shadow-[0px_5px_10px_#7AF57A] pl-[1px] pb-[1px] rounded-[16px] max-w-[374px]'>
                            <div className="max-w-[374px] bg-[#051d23] px-[56px] py-6 flex items-center gap-[37px] rounded-[16px]">
                                <img className='w-[68px] h-[68px]' src={money} alt="money" />
                                <p className='max-w-[127px] font-Inter font-medium leading-[25px] text-[16px] text-white'> <span className=' font-Anton text-[32px] leading-[41px] font-normal'>200</span> Divisas Disponibles</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TripleSeven