import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { csv } from "d3";

export default function Orders() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("tableData")) || []
  );
  const [entityIdToName, setEntityIdToName] = useState({});

  useEffect(() => {
    Promise.all([csv("data_small.csv"), csv("dict.csv")]).then(
      ([data, entityIdToNameCsv]) => {
        setData(data);
        localStorage.setItem("tableData", JSON.stringify(data));
        const entityIdToName = entityIdToNameCsv.reduce(
          (acc, row) => ({ ...acc, [row.entity_id]: row.name }),
          {}
        );
        setEntityIdToName(entityIdToName);
      }
    );
  }, []);

  return (
    <React.Fragment>
      <Title>Current Adapters</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>State</TableCell>
            <TableCell>Last updated</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                {entityIdToName[row.entity_id] || row.entity_id}
              </TableCell>
              <TableCell>{row.state}</TableCell>
              <TableCell>{row.last_updated}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
