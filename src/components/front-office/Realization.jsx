import Button from "../ui/Button";
import Icon from "../ui/Icon";

export default function Realization({ image, title, description, link }) {
  return (
    <div className="relative w-full h-fit bg-transparent rounded-lg  shadow-sm p-0 hover:bg-[#E2E7DB] group transition-all duration-300 ease-in-out hover:translate-y-[-0px] overflow-hidden">
      <a href="#">
        <img className="rounded-t-lg" src={image} alt="" />
      </a>
      <div className="py-5 px-2 flex flex-col gap-2  ">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-green-50 py-1 px-2 rounded-3xl">
            <Icon icon={"bi:calendar3"} />
            <span className="font-serif text-sm">April 25, 2025</span>
          </div>

          <div className="flex items-center gap-1 bg-green-50 py-1 px-2 rounded-3xl">
            <Icon icon={"bi:calendar3"} />
            <span className="font-serif text-sm">Douala, Cameroon</span>
          </div>
        </div>

        <a href={link}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description.length > 150 ? description.slice(0, 150) + '...' : description}</p>

        <a
          href={link}
          className="w-fit hidden group-hover:inline-flex hover:cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-nature-500 rounded-3xl hover:bg-nature-800 focus:ring-4 focus:outline-none focus:ring-nature-300"
        >
          View more detail
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
