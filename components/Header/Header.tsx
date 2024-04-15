"use client";
import { AppBar, Box, IconButton, Stack, Switch, Toolbar, Tooltip } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { UserButton } from "@clerk/nextjs";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DarkmodeHandler } from "../Redux/CreateSlice";


type initialStateType = {
    app: {
        flag: boolean
    }
}


const Header = () => {

    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const { flag } = useSelector((state:initialStateType) => state.app)

    return (
        <>
            <AppBar position="sticky" sx={{ bgcolor: "background.default", borderBottom: "1px solid #E0E0E0" }}>
                <Toolbar>
                    <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
                        <Box display={"flex"} gap={2} alignItems={"center"}>
                            <Tooltip title="Menu" sx={{ display: { xs: "flex", lg: "none" } }}>
                                <IconButton onClick={() => setOpen(true)}>
                                    <MenuIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="search">
                                <IconButton>
                                    <SearchIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
                                </IconButton>
                            </Tooltip>

                        </Box>

                        <Box display={"flex"} gap={2} alignItems={"center"}>
                            <Switch checked={flag} onChange={() => dispatch(DarkmodeHandler())} />
                            <Tooltip title="search">
                                <IconButton>
                                    <PeopleIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="friends">
                                <IconButton>
                                    <NotificationsIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
                                </IconButton>
                            </Tooltip>
                            <UserButton afterSignOutUrl="/sign-in" />
                        </Box>
                    </Stack>
                </Toolbar>
            </AppBar>
            {/* *************************************************** */}

            <MobileMenu open={open} setOpen={setOpen} />

            {/*  *************************************************/}
        </>
    );
}

export default memo(Header)