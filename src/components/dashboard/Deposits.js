import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Current consumption</Title>
      <Typography component="p" variant="h4">
        124 kWh
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {new Date().getHours()}:{new Date().getMinutes()},{" "}
        {new Date().getDate()}/{new Date().getDay() + 1}-{new Date().getFullYear()}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View more
        </Link>
      </div>
    </React.Fragment>
  );
}
