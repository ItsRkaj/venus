import "./App.css";
import React, { useState } from "react";
import Day from "./components/Day";
import Week from "./components/Week";
import Month from "./components/Month";

function App() {
  const [showComponent, setShowComponent] = useState("Day");

  return (
    <div className="App">
      {showComponent === "Day" ? <Day /> : null}
      {showComponent === "Week" ? <Week /> : null}
      {showComponent === "Month" ? <Month /> : null}
      <button onClick={() => setShowComponent("Day")}>Day</button>
      <button onClick={() => setShowComponent("Week")}>Week</button>
      <button onClick={() => setShowComponent("Month")}>Month</button>
    </div>
  );
}

export default App;
