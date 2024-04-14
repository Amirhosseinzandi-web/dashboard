import { Box, Button, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import UploadIcon from '@mui/icons-material/Upload';
import DownloadIcon from '@mui/icons-material/Download';
import SearchIcon from '@mui/icons-material/Search';





const CustomersInput = () => {
    return (
        <>
            <Box>
                <Stack direction={"row"} justifyContent={"space-between"}>
                    <Typography variant="h4">Customers</Typography>
                    <Button variant="contained" sx={{ bgcolor: "#635BFF", color: "white", borderRadius: 3, display: "flex", gap: 1, ":hover": { bgcolor: "#4e36f5" } }}>
                        <AddIcon />
                        <Typography fontSize={13}>Add</Typography>
                    </Button>
                </Stack>

                <Stack direction={"row"} mt={1} gap={2}>
                    <Button sx={{
                        display: "flex", alignItems: "center", bgcolor: "white", gap: 1, borderRadius: 3, ":hover": { bgcolor: "#E9EAEB" }
                    }} >
                        < UploadIcon sx={{ color: "#667085", fontSize: "23px" }} />
                        <Typography color={"#667085"} fontSize={15} textTransform={"capitalize"}>Import</Typography>
                    </Button>

                    <Button sx={{
                        display: "flex", alignItems: "center", bgcolor: "white", gap: 1, borderRadius: 3, ":hover": { bgcolor: "#E9EAEB" }
                    }} >
                        <DownloadIcon sx={{ color: "#667085", fontSize: "23px" }} />
                        <Typography color={"#667085"} fontSize={15} textTransform={"capitalize"}>Export</Typography>
                    </Button>
                </Stack>
            </Box>

            <Box border={"1px solid #EDEDED"} borderRadius={2} height={"100%"} my={3} p={2}>
                <TextField fullWidth placeholder="Search customer" sx={{ maxWidth: "500px" }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: "rgba(0, 0, 0, 0.54)", fontSize: "23px" }} />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
        </>
    );
}

export default CustomersInput;