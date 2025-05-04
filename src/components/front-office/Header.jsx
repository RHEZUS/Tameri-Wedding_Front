import Language from "./Language";
import Responsive from "./Responsive";
import { useTranslation } from "react-i18next";
import logo from "@/assets/images/logo/logo.png";

export default function Header(){
    // get the selected language
    const { t } = useTranslation();

    return (
        <>
            <header className="flex justify-between items-center relative  h-[57px] sm:h-[88px] top-0 left-0 w-full px-8 py-3 border-b border-black bg-white z-50">
                <div className="text-2xl font-bold font-vibes">
                    <img src={logo} className="w-[36px] h-[48px]" alt="Tameri wedding Logo" />
                </div>
                <div className="flex gap-12">
                    <ul className="items-center gap-1 hidden md:flex">
                        <a href="/#hero"><li className="hover:bg-black-300 hover:-translate-y-1 duration-500 px-2 lg:px-4 py-2 rounded-3xl  font-normal text-base whitespace-nowrap"> {t('home')} </li></a>
                        <a href="/#meting"><li className="hover:bg-black-300 hover:-translate-y-1 duration-500 px-2 lg:px-4 py-2 rounded-3xl font-normal text-base whitespace-nowrap"> {t('about')} </li></a>
                        <a href="/#schedule"><li className="hover:bg-black-300 hover:-translate-y-1 duration-500 px-2 lg:px-4 py-2 rounded-3xl font-normal text-base whitespace-nowrap"> {t('realization')} </li></a>
                        <a href="/#gallery"><li className="hover:bg-black-300 hover:-translate-y-1 duration-500 px-2 lg:px-4 py-2 rounded-3xl font-normal text-base whitespace-nowrap"> {t('testimonial')} </li></a>
                        <a href="#"><li className="hover:bg-black-300 hover:-translate-y-1 duration-500 px-2 lg:px-4 py-2 rounded-3xl font-normal text-base whitespace-nowrap"> {t('contact')} </li></a>
                        <li>
                            <Language/>
                        </li>
                    </ul>

                    <div className="flex md:hidden">
                        <Responsive/>
                    </div>
                </div>
            </header>
        </>
    )
}