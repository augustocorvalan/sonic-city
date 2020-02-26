import React from 'react'

// Context
const State = React.createContext()
const Dispatch = React.createContext()

// Init State
const initState = {
    greeting: 'hello'
}

// Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case 'switch':
           return {
                ...state,
                greeting: 'bye'
            };
        default:
            return state
    }
}

// Provider
const Provider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initState)

    return (
        <State.Provider value={state}>
            <Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
        </State.Provider>
    );
}

// Export
export const City = {
    State,
    Dispatch,
    Provider,
}