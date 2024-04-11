import { Box, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';


const ChartsHandler = () => {
    return (
        <Grid container spacing={2} mt={1}>

            <Grid xs={12} lg={8}>
                <Box border={"1px solid #EDEDED"} borderRadius={2} p={4} height={"100%"}>
                    <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non vel suscipit facilis corporis harum reiciendis accusantium quidem atque quos cum?</Typography>
                </Box>
            </Grid>

            <Grid xs={12} md={6} lg={4}>
                <Box border={"1px solid #EDEDED"} borderRadius={2} p={4} height={"100%"}>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit pariatur dolor soluta autem provident at nobis repellendus dolores ex. Fugiat, sed enim ab omnis asperiores aliquam corrupti eum eveniet sapiente!</Typography>
                </Box>
            </Grid>

            <Grid xs={12} md={6} lg={4}>
                <Box border={"1px solid #EDEDED"} borderRadius={2} p={4} height={"100%"}>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum reiciendis fugit sit officia laboriosam consequatur reprehenderit, vero commodi quos distinctio, mollitia asperiores ducimus fugiat facilis id nesciunt tenetur sint odio a excepturi. Laboriosam quaerat ratione distinctio dolorem dolor molestiae. Nihil.</Typography>
                </Box>
            </Grid>

            <Grid xs={12} lg={8}>
                <Box border={"1px solid #EDEDED"} borderRadius={2} p={4} height={"100%"}>
                    <Typography>four</Typography>
                </Box>
            </Grid>

        </Grid>
    );
}

export default ChartsHandler;