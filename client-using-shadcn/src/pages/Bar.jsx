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
import { Card, CardHeader, CardContent } from "@/components/ui/card";

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
              barThickness: 12,
            },
          ],
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Card className="w-full max-w-6xl mx-auto p-6">
      <CardHeader className="text-2xl font-bold">
        Exposure Limit Usage
      </CardHeader>
      <CardContent>
        {chartData ? (
          <div className="overflow-x-auto h-[500px]">
            {" "}
            <Bar
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { display: true, position: "top" },
                  title: {
                    display: true,
                    text: "Exposure Usage (%)",
                    font: { size: 16 },
                  },
                },
                scales: {
                  y: { beginAtZero: true, max: 100, grid: { color: "#ddd" } },
                  x: { ticks: { maxRotation: 45, minRotation: 45 } },
                },
              }}
            />
          </div>
        ) : (
          <p>Loading chart...</p>
        )}
      </CardContent>
    </Card>
  );
};

export default BarChart;
