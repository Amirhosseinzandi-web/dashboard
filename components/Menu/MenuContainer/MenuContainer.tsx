"use client"
import { Box, Button, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GppGoodIcon from '@mui/icons-material/GppGood';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import GroupIcon from '@mui/icons-material/Group';
import TrafficIcon from '@mui/icons-material/Traffic';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ErrorIcon from '@mui/icons-material/Error';




const MenuContainer: React.FC = () => {

    const pathName = usePathname()



    const menuItems = [
        { text: 'dashboard', icon: <LeaderboardIcon /> },
        { text: 'customers', icon: <GroupIcon /> },
        { text: 'integrations', icon: <TrafficIcon /> },
        { text: 'settings', icon: <SettingsIcon /> },
        { text: 'account', icon: <AccountCircleIcon /> },
        { text: 'errors', icon: <ErrorIcon /> }
    ];


    return (
        <>
            <Box p={3}>
                <Box color={"white"}>
                    <Stack direction={"row"} alignItems={"center"} gap={1}>
                        <GppGoodIcon />
                        <Typography component={"p"} fontWeight={"bold"} fontSize={18}>
                            <Link href={"/dashboard"}>Auth Demo</Link>
                        </Typography>
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

            <Box p={2} flexGrow={1}>

                <List component="nav" sx={{ width: '100%' }}>
                    {menuItems.map((item, index) => (
                        <ListItem disablePadding key={index} sx={{ bgcolor: item.text === pathName.slice(1) ? "#635BFF" : "transparent", borderRadius: 3, overflow: "hidden" }}>
                            <ListItemButton
                                sx={{ color: item.text === pathName.slice(1) ? "white" : "#b3b9c6", p: 0 }}
                            >
                                <Link href={`/${item.text.toLowerCase()}`} className="flex items-center w-full px-4 py-2">
                                    <ListItemIcon sx={{ color: item.text === pathName.slice(1) ? "#fff" : "#b3b9c6", minWidth: 38 }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text.charAt(0).toUpperCase() + item.text.slice(1).toLowerCase()} />
                                </Link>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

            </Box>

            <Box>
                <Stack p={2} direction={"column"} flexGrow={1} justifyContent={"end"} borderTop={"1px solid #434a60"}>

                    <Typography component={"p"} color={"white"} fontWeight={"bold"} fontSize={14}>Need more features?</Typography>
                    <Typography component={"p"} color={"#8a94a6"} fontSize={14}>Check out our Pro solution template.</Typography>
                    <Box component={"figure"} display={"flex"} justifyContent={"center"} mt={2}>
                        <Image src="/devias-kit-pro.png" alt="pro" width={175} height={175} />
                    </Box>
                    <Button variant="contained" sx={{ bgcolor: "#635BFF", borderRadius: 2, p: 1, mt: 2 }}>Pro Version</Button>
                </Stack>
            </Box>
        </>
    );
}

export default MenuContainer;