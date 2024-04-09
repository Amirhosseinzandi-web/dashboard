"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Stack, Typography } from '@mui/material';
import GppGoodIcon from '@mui/icons-material/GppGood';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import GroupIcon from '@mui/icons-material/Group';
import TrafficIcon from '@mui/icons-material/Traffic';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ErrorIcon from '@mui/icons-material/Error';


type PropsType = {
    open: boolean
    setOpen: (open: boolean) => void
};


const MobileMenu: React.FC<PropsType> = ({ open, setOpen }) => {

    const [activeItem, setActiveItem] = React.useState("overview");

    const menuItems = [
        { text: 'overview', icon: <LeaderboardIcon /> },
        { text: 'Customers', icon: <GroupIcon /> },
        { text: 'Integrations', icon: <TrafficIcon /> },
        { text: 'Settings', icon: <SettingsIcon /> },
        { text: 'Account', icon: <AccountCircleIcon /> },
        { text: 'Errors', icon: <ErrorIcon /> }
    ];

    return (
        <div>
            <Drawer open={open} onClose={() => setOpen(false)} >
                <Box sx={{ width: 300 }} role="presentation" p={3} bgcolor={"#0B1229"} width={"100%"} height={"100%"}>
                    <Box>

                        <Box p={3}>
                            <Box color={"white"}>
                                <Stack direction={"row"} alignItems={"center"} gap={1}>
                                    <GppGoodIcon />
                                    <Typography component={"p"} fontWeight={"bold"} fontSize={18}>Auth Demo</Typography>
                                </Stack>
                            </Box>

                            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} mt={3} border={"1px solid #434a60"} borderRadius={3}>

                                <Stack direction={"column"} p={1}>
                                    <Typography component={"p"} color={"#8a94a6"} fontSize={15}>workspace</Typography>
                                    <Typography component={"p"} color={"white"} fontWeight={"bold"}>Devias</Typography>
                                </Stack>

                                <Box>
                                    <UnfoldMoreIcon sx={{ color: "white" }} />
                                </Box>

                            </Box>
                        </Box>

                        <Divider sx={{ bgcolor: "#434a60" }} />

                        <Box p={2}>

                            <List sx={{ width: '100%' }}>
                                {menuItems.map((item, index) => (
                                    <ListItem disablePadding key={index} sx={{ bgcolor: activeItem === item.text ? "#635BFF" : "transparent", borderRadius: 3 }}>
                                        <ListItemButton
                                            sx={{ color: activeItem === item.text ? "white" : "#b3b9c6" }}
                                            onClick={() => setActiveItem(item.text)}
                                        >
                                            <ListItemIcon sx={{ color: activeItem === item.text ? "#fff" : "#b3b9c6", minWidth: 38 }}>
                                                {item.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={item.text} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>

                        </Box>

                    </Box>
                </Box>
            </Drawer>
        </div>
    );
}


export default MobileMenu