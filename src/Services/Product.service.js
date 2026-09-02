import api from "./api";

const createProduct = async (formData) => {
    try {
        console.log([...formData.entries()]);

        const { data } = await api.post("/products", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        return data;
    } catch (error) {
        console.log("VALIDATION ERROR OBJECT:", error.response?.data?.data);
        console.log(
            "VALIDATION ERROR JSON:",
            JSON.stringify(error.response?.data?.data, null, 2)
        );
    }
};


export const getAllProducts = async (params) => {
  const { data } = await api.get("/products", { params });

  return data;
};

export default createProduct;
