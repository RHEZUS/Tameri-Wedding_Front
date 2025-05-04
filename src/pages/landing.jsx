import Carousel from "@/components/ui/Carousel";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper';

// Other components
import Button from "@/components/ui/Button";
import HeroCart from "@/components/front-office/HeroCard";
import Icon from "@/components/ui/Icon";
import ServiceCard from "@/components/front-office/ServiceCart";
import Realization from "@/components/front-office/Realization";

// section backgrounds
import AboutBg from "@/assets/images/bg-img/bg-1.jpg"
import ServiceBg from "@/assets/images/bg-img/bg-2.jpg";
import DevicesBg from "@/assets/images/all-img/devices-bg.jpg";
import Devices from "@/assets/images/all-img/devices.png";

// import images
import c1 from "@/assets/images/bg-img/wedding1.jpg";
import c2 from "@/assets/images/bg-img/wedding2.jpg";
import c3 from "@/assets/images/bg-img/wedding3.jpg";
import c4 from "@/assets/images/bg-img/wedding4.jpg";

import a1 from "@/assets/images/all-img/wedding-3.jpg";
import a2 from "@/assets/images/all-img/wedding-2.jpg";
import a3 from "@/assets/images/all-img/wedding-3.jpg";
import a4 from "@/assets/images/all-img/wedding-4.jpg";
import a5 from "@/assets/images/all-img/wedding-5.jpg";
import a6 from "@/assets/images/all-img/wedding-6.jpg";
import a7 from "@/assets/images/all-img/wedding-7.jpg";

import { services } from "@/constant/data";
import { testimonials } from "@/constant/data";
import { realisations } from "@/constant/data";
import { faqs } from "@/constant/data";


import { useRef, useState } from "react";
import Testimonial from "@/components/front-office/Testimonial";
import { key } from "localforage";
import Accordion from "@/components/front-office/Accordion";
import Footer from "@/components/front-office/Footer";

export default function Landing() {
    const gridRef = useRef(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    return (
        <div className="landing-page font-playfair">
            {/**Hero Section */}
            <section className="relative hero section">
                <div className="absolute inset-10 flex justify-center items-center text-white text-4xl font-bold z-10">
                    <div className="flex gap-4 px-2 md:px-8 max-w-[1000px] h-full flex-col items-center justify-center">
                        <h1  className="text-white font-playfair text-3xl md:text-7xl sm:text-5xl xs:text-4xl text-center">Celebrate love, live your wedding with simplicity</h1>
                        <p className="text-white text-sm  md:text-lg  sm:text-sm font-extralight text-center">Create an elegant, personalized online space for your wedding. Digital invitations, photo gallery, messages from your loved ones, wishlist. Tameri Wedding brings together everything you need to make your day unique and unforgettable</p>
                        
                        <div className="flex flex-col md:flex-row gap-4">
                            <Button className="btn bg-coffee-800 hover:bg-coffee-900 rounded-3xl" text={'Create my wedding area'}/>
                            <Button className="btn bg-nature-500 hover:bg-nature-600 rounded-3xl" text={'See our portfolio'}/>
                        </div>

                        <div className="grid grid-cols-12 gap-4 flex-wrap w-full">
                            <div className="col-span-6 sm:col-span-3 flex justify-center"><HeroCart name={'Organized Weddings'} value={'190+'}/></div>
                            <div className="col-span-6 sm:col-span-3 flex justify-center"><HeroCart name={'Invites connected'} value={'500+'}/></div>
                            <div className="col-span-6 sm:col-span-3 flex justify-center"><HeroCart name={'Couple satisfied'} value={'98%'}/></div>
                            <div className="col-span-6 sm:col-span-3 flex justify-center"><HeroCart name={'Memories captured'} value={'300+'}/></div>
                        </div>
                    </div>
                </div>
                <Carousel pagination={{ clickable: true }}  className="main-caro">
                    <SwiperSlide>
                        <div
                        className="single-slide bg-no-repeat bg-cover bg-center rounded-md min-h-[300px] "
                        style={{
                            backgroundImage: `url(${c1})`,
                        }}
                        ></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                        className="single-slide bg-no-repeat bg-cover bg-center rounded-md min-h-[300px] "
                        style={{
                            backgroundImage: `url(${c2})`,
                        }}
                        ></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                        className="single-slide bg-no-repeat bg-cover bg-center rounded-md min-h-[300px] "
                        style={{
                            backgroundImage: `url(${c3})`,
                        }}
                        ></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                        className="single-slide bg-no-repeat bg-cover bg-center rounded-md min-h-[300px] "
                        style={{
                            backgroundImage: `url(${c4})`,
                        }}
                        ></div>
                    </SwiperSlide>
                </Carousel>
            </section>

            {/**About Tameri Wedding Section */}
            <div className="relative flex justify-center items-center bg-cover bg-no-repeat bg-top px-2 py-10 md:p-10" style={{ backgroundImage: `url(${AboutBg})` }}>
                <div className="max-w-[1200px] grid grid-cols-12 gap-6">
                        {/**About Tameri Wedding images */}
                        <div className="col-span-12 md:col-span-6 grid grid-cols-2 grid-rows-2 gap-4 an">
                            
                            <div className="col-span-1 row-span-2 bg-cover bg-none bg-center rounded-xl" style={{backgroundImage: `url(${a1})`}} >

                            </div>
                            <div className="col-span-1 row-span-1 bg-cover bg-none bg-center rounded-xl" style={{backgroundImage: `url(${a2})`}}>

                            </div>
                            <div className="col-span-1 row-span-1 bg-cover bg-none bg-center rounded-xl" style={{backgroundImage: `url(${a3})`}}>

                            </div>
                        </div>

                        {/**About Tameri Wedding Text */}
                        <div className="col-span-12 md:col-span-6 flex flex-col gap-4">
                            <h1 className="text-[42px] font-playfair font-medium">About Tameri Wedding</h1>
                            <p className="font-inter">
                                Lorem ipsum dolor sit amet consectetur. Magna nulla nam in gravida convallis id in euismod. Tincidunt aliquam et quis gravida fermentum aenean euismod. Mauris massa ut quis feugiat volutpat massa vel. Penatibus a semper turpis pulvinar ipsum cursus. Eget turpis nunc ullamcorper massa egestas ante purus netus egestas. Vivamus non vivamus convallis nascetur mi. Ipsum et enim morbi urna. Maecenas eu malesuada tristique felis quisque iaculis ullamcorper amet commodo. Tellus eget varius metus at dui aenean. Orci varius lectus tincidunt non neque ac. Aliquam lectus nisi dolor dui et dolor facilisis pulvinar. Tortor enim a platea non. Sit tellus tempus sodales et maecenas ante. Nunc donec eget accumsan enim viverra varius adipiscing facilisis viverra. Sit sagittis aenean viverra integer pellentesque. Interdum pellentesque auctor tortor lacinia mattis sit integer diam. Adipiscing at quis et diam. Amet enim massa nulla sit eu aliquam at metus. Ut porttitor diam ut malesuada sapien nulla orci pellentesque.
                            </p>

                            <Button className="btn bg-nature-500 hover:bg-nature-600 rounded-3xl w-fit text-white flex items-center gap-2"> See More details  <Icon icon={'bi:arrow-right'}  className={'text-2xl'}/> </Button>
                        </div>
                </div>
            </div>

            {/**Services Tameri Wedding Section */}
            <div className="relative flex justify-center items-center bg-cover bg-no-repeat bg-top px-2 py-10 md:p-10 bg-blend-color" style={{ backgroundImage: `linear-gradient(rgba(250, 218, 221, 1), rgba(250, 218, 221, 1)), url(${ServiceBg})` }}>
                <div className="max-w-[1200px] relative z-30 flex flex-col justify-center items-center gap-6">
                    <div className="flex flex-col max-w-[660px] text-center gap-4">
                        <h1 className="text-[42px] font-playfair font-medium">Our Services</h1>
                        <p className="font-inter">
                            Lorem ipsum dolor sit amet consectetur. Est sed enim phasellus purus morbi volutpat mauris sed felis. Quis fringilla egestas egestas at ut accumsan sed sed sem.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <ServiceCard icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" fill="#7B3F00"/>
                                <path d="M12 12.87C11.16 12.87 10.31 12.61 9.66001 12.08L6.53001 9.57997C6.21001 9.31997 6.15001 8.84997 6.41001 8.52997C6.67001 8.20997 7.14001 8.14997 7.46001 8.40997L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.40997C16.85 8.14997 17.33 8.19997 17.58 8.52997C17.84 8.84997 17.79 9.32997 17.46 9.57997L14.33 12.08C13.69 12.61 12.84 12.87 12 12.87Z" fill="#7B3F00"/>
                            </svg>
                        }
                        title={'Digital Invitations'}
                        description={'Create and send beautiful digital invitations to your guests. Customize your design and add all the details of your wedding.'}/>
                        
                        <ServiceCard icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M19.97 10V18C19.97 21 18.97 22 15.97 22H7.97C4.97 22 3.97 21 3.97 18V10H19.97Z" fill="#7B3F00"/>
                                <path d="M21.5 7V8C21.5 9.1 20.97 10 19.5 10H4.5C2.97 10 2.5 9.1 2.5 8V7C2.5 5.9 2.97 5 4.5 5H19.5C20.97 5 21.5 5.9 21.5 7Z" fill="#7B3F00"/>
                                <path opacity="0.4" d="M11.64 4.99994H6.12C5.78 4.62994 5.79 4.05994 6.15 3.69994L7.57 2.27994C7.94 1.90994 8.55 1.90994 8.92 2.27994L11.64 4.99994Z" fill="#7B3F00"/>
                                <path opacity="0.4" d="M17.87 4.99994H12.35L15.07 2.27994C15.44 1.90994 16.05 1.90994 16.42 2.27994L17.84 3.69994C18.2 4.05994 18.21 4.62994 17.87 4.99994Z" fill="#7B3F00"/>
                                <path opacity="0.6" d="M8.94 10V15.14C8.94 15.94 9.82 16.41 10.49 15.98L11.43 15.36C11.77 15.14 12.2 15.14 12.53 15.36L13.42 15.96C14.08 16.4 14.97 15.93 14.97 15.13V10H8.94Z" fill="#7B3F00"/>
                            </svg>
                            
                        }
                        title={'Gift management'}
                        description={'Share your personalized wish list or receive financial contributions easily and securely through a simple and convenient online system.'}/>
                        
                        <ServiceCard icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M6.75998 22H17.24C20 22 21.1 20.31 21.23 18.25L21.75 9.99C21.89 7.83 20.17 6 18 6C17.39 6 16.83 5.65 16.55 5.11L15.83 3.66C15.37 2.75 14.17 2 13.15 2H10.86C9.82998 2 8.62998 2.75 8.16998 3.66L7.44998 5.11C7.16998 5.65 6.60998 6 5.99998 6C3.82998 6 2.10998 7.83 2.24998 9.99L2.76998 18.25C2.88998 20.31 3.99998 22 6.75998 22Z" fill="#7B3F00"/>
                                <path d="M13.5 8.75H10.5C10.09 8.75 9.75 8.41 9.75 8C9.75 7.59 10.09 7.25 10.5 7.25H13.5C13.91 7.25 14.25 7.59 14.25 8C14.25 8.41 13.91 8.75 13.5 8.75Z" fill="#7B3F00"/>
                                <path d="M12 18.13C13.8667 18.13 15.38 16.6167 15.38 14.75C15.38 12.8833 13.8667 11.37 12 11.37C10.1333 11.37 8.62 12.8833 8.62 14.75C8.62 16.6167 10.1333 18.13 12 18.13Z" fill="#7B3F00"/>
                            </svg>
                            
                        }
                        title={'Memory gallery'}
                        description={'Collect and share your wedding’s best moments through a beautiful gallery, easily accessible for all guests with one secure click.'}/>
                        
                        <ServiceCard icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z" fill="#7B3F00"/>
                                <path d="M14.08 14.15C11.29 12.29 6.73996 12.29 3.92996 14.15C2.65996 15 1.95996 16.15 1.95996 17.38C1.95996 18.61 2.65996 19.75 3.91996 20.59C5.31996 21.53 7.15996 22 8.99996 22C10.84 22 12.68 21.53 14.08 20.59C15.34 19.74 16.04 18.6 16.04 17.36C16.03 16.13 15.34 14.99 14.08 14.15Z" fill="#7B3F00"/>
                                <path opacity="0.4" d="M19.99 7.33998C20.15 9.27998 18.77 10.98 16.86 11.21C16.85 11.21 16.85 11.21 16.84 11.21H16.81C16.75 11.21 16.69 11.21 16.64 11.23C15.67 11.28 14.78 10.97 14.11 10.4C15.14 9.47998 15.73 8.09998 15.61 6.59998C15.54 5.78998 15.26 5.04998 14.84 4.41998C15.22 4.22998 15.66 4.10998 16.11 4.06998C18.07 3.89998 19.82 5.35998 19.99 7.33998Z" fill="#7B3F00"/>
                                <path d="M21.99 16.59C21.91 17.56 21.29 18.4 20.25 18.97C19.25 19.52 17.99 19.78 16.74 19.75C17.46 19.1 17.88 18.29 17.96 17.43C18.06 16.19 17.47 15 16.29 14.05C15.62 13.52 14.84 13.1 13.99 12.79C16.2 12.15 18.98 12.58 20.69 13.96C21.61 14.7 22.08 15.63 21.99 16.59Z" fill="#7B3F00"/>
                            </svg>
                            
                            
                        }
                        title={'Stylish personalization'}
                        description={'Create a wedding space that reflects your love by customizing colors, texts, images, and every experience shared with your guests.'}/>
                        
                    </div>

                </div>
            </div>

            {/**Realization Section */}
            <div className="relative flex justify-center items-center bg-cover bg-no-repeat bg-top px-2 py-10 md:p-10" style={{background: "radial-gradient(#A3B18A, #F1F3ED)"}}>
                <div className="w-full py-10 relative z-30 flex flex-col justify-center items-center gap-6">
                    <div className="flex justify-between w-full items-center">
                        <div className="flex flex-col max-w-[660px] text-start gap-4">
                            <h1 className="text-[42px] font-playfair font-medium">Our Realizations</h1>
                            <p className="font-inter">
                                Lorem ipsum dolor sit amet consectetur. Est sed enim phasellus purus morbi volutpat mauris sed felis. Quis fringilla egestas egestas at ut accumsan sed sed sem.
                            </p>
                        </div>

                        <Button className="btn bg-coffee-800 hover:bg-coffee-900 rounded-3xl w-fit text-white flex items-center gap-2"> See More Projects  <Icon icon={'bi:arrow-right'}  className={'text-2xl'}/> </Button>
                    </div>
                    
                    <div className="w-full py-10">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            pagination={{ clickable: true }}
                            className="main-caro-1"
                            //navigation
                            autoplay={{ delay: 4000 }}
                            breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 5,
                            },
                            }}
                            style={{padding: 0}}
                        >
                            {realisations.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Realization 
                                        image={item.image} 
                                        title={item.title} 
                                        description={item.description} 
                                        link={'#'}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </div>
            </div>

            {/** Tameri Wedding Devices Section */}
            <div className="relative flex justify-center items-center bg-cover bg-no-repeat bg-center bg-blend-exclusion px-2 py-10 md:p-10 " style={{backgroundImage: `linear-gradient(180deg, rgba(254, 249, 240, 1), rgba(254, 249, 240, 1)), url(${DevicesBg})`}} >
                <div className="w-full relative z-30 flex flex-col justify-center items-center gap-6">
                    <div className="flex flex-col max-w-[660px] text-center gap-4">
                        <h1 className="text-[42px] font-playfair font-medium">A perfect experience on all your devices</h1>
                        <p className="font-inter">
                        Whether you're on your cell phone, tablet or computer, your wedding area remains fluid, elegant and easy to access from anywhere.
                        </p>
                    </div>
                    
                    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg"  >
                        <div className="absolute inset-0 flex justify-center items-center">
                            <img className="w-full h-full object-cover" src={Devices} alt="" />
                        </div>
                    </div>

                </div>
            </div>

            {/** Tameri Wedding Testimonials Section */}
            <div className="relative flex justify-center items-center bg-cover bg-no-repeat bg-top px-2 py-10 md:p-10" >
                <div className="w-full relative z-30 flex flex-col justify-center items-center gap-6">
                    <div className="flex flex-col max-w-[660px] text-center gap-4">
                        <h1 className="text-[42px] font-playfair font-medium">Their words, our greatest reward</h1>
                        <p className="font-inter">
                            Every story we share is proof of the love, trust and magic we create together for your big day.
                        </p>
                    </div>
                    
                    <div className="w-full py-10">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            pagination={{ clickable: true }}
                            className="main-caro-1"
                            //navigation
                            autoplay={{ delay: 4000 }}
                            breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            }}
                            style={{padding: 0}}
                        >
                            {testimonials.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Testimonial 
                                    image={item.image}
                                    rate={item.rate}
                                    name={item.name}
                                    description={item.description}/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        
                    </div>

                </div>
            </div>

            {/** Tameri Wedding FAQ Section */}
            <div className="relative flex justify-center items-center bg-white px-2 py-10 md:p-10" >
                <div className="w-full relative z-30 flex flex-col justify-center items-center gap-6">
                    
                    <div className="w-full py-10">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="hidden col-span-4 md:grid grid-cols-2 grid-rows-6 gap-3">
                                <div className="col-span-2 row-span-4 bg-cover bg-none bg-center rounded-xl" style={{backgroundImage: `url(${a5})`}} >

                                </div>
                                <div className="col-span-1 row-span-2 bg-cover bg-none bg-center rounded-xl" style={{backgroundImage: `url(${a6})`}}>

                                </div>
                                <div className="col-span-1 row-span-2 bg-cover bg-none bg-center rounded-xl" style={{backgroundImage: `url(${a7})`}}>

                                </div>
                            </div>
                            <div className="col-span-full md:col-span-8">
                                <div className="flex flex-col max-w-[660px] text-start gap-4 mb-6">
                                    <h1 className="text-[42px] font-playfair font-medium">All you need to know</h1>
                                    <p className="font-inter">
                                    We've compiled the most frequently asked questions to help you better understand our services. If you can't find the answer to your question, please don't hesitate to contact us.
                                    </p>
                                </div>
                                <Accordion items={faqs} className="space-y-5" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer/>
            
        </div>
    );
}