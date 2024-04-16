import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from "next/link";



const NotFound: React.FC = () => {
    return (
        <Container>
            <Box minHeight={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                    <figure>
                        <Image alt="error" width={400} height={400} src={"/error.png"} priority={false} />
                    </figure>
                    <Typography variant="h4" textAlign={"center"} mt={2}>
                        404: The page you are looking for isn&apos;t here
                    </Typography>
                    <Typography variant="h6" textAlign={"center"} color={"#667085"} fontSize={16} my={2}>You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation</Typography>
                    <Link href={"/dashboard"}>
                        <Button variant="contained" sx={{ bgcolor: "#635BFF", color: "white", borderRadius: 3, textTransform: "capitalize", ":hover": { bgcolor: "#4e36f5" }, display: "flex", gap: 1 }}>
                            <ArrowBackIcon sx={{ fontSize: 18 }} />
                            Go back to home
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Container>
    );
}

export default NotFound;