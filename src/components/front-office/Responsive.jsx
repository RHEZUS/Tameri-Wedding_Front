import { Icon } from "@iconify/react/dist/iconify.js";
import Language from "./Language";
import { useState } from "react";
import { useTranslation } from "react-i18next";


export default function Responsive(){
    // get the selected language
    const { t } = useTranslation();
    const  [isHovered, setIsHovered] = useState(false);
    return (
        <div className="">
            <div onClick={() => setIsHovered(!isHovered)}
            className="flex items-center md:hidden">
                {!isHovered && (
                    <Icon icon="bi:list" className="text-3xl"/>
                )}
                {isHovered && (
                    <Icon icon="bi:x" className="text-3xl"/>
                )}
            </div>

            {isHovered && (
                <ul className="gap-2 flex flex-col items-start absolute left-0 bg-white w-full md:hidden p-5">
                    <a href="/#hero" className="w-full"> <li className="hover:bg-black-300 hover:-translate-y-1  duration-500 px-4 py-2 rounded-3xl  font-normal text-lg">  {t('home')} </li></a>
                    <a href="/#meting" className="w-full" ><li className="hover:bg-black-300 w-full hover:-translate-y-1 duration-500 px-4 py-2 rounded-3xl font-normal text-lg"> {t('about')} </li></a>
                    <a href="/#schedule" className="w-full"><li className="hover:bg-black-300 w-full hover:-translate-y-1 duration-500 px-4 py-2 rounded-3xl font-normal text-lg"> {t('realization')} </li></a>
                    <a href="/#gallery" className="w-full"><li className="hover:bg-black-300 hover:-translate-y-1 duration-500 px-4 py-2 rounded-3xl font-normal text-lg"> {t('testimonial')} </li></a>
                    <a href="#" className="w-full"><li className="hover:bg-black-300 hover:-translate-y-1 duration-500 px-4 py-2 rounded-3xl font-normal text-lg"> {t('contact')} </li></a>
                    <li className="">
                        <Language/>
                    </li>
                </ul>
            )}
        </div>
    )
}