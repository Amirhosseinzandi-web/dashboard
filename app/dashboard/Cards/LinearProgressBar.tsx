"use client"

import { LinearProgress, linearProgressClasses, styled } from "@mui/material";


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 5,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: "#C3C0FF",
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#635BFF' : '',
    },
}));


const LinearProgressBar = () => {
    return (
        <>
            <BorderLinearProgress variant="determinate" value={75.5} />
        </>
    );
}

export default LinearProgressBar;