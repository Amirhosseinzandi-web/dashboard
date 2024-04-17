"use client";
import * as React from 'react';
import { useEffect, memo } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MenuContainer from '../MenuContainer/MenuContainer';


type PropsType = {
    open: boolean
    setOpen: (open: boolean) => void
};


const MobileMenu: React.FC<PropsType> = ({ open, setOpen }) => {


    useEffect(() => {

        const ResizeHandler = () => {
            setOpen(false)
        }

        window.addEventListener("resize", ResizeHandler)

        return () => {
            window.removeEventListener("resize", ResizeHandler)
        }
    })

    return (
        <div>
            <Drawer open={open} onClose={() => setOpen(false)}>
                <Box role="presentation" width={"100%"} height={"100%"} sx={{ backgroundColor: "red" }}>
                    <Box width={"330px"} bgcolor={"#0B1229"} minHeight={"100vh"} display={"flex"} flexDirection={"column"}>
                        <MenuContainer />
                    </Box>
                </Box>
            </Drawer>
        </div>
    );
}


export default memo(MobileMenu)