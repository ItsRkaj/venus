import React, { useEffect, useRef, useState } from "react";
import Dygraph from "dygraphs";
import CircularProgress from "@mui/material/CircularProgress";

const AdapterChart = (props) => {
  const chartContainer = useRef(null);
  const name = props.name;
  let minDate = null;
  let maxDate = null;
  const data = props.data.reduce((acc, d) => {
    if (d.entity_id === props.name && d.state !== "") {
      const date = new Date(d.last_updated);
      if (minDate === null || date < minDate) {
        minDate = date;
      }
      if (maxDate === null || date > maxDate) {
        maxDate = date;
      }
      acc.push([date, parseFloat(d.state)]);
    }
    return acc;
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchChartData = async () => {
      // Simulate an API request delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);

      const chart = new Dygraph(chartContainer.current, data, {
        legend: "always",
        showRangeSelector: true,
        dateWindow: [minDate, maxDate],
        colors: ['#36a2eb'],
        animatedZooms: true
      });
      
      return () => {
        chart.destroy();
      };
    };

    fetchChartData();
  }, [data, minDate, maxDate]);

  return (
    <div style={{ width: "100%" }}>
      <h1>{ name }</h1>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div ref={chartContainer} style={{ width: "100%"}} />
      )}
    </div>
  );
};

export default AdapterChart;
