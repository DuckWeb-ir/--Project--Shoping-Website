import React, { useEffect, useState } from 'react'
import AuthContext from './authContext'
import * as AuthService from '../Services/auth.service'

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const initAuth = async () => {
        try {
            setIsLoading(true)
            const response = await AuthService.getMe()

            setUser(response.data.user)

        } catch (err) {
            setUser(null)
            console.error(["Error in initAuth", err]);

        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        initAuth()
    }, [])

    const refreshUser = async () => {
        initAuth()
    }

    const Logout = async () => {

        try {
            setIsLoading(true)
            const response = await AuthService.logout()
            console.log(response);
        } catch (err) {
            console.log(`[logout -> ]`, err);

        } finally {
            setUser(null)
            setIsLoading(false)
        }

    }


    const value = {
        user,
        isLoading,
        refreshUser,
        Logout
    }


    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}




// refreshUser باعث "رفرش واقعی صفحه" نمی‌شود ❌
// بلکه با گرفتن اطلاعات جدید کاربر از سرور و set کردن آن در Context (مثلا setUser)
// باعث تغییر state سراسری می‌شود ✅
// این تغییر state باعث re-render شدن تمام کامپوننت‌هایی که از AuthContext استفاده می‌کنند می‌شود
// در نتیجه UI آپدیت شده و حس "رفرش شدن" ایجاد می‌شود (بدون reload صفحه)