import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Week = () => {
  const chartContainer = useRef(null);

  useEffect(() => {
    const chart = new Chart(chartContainer.current, {
      type: "bar",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "# Electricity consumption per week",
            data: [12, 19, 3, 5, 2, 3, 9],
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
  }, []);

  return <canvas ref={chartContainer} />;
};

export default Week;
