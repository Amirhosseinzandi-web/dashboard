import Header from "@/components/Header/Header";
import DesktopMenu from "@/components/DesktopMenu/DesktopMenu";
import { Box, Container, Stack } from "@mui/material";
import DashboardRegistry from "./DashboardRegistry";







const DashboardPage = () => {
    return (
        <>
            <Stack direction={"row"} width={"100%"}>
                <Box width={"330px"} sx={{ display: { xs: "none", lg: "block" } }}>
                    <DesktopMenu />
                </Box>

                <Box display={"block"} sx={{ width: { xs: "100%", lg: "calc(100% - 330px)" } }}>
                    <Header />
                    <Box py={9}>

                        <Container maxWidth={"xl"}>
                            <DashboardRegistry />
                        </Container>
                    </Box>
                </Box>

            </Stack>

        </>
    );
}

export default DashboardPage;