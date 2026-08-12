import axios from "axios"
import api from './api'

export const sendOtpCode = async (phone) => {

    const { data } = await api.post("/auth/send", { phone })
    return data

}

export const verifyOtpCode = async (phone, otp) => {

    const { data } = await api.post(
        "/auth/verify",
        { phone, otp, isSeller: false },
    )
    return data

}

export const getMe = async () => {

    const { data } = await api.get(
        "/auth/me",
    )
    return data
}
export const logout = async () => {

    const { data } = await api.post(
        "/auth/logout",
        {},
  
    )
    return data
}




// قبل از Axios Instance
// export const verifyOtpCode = async (phone, otp) => {

//     const { data } = await axios.post(
//         "https://shopino.iran.liara.run/v1/auth/verify",
//         { phone, otp, isSeller: false },
//         {
//             withCredentials: true,
//         }
//     )
//     return data

// }