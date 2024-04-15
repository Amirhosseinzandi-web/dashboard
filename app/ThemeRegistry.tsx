"use client"
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";


type initialStateType = {
    app: {
        flag: boolean
    }
}


const ThemeRegistry: React.FC<React.PropsWithChildren> = ({ children }) => {
    const dispatch = useDispatch()
    const { flag } = useSelector((state: initialStateType) => state.app)

    const theme = createTheme({
        palette: {
            mode: flag ? "dark" : "light",
        }
    })

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </>
    );
}

export default ThemeRegistry;