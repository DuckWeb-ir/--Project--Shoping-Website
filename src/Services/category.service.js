import api from './api'

// Category
export const getAllCategory = async () => {
    const { data } = await api.get('/category')
    return data
}

export const createCategory = async (formData) => {
    const { data } = await api.post('/category', formData)
    return data
}

export const updateCategory = async (id, formData) => {
    const { data } = await api.put(`/category/${id}`, formData)
    return data
}

export const removeCategory = async (id) => {
    const { data } = await api.delete(`/category/${id}`)
    return data
}



// SubCategory

export const getSubAllCategory = async () => {
    const { data } = await api.get('/category')
    return data
}

export const createSubCategory = async (formData) => {
    const { data } = await api.post('/category', formData)
    return data
}

export const updateSubCategory = async (id, formData) => {
    const { data } = await api.put(`/category/${id}`, formData)
    return data
}

export const removeSubCategory = async (id) => {
    const { data } = await api.delete(`/category/${id}`)
    return data
}


