import axios from "axios";
import { toast } from "sonner";

const api = axios.create({
  baseURL: "https://shopino.iran.liara.run/v1",
  withCredentials: true,

  headers: {
    "Content-Type": "application/json",
  },

  timeout: 5000,
});

api.interceptors.response.use(
  (response) => response,

  (error) => {
    // خطاهای مربوط به شبکه و Timeout
    switch (error.code) {
      case "ECONNABORTED":
        toast.error("زمان درخواست به پایان رسید");
        break;

      case "ERR_NETWORK":
        toast.error("خطا در برقراری ارتباط با سرور");
        break;
    }

    // خطاهای HTTP
    switch (error.response?.status) {
      case 403:
        toast.error("شما اجازه دسترسی به این بخش را ندارید");
        break;

      case 500:
        toast.error("خطای داخلی سرور");
        break;
    }

    return Promise.reject(error);
  }
);

export default api;