import { useEffect, useState } from "react"
import { getAllUsers } from "../Services/user.service"

const useUsers = (limit = 10) => {

    const [users, setUsers] = useState([])
    const [pagination, setPagination] = useState(null)
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchUsers = async () => {

        setIsLoading(true)
        setError(null)
        try {
            const res = await getAllUsers({ page, limit })
            setUsers(res?.data?.users || []);
            setPagination(res?.data?.pagination || null);
        } catch (error) {
            setError('خطا در دریافت اطلاعات کاربران')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [page, limit])

    return {
        users,
        pagination,
        page,
        setPage,
        isLoading,
        error,
        reFetch : fetchUsers
    }

}
export default useUsers