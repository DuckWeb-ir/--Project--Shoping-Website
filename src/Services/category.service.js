import api from './api'


const getAllCategory = async () => {

    const { data } = await api.get( '/category')

    return data
}
export default getAllCategory