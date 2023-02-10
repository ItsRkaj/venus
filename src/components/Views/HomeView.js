import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Day from "../HomeView/Day"
import Week from "../HomeView/Week"
import Month from "../HomeView/Month"
import CurrentConsumption from "../HomeView/CurrentConsumption"
import Adapters from "../HomeView/Adapters"

const mdTheme = createTheme();

function HomeViewContent() {
  const [showComponent, setShowComponent] = useState("Day");

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Main Chart */}
              <Grid item xs={12} md={8} lg={8}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {showComponent === "Day" ? <Day /> : null}
                  {showComponent === "Week" ? <Week /> : null}
                  {showComponent === "Month" ? <Month /> : null}
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    mb: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CurrentConsumption />
                </Paper>
                <Paper
                  sx={{
                    p: 2,
                  }}
                >
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                  >
                    <Button onClick={() => setShowComponent("Day")}>Day</Button>
                    <Button onClick={() => setShowComponent("Week")}>
                      Week
                    </Button>
                    <Button onClick={() => setShowComponent("Month")}>
                      Month
                    </Button>
                  </ButtonGroup>
                </Paper>
              </Grid>
              {/* Chart */}
              <Grid item sm={12} md={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Day />
                </Paper>
              </Grid>
              <Grid item sm={12} md={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Week />
                </Paper>
              </Grid>
              <Grid item sm={12} md={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Month />
                </Paper>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ mt: 4, p: 2, display: "flex", flexDirection: "column" }}>
                <Adapters />
              </Paper>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <HomeViewContent />;
}
