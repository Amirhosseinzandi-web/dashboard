"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Title, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement, scales } from "chart.js";
import { Bar } from "react-chartjs-2";
import { BarChartData } from "./BarChart";
import { useEffect, useRef } from "react";

ChartJS.register(ArcElement, Tooltip, Title, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement)


const BarComponent = () => {
    const ref = useRef(null);

    const options = {
        responsive: true,
        maintainAspectRatio: false, 
        scales: {
            x:{
                grid:{
                    display: false
                }
            }
        }
    };


    return (
        <>
            <Bar ref={ref} options={options} data={BarChartData} />
        </>
    );
};

export default BarComponent;