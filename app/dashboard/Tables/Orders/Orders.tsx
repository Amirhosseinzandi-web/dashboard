"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Chip, Stack, Typography } from "@mui/material";
import EastIcon from '@mui/icons-material/East';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.mode === 'light' ? '#F9FAFB' : theme.palette.background.paper,
        color: "#667085",
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        height: "60px",
    },

}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({

    // hide last border
    'td': {
        padding: "0px 16px"
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
    ':hover': {
        backgroundColor: "rgba(0, 0, 0, 0.04)",
        cursor: "pointer"
    }
}));

function createData(
    order: string,
    customer: string,
    date: string,
    status: string,
    color: string
) {
    return { order, customer, date, status, color };
}

const rows = [
    createData('ORD-007', "Ekaterina Tankova", "Mar 8, 2024", "Pending", "#FB9C0C"),
    createData('ORD-006', "Cao Yu", "Mar 8, 2024", "Delivered", "#15B79F"),
    createData('ORD-005', "Alexa Richardson", "Mar 8, 2024", "Refunded", "#F04438"),
    createData('ORD-004', "Anje Keizer", "Mar 8, 2024", "Pending", "#FB9C0C"),
    createData('ORD-003', "Clarke Gillebert", "Mar 8, 2024", "Delivered", "#15B79F"),
    createData('ORD-002', "Adam Denisov", "Mar 8, 2024", "Delivered", "#15B79F"),
];






const Orders: React.FC = () => {
    return (
        <Box border={"1px solid #EDEDED"} borderRadius={2} height={"100%"}>

            <Box p={3}>
                <Typography variant="h6">Latest orders</Typography>
            </Box>

            <Box borderTop={"1px solid #EDEDED"}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Order</StyledTableCell>
                                <StyledTableCell align="center">Customer</StyledTableCell>
                                <StyledTableCell align="center">Date</StyledTableCell>
                                <StyledTableCell align="center">Status</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, ind) => (
                                <StyledTableRow key={ind}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.order}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{row.customer}</StyledTableCell>
                                    <StyledTableCell align="center">{row.date}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        <Stack direction="row" justifyContent={"center"}>
                                            <Chip label={row.status} sx={{ bgcolor: row.color, color: "white" }} />
                                        </Stack>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

            <Box display={"flex"} alignItems={"center"} justifyContent={"flex-end"} gap={1} borderTop={"1px solid #EDEDED"} p={2}>
                <Typography fontSize={"14px"}>View all</Typography>
                <EastIcon sx={{ fontSize: "14px" }} />
            </Box>

        </Box>
    );
}

export default Orders;