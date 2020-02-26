import React from 'react'

// Context
const State = React.createContext()
const Dispatch = React.createContext()

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
    return {
      ...state,
      number: state.number + 1,
    }
    default:
    return state
  }
}

// Provider
const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, { number: 0 })

  return (
      <State.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
      </State.Provider>
    )
}

// Export
export const Counter = {
  State,
  Dispatch,
  Provider,
}