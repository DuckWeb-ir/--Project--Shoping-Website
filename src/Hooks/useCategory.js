import React, { useEffect, useState } from 'react'
import getAllCategory from '../Services/category.service'

function useCategory() {
    const [category, setCategory] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        let mountFlag = true

        const fetchCategories = async () => {
            try {

                const res = await getAllCategory()
                if (mountFlag) {
                    setCategory(res?.data?.categories || []);
                    console.log(res);
                }

            } catch (err) {

                console.log("[useCategory.js Erorr=>]", (err));

            } finally {
                mountFlag && setIsLoading(false)
            }
        }
        fetchCategories()

        return () => { mountFlag = false }


    }, [])

    return { category, isLoading }
}

export default useCategory