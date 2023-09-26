import axios from 'axios'

let employeesApi = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
})

employeesApi.interceptors.request.use(function(config) {

    const token = localStorage.getItem('token')

    config.headers.Authorization = token ? `Bearer ${token}` : ''

    return config
})

export default employeesApi
