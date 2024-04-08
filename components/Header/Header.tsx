import { AppBar, Box, Button, IconButton, Stack, Toolbar, Tooltip, styled } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { UserButton } from "@clerk/nextjs";





const Header = () => {
    return (
        <>
            <AppBar position="sticky" sx={{ bgcolor: "white", borderBottom: "1px solid #E0E0E0" }}>
                <Toolbar>
                    <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
                        <Box display={"flex"} gap={2} alignItems={"center"}>
                            <Tooltip title="Menu" sx={{ display: { xs: "block", lg: "none" } }}>
                                <IconButton>
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

        </>
    );
}

export default Header;