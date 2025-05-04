import { Icon } from "@iconify/react/dist/iconify.js";

export default function Header(){
    return (
        <>
            <header className="flex justify-between items-center fixed top-0 left-0 w-full px-8 py-3 border-b border-black bg-white z-10">
                <div className="text-2xl font-bold font-vibes">L &amp; M</div>
                <div className="flex gap-12">
                    <ul className="items-center gap-8 hidden md:flex">
                        <a href="/#hero">
                            <li className="hover:text-pink-500 hover:border-b border-pink-500  font-normal text-lg"> Home </li>
                        </a>
                        <a href="/#meting"><li className="hover:text-pink-500 font-normal text-lg"> How we met </li></a>
                        <a href="/#schedule"><li className="hover:text-pink-500 font-normal text-lg"> Schedule </li></a>
                        <a href="/#gallery"><li className="hover:text-pink-500 font-normal text-lg"> Gallery </li></a>
                        <a href="#"><li className="hover:text-pink-500 font-normal text-lg"> Contact us </li></a>
                    </ul>

                    <div className="">
                        <button className="px-4 py-2 bg-transparent rounded-lg border-2 border-pink-500"> RSVP </button>
                    </div>

                    <div className="flex items-center md:hidden">
                        <Icon icon="bi:list" className="text-3xl"/>
                    </div>
                </div>
            </header>
        </>
    )
}