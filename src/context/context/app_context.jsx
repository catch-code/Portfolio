import { createContext, useReducer } from "react"

import { AppReducer } from "../reducers/app_reducer"

export const AppContext = createContext({
  appState: {},
  appDispatch: () => {},
})

export const AppProvider = (props) => {
  const appInitialState = {
    theme: "dark",
  }

  const [appState, appDispatch] = useReducer(AppReducer, appInitialState)

  return (
    <AppContext.Provider
      value={{
        appState,
        appDispatch,
      }}
    >
      {props.children}  
    </AppContext.Provider>
  )
}