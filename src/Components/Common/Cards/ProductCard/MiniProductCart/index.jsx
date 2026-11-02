
import { Star, Zap } from "lucide-react";
import toPersianNumber from "../../../../../utils/toPersianNumber";


function MiniProductCart({ product }) {
    return (
        <div className="group box-style w-full overflow-hidden ">

            {/* Product Image */}
            <div className="flex h-52 items-center justify-center overflow-hidden">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Product Info */}
            <div className="mt-3 space-y-1">

                {/* English Title */}
                <p className="text-left text-sm text-secondary-400">
                    {product.englishTitle}
                </p>

                {/* Persian Title */}
                <h3 className="min-h-12 text-right text-sm font-bold leading-7 text-secondary-800 line-clamp-2">
                    {product.title}
                </h3>

                {/* Rating & Colors */}
                <div className="flex items-center justify-between border-b border-secondary-100 pb-3">

                    {/* Colors */}
                    <div className="flex items-center gap-1">
                        {product.colors.map((color, index) => (
                            <span
                                key={index}
                                className="size-5 rounded-full border border-secondary-200"
                                style={{ backgroundColor: color }}
                            />
                        ))}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 text-sm ">
                        <span className="text-xs text-secondary-400 pt-1">
                            ({toPersianNumber(product.reviews)})
                        </span>
                        <span className="font-bold text-primary-600 pt-1">
                            {toPersianNumber(product.rating)}
                        </span>
                        <Star size={12} fill="#2563eb" className="text-primary-600" />
                    </div>
                </div>

                {/* Price */}
                <div className="flex items-end justify-between gap-2 pt-2">
                    {/* Discount */}
                    <div className="flex items-center gap-2 rounded-xl border text-primary-600 px-2 py-1 ">
                        <span className=" font-bold pt-1">
                            {toPersianNumber(product.discount)}٪
                        </span>
                        <Zap size={17} fill="currentColor" />
                    </div>

                    <div className="space-y-1 text-left">
                        <p className="text-xs text-secondary-400 line-through">
                            {product.oldPrice.toLocaleString("fa-IR")} 
                        </p>

                        <p className="text-base font-extrabold text-secondary-900">
                            {product.price.toLocaleString("fa-IR")}
                            <span className="mr-1 text-xs font-normal text-secondary-500">
                                تومان
                            </span>
                        </p>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default MiniProductCart;
