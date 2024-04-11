import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import BarComponent from "./BarChart/BarComponent";
import CachedIcon from '@mui/icons-material/Cached';
import EastIcon from '@mui/icons-material/East';
import DoughnutComponent from "./DoughnutComponent/DoughnutComponent";
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import PhoneIcon from '@mui/icons-material/Phone';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ChartsAndProducts = () => {


    const productsData = [
        {
            title: "Soja & Co. Eucalyptus",
            data: "Updated Mar 8, 2024",
            src: "https://material-ui.com/static/images/avatar/1.jpg?w=248&fit=crop&auto=format"
        },
        {
            title: "Necessaire Body Lotion",
            data: "Updated Mar 8, 2024",
            src: "https://material-ui.com/static/images/avatar/2.jpg?w=248&fit=crop&auto=format"
        },
        {
            title: "Ritual of Sakura",
            data: "Updated Mar 8, 2024",
            src: "https://material-ui.com/static/images/avatar/3.jpg?w=248&fit=crop&auto=format"

        },
        {
            title: "Lancome Rouge",
            data: "Updated Mar 8, 2024",
            src: "https://material-ui.com/static/images/avatar/4.jpg?w=248&fit=crop&auto=format"

        },
        {
            title: "Erbology Aloe Vera",
            data: "Updated Mar 8, 2024",
            src: "https://material-ui.com/static/images/avatar/5.jpg?w=248&fit=crop&auto=format"

        }
    ]


    return (
        <Grid container spacing={2} mt={1}>

            <Grid xs={12} lg={8}>
                <Box border={"1px solid #EDEDED"} borderRadius={2} height={"100%"}>

                    <Box p={4}>
                        <Box display={"flex"} justifyContent={"space-between"} mb={4}>
                            <Typography>Sales</Typography>
                            <Box display={"flex"} gap={1}>
                                <CachedIcon />
                                <Typography>Sync</Typography>
                            </Box>
                        </Box>

                        <Box width={"100%"} height={"400px"}>
                            <BarComponent />
                        </Box>


                    </Box>

                    <Box borderTop={"1px solid #EDEDED"} py={2} px={4} display={"flex"} justifyContent={"flex-end"}>
                        <Box display={"flex"} alignItems={"center"} gap={1}>
                            <Typography fontSize={"14px"}>Overview</Typography>
                            <EastIcon sx={{ fontSize: "14px" }} />
                        </Box>
                    </Box>

                </Box>
            </Grid>

            <Grid xs={12} md={6} lg={4}>

                <Box border={"1px solid #EDEDED"} borderRadius={2} p={4} height={"100%"}>
                    <Typography variant="h6">Traffic source</Typography>
                    <Box width={"60%"} height={"60%"} mx={"auto"} my={5}>
                        <DoughnutComponent />
                    </Box>

                    <Box display={"flex"} justifyContent={"center"} gap={2}>

                        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={1}>
                            <PersonalVideoIcon />
                            <Typography fontSize={"18px"}>Desktop</Typography>
                            <Typography color={"#667085"}>63%</Typography>
                        </Box>

                        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={1}>
                            <TabletMacIcon />
                            <Typography fontSize={"18px"}>Tablet</Typography>
                            <Typography color={"#667085"}>15%</Typography>
                        </Box>

                        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={1}>
                            <PhoneIcon />
                            <Typography fontSize={"18px"}>Phone</Typography>
                            <Typography color={"#667085"}>22%</Typography>
                        </Box>

                    </Box>

                </Box>

            </Grid>

            <Grid xs={12} md={6} lg={4}>
                <Box border={"1px solid #EDEDED"} borderRadius={2} height={"100%"}>

                    <Box p={3}>
                        <Typography variant="h6">Latest products</Typography>
                    </Box>

                    <Box borderTop={"1px solid #EDEDED"}>
                        <List component="nav" sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            {
                                productsData.map((item, index) => (
                                    <Box key={index} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar variant="square" src={item.src} sx={{ borderRadius: 2 }} />
                                            </ListItemAvatar>
                                            <ListItemText primary={item.title} secondary={item.data} />
                                        </ListItem>
                                        <MoreVertIcon sx={{margin:"0 5px" , fontSize:"22px" , color:"#667085"}}/>
                                    </Box>
                                ))
                            }
                        </List>
                    </Box>

                    <Box display={"flex"} alignItems={"center"} justifyContent={"flex-end"} gap={1} borderTop={"1px solid #EDEDED"} p={2}>
                        <Typography fontSize={"14px"}>Overview</Typography>
                        <EastIcon sx={{ fontSize: "14px" }} />
                    </Box>

                </Box>
            </Grid>

            <Grid xs={12} lg={8}>
                <Box border={"1px solid #EDEDED"} borderRadius={2} p={4} height={"100%"}>
                    <Typography>four</Typography>
                </Box>
            </Grid>

        </Grid>
    );
}

export default ChartsAndProducts;