import axios from 'axios'

const service = axios.create({
 baseURL: 'http://localhost:3001',
 withCredentials: true
})

const PRODUCT_SERVICE = {

SHOW: async () => {
    return await service.get('/product/show')
},
DELETE: async (data) => {
    return await service.get(`/product/delete/${data}`)
},
DETAIL_PRODUCT: async (data) => {
    return await service.get(`/product/edit/${data}`)
},
EDIT_PRODUCT: async (data,id) => {
    return await service.post(`/product/edit/${id}`,data)
},
CREATE_KIT: async(data)=>{
    return await service.post(`/kit/create`,data)
},
SHOW_KIT: async()=>{
    return await service.get(`/kit/show`)
},
DETAIL_KIT: async(data)=>{
    return await service.get(`/kit/edit/${data}`)
},
DELETE_KIT: async(data)=>{
    return await service.get(`/kit/delete/${data}`)
},
SHOW_CATEGORY: async(category)=>{
    return await service.get(`/${category}`)
},
SHOW_LIMIT_PRODUCTS: async()=>{
    return await service.get(`/list/products`)
},
SIC_MUNDUS_CREATUS_EST: async(data)=>{
    return await service.post(`/create/order`,data)
},

 
}

export default PRODUCT_SERVICE;