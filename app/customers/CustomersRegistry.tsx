import { Box } from "@mui/material";

import CustomersTables from "./CustomersTables/CustomersTables";
import CustomersInput from "./CustomersInput/CustomersInput";


const CustomersRegistry: React.FC = () => {


    return (
        <Box>
            <CustomersInput title={"Customers"} palceHolderTitle={"Search customers"} />
            <Box>
                <CustomersTables />
            </Box>

        </Box >
    );
}

export default CustomersRegistry;