"use client"

import { Provider } from "react-redux";
import Store from "./Store";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";




const ReduxRegistry: React.FC<React.PropsWithChildren> = ({ children }) => {

    const theme = createTheme({
        // 
    })

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Provider store={Store}>
                    {children}
                </Provider>
            </ThemeProvider>
        </>
    );
}

export default ReduxRegistry;