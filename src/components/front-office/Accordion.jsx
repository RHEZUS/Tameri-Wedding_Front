import { useState } from "react";
import Icon from "@/components/ui/Icon";
const Accordion = ({ items, className = "space-y-5" }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const [open, setOpen] = useState(false);

  const toggleAccrodian = (index) => {
    if (index === activeIndex)
    {
        setActiveIndex(null);
        setOpen(!open);
        return;
    }
    setActiveIndex(index);
    setOpen(!open);
  };

  return (
    <div className={className}>
      {items.map((item, index) => (
        <div
          className="accordion shadow-base dark:shadow-none rounded-md"
          key={index}
        >
          <div
            className={`flex bg-[#F1F3ED] justify-between cursor-pointer transition duration-150 font-medium w-full text-start text-base text-slate-600 px-8 py-4 ${
              activeIndex === index
                ? "bg-slate-50 dark:bg-slate-700 dark:bg-opacity-60 rounded-t-md "
                : "bg-white dark:bg-slate-700  rounded-md"
            }`}
            onClick={() => toggleAccrodian(index)}
          >
            <span className="text-2xl font-playfair font-bold">{item.title} </span>
            <span
              className={`text-white bg-nature-700 w-12 h-12 text-[22px] flex justify-center items-center rounded-full transition-all duration-300 ${
                activeIndex === index ? "rotate-180 transform" : ""
              }`}
            >
              <Icon icon={activeIndex === index ? 'bi:dash' : 'bi:plus'}  className={'bg-black-400 w-5 h-5 flex items-center justify-center rounded-md'}/>
            </span>
          </div>

          {activeIndex === index && (
            <div
              className={`${
                index === activeIndex
                  ? "dark:border dark:border-slate-700 dark:border-t-0"
                  : "l"
              } text-sm text-slate-600 font-normal bg-[#F1F3ED] rounded-b-md`}
            >
              <div
                className="px-8 py-4 text-lg font-normal"
                dangerouslySetInnerHTML={{ __html: item.content }}
              ></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default Accordion;