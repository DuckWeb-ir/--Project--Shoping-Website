import { useEffect, useState } from "react"
import { getAllUsers } from "../Services/user.service"

const useUsers = (limit = 10) => {

    const [Users, setUsers] = useState([])
    const [pagination, setPagination] = useState(null)
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchUser = async () => {

        setIsLoading(true)
        setError(null)
        try {
            const res = await getAllUsers({ page, limit })
            setUsers(res?.data?.Users || []);
            setPagination(res?.data?.pagination || null);
        } catch (error) {
            setError('خطا در دریافت اطلاعات کاربران')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchUser()
    }, [page, limit])

    return {
        Users,
        pagination,
        page,
        setPage,
        isLoading,
        error,
        reFetch : fetchUser
    }

}
export default useUsers