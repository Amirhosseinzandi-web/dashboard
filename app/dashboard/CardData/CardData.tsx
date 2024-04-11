import { Box, Typography } from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import LinearProgressBar from "../LinearProgressBar";
import Grid from '@mui/material/Unstable_Grid2';



const CardData = () => {
    return (
        <>
            <Grid container spacing={2}>

                <Grid xs={12} sm={6} lg={3}>
                    <Box border={"1px solid #EDEDED"} borderRadius={4} p={3} height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
                        <Box display={"flex"} justifyContent={"space-between"} gap={1}>
                            <Box>

                                <Typography component={"p"} color={"#667085"} fontSize={12}>Budget</Typography>
                                <Typography variant="h4" mt={1}>$24k</Typography>
                            </Box>

                            <Box>
                                <Box width={"56px"} height={"56px"} borderRadius={"50%"} bgcolor={"#635BFF"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                    <AttachMoneyIcon sx={{ color: "white", fontSize: "25px" }} />
                                </Box>
                            </Box>
                        </Box>
                        <Box mt={2} display={"flex"} alignItems={"center"} gap={2}>
                            <Box display={"flex"} alignItems={"center"} color={"#15b79f"} gap={1}>
                                <ArrowUpwardIcon sx={{ fontSize: "17px" }} />
                                <Typography>12%</Typography>
                            </Box>
                            <Typography component={"p"} fontSize={12} color={"#667085"}>Since last month</Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid xs={12} sm={6} lg={3}>
                    <Box border={"1px solid #EDEDED"} borderRadius={4} p={3} height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
                        <Box display={"flex"} justifyContent={"space-between"} gap={1}>
                            <Box>

                                <Typography component={"p"} color={"#667085"} fontSize={12}>TOTAL CUSTOMERS</Typography>
                                <Typography variant="h4" mt={1}>$1.6k</Typography>
                            </Box>

                            <Box>
                                <Box width={"56px"} height={"56px"} borderRadius={"50%"} bgcolor={"#15b79f"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                    <AttachMoneyIcon sx={{ color: "white", fontSize: "25px" }} />
                                </Box>
                            </Box>
                        </Box>
                        <Box mt={2} display={"flex"} alignItems={"center"} gap={2}>
                            <Box display={"flex"} alignItems={"center"} color={"red"} gap={1}>
                                <ArrowDownwardIcon sx={{ fontSize: "17px" }} />
                                <Typography>16%</Typography>
                            </Box>
                            <Typography component={"p"} fontSize={12} color={"#667085"}>Since last month</Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid xs={12} sm={6} lg={3}>
                    <Box border={"1px solid #EDEDED"} borderRadius={4} p={3} height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
                        <Box display={"flex"} justifyContent={"space-between"} gap={1}>
                            <Box>

                                <Typography component={"p"} color={"#667085"} fontSize={12}>TASK PROGRESS</Typography>
                                <Typography variant="h4" mt={1}>75.5%</Typography>
                            </Box>

                            <Box>
                                <Box width={"56px"} height={"56px"} borderRadius={"50%"} bgcolor={"#FB9C0C"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                    <FormatListBulletedIcon sx={{ color: "white", fontSize: "25px" }} />
                                </Box>
                            </Box>
                        </Box>
                        <Box mt={2}>
                            <LinearProgressBar />
                        </Box>
                    </Box>
                </Grid>

                <Grid xs={12} sm={6} lg={3}>
                    <Box border={"1px solid #EDEDED"} borderRadius={4} p={3} height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
                        <Box display={"flex"} justifyContent={"space-between"} gap={1}>
                            <Box>

                                <Typography component={"p"} color={"#667085"} fontSize={12}>TOTAL PROFIT</Typography>
                                <Typography variant="h4" mt={1}>$15k</Typography>
                            </Box>

                            <Box>
                                <Box width={"56px"} height={"56px"} borderRadius={"50%"} bgcolor={"#635BFF"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                    <StickyNote2Icon sx={{ color: "white", fontSize: "25px" }} />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

            </Grid>
        </>
    );
}

export default CardData;