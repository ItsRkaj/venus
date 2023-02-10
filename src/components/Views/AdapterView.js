import React from "react";
import Adapters from "../HomeView/Adapters"
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CurrentAdapters from "../AdapterView/CurrentAdapters";

export default function AdapterView() {
  return(
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} lg={4}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CurrentAdapters />
          </Paper>
        </Grid>
        {/* Main Chart */}
        <Grid item xs={12} md={9} lg={8}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Adapters />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}