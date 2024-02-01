import { ButtonBottom, ButtonBottom2, DownBowArrow, UpBowArrow } from "./Icons"
import jetx from '../assets/images/jetX.webp'
import joker from '../assets/images/joker.webp'
import bear from '../assets/images/bear.webp'
import fortune from '../assets/images/fortune.webp'
import summer from '../assets/images/summer.webp'
import casino from '../assets/images/casino-rpg.webp'
import blub from '../assets/images/Blub.svg'
import person from '../assets/images/Share-person.svg'
import serring from '../assets/images/setting.svg'
import SecondaryBtn from "./SecondaryBtn"
import CommonBtn from "./CommonButton"
const Nuestros = () => {
    const slotsData = [
        { id: 1, svg: blub, title: "Inteligencia", para: "Comprendemos a la perfección los gustos de las personas y el mundo del gaming." },
        { id: 2, svg: person, title: "Proactividad", para: "Somos creadores de cambios que exploran nuevas formas de entretenimiento." },
        { id: 3, svg: serring, title: "Innovación", para: "Pensamos fuera de la caja para estar siempre un paso adelante." },
    ]
    const slotsDataSecond = [
        { id: 1, img: jetx, title: "Inteligencia", },
        { id: 2, img: joker, title: "Proactividad", },
        { id: 3, img: bear, title: "Innovación", },
        { id: 4, img: fortune, title: "Innovación", },
        { id: 5, img: summer, title: "Innovación", },
        { id: 6, img: casino, title: "Innovación", },
    ]
    return (
        <div className="bg-no-repeat  w-full bg-cover py-[255px]">
            <div className="mx-auto px-3 flex flex-col max-w-[1140px]">
                <h2 className='text-4xl sm:text-5xl font-normal font-anton leading-[57px] text-[#00141B] text-center'>Nuestros Atributos de Marca</h2>
                <div className="grid grid-cols-3 my-[60px] relative">
                    {
                        slotsData.map((items, index) => (
                            <div key={index} className="flex flex-col items-center w-full max-w-[245px]">
                                <img src={items.svg} alt="blub" />
                                <h2 className="text-[#00141B] font-anton font-normal text-xl leading-[26px] text-center mt-4">{items.title}</h2>
                                <p className="text-[#00141B] font-inter font-medium text-base opacity-80 leading-[26px] text-center mt-4">{items.para}</p>
                            </div>
                        ))
                    }
                    <span className="absolute top-0 left-[17%]"><UpBowArrow /></span>
                    <span className="absolute top-[50px] right-[28%]"><DownBowArrow /></span>
                </div>
            </div>
            <div className="mx-auto px-3 flex flex-col max-w-[1140px] mt-[90px]">
                <h2 className='text-4xl sm:text-5xl font-normal font-anton leading-[57px] text-[#00141B] text-center'>Slots </h2>
                <p className="text-[#00141B] font-inter font-medium text-base opacity-80 leading-[26px] text-center mt-4 max-w-[904px] mx-auto">En Exclusive Games, ofrecemos una selección de más de 600 juegos de los principales desarrolladores, como Aristocrat, Amatic, EGT, Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo trabaja incansablemente para innovar y ampliar nuestra oferta de experiencias, garantizando la máxima seguridad con operaciones protegidas por cifrado SSL de 256 bits.</p>
                <div className="grid grid-cols-3 mt-[60px] relative gap-6">
                    {
                        slotsDataSecond.map((listing, index) => (
                            <div key={index} className="relative flex flex-col items-center w-full duration-300 group">
                                <img className="w-full rounded-lg" src={listing.img} alt={listing.title} />
                                <div className="absolute flex items-center justify-center w-full h-full duration-300 bg-black rounded-lg opacity-0 group-hover:opacity-100 bg-opacity-70">
                                    <div className="relative"><CommonBtn text="Jugar" />
                                        <span className="absolute -left-1 -bottom-1"><ButtonBottom /></span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="relative mx-auto mt-5 sm:mt-7 md:mt-10"><SecondaryBtn text="Mostrar más" />
                    <span className="absolute -left-1 -bottom-1"><ButtonBottom2 /></span>
                </div>
            </div>
        </div>
    )
}

export default Nuestros
