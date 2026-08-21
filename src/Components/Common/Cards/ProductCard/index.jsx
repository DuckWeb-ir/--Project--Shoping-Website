import { Heart, ShoppingCart, Star } from "lucide-react";
import Button from "../../../Ui/‌Btn";
import Watch from "../../../../../public/assets/static/ProductsCard/Watch.png"
import toPersianNumber from "../../../../utils/toPersianNumber";


export default function ProductCard(props) {
    console.log(props);
    return (
        <div className="w-full select-none ">

            <div
                key={props.id}
                className=" h-full rounded-2xl bg-white p-4 hover:shadow-card-md border border-secondary-200 transition "
            >

                {/* Header */}
                <div className=" relative">
                    {/* Top header */}
                    <div className="flex-ic justify-between absolute right-0 left-0 top-0 px-2 pt-2 z-20 ">

                        <span className=" text-red-600 bg-red-100/55 text-[10px]  py-1 px-2 rounded-lg  font-bold ">
                            {toPersianNumber(props.discount)}  % تخفیف
                        </span>

                        <div className="flex-center size-8 rounded-full shadow-md  border border-secondary-200">
                            <Heart size={16} className="text-gray-400" />
                        </div>
                    </div>

                    {/* image */}
                    <div className=" h-45 flex items-center justify-center my-2 overflow-hidden rounded-2xl">

                        <img
                            src={props.image}
                            className=" w-full h-full object-cover hover:scale-105 transition "
                        />

                    </div>
                </div>


                {/* main */}

                <div className="flex flex-col items-end gap-1">

                    <p className=" text-xs text-secondary-400 ">
                        {props.brand}
                    </p>


                    <h2 className=" text-lg font-bold line-clamp-2 text-slate-800 mt-1 leading-5">
                        {props.title}
                    </h2>


                    {/* specs one line */}

                    <div className=" flex gap-1 mt-2 overflow-hidden divide-x divide-primary-100 text-secondary-400">

                        {props.specs.map((s) => (

                            <span
                                key={s}
                                className="px-2 text-xs"
                            >
                                {s}
                            </span>

                        ))}

                    </div>



                    {/*Color and rating  */}
                    <div className="flex items-center justify-center mt-2 gap-2 ">


                        {/* Color */}
                        <div className="flex items-center justify-center h-full">
                            {props.colors.map((color, index) => (
                                <div
                                    key={index}
                                    style={{
                                        backgroundColor: `#${color}`,
                                    }}
                                    className={`size-4.5 rounded-full border border-gray-200 shadow-sm ${index > 0 ? "-mr-2" : ""}`}
                                />
                            ))}
                        </div>


                        {/* rating */}
                        <div className=" flex items-center py-1  px-1.5 rounded-md text-xs   bg-gray-100 ">

                            {/* comment Count */}
                            <div className="flex items-center gap-1 text-secondary-500">
                                <span className="">
                                    {toPersianNumber(props.reviews)}
                                </span>
                                <span>
                                    نظر
                                </span>

                            </div>
                            {/* divider */}
                            <div className="h-5 w-px mx-2 bg-secondary-300"></div>
                            {/* rate */}
                            <div className="flex items-center gap-1">
                                <b>{toPersianNumber(props.rating)}</b>
                                <Star
                                    size={12}
                                    fill="orange"
                                    className="text-orange-400"
                                />
                            </div>


                        </div>

                    </div>





                    {/* price */}

                    <div className=" mt-3 flex justify-between items-center gap-2">

                        <span className=" text-xs text-red-400 line-through py-2.5">
                            {toPersianNumber(props.oldPrice)}
                        </span>


                        <div className=" text-right leading-4">
                            <strong className=" text-md text-slate-900">
                                {toPersianNumber(props.price)}
                            </strong>

                            <span className="text-xs mr-1">
                                تومان
                            </span>

                        </div>

                    </div>

                    {/* button */}

                    <Button icon={<ShoppingCart />} variant="dark" className={"w-full"}>
                        افزودن به سبد خرید
                    </Button>

                </div>

            </div>


        </div>
    )
}