export default function ServiceCard({icon, title, description}) {
    return (
        <div className="max-w-sm p-6 bg-[#FDF4F442] border border-gray-200 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-[#FDF4F4] rounded-full flex justify-center items-center mb-3">
                {icon}
            </div>
            <h5 className="mb-2 text-2xl font-playfair font-semibold tracking-tight text-gray-900">{title}</h5>
            <p className="mb-3 font-normal text-gray-500">{description}</p>     
        </div>
    )
}