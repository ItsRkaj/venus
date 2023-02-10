import React from "react";
import Table from "../TableView/Table"
import Paper from "@mui/material/Paper";

export default function TableView() {
  return (
    <Paper
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Table />
    </Paper>
  );
}
