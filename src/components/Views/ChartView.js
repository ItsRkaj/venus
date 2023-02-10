import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Test from "../ChartView/AdapterChart";

export default function ChartView() {
  const names = [
    { name: 'sensor.energysocket_3c39e72e2972_active_power' },
    { name: 'sensor.energysocket_3c39e72e2972_active_power' },
    { name: 'sensor.energysocket_3c39e72e2972_active_power' }
  ];

  return(
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
      {names.map((name, index) => (
        <Grid key={index} item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "col"
            }}
          >
            <Test name={name.name} />
          </Paper>
        </Grid>

      ))}
      </Grid>
    </Container>
  )
}