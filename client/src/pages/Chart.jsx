import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/chart")
      .then((res) => res.json())
      .then((data) => {
        const points = data.message.map((item) => item.PointInTime);
        let grossPL = data.message.map((item) => item.GrossPL);
        let exposure = data.message.map((item) => item.Exposure);
        let totalMargin = data.message.map((item) => item.TotalMargin);

         const maxValue = Math.max(...exposure);
        if (maxValue > 1000000) {
          exposure = exposure.map((val) => val / 10);  
        }

        setChartData({
          labels: points,
          datasets: [
            {
              label: "Gross PL ($)",
              data: grossPL,
              backgroundColor: "rgba(54, 162, 235, 0.6)",  
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
            {
              label: "Exposure",
              data: exposure,
              backgroundColor: "rgba(255, 99, 132, 0.3)",  
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
            {
              label: "Total Margin",
              data: totalMargin,
              backgroundColor: "rgba(75, 192, 192, 0.5)",  
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div
      className="w-full max-w-5xl mx-auto p-4 bg-white shadow-md rounded-lg"
      style={{ height: "500px" }}
    >
      <h2 className="text-xl font-bold mb-4 text-center text-gray-700">
        Financial Metrics Over Time
      </h2>
      {chartData ? (
        <Bar
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { position: "top" },
              title: {
                display: true,
                text: "Financial Data Analysis",
                font: { size: 18 },
              },
            },
            scales: {
              x: {
                grid: { display: false },
                title: { display: true, text: "Time" },
              },
              y: {
                beginAtZero: true,
                max: 500000,  
                title: { display: true, text: "Value ($)" },
              },
            },
            barPercentage: 0.9,  
            categoryPercentage: 0.5,  
          }}
        />
      ) : (
        <p className="text-center text-gray-500">Loading chart...</p>
      )}
    </div>
  );
};

export default Chart;
