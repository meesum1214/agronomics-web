import { API } from "./config"


export const getPromoImages = async () => {
    const res = await API.get('/faqs/getPromo')
    return res.data
}