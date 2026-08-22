import { Outlet } from "react-router";
import { AuthProvider } from "../../context/AuthProvider";
import { Toaster } from "sonner";

const AuthLayout = () => {
    return (
        <AuthProvider>
            <Toaster position="top-right" richColors toastOptions={{
                style: {
                    fontFamily: 'IRANSansX'
                }
            }} />
            <div className="w-dvw h-dvh flex items-center justify-center bg-[#eae9e9]">
                <div className="w-full! rounded-2xl p-10 md:w-107! bg-white shadow-card-md">
                    <Outlet />
                </div>
            </div>
        </AuthProvider>


    );
};

export default AuthLayout;
