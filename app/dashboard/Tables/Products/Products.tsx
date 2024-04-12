import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EastIcon from '@mui/icons-material/East';


const Products = () => {

    const productsData = [
        {
            title: "Soja & Co. Eucalyptus",
            data: "Updated Mar 8, 2024",
            src: "https://material-ui.com/static/images/avatar/1.jpg?w=248&fit=crop&auto=format"
        },
        {
            title: "Necessaire Body Lotion",
            data: "Updated Mar 8, 2024",
            src: "https://material-ui.com/static/images/avatar/2.jpg?w=248&fit=crop&auto=format"
        },
        {
            title: "Ritual of Sakura",
            data: "Updated Mar 8, 2024",
            src: "https://material-ui.com/static/images/avatar/3.jpg?w=248&fit=crop&auto=format"

        },
        {
            title: "Lancome Rouge",
            data: "Updated Mar 8, 2024",
            src: "https://material-ui.com/static/images/avatar/4.jpg?w=248&fit=crop&auto=format"

        },
        {
            title: "Erbology Aloe Vera",
            data: "Updated Mar 8, 2024",
            src: "https://material-ui.com/static/images/avatar/5.jpg?w=248&fit=crop&auto=format"

        }
    ]


    return (
        <Box border={"1px solid #EDEDED"} borderRadius={2} height={"100%"}>

            <Box p={3}>
                <Typography variant="h6">Latest products</Typography>
            </Box>

            <Box borderTop={"1px solid #EDEDED"}>
                <List component="nav" sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {
                        productsData.map((item, index) => (
                            <Box key={index} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                                <ListItem sx={{margin: "4px 0"}}>
                                    <ListItemAvatar>
                                        <Avatar variant="square" src={item.src} sx={{ borderRadius: 2 }} />
                                    </ListItemAvatar>
                                    <ListItemText primary={item.title} secondary={item.data} />
                                </ListItem>
                                <MoreVertIcon sx={{ margin: "0 5px", fontSize: "22px", color: "#667085" }} />
                            </Box>
                        ))
                    }
                </List>
            </Box>

            <Box display={"flex"} alignItems={"center"} justifyContent={"flex-end"} gap={1} borderTop={"1px solid #EDEDED"} p={2}>
                <Typography fontSize={"14px"}>View all</Typography>
                <EastIcon sx={{ fontSize: "14px" }} />
            </Box>

        </Box>
    );
}

export default Products;