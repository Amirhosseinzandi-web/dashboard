import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2



const AccountRegistry = () => {
    return (
        <Box>
            <Typography variant="h4" mb={2}>Account</Typography>
            <Grid container spacing={2}>

                <Grid xs={12} md={6}>
                    <Box border={"1px solid #EDEDED"} borderRadius={3}>
                        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={1} p={3}>
                            <Avatar sx={{ width: 80, height: 80 }} alt="Amir Hossein Zandi" src="https://avatars.githubusercontent.com/u/104035009?v=4" />
                            <Typography variant="h5">Amir Hossein Zandi</Typography>
                            <Typography component={"p"} color={"#667085"} fontSize={14}>Tehran IR</Typography>
                            <Typography component={"p"} color={"#667085"} fontSize={14}>GTM-7</Typography>
                        </Box>
                        <Box p={1} borderTop={"1px solid #EDEDED"}>
                            <Button variant="text" sx={{ width: "100%", color: "#635BFF", ":hover": { bgcolor: "#F9F8FF", borderRadius: 3 }, textTransform: "capitalize", fontSize: 15 }}>Upload picture</Button>
                        </Box>
                    </Box>
                </Grid>

                <Grid xs={12} md={6}>
                    <Box border={"1px solid #EDEDED"} borderRadius={3}>

                        <Box p={2} borderBottom={"1px solid #EDEDED"}>
                            <Typography component={"p"} fontSize={18}>Profile</Typography>
                            <Typography component={"p"} color={"#667085"} fontSize={14}>The information can be edited</Typography>
                        </Box>

                        <Box p={2}>

                            <Grid container spacing={2}>

                                <Grid xs={12} md={6}>
                                    <TextField variant="outlined" label="First name" sx={{ color: "#667085", width: "100%" }} required />
                                </Grid>

                                <Grid xs={12} md={6}>
                                    <TextField variant="outlined" label="Last name" sx={{ color: "#667085", width: "100%" }} required />
                                </Grid>

                                <Grid xs={12} md={6}>
                                    <TextField variant="outlined" label="Email address" sx={{ color: "#667085", width: "100%" }} required />
                                </Grid>

                                <Grid xs={12} md={6}>
                                    <TextField variant="outlined" label="Phone number" sx={{ color: "#667085", width: "100%" }} />
                                </Grid>

                                <Grid xs={12} md={6}>
                                    <TextField variant="outlined" label="State" sx={{ color: "#667085", width: "100%" }} />
                                </Grid>

                                <Grid xs={12} md={6}>
                                    <TextField variant="outlined" label="City" sx={{ color: "#667085", width: "100%" }} />
                                </Grid>

                            </Grid>

                        </Box>

                        <Box p={1} display={"flex"} justifyContent={"flex-end"} borderTop={"1px solid #EDEDED"}>
                            <Button variant="contained" sx={{ bgcolor: "#635BFF", color: "white", borderRadius: 3, textTransform: "capitalize", ":hover": { bgcolor: "#4e36f5" } }}>Save details</Button>
                        </Box>


                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
}

export default AccountRegistry;