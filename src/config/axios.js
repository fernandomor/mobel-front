import axios from 'axios'
require('dotenv').config();

const clienteAxios = axios.create({
    baseURL: "https://mobels.herokuapp.com"
})

export default clienteAxios