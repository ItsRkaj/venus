import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Week = () => {
  const chartContainer = useRef(null);

  useEffect(() => {
    const chart = new Chart(chartContainer.current, {
      type: "bar",
      data: {
        labels: [
          "00",
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
        ],
        datasets: [
          {
            label: "# Electricity consumption today",
            data: [
              1, 2, 3, 5, 2, 3, 9, 19, 23, 25, 20, 29, 29, 19, 13, 15, 20, 13,
              9, 2, 3, 5, 2, 3,
            ],
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
