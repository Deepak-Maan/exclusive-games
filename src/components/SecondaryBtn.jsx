import React from 'react'

const SecondaryBtn = (props) => {
    return (
        <div>
            <button className=' bg-blue-307 py-[13px] px-[46px] text-black font-Inter font-bold text-base leading-6 rounded-full duration-300 border border-transparent'>{props.text}</button>
        </div>
    )
}

export default SecondaryBtn
