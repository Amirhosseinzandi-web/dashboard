import { Avatar, Box, Stack, Toolbar, Typography } from '@mui/material';
import { SignUp } from '@clerk/nextjs';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import GppGoodIcon from '@mui/icons-material/GppGood';
import Image from 'next/image';


export default function Page() {


    return (
        <>
            <Grid container height={"100vh"}>

                <Grid xs={12} lg={6}>
                    <Box sx={{ padding: 3 }} height={"100%"}>
                        <Box height={"10%"}>
                            <Stack direction={"row"} alignItems={"center"} gap={1}>
                                <GppGoodIcon />
                                <Typography component={"p"} fontWeight={"bold"} fontSize={18}>Auth Demo</Typography>
                            </Stack>
                        </Box>
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={"90%"}>
                            <Box>
                                <SignUp afterSignUpUrl={"/dashboard"} />
                            </Box>
                        </Box>
                    </Box>
                </Grid>

                <Grid xs={12} lg={6} sx={{ display: { xs: "none", lg: "flex" }, bgcolor: "#0B1229" }}
                    justifyContent={"center"} alignItems={"center"}
                >
                    <Box>
                        <Box sx={{ color: "white" }} textAlign={"center"}>
                            <Typography variant='h5' fontWeight={"bold"}>Welcome to <span style={{ color: "#15B79E" }} >My Dashboard</span></Typography>

                            <Typography component={"p"} mt={2}>A professional template that comes with ready-to-use MUI components.</Typography>
                        </Box>
                        <Box>
                            <Image src={"/auth-widgets.png"} alt='amir' width={600} height={600} priority={true} />
                        </Box>
                    </Box>
                </Grid>
            </Grid >
        </>
    )
}