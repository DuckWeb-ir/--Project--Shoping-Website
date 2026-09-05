import Table from "../../../common/Table";
import TableCell from "../../../common/Table/TableCell";
import TableRow from "../../../common/Table/TableRow";

import { useState } from "react";
import { BiPencil, BiPlus, BiTrash } from "react-icons/bi";
import ProductDrawer from "../../../common/ProductDrawer";
import TableBody from "../../../common/Table/TableBody";
import TableHead from "../../../common/Table/TableHead";
import TableToolbar from "../../../common/Table/TableToolbar";
import useProduct from "../../../../../../Hooks/useProduct";
import { formatPrice, getDisplayPrice } from "../../../../../../lib/helper/price";
import Confirm from "../../../../../Common/Confirm";
import { removeProducts } from "../../../../../../Services/Product.service";
import { toast } from "sonner";
import Pagination from "../../../../../Common/Pagination";

const ModeratorProductsTable = () => {
    const [isDrawerShow, setIsDrawerShow] = useState(false);
    const toggleDrawer = () => setIsDrawerShow((prev) => !prev);

    const { products, pagination, page, setPage, isLoading, error, reFetch } = useProduct();


    // remove Product
    const [deletingProduct, setDeletingProduct] = useState(null)
    const [isDeleting, setIsDeleting] = useState(false)

    const handleRemove = async () => {
        setIsDeleting(true)
        try {
            await removeProducts(deletingProduct._id)
            toast.success('حذف با موفقیت انجام شد ')
            setDeletingProduct(null)
            reFetch()

        } catch (error) {
            toast.error(error?.response?.data.message || "خطا در حذف محصول ")
        } finally {
            setIsDeleting(false)
        }

    };


    return (
        <>
            <Table>
                <TableToolbar useFlexBetween>
                    {/* title */}
                    <div>
                        <h2 className="font-black text-lg text-zinc-800">تمامی محصولات</h2>
                    </div>
                    {/* btn */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleDrawer}
                            className="px-3 hover:opacity-90 flex items-center h-10 rounded-md bg-blue-500 text-white"
                        >
                            <BiPlus />
                            <span>ایجاد محصول</span>
                        </button>
                    </div>
                </TableToolbar>

                <TableHead>
                    <TableRow className="">
                        <TableCell>شناسه</TableCell>
                        <TableCell>عنوان</TableCell>
                        <TableCell>مبلغ</TableCell>
                        <TableCell>عملیات</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody className="text-zinc-600 *:h-16! font-medium text-xs!">

                    {isLoading && (
                        <TableRow>
                            <TableCell colSpan={3} className="text-center text-zinc-400">
                                در حال بارگزاری ...
                            </TableCell>
                        </TableRow>
                    )}
                    {!isLoading && error && (
                        <TableRow>
                            <TableCell colSpan={3} className="text-center text-red-400">
                                {error || "خطا در دریافت محصولات"}
                            </TableCell>
                        </TableRow>
                    )}
                    {!isLoading && !error && products.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={3} className="text-center text-zinc-400">
                                هنوز محصولی ثبت نشده
                            </TableCell>
                        </TableRow>
                    )}
                    {!isLoading && !error && products.map((product) => {

                        const { price, hasMultipleSellers } = getDisplayPrice(product.sellers,);

                        return (
                            <TableRow key={product._id}>
                                <TableCell>{product.shortIdentifier}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>
                                    <>
                                        {formatPrice(price)} تومان{" "}
                                        {hasMultipleSellers && "(بیش از یک فروشنده)"}
                                    </>
                                </TableCell>
                                <TableCell>
                                    <button
                                        className="text-blue-500 hover:bg-blue-50 p-2 rounded-md"
                                        title="ویرایش"
                                    >
                                        <BiPencil />
                                    </button>

                                    <button
                                        className="text-red-500 hover:bg-blue-50 p-2 rounded-md"
                                        title="حذف"
                                        onClick={() => setDeletingProduct(product)}
                                    >
                                        <BiTrash />
                                    </button>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>

            {/* pagination  */}
            <Pagination pagination={pagination} page={page} setPage={setPage}/>

            <Confirm
                isOpen={!!deletingProduct}
                title="حذف محصول"
                description={`آیا از حذف محصول ${deletingProduct?.name} مطمئن هستید؟ این عمل غیر قابل بازگشت است`}
                onConfirm={handleRemove}
                onCancel={() => setDeletingProduct(null)}
                isLoading={isDeleting}
            />


            {isDrawerShow && <ProductDrawer isOpen={isDrawerShow} onToggle={toggleDrawer} />}

        </>
    );
};

export default ModeratorProductsTable;
