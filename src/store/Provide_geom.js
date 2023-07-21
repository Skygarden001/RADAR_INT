import { useReducer } from "react";
import {Context, Context_Sat} from "./Context";
import reducer, { initState } from './reducer';
function Provider({children}) {
    const [state, dispatch] = useReducer(reducer, initState)
    const [state_sat, dispatch_sat] = useReducer(reducer, {id: "document",
        name: "con cac",
        version: "1.0",})
    return ( 
    
    <Context.Provider value = {[state, dispatch]}>
    <Context_Sat.Provider value ={[state_sat, dispatch_sat]}>
        {children}
    </Context_Sat.Provider>
    </Context.Provider>
   
     );
}

export default Provider;