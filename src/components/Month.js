import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Month = () => {
  const chartContainer = useRef(null);

  useEffect(() => {
    const chart = new Chart(chartContainer.current, {
      type: "bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "# Electricity consumption per month",
            data: [12, 19, 3, 5, 2, 3, 9, 3, 5, 2, 3, 9],
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

export default Month;
