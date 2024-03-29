import React from 'react'
import PageLogo from '../assets/images/PageLogo.svg'

const Preloader = () => {
    return (
        <div>
            <div className='flex space-x-2 justify-center items-center flex-col bg-black h-screen '>
                <div className=' animate-bounce mb-11'><div className='flex justify-center items-center'><img src={PageLogo} alt="logo" /></div>

                </div>

                <div className='flex gap-1'>
                    <span className='sr-only'>Loading...</span>
                    <div className='h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                    <div className='h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                    <div className='h-8 w-8 bg-white rounded-full animate-bounce'></div>
                </div>
            </div>
        </div>
    )
}

export default Preloader