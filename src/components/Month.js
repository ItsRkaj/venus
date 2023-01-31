import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { csv } from "d3";

const Month = () => {
  const chartContainer = useRef(null);

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("chartData")) || []
  );

  useEffect(() => {
    csv("test.csv").then((data) => {
      setData(data);
      localStorage.setItem("chartData", JSON.stringify(data));
    });
  }, []);

  useEffect(() => {
    const chart = new Chart(chartContainer.current, {
      type: "line",
      data: {
        labels: data.filter((d) => d.month !== "").map((d) => d.month),
        datasets: [
          {
            label: "# Electricity consumption per month",
            data: data
              .filter((d) => d.consumption_month !== "")
              .map((d) => d.consumption_month),
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    return () => {
      chart.destroy();
    };
  }, [data]);

  return <canvas ref={chartContainer} />;
};

export default Month;
