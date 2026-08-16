import React, { useEffect, useState } from 'react'
import getAllCategory from '../Services/category.service'

function useCategory() {
    const [categories, setcategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        let mountFlag = true

        const fetchCategories = async () => {
            try {

                const res = await getAllCategory()
                if (mountFlag) {
                    setcategories(res?.data?.categories || []);
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

    return { categories, isLoading }
}

export default useCategory