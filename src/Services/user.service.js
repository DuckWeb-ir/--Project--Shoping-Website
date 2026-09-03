import api from "./api"

const getAllUsers = async(params) => {

    const { data } = await api.get("/users" , {params})

    return data
}


const banUser = async(id) => {

    const { data } = await api.post(`/users/ban/${id}` )

    return data
}