import { Box, Typography } from "@mui/material";
import DoughnutComponent from "./DoughnutComponent";
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import PhoneIcon from '@mui/icons-material/Phone';




const DoughnutRegistry = () => {
    return (
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
    );
}

export default DoughnutRegistry;