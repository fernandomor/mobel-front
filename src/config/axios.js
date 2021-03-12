import axios from 'axios'
require('dotenv').config();

const clienteAxios = axios.create({
    baseURL: "https://mobel.herokuapp.com"
})

export default clienteAxios