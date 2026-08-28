import { useRef } from "react";
import { BiImageAdd } from "react-icons/bi";
import { HiX } from "react-icons/hi";

const MAX_IMAGE = 10;

const ImageUploadField = ({ files, onChange }) => {

    const isFull = files.length >= MAX_IMAGE
    const inputRef = useRef(null);

    const handleFiles = (e) => {
        //
    };

    const removeFile = (index) => {
        //
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-zinc-700">
                    تصاویر محصول
                </label>

                <span className="text-xs text-zinc-400">
                    {files.length} از {MAX_IMAGE}
                </span>
            </div>

            {/* Hidden File Input */}
            <input
                type="file"
                ref={inputRef}
                className="hidden"
                multiple
                onChange={handleFiles}
                accept="images/*"
            />


            {/* Image Upload Grid */}
            <div className="grid grid-cols-4 gap-2">
                {/* Images Preview */}
                {files.map((file, index) => (

                    <div
                        key={index}
                        className="relative aspect-square rounded-md overflow-hidden primary-border group"
                    >
                        <img
                            src="https://storage.sabzlearn.ir/legacy-statics/2025/11/ReactJS-Course.webp"
                            className="w-full h-full object-cover"
                            alt=""
                        />

                        <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full size-5 text-xs flex items-center justify-center hover:bg-red-600"
                        >
                            <HiX />
                        </button>
                    </div>

                ))}
                {!isFull && (
                    <button
                        onClick={() => inputRef.current?.click()}
                        type="button"
                        className="aspect-square rounded-md primary-border border-dashed flex flex-col items-center justify-center gap-1 text-zinc-500 hover:bg-zinc-50 hover:text-blue-500 transition-colors"
                    >
                        <BiImageAdd className="text-xl" />
                        <span className="text-[11px]">افزودن تصویر</span>
                    </button>
                )}
            </div>

            {/* Add Image Button */}
            {isFull && (
                <p className="text-xs text-zinc-400 mt-2">
                    حداکثر تعداد تصاویر ({MAX_IMAGE} عدد) انتخاب شده است.
                </p>
            )}
        </div>
    );
};

export default ImageUploadField;