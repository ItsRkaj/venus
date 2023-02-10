import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { csv } from "d3";

const Boiler = () => {
  const chartContainer = useRef(null);

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("chartDateData")) || []
  );

  useEffect(() => {
    csv("data_small.csv").then((data) => {
      setData(data);
      localStorage.setItem("chartDateData", JSON.stringify(data));
    });
  }, []);

  useEffect(() => {
    const chart = new Chart(chartContainer.current, {
      type: "line",
      data: {
        labels: data
          .filter(
            (d) =>
              d.entity_id === "sensor.energysocket_3c39e72e2972_active_power"
          )
          .filter((d) => d.last_updated !== "")
          .map((d) => d.last_updated),
        datasets: [
          {
            label: "sensor.energysocket_3c39e72e2972_active_power",
            data: data
              .filter(
                (d) =>
                  d.entity_id ===
                  "sensor.energysocket_3c39e72e2972_active_power"
              )
              .filter((d) => d.state !== "")
              .map((d) => d.state),
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

export default Boiler;
