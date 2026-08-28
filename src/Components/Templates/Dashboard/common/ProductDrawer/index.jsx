import useCategory from "../../../../../Hooks/useCategory";
import Drawer from "../Drawer";
import ProductDrawerInput from "./ProductDrawerInput";
import CascadeCategories from "./CascadeCategories"
import useProductForm from "../../../../../Hooks/useProductForm";
import { useEffect, useState } from "react";
import createProduct from "../../../../../Services/Product.service";
import { toast } from "sonner";
import DynamicKeyValueFields from "./DynamicKeyValueFields";
import SellerFields from "./SellerField";

const ProductDrawer = ({ isOpen, onToggle }) => {


    const { categories, isLoading: isCategoryLoading } = useCategory()
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);


    const {
        form,
        setField,
        selectedCategory,
        handleCategoryChange,
        addSeller,
        removeSeller,
        updateSeller,
        addPair,
        removePair,
        updatePair,
        setImages,
        buildFormData,
        resetForm,
    } = useProductForm()

    useEffect(() => {
        if (!isOpen) {
            resetForm()
        }
    }, [isOpen])

    const handleSubmit = async () => {

        if (!form.name.trim() || !form.slug.trim() || !form.description.trim()) {
            setError("عنوان و لینک محصول الزامی هستن");
            console.log(error);
            return;
        }

        if (!selectedCategory) {
            setError("انتخاب دسته‌بندی محصول الزامی هست");
            console.log(error);

            return;
        }
        setIsSubmitting(true);
        setError(null);

        try {
            await createProduct(buildFormData());
            resetForm();
            toast.success("محصول با موفقیت ایجاد شد");
        } catch (err) {
            setError(err.response?.data?.message || "خطایی رخ داده است");
        }

        setIsSubmitting(false);

    }

    return (
        <Drawer isOpen={isOpen} onClose={onToggle} title="ایجاد محصول">

            <div className="space-y-4 mt-5 px-6">
                <ProductDrawerInput
                    label="عنوان محصول"
                    placeholder="مثلا آیفون 17 پرومکس"
                    type="text"
                    value={form.name}
                    onChange={(e) => setField("name", e.target.value)}
                />

                <ProductDrawerInput
                    label="لینک"
                    placeholder="iphone-17-promax"
                    type="text"
                    value={form.slug}
                    onChange={(e) => setField("slug", e.target.value)}
                />

                <ProductDrawerInput
                    label="تصویر محصول"
                    placeholder="iphone-17-promax"
                    type="file"
                />

                {/* Sellers */}

                <SellerFields
                    sellers={form.sellers}
                    onAdd={addSeller}
                    onRemove={removeSeller}
                    onChange={updateSeller}

                />

                {/* Key Value */}
                <DynamicKeyValueFields
                    title='ویژگی های فیلتری'
                    items={form.filterValues}
                    onAdd={() => addPair("filterValues")}
                    onRemove={(index) => removePair("filterValues", index)}
                    onChange={(index, key, value) => updatePair("filterValues", index, key, value)}
                />

                <DynamicKeyValueFields
                    title='ویژگی های سفارشی'
                    items={form.customFields}
                    onAdd={() => addPair("customFields")}
                    onRemove={(index) => removePair("customFields", index)}
                    onChange={(index, key, value) => updatePair("customFields", index, "key", value)}
                />


                <div>
                    <label htmlFor="product-details"> دسته بندی  </label>

                    {isCategoryLoading ? (
                        <p>
                            در حال بارگزاری دسته بندی ها...
                        </p>
                    ) : (
                        <CascadeCategories categories={categories} onChange={handleCategoryChange} />
                    )

                    }
                </div>

                <div>
                    <label htmlFor="product-details"> توضیحات محصول </label>
                    <textarea
                        value={form.description}
                        onChange={(e) => setField("description", e.target.value)}
                        id="product-details"
                        name=""
                        className="w-full h-10 text-sm rounded-md outline-none primary-border px-3 mt-2 min-h-30 pt-2"
                        placeholder=" آیفون - ارزان - تخفیف دار"
                    ></textarea>
                </div>

                <div className="mt-5 flex items-center justify-end gap-2">
                    <button className="px-4 py-2 rounded-md bg-red-500/10 text-red-500 hover:bg-red-500/15 ">
                        انصراف
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="px-4 py-2 rounded-md bg-linear-to-t from-blue-600 text-sm to-blue-500 text-white">
                        {isSubmitting ? "در حال ثبت ..." : "ایجاد محصول"}
                    </button>
                </div>
            </div>

        </Drawer>
    );
};

export default ProductDrawer;
