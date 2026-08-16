import React, { useEffect, useState } from 'react'
import getAllCategory from '../Services/category.service'

function useCategory() {
    const [category, setCategory] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect( () => {

        const fetchCategories = async()=>{
            try {
                const res  = await getAllCategory()
                setCategory(res?.data?.categories || [])
                console.log(res);
    
            } catch (err) {
    
                console.log("[useCategory.js Erorr=>]" ,(err) );
    
            } finally {
                setIsLoading(false)
            }
        }
        fetchCategories()

    }, [])

    return {category , isLoading}
}

export default useCategory