import { createContext, useReducer } from 'react'

const initialState = {
  name: '',
  updatedDate: '',
  data: [],
}

export const store = createContext(initialState)

export const CONSTANTS = {
  SET_BOARD: 'SET_BOARD',
}

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case CONSTANTS.SET_BOARD:
        return action.payload
      default:
        throw new Error()
    }
  }, initialState)

  return <store.Provider value={{ state, dispatch }}>{children}</store.Provider>
}
