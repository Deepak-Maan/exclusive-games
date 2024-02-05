const CommonBtn = (props) => {
    return (
        <button className={`py-[13px] px-[46px] bg-transparent hover:scale-105 relative z-[3] text-white font-Inter font-bold text-base leading-6 rounded-full duration-300 border after: ${props.cstm}`}>{props.text}</button>
    )
}

export default CommonBtn