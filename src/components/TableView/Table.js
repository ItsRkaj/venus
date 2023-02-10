import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../General/Title";
import { csv } from "d3";

export default function DataTable() {

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("tableData")) || []
  );

  useEffect(() => {
    csv("data_small.csv").then((data) => {
      setData(data);
      localStorage.setItem("tableData", JSON.stringify(data));
    });
  }, []);

  return (
    <React.Fragment>
      <Title>Data table</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>State ID</TableCell>
            <TableCell>Entity ID</TableCell>
            <TableCell>State</TableCell>
            <TableCell>Attributes</TableCell>
            <TableCell>Event ID</TableCell>
            <TableCell>Last changed</TableCell>
            <TableCell>Last updated</TableCell>
            <TableCell>Old state ID</TableCell>
            <TableCell>Attributes ID</TableCell>
            <TableCell>Context ID</TableCell>
            <TableCell>Context user ID</TableCell>
            <TableCell>Context parent ID</TableCell>
            <TableCell align="right">Origin IDX</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.state_id}</TableCell>
              <TableCell>{row.entity_id}</TableCell>
              <TableCell>{row.state}</TableCell>
              <TableCell>{row.attributes}</TableCell>
              <TableCell>{row.event_id}</TableCell>
              <TableCell>{row.last_changed}</TableCell>
              <TableCell>{row.last_updated}</TableCell>
              <TableCell>{row.old_state_id}</TableCell>
              <TableCell>{row.attributes_id}</TableCell>
              <TableCell>{row.context_id}</TableCell><TableCell>{row.state_id}</TableCell>
              <TableCell>{row.context_user_id}</TableCell>
              <TableCell>{row.context_parent_id}</TableCell>
              <TableCell align="right">{row.origin_idx}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
