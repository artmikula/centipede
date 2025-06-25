import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const BitcoinCycleCharts = ({ data }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", margin: "20px 0" }}>
      {/* Pi Cycle Top Indicator */}
      <div style={{ width: "48%", minWidth: "300px" }}>
        <h3>Pi Cycle Top Indicator</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={[0, 1]} />
            <Tooltip />
            <Line type="monotone" dataKey="piCycle" stroke="#8884d8" name="Pi Cycle" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/* MVRV Z-Score */}
      <div style={{ width: "48%", minWidth: "300px" }}>
        <h3>MVRV Z-Score</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="mrvrZScore" stroke="#82ca9d" name="MVRV Z-Score" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/* Puell Multiple */}
      <div style={{ width: "48%", minWidth: "300px" }}>
        <h3>Puell Multiple</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="puellMultiple" stroke="#ffc658" name="Puell Multiple" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/* Exchange Inflows */}
      <div style={{ width: "48%", minWidth: "300px" }}>
        <h3>Exchange Inflows</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="exchangeInflows" stroke="#ff8042" name="Exchange Inflows" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BitcoinCycleCharts;
