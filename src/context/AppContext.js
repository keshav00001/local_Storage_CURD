import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [paramsApp, setParamsApp] = useState({});
    const [formShow, setFormShow] = useState(false);


    return (
        <AppContext.Provider value={{ paramsApp, setParamsApp, formShow, setFormShow }}>
            {props.children}
        </AppContext.Provider>
    );
};
