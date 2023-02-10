import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Test from "../ChartView/AdapterChart";

export default function ChartView() {
  const names = [
    { name: "sensor.energysocket_3c39e72e0fb0_active_power" },
    { name: "sensor.energysocket_3c39e72e2972_active_power" },
    { name: "sensor.energysocket_3c39e72e428e_active_power" },
    { name: "sensor.shellyplug_s_4022d8894f0c_power" },
    { name: "sensor.shellyplug_s_4022d88949dd_power" },
    { name: "sensor.shellyplug_s_4022d887120c_power" },
    { name: "sensor.shellyplug_s_3ce90ec7e0f9_power" },
    { name: "sensor.shellyplug_s_c8c9a3a4d99e_power" },
    { name: "sensor.shellyplug_s_3ce90ec815ef_power" },
    { name: "sensor.shellyplug_s_3ce90ec7df3c_power" },
    { name: "sensor.shellyplug_s_c8c9a3aaf53f_power" },
    { name: "sensor.shellyplug_s_c8c9a3a4d78b_power" },
    { name: "sensor.shellyplug_s_c8c9a3a512bc_power" },
    { name: "sensor.shellyplug_s_c8c9a3a55e01_power" },
    { name: "sensor.shellyplug_s_c8c9a3aaf74a_power" },
    { name: "sensor.shellyplug_s_c8c9a3a5f2fd_power" },
    { name: "sensor.shellyplug_c1c2d3_power" },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {names.map((name, index) => (
          <Grid key={index} item xs={12} md={12}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "col",
              }}
            >
              <Test name={name.name} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
