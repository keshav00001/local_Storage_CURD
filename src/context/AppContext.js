import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [paramsApp, setParamsApp] = useState({});

    return (
        <AppContext.Provider value={{ paramsApp, setParamsApp }}>
            {props.children}
        </AppContext.Provider>
    );
};
