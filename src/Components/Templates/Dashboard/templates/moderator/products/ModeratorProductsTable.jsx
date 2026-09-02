import Table from "../../../common/Table";
import TableCell from "../../../common/Table/TableCell";
import TableRow from "../../../common/Table/TableRow";

import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import ProductDrawer from "../../../common/ProductDrawer";
import TableBody from "../../../common/Table/TableBody";
import TableHead from "../../../common/Table/TableHead";
import TableToolbar from "../../../common/Table/TableToolbar";
import useProduct from "../../../../../../Hooks/useProduct";
import { formatPrice, getDisplayPrice } from "../../../../../../lib/helper/price";

const ModeratorProductsTable = () => {
    const [isDrawerShow, setIsDrawerShow] = useState(false);
    const toggleDrawer = () => setIsDrawerShow((prev) => !prev);

    const { products, pagination, page, setPage, isLoading, error } = useProduct();

    console.log(products);

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
                        <TableCell>وضعیت</TableCell>
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
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            {/* pagination  */}
            {pagination && pagination.totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-4">
                    <button
                        className="px-3 py-1 rounded-md primary-border text-sm disabled:opacity-40"
                        disabled={page <= 1}
                        onClick={() => setPage((prev) => prev - 1)}
                    >
                        قبلی
                    </button>

                    <span className="text-sm text-zinc-500">
                        صفحه {pagination.page} از {pagination.totalPages}
                    </span>

                    <button
                        className="px-3 py-1 rounded-md primary-border text-sm disabled:opacity-40"
                        disabled={page >= pagination.totalPages}
                        onClick={() => setPage((prev) => prev + 1)}
                    >
                        بعدی
                    </button>
                </div>
            )}

            {isDrawerShow && <ProductDrawer isOpen={isDrawerShow} onToggle={toggleDrawer} />}

        </>
    );
};

export default ModeratorProductsTable;
