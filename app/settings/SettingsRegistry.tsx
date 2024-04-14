import { Box, Button, Checkbox, Stack, TextField, Typography } from "@mui/material";







const SettingsRegistry: React.FC = () => {
    return (
        <>
            <Box>

                <Typography variant="h4">Settings</Typography>
                <Box border={"1px solid #EDEDED"} borderRadius={4} my={2}>

                    <Box p={2}>
                        <Typography component={"p"} fontSize={19}>Notifications</Typography>
                        <Typography component={"p"} fontSize={14} color={"#667085"}>Manage the notifications</Typography>
                    </Box>

                    <Box p={2} borderTop={"1px solid #EDEDED"} display={"flex"} sx={{ flexDirection: { xs: "column", sm: "row" }, alignItems: { xs: "flex-start", sm: "center" }, gap: { xs: "0%", sm: "17%" } }}>
                        <Box mt={1}>
                            <Typography fontSize={18}>Email</Typography>
                            <Stack direction={"row"} alignItems={"center"}>
                                <Checkbox checked />
                                <Typography>Products updates</Typography>
                            </Stack>
                            <Stack direction={"row"} alignItems={"center"}>
                                <Checkbox />
                                <Typography>Security updates</Typography>
                            </Stack>
                        </Box>
                        <Box sx={{ mt: { xs: 5, sm: 1 } }}>
                            <Typography fontSize={18}>Phone</Typography>
                            <Stack direction={"row"} alignItems={"center"}>
                                <Checkbox checked />
                                <Typography>Email</Typography>
                            </Stack>
                            <Stack direction={"row"} alignItems={"center"}>
                                <Checkbox />
                                <Typography>Security updates</Typography>
                            </Stack>
                        </Box>
                    </Box>

                    <Box borderTop={"1px solid #EDEDED"} p={1} display={"flex"} justifyContent={"flex-end"}>
                        <Button variant="contained" sx={{ bgcolor: "#635BFF", color: "white", borderRadius: 3 }}>Save changes</Button>
                    </Box>

                </Box>

                <Box border={"1px solid #EDEDED"} borderRadius={4}>

                    <Box p={2} borderBottom={"1px solid #EDEDED"}>
                        <Typography component={"p"} fontSize={19}>Password</Typography>
                        <Typography component={"p"} fontSize={14} color={"#667085"}>Update password</Typography>
                    </Box>

                    <Stack p={3} direction={"column"} gap={2} borderBottom={"1px solid #EDEDED"}>
                        <TextField variant="outlined" label="Password" sx={{ color: "#667085" , maxWidth:"600px" }} />
                        <TextField variant="outlined" label="Confirm password" sx={{ color: "#667085" , maxWidth:"600px" }} />
                    </Stack>

                    <Box p={1} display={"flex"} justifyContent={"flex-end"}>
                        <Button variant="contained" sx={{ bgcolor: "#635BFF", color: "white", borderRadius: 3 }}>Update</Button>
                    </Box>

                </Box>

            </Box>

        </>
    );
}

export default SettingsRegistry;