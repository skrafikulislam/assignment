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

const BarChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/bar")
      .then((res) => res.json())
      .then((data) => {
        const dealers = data.message.map((item) => item.Dealer);
        const percentages = data.message.map((item) => item.PercentageUsed);
        const colors = data.message.map(
          (item) => item.ExposureLimitCrossStatus
        );

        setChartData({
          labels: dealers,
          datasets: [
            {
              label: "Percentage Used",
              data: percentages,
              backgroundColor: colors,  
              borderColor: colors,
              borderWidth: 1,
            },
          ],
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Exposure Limit Usage</h2>
      {chartData ? (
        <Bar
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: { display: true },
              title: { display: true, text: "Exposure Usage (%)" },
            },
            scales: {
              y: { beginAtZero: true, max: 100 },
            },
          }}
        />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default BarChart;
