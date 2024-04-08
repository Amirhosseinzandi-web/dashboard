import { Box, Checkbox, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import GppGoodIcon from '@mui/icons-material/GppGood';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import GroupIcon from '@mui/icons-material/Group';
import TrafficIcon from '@mui/icons-material/Traffic';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ErrorIcon from '@mui/icons-material/Error';


const SidebarMenu: React.FC = () => {
    return (
        <Box bgcolor={"#0B1229"} width={"100%"} height={"100%"} >
            <Box position={"sticky"} top={0}>

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

                        <ListItem disablePadding >
                            <ListItemButton sx={{ color: "#b3b9c6" }}>
                                <ListItemIcon sx={{ color: "#b3b9c6", minWidth: 38 }}>
                                    <LeaderboardIcon />
                                </ListItemIcon>
                                <ListItemText primary="overview" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding >
                            <ListItemButton sx={{ color: "#b3b9c6" }}>
                                <ListItemIcon sx={{ color: "#b3b9c6", minWidth: 38 }} >
                                    <GroupIcon />
                                </ListItemIcon>
                                <ListItemText primary="Customers" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding >
                            <ListItemButton sx={{ color: "#b3b9c6" }}>
                                <ListItemIcon sx={{ color: "#b3b9c6", minWidth: 38 }} >
                                    <TrafficIcon />
                                </ListItemIcon>
                                <ListItemText primary="Integrations" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding >
                            <ListItemButton sx={{ color: "#b3b9c6" }}>
                                <ListItemIcon sx={{ color: "#b3b9c6", minWidth: 38 }} > <SettingsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Settings" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding >
                            <ListItemButton sx={{ color: "#b3b9c6" }}>
                                <ListItemIcon sx={{ color: "#b3b9c6", minWidth: 38 }} > <AccountCircleIcon />
                                </ListItemIcon>
                                <ListItemText primary="Account" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding >
                            <ListItemButton sx={{ color: "#b3b9c6" }}>
                                <ListItemIcon sx={{ color: "#b3b9c6", minWidth: 38 }} >
                                    <ErrorIcon />
                                </ListItemIcon>
                                <ListItemText primary="overview" />
                            </ListItemButton>
                        </ListItem>

                    </List>

                </Box>

            </Box>
        </Box >
    );
}

export default SidebarMenu;