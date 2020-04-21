import axios from 'axios'
import NProgress from 'nprogress'

const api = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 10000
})

api.interceptors.request.use(config => { //its like use middleware
    NProgress.start()
    return config
})

api.interceptors.response.use(response => {
    NProgress.done()
    return response
})

export default {
    getEvents(perPage, page){
        return api.get(`/events?_limit=${perPage}&_page=${page}`)
    },

    getEvent(id){
        return api.get(`/events/${id}`)
    },

    postEvent(event){
        return api.post(`/events`, event)
    }
}