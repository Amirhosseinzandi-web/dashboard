import { Box, Typography } from "@mui/material";
import BarComponent from "./BarComponent";
import CachedIcon from '@mui/icons-material/Cached';
import EastIcon from '@mui/icons-material/East';




const BarRegistry = () => {
    return (
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
    );
}

export default BarRegistry;