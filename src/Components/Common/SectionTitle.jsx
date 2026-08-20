import { ChevronLeft, Radar } from "lucide-react";
import Button from "../Ui/‌Btn";

const SectionTitle = ({ text, description, btn = false, btnText = 'مشاهده همه ', icon = <Radar /> }) => {

    return (
        <div className="flex items-center justify-between group mb-7">
            {/* Title */}
            <div className="flex flex-col gap-3 ">
                <div className="flex gap-2">

                    <div className="text-primary-500 transition-transform group-hover:scale-110">
                        {icon}
                    </div>
                    <h2 className="text-xl font-extrabold">{text}</h2>

                </div>

                {String(description).length ? (
                    <p className="text-sm max-w-2xl text-slate-400">{description}</p>
                ) : null}
            </div>
            {/* Btn */}
            {btn ?
                <Button icon={<ChevronLeft />} iconPosition="left" iconHover="translate">
                    {typeof btn === "string" ? btn : "مشاهده همه"}
                </Button>
                : null
            }
        </div>
    );
};

export default SectionTitle;
