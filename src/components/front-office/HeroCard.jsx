export default function HeroCart({ name, value }) {
    return (
        <div className="bg-white/10 font-playfair w-full max-w-xs shadow-lg rounded-lg p-4">
            <div className="flex flex-col items-center gap-4 justify-between">
                <h2 className="text-2xl xs:text-2xl sm:text-3xl md:text-7xl text-white font-semibold">{value}</h2>
                <span className="text-white text-sm font-extralight">{name}</span>
            </div>
        </div>
    )
}