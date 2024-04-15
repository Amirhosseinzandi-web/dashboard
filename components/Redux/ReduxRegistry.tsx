"use client"

import { Provider } from "react-redux";
import Store from "./Store";




const ReduxRegistry: React.FC<React.PropsWithChildren> = ({ children }) => {



    return (
        <>
            <Provider store={Store}>
                {children}
            </Provider>
        </>
    );
}

export default ReduxRegistry;