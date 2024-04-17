import { Box } from "@mui/material";
import { memo } from "react";
import MenuContainer from "../MenuContainer/MenuContainer";


const DesktopMenu: React.FC = () => {

    return (
        <Box height={"100%"} >
            <Box position={"sticky"} top={0} minHeight={"100vh"} bgcolor={"#0B1229"} display={"flex"} flexDirection={"column"}>
                <MenuContainer />
            </Box>
        </Box >
    );
}

export default memo(DesktopMenu);