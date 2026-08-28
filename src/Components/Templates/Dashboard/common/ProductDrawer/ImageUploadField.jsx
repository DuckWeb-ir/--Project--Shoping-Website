import { useEffect, useRef, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { HiX } from "react-icons/hi";

const MAX_IMAGE = 10;

const ImageUploadField = ({ files, onChange }) => {

    const isFull = files.length >= MAX_IMAGE
    const inputRef = useRef(null);

    const [previewUrl, setPreviewUrl] = useState([])

    const handleFiles = (e) => {
        const selectedImage = Array.from(e.target.files)
        const remaningImage = MAX_IMAGE - files.length
        const imagesToAdd = selectedImage.slice(0, remaningImage)

        onChange([...files, ...imagesToAdd])

        console.log(imagesToAdd);


    };

    const removeFile = (index) => {
        const UpdateFiles = files.filter((_, i) => i !== index)
        onChange(UpdateFiles)
    };

    useEffect((() => {

        const Urls = files.map((file) => URL.createObjectURL(file))

        setPreviewUrl(Urls)

        return () => {
            Urls.forEach((url) => URL.revokeObjectURL(url))
        }

    }), [files])




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
                accept="image/*"
            />


            {/* Image Upload Grid */}
            <div className="grid grid-cols-4 gap-2">
                {/* Images Preview */}
                {previewUrl.map((url, index) => (

                    <div
                        key={index}
                        className="relative aspect-square rounded-md overflow-hidden primary-border group"
                    >
                        <img
                            src={url}
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