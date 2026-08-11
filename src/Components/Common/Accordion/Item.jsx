import { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";

const AccordionItem = ({ label, content }) => {

    const [isOpen, setIsOpen] = useState(false)

    const isOpenToggle = () => setIsOpen(prev => !prev)


    return (
        <div
            onClick={isOpenToggle}
        >
            <div
                className={`${isOpen && 'bg-blue-500/15'} flex-between select-none h-12 text-sm px-4 flex-ic duration-300 hover:bg-slate-50 active:*:scale-95 min-h-20 group cursor-pointer`}
                tabIndex="1"
            >
                <div className={`duration-300 cursor-pointer w-full ${isOpen && 'text-blue-600 '}`}>{label}</div>
                <BiChevronLeft className={`${isOpen && 'text-blue-600 -rotate-90'} transition-all `} />
            </div>
            <div className={`${isOpen ? "h-full px-5 py-3" : "h-0 opacity-0 overflow-hidden invisible"} not-[]:duration-300 transition-all text-sm  text-slate-500`}>
                {content}
            </div>
        </div>
    );
};

export default AccordionItem;
