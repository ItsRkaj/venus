import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { csv } from "d3";

const Week = () => {
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
        labels: data.filter((d) => d.day !== "").map((d) => d.day),
        datasets: [
          {
            label: "# Electricity consumption today",
            data: data
              .filter((d) => d.consumtion_day !== "")
              .map((d) => d.consumtion_day),
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

export default Week;
