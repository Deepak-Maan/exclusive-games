import React from 'react'

const SecondaryBtn = (props) => {
    return (
        <button className=' bg-blue-307  relative z-[3] py-[13px] px-[46px] hover:bg-blue-107 transition-all text-black font-Inter font-bold text-base leading-6 rounded-full duration-300 border border-transparent'>{props.text}</button>
    )
}

export default SecondaryBtn
