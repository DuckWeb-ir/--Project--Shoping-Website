import React from 'react'

import Table from "../../../common/Table";
import TableCell from "../../../common/Table/TableCell";
import TableRow from "../../../common/Table/TableRow";
import TableBody from "../../../common/Table/TableBody";
import TableHead from "../../../common/Table/TableHead";
import TableToolbar from "../../../common/Table/TableToolbar";
import useUsers from '../../../../../../Hooks/useUsers';
import { BiPencil, BiTrash } from 'react-icons/bi';
import { toPersianDate } from '../../../../../../lib/helper/date';

function ModeratorUsersTable() {

    // Mapping
    const roleLabels = {
        USER: "کاربر",
        ADMIN: "مدیر",
        SELLER: "فروشنده",
    };

    const { users, pagination, page, setPage, isLoading, error, reFetch } = useUsers()

    console.log(users);
    return (
        <div>
            <Table>
                <TableToolbar useFlexBetween>
                    {/* title */}
                    <div>
                        <h2 className="font-black text-lg text-zinc-800">تمامی محصولات</h2>
                    </div>
                </TableToolbar>

                <TableHead>
                    <TableRow className="">
                        <TableCell>نام</TableCell>
                        <TableCell>نقش</TableCell>
                        <TableCell>شماره تلفن</TableCell>
                        <TableCell>آدرس</TableCell>
                        <TableCell>کد ملی </TableCell>
                        <TableCell>تاریخ ثبت نام</TableCell>
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
                                {error || "خطا در دریافت اطلاعات کاربران"}
                            </TableCell>
                        </TableRow>
                    )}
                    {!isLoading && !error && users.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={3} className="text-center text-zinc-400">
                                هنوز کاربری ثبت نشده
                            </TableCell>
                        </TableRow>
                    )}
                    {!isLoading && !error && users.map((user) => {
                        return (
                            <TableRow key={user._id}>
                                <TableCell>{user.name || "ثبت نشده"}</TableCell>
                                <TableCell> {user.roles.map((role) => roleLabels[role]).join(" - ")} </TableCell>
                                <TableCell> {user.phone} </TableCell>
                                <TableCell> {user.addresses[0] || "ثبت نشده"} </TableCell>
                                <TableCell> {user.nationalCode || "ثبت نشده"} </TableCell>
                                <TableCell>{toPersianDate(user.createdAt) }</TableCell>
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
        </div>
    )
}

export default ModeratorUsersTable