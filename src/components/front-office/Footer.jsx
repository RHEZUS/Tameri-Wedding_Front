import logo from "@/assets/images/logo/logo-white.png"
import Icon from "../ui/Icon"
export default function Footer(){
    return (
        <footer className="">
            <div className="mx-auto w-full max-w-screen-xl bg-nature-700">
                <div className="grid grid-cols-2 gap-8 px-2 py-10 md:p-10 md:grid-cols-4">
                    <div className="flex flex-col gap-4">
                        <img src={logo} alt="Tameri Wedding logo" className="w-[113px] h-[150px]" />
                        <ul className="text-white flex items-center gap-4 font-medium">
                            <li className="mb-4">
                                <Icon icon={'bi:facebook'} className={'w-6 h-6'}/>
                            </li>
                            <li className="mb-4">
                                <Icon icon={'bi:instagram'} className={'w-6 h-6'}/>
                            </li>
                            <li className="mb-4">
                                <Icon icon={'bi:tiktok'} className={'w-6 h-6'}/>
                            </li>
                            <li className="mb-4">
                                <Icon icon={'bi:linkedin'} className={'w-6 h-6'}/>
                            </li>
                        </ul>
                    </div>
                    {/** Contact */}
                    <div>
                        <h2 className="mb-6 text-2xl font-semibold font-playfair text-white capitalize">Contact</h2>
                        <ul className="text-white text-base font-normal">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Phone: (+1) 780-123-4567</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Website: www.example.com</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Email: example@email.com</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Localisation: Yaounde, Cameroun</a>
                            </li>
                        </ul>
                    </div>
                    {/** Navigation */}
                    <div>
                        <h2 className="mb-6 text-2xl font-semibold font-playfair text-white capitalize">Navigation</h2>
                        <ul className="text-white text-base font-normal">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Home</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">About Us</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Our Realizations</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Testimonials</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    {/** Legal & compliance */}
                    <div>
                        <h2 className="mb-6 text-2xl font-semibold font-playfair text-white capitalize">Legal & Compliance</h2>
                        <ul className="text-white text-base font-normal">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Terms & Conditions</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Copyright Information</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Risk Disclosure</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Refund Policy</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">License Agreement</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="relative text-white flex justify-center font-normal text-base items-center bg-nature-500 px-2 py-2 md:px-10">
                © 2025 Ludivin Seunda All Rights Reserved , Inc.
            </div>
        </footer>
    )
}