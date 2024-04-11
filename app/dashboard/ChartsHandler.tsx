import { Box, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import BarComponent from "./BarChart/BarComponent";
import CachedIcon from '@mui/icons-material/Cached';
import EastIcon from '@mui/icons-material/East';
import DoughnutComponent from "./DoughnutComponent/DoughnutComponent";
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import PhoneIcon from '@mui/icons-material/Phone';

const ChartsHandler = () => {
    return (
        <Grid container spacing={2} mt={1}>

            <Grid xs={12} lg={8}>
                <Box border={"1px solid #EDEDED"} borderRadius={2} height={"100%"}>

                    <Box p={4}>
                        <Box display={"flex"} justifyContent={"space-between"} mb={4}>
                            <Typography>Scales</Typography>
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
                <Box border={"1px solid #EDEDED"} borderRadius={2} p={4} height={"100%"}>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum reiciendis fugit sit officia laboriosam consequatur reprehenderit, vero commodi quos distinctio, mollitia asperiores ducimus fugiat facilis id nesciunt tenetur sint odio a excepturi. Laboriosam quaerat ratione distinctio dolorem dolor molestiae. Nihil.</Typography>
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

export default ChartsHandler;