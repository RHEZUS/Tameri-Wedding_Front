import star_fill from '@/assets/images/all-img/star-fill.png';
import star from '@/assets/images/all-img/star.png';

export default function Testimonial({image, name, description, rate}) {
    return (
        <div className="relative w-full h-fit py-4 bg-[#E2E7DB54] rounded-lg  shadow-sm p-0 group text-center flex flex-col items-center">
            <div className="w-[120px] h-[120px] group-hover:w-[180px] group-hover:h-[180px] border border-coffee-900 bg-transparent rounded-full flex justify-center items-center mb-3">
                <img className="rounded-full p-4 w-full h-full object-cover" src={image} alt="" />
            </div>
            <h5 className="mb-2 text-2xl font-playfair font-semibold tracking-tight text-gray-900">{name}</h5>
            <p className="mb-3 font-inter font-normal text-black-500">{description}</p>  

            <div className="flex">
                {[...Array(5)].map((item, index) => (
                    <img key={index} className="rounded-full w-6 h-6 object-cover" src={rate >= index + 1 ? star_fill : star} alt="" />
                ))}
            </div>   
        </div>
    );
}