import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import AdapterChart from "../HomeView/AdapterChart";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/ArticleOutlined";
import { csv } from "d3";

const mdTheme = createTheme();

const names = [
  { name: "HomeWizard Energy Socket Boiler" },
  { name: "HomeWizard Energy socket AC" },
  { name: "HomeWizard Energy Socket Dishwasher (offline)" },
  { name: "Shelly Plug S 1 microwave" },
  { name: "Shelly Plug S 2 fridge" },
  { name: "Shelly Plug S 3 nespresso" },
  { name: "Shelly Plug S 4 Ipad" },
  { name: "Shelly Plug S 5 toy tesla car" },
  { name: "Shelly Plug S 6 water boiler" },
  { name: "Shelly Plug S 7 TV" },
  { name: "Shelly Plug S 8 Nest" },
  { name: "Shelly Plug S 9 Google speaker" },
  { name: "Shelly Plug S 10 Alexa" },
  { name: "Shelly Plug S 11 Dataladdare" },
  { name: "Shelly Plug S 12 TV Screen" },
  { name: "Shelly Plug S 13 Dishwasher" },
  { name: "Shelly plug E 14 Dishwasher" },
  { name: "sensor.shellyem3_3494547566b9_channel_a_power" },
  { name: "sensor.shellyem3_3494547566b9_channel_a_energy" },
  { name: "sensor.shellyem3_3494547566b9_channel_a_current" },
  { name: "sensor.shellyem3_3494547566b9_channel_a_voltage" },
  { name: "sensor.shellyem3_3494547566b9_channel_a_power_factor" },
  { name: "sensor.shellyem3_3494547566b9_channel_b_power" },
  { name: "sensor.shellyem3_3494547566b9_channel_b_energy" },
  { name: "sensor.shellyem3_3494547566b9_channel_b_current" },
  { name: "sensor.shellyem3_3494547566b9_channel_b_voltage" },
  { name: "sensor.shellyem3_3494547566b9_channel_b_power_factor" },
  { name: "sensor.shellyem3_3494547566b9_channel_c_power" },
  { name: "sensor.shellyem3_3494547566b9_channel_c_energy" },
  { name: "sensor.shellyem3_3494547566b9_channel_c_current" },
  { name: "sensor.shellyem3_3494547566b9_channel_c_voltage" },
  { name: "sensor.shellyem3_3494547566b9_channel_c_power_factor" },
];

function HomeViewContent() {
  const [showComponent, setShowComponent] = useState("Day");
  const [value, setValue] = useState(0);

  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  useEffect(() => {
    csv("data_small.csv").then((data) => {
      setData(data);
    });
  }, []);

  useEffect(() => {
    csv("total.csv").then((data1) => {
      setData1(data1);
    });
  }, []);

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
          <Container maxWidth="" sx={{ mt: 4, mb: 16 }}>
            <Grid container spacing={3}>
              {/* Main Chart */}
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {showComponent === "Day" ? (
                    <AdapterChart name={"Total"} data={data1} />
                  ) : null}
                  {showComponent === "Week" ? <AdapterChart /> : null}
                  {showComponent === "Month" ? <AdapterChart /> : null}
                  {showComponent === "All" ? <AdapterChart /> : null}
                </Paper>
              </Grid>
              {names.map((name, index) => (
                <Grid key={index} item xs={12} md={12}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "col",
                    }}
                  >
                    {showComponent === "Day" ? (
                      <AdapterChart name={name.name} data={data} />
                    ) : null}
                    {showComponent === "Week" ? (
                      <AdapterChart name={name.name} data={data} />
                    ) : null}
                    {showComponent === "Month" ? (
                      <AdapterChart name={name.name} data={data} />
                    ) : null}
                    {showComponent === "All" ? (
                      <AdapterChart name={name.name} data={data} />
                    ) : null}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
          <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 99}}
            elevation={3}
          >
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <BottomNavigationAction
                onClick={() => setShowComponent("Day")}
                label="Day"
                icon={<RestoreIcon />}
              />
              <BottomNavigationAction
                onClick={() => setShowComponent("Week")}
                label="Week"
                icon={<RestoreIcon />}
              />
              <BottomNavigationAction
                onClick={() => setShowComponent("Month")}
                label="Month"
                icon={<RestoreIcon />}
              />
              <BottomNavigationAction
                onClick={() => setShowComponent("All")}
                label="All"
                icon={<RestoreIcon />}
              />
            </BottomNavigation>
          </Paper>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <HomeViewContent />;
}
