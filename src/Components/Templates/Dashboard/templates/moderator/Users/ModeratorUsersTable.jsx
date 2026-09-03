import React, { useState } from 'react'

import Table from "../../../common/Table";
import TableCell from "../../../common/Table/TableCell";
import TableRow from "../../../common/Table/TableRow";
import TableBody from "../../../common/Table/TableBody";
import TableHead from "../../../common/Table/TableHead";
import TableToolbar from "../../../common/Table/TableToolbar";
import useUsers from '../../../../../../Hooks/useUsers';
import { BiPencil } from 'react-icons/bi';
import { FaBan } from 'react-icons/fa';
import { toPersianDate } from '../../../../../../lib/helper/date';
import { banUser } from '../../../../../../Services/user.service';
import { toast } from 'sonner';
import Confirm from '../../../../../Common/Confirm';

function ModeratorUsersTable() {

    // Mapping
    const roleLabels = {
        USER: "کاربر",
        ADMIN: "مدیر",
        SELLER: "فروشنده",
    };

    const { users, pagination, page, setPage, isLoading, error, reFetch } = useUsers()


    // Ban User
    const [banningUser, setBanningUser] = useState(null)
    const [isBanning, setIsBanning] = useState(false)

    const handleBan = async () => {
        setIsBanning(true)
        try {
            await banUser(banningUser._id)
            toast.success('بن کاربر با موفقیت انجام شد ')
            setBanningUser(null)
            reFetch()

        } catch (error) {
            toast.error(error?.response?.data.message || "خطا در بن کاربر ")
        } finally {
            setIsBanning(false)
        }

    };

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
                                <TableCell>{toPersianDate(user.createdAt)}</TableCell>
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
                                        onClick={() => setBanningUser(user)}
                                    >
                                        <FaBan />
                                    </button>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
لهف ش
            <Confirm
                isOpen={!!banningUser}
                title="بن کاربر"
                description={`آیا از مسدود کردن کاربر ${banningUser?.name} مطمئن هستید؟ این عمل غیر قابل بازگشت است`}
                onConfirm={handleBan}
                onCancel={() => setBanningUser(null)}
                isLoading={isBanning}
            />

        </div>
    )
}

export default ModeratorUsersTable