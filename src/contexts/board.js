import { createContext, useReducer } from 'react'
import _ from 'lodash'

import APIClient from '../utils/APIClient'

const initialState = {
  name: '',
  updatedDate: '',
  data: [],
}

export const store = createContext(initialState)

export const CONSTANTS = {
  SET_BOARD: 'SET_BOARD',
  EDIT_BOARD: 'EDIT_BOARD',
}

const saveData = _.debounce(async (data) => {
  try {
    await APIClient().put(`/board?id=${data._id}`, {
      ...data
    })

  } catch (err) {
    console.error(err)
  }
}, 2000)

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case CONSTANTS.SET_BOARD:
        return action.payload
      case CONSTANTS.EDIT_BOARD:
        const newObj = {
          ...state,
          ...action.payload
        }
        saveData(newObj)
        return newObj
      default:
        throw new Error()
    }
  }, initialState)

  return <store.Provider value={{ state, dispatch }}>{children}</store.Provider>
}
