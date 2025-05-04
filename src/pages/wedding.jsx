import Header from "../components/front-office/WedHeader";
import ImageCarouselModal from "../components/front-office/ImageCarouselModal";
const schedule = [
    {
        "title": "Traditional Wedding",
        "date": "8.21.2023",
        "location": "1234 Wedding Lane, New York, NY 12345",
        "schedule": [
            { "time": "10:00am", "scheduleItem": "Bride's family prepares for the event" },
            { "time": "12:00pm", "scheduleItem": "Arrival of groom’s delegation with gifts" },
            { "time": "1:00pm", "scheduleItem": "Traditional rites and family introductions" },
            { "time": "3:00pm", "scheduleItem": "Bride price negotiation and payment" },
            { "time": "5:00pm", "scheduleItem": "Blessing by elders and cultural performances" },
            { "time": "6:00pm", "scheduleItem": "Official presentation of the bride" },
            { "time": "7:00pm", "scheduleItem": "Celebration feast and dancing" },
            { "time": "10:00pm", "scheduleItem": "Departure of newlyweds" }
        ]
    },
    {
        "title": "Civil Ceremony",
        "date": "8.20.2023",
        "location": "1234 Wedding Lane, New York, NY 12345",
        "schedule": [
            { "time": "9:00am", "scheduleItem": "Bride and groom prepare for the ceremony" },
            { "time": "10:30am", "scheduleItem": "Arrival of guests at the city hall" },
            { "time": "11:00am", "scheduleItem": "Civil marriage ceremony officiated by the mayor" },
            { "time": "11:30am", "scheduleItem": "Signing of marriage registry and exchange of rings" },
            { "time": "12:00pm", "scheduleItem": "Official photos with family and friends" },
            { "time": "1:00pm", "scheduleItem": "Reception and wedding toast" },
            { "time": "3:00pm", "scheduleItem": "Speeches and entertainment" },
            { "time": "6:00pm", "scheduleItem": "Cutting of the wedding cake" },
            { "time": "7:00pm", "scheduleItem": "Dance and celebration" },
            { "time": "10:00pm", "scheduleItem": "Departure of the couple" }
        ]
    },
    {
        "title": "Rehearsal Dinner",
        "date": "8.19.2023",
        "location": "1234 Wedding Lane, New York, NY 12345",
        "schedule": [
            { "time": "6:00pm", "scheduleItem": "Arrival of guests at the dinner venue" },
            { "time": "6:30pm", "scheduleItem": "Seating and welcome drinks" },
            { "time": "7:00pm", "scheduleItem": "Opening speech and blessing of the meal" },
            { "time": "7:30pm", "scheduleItem": "Dinner service begins" },
            { "time": "8:30pm", "scheduleItem": "Toasts and speeches from family and friends" },
            { "time": "9:00pm", "scheduleItem": "Cake cutting and dessert service" },
            { "time": "9:30pm", "scheduleItem": "First dance of the newlyweds" },
            { "time": "10:00pm", "scheduleItem": "Open dance floor and entertainment" },
            { "time": "12:00am", "scheduleItem": "Closing remarks and departure" }
        ]
    }
];

const gallery = [
    {
        "image" : "https://ultimatetraditionaldesigns.com/wp-content/uploads/2022/08/toghugang_156958670_446813226370011_3311527008387337565_n.jpg",
        "ceremony": "traditional"
    },
    {
        "image" : "https://artminders.com/wp-content/uploads/2024/01/Farida-Sani-Civil-Wedding-Photography-Douala-Cameroon-African-Romance-African-Culture-African-Wedding-Cameroonian-Wedding-5-1-scaled.jpg",
        "ceremony": "civil"
    },
    {
        "image" : "https://i.pinimg.com/564x/e5/9a/2e/e59a2e7d9ec80bef906f675c53d71e0b.jpg",
        "ceremony": "traditional"
    },
    {
        "image" : "https://www.bellanaijaweddings.com/wp-content/uploads/2023/01/Whitney-Ewane-Wedding-BellaNaija-Weddings-110-scaled.jpg",
        "ceremony": "civil"
    },
    {
        "image" : "https://i.ytimg.com/vi/-wWePmGSaPE/maxresdefault.jpg",
        "ceremony": "civil"
    },
    {
        "image" : "https://i.ytimg.com/vi/ZSnpZOtvfvo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBqDw4oQOXLEtftfQH3BEs-4-oOaQ",
        "ceremony": "traditional"
    },
    {
        "image" : "https://jstewart1200.wordpress.com/wp-content/uploads/2017/12/dsc00118.jpg",
        "ceremony": "dinner"
    },
    {
        "image" : "https://www.bellanaija.com/wp-content/uploads/2016/02/Petra-Emmanuel_Cameroonian-Wedding_BellaNaija_Rhphotoarts-for-petra-39.jpg",
        "ceremony": "dinner"
    },
    {
        "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ZiDm9NfNeu7_zTGZYgzyvs6cFbBxPX9-rQ&s",
        "ceremony": "Traditional"
    },
    {
        "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSovCqSGrWsjOElKxF6Cye8Ja48I4RcWQRajnpxGTKcDyQ23U1mInv_VhdiJpDmQiYXO-U&usqp=CAU",
        "ceremony": "dinner"
    }
];

var images = []

import { useEffect } from "react";
import { initFlowbite } from "flowbite";
import { useState } from "react";

export default function Home(){

    const [modalOpen, setModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (index) => {
        setCurrentIndex(index);
        setModalOpen(true);
    };
    useEffect(() => {
        initFlowbite();
    }, []);
    return (
        <>
            <Header/>
            {  /* Hero Section */ }
            <section id="hero" className="grid grid-cols-12 pt-20 items-center px-8 bg-white">
                <div className="col-span-5 text-black text-7xl font-vibes">
                    Landry & Mariette
                </div>
                <div className="col-span-7">
                    <img className="w-full" src="https://www.pagesjaunes.online/images/0f36ed1158c1b2b8a533000b7771496bf366e20e.png" alt=""/>
                </div>
            </section>

            {  /* Message */ }
            <section id="meting" className="grid grid-cols-12 px-8 pt-8  bg-white items-center">
                <div className="hidden md:flex col-span-6 p-8">
                    <img src="../../public/medias/flower3.png" alt=""/>
                </div>
                <div className="col-span-full md:col-span-6 p-4 text-black">
                    <p className="text-3xl font-playfair">We’re getting married!  Join us for a weekend of celebration and love. </p>
                    <p className="text-7xl mt-4 font-vibes">8.21.2023</p>
                </div>


            </section>

            {  /* Schedule */ }
            <section id="schedule" className="grid grid-cols-12 px-8 pt-8 bg-white text-black">
                <div className="col-span-full text-5xl font-vibes py-8 border-b border-black">Schedule</div>
                

                {
                    schedule.map((item, index) => {
                        return (
                            <div key={index} className="col-span-12 grid grid-cols-12 items-center py-8 text-3xl">
                                <div className="col-span-6  font-vibes">
                                    <div className="text-3xl font-vibes">{item.title}</div>
                                    <div className="text-xl py-4">{item.date}</div>
                                    <div className="text-xl py-4">{item.location}</div>
                                </div>
                                <div className="col-span-6 py-8 text-lg font-playfair border-b border-black">
                                    {
                                        item.schedule.map((scheduleItem, index) => {
                                            return (
                                                <p  key={index} className="leading-10"><span className="font-bold">{scheduleItem.scheduleItem}</span> - {scheduleItem.time}</p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </section>

            {  /* Other Section */ }
            <section id="other" className="grid-cols-12 px-8 items-center bg-black text-white hidden">
                <div className="col-span-6">
                    <img src="https://images.squarespace-cdn.com/content/v1/5f775ca222e3cd36b7ed94d6/1601658036003-GG29EMBVXQLBPOC6ZZIK/image-asset.png?format=750w" alt=""/>
                </div>
                <div className="col-span-6">
                    <h2 className="font-medium text-6xl font-vibes mb-6">Let the countdown begin.</h2>
                    <p className="mb-6">Whether you’re able to attend the whole weekend or just the day of, we’ll be honored to have you there. </p>
                    <button className="px-16 py-2 bg-transparent border-2 border-pink-500 rounded-lg"> RSVP </button>
                </div>
            </section>

            {  /* Gallery */ }
            <section id="gallery" className="grid-cols-12 px-8 py-16 relative items-center bg-white text-black">
                <div className="col-span-full text-5xl font-vibes py-8 border-b border-black">Gallery</div>
                
                <div className="my-4">
                    <ul className="flex flex-wrap justify-center  mx-auto -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                        <li className="me-2" role="presentation">
                            <button onClick={() => images = gallery.map(image => image.image)} className="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">All Pictures</button>
                        </li>
                        <li className="me-2" role="presentation">
                            <button 
                            onClick={() => images = gallery.filter(image => image.ceremony === 'traditional').map(image => image.image)} 
                            className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Traditional</button>
                        </li>
                        <li className="me-2" role="presentation">
                            <button
                                onClick={() => images = gallery.filter(image => image.ceremony === 'civil').map(image => image.image)}
                             className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Civil</button>
                        </li>
                        <li role="presentation">
                            <button
                            onClick={() => images = gallery.filter(image => image.ceremony === 'dinner').map(image => image.image)}
                            className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Dinner</button>
                        </li>
                    </ul>
                </div>
                <div id="default-tab-content" className="max-h-[400px] overflow-y-scroll [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
                    <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="grid grid-cols-12 gap-4">
                            {
                                gallery.map((image, index) => {
                                    return (
                                        <div onClick={() => openModal(index)} key={index} className="col-span-4">
                                            <img src={image.image} alt=""/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                        <div className="grid grid-cols-12 gap-4">
                            {
                                gallery.filter(image => image.ceremony === "traditional").map((image, index) => {
                                    return (
                                        <div onClick={() => openModal(index)} key={index} className="col-span-4">
                                            <img src={image.image} alt=""/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                        <div className="grid grid-cols-12 gap-4">
                            {
                                gallery.filter(image => image.ceremony === "civil").map((image, index) => {
                                    return (
                                        <div onClick={() => openModal(index)} key={index} className="col-span-4">
                                            <img src={image.image} alt=""/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
                        <div className="grid grid-cols-12 gap-4">
                            {
                                gallery.filter(image => image.ceremony === "dinner").map((image, index) => {
                                    return (
                                        <div onClick={() => openModal(index)} key={index} className="col-span-4">
                                            <img src={image.image} alt=""/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <ImageCarouselModal
                    images={images.length > 0 ? images : gallery.map(image => image.image)}
                    startIndex={currentIndex}
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                />
            </section>
        </>
    )

}