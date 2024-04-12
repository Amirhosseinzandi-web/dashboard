import Grid from '@mui/material/Unstable_Grid2';
import Cards from "../dashboard/Cards/Cards"
import BarRegistry from "./Charts/BarComponent/BarRegistry";
import DoughnutRegistry from "./Charts/DoughnutComponent/DoughnutRegistry";
import Products from "./Tables/Products/Products";
import Orders from "./Tables/Orders/Orders";

const DashboardRegistry:React.FC = () => {


    return (
        <>
            <Cards />
            <Grid container spacing={2} mt={1}>

                <Grid xs={12} lg={8}>
                    <BarRegistry />
                </Grid>

                <Grid xs={12} md={6} lg={4}>
                    <DoughnutRegistry />
                </Grid>

                <Grid xs={12} md={6} lg={4}>
                    <Products />
                </Grid>

                <Grid xs={12} lg={8}>
                    <Orders />
                </Grid>

            </Grid>
        </>
    );
}

export default DashboardRegistry;