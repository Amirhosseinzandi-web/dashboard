import { Box, Button, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import UploadIcon from '@mui/icons-material/Upload';
import DownloadIcon from '@mui/icons-material/Download';
import SearchIcon from '@mui/icons-material/Search';
import CustomersInput from "../customers/CustomersInput/CustomersInput";



const IntegrationsRegistry: React.FC = () => {
    return (
        <Box>
            <CustomersInput />
        </Box>
    );
}

export default IntegrationsRegistry;