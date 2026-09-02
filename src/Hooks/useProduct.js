import { useEffect, useState } from "react"
import { getAllProducts } from "../Services/Product.service"

const useProduct = (limit = 10) => {

    const [products, setProducts] = useState([])
    const [pagination, setPagination] = useState(null)
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchProduct = async () => {

        setIsLoading(true)
        setError(null)
        try {
            const res = await getAllProducts({ page, limit })
            setProducts(res?.data?.products || []);
            setPagination(res?.data?.pagination || null);
        } catch (error) {
            setError('خطا در دریافت محصولات')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [page, limit])

    return {
        products,
        pagination,
        page,
        setPage,
        isLoading,
        error,
        reFetch : fetchProduct
    }

}
export default useProduct