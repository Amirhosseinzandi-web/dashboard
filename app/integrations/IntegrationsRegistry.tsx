import { Box } from "@mui/material";
import CustomersInput from "../customers/CustomersInput/CustomersInput";
import CompanyDetailsPanel from "./CompanyDetailsPanel/CompanyDetailsPanel";



const IntegrationsRegistry: React.FC = () => {
    return (
        <Box>
            <CustomersInput title={"Integrations"} palceHolderTitle={"Search integrations"} />
            <CompanyDetailsPanel />
        </Box>
    );
}

export default IntegrationsRegistry;