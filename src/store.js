import React, {createContext, useReducer} from "react";
import rootReducer from "./rootReducer";
const initialState = {
  userDetails:{},
};
export default function Store (props) {

    const [state, dispatch] = useReducer(rootReducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {props.children}
        </Context.Provider>
    )
    
};

export const Context = createContext(initialState);
