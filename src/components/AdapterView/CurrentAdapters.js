import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../General/Title"
import { csv } from "d3";

export default function CurrentAdapters() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("nameData")) || []
  );

  useEffect(() => {
    csv("dict.csv").then((data) => {
      setData(data);
      localStorage.setItem("nameData", JSON.stringify(data));
    });
  }, []);

  return (
    <React.Fragment>
      <Title>Current live adapters</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
