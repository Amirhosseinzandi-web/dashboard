"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Title, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { DoughnutChartData } from "./DoughnutChart";

ChartJS.register(ArcElement, Tooltip, Title, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement)



const DoughnutComponent = () => {

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    }

    return (
        <>
            <Doughnut options={options} data={DoughnutChartData}/>
        </>
    );
}

export default DoughnutComponent;