import axios from 'axios'

const { NEXT_PUBLIC_API_URL } = process.env

const APIClient = (authorization = '') => {
  const defaultOptions = {
    headers: {
      authorization
    }
  }

  return {
    get: (url, options = {}) => axios.get(`${NEXT_PUBLIC_API_URL}${url}`, { ...defaultOptions, ...options }),
    post: (url, data, options = {}) => axios.post(`${NEXT_PUBLIC_API_URL}${url}`, data, { ...defaultOptions, ...options }),
    put: (url, data, options = {}) => axios.put(`${NEXT_PUBLIC_API_URL}${url}`, data, { ...defaultOptions, ...options }),
    delete: (url, options = {}) => axios.delete(`${NEXT_PUBLIC_API_URL}${url}`, { ...defaultOptions, ...options }),
  }
}

export default APIClient