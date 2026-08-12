import { BiLogOut } from "react-icons/bi";
import AuthContext from "../../../context/authContext";
import { useContext } from "react";
import { useNavigate } from "react-router";

const Logout = () => {
    const { refreshUser, Logout } = useContext(AuthContext)
    const navigate = useNavigate()

    const logoutHandler = async () => {
        try {
            await Logout()
        } catch (err) {
             console.log(`[logout component-> ]`, err);
        } finally {
            refreshUser()
            navigate('/auth', { replace: true })
        }
    }
    return (
        <footer className="p-3 w-full">
            <button
                className="flex items-center gap-3 duration-150 transition-all hover:bg-zinc-100/70 p-1.5 rounded-lg relative w-full cursor-pointer"
                onClick={logoutHandler}
            >
                <span className="w-1 absolute top-0 rounded-full opacity-50 bottom-0 my-auto -right-1 h-[80%] z-0" />

                <div className="size-10 rounded-lg  flex items-center text-gray-500 justify-center text-xl relative overflow-hidden">
                    <span className="size-full bg-gray-500 absolute z-0 opacity-15 inset-0"></span>
                    <BiLogOut />
                </div>
                <span className="text-sm text-zinc-600 ">خروج از حساب</span>
            </button>
        </footer>
    );
};

export default Logout;
