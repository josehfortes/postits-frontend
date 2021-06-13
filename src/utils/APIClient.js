import axios from 'axios'

const { NEXT_PUBLIC_API_URL } = process.env

const APIClient = (authorization = '') => {
  if (authorization) axios.defaults.headers.common['authorization'] = authorization

  return {
    get: (url, options = {}) => axios.get(`${NEXT_PUBLIC_API_URL}${url}`, options),
    post: (url, data, options = {}) => axios.post(`${NEXT_PUBLIC_API_URL}${url}`, data, options),
    put: (url, data, options = {}) => axios.put(`${NEXT_PUBLIC_API_URL}${url}`, data, options),
    delete: (url, options = {}) => axios.delete(`${NEXT_PUBLIC_API_URL}${url}`, options),
  }
}

export default APIClient