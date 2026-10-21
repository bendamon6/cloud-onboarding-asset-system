import { useEffect, useState } from "react";
import { getDashboard } from "../api/dashboard";

import { Box, Grid, Paper, Typography } from "@mui/material";
import {
  BarChart, Bar, PieChart, Pie, Cell, LineChart, Line,
  XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from "recharts";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function load() {
      const result = await getDashboard();
      setData(result);
    }
    load();
  }, []);

  if (!data) return <p>Loading dashboard...</p>;

  // Chart Data
  const taskStatusData = [
    { name: "Completed", value: data.completed_tasks },
    { name: "Pending", value: data.pending_tasks }
  ];

  const COLORS = ["#4caf50", "#f44336"];

  const tasksPerEmployeeData = data.latest_tasks.map((t) => ({
    name: t.title,
    value: t.completed ? 1 : 0
  }));

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Onboarding Dashboard
      </Typography>

      {/* KPI Cards */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Total Employees</Typography>
            <Typography variant="h3">{data.total_employees}</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={3}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Total Tasks</Typography>
            <Typography variant="h3">{data.total_tasks}</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={3}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Completed</Typography>
            <Typography variant="h3">{data.completed_tasks}</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={3}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Pending</Typography>
            <Typography variant="h3">{data.pending_tasks}</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Charts */}
      <Grid container spacing={3} sx={{ marginTop: 3 }}>
        
        {/* Pie Chart */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Task Status</Typography>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={taskStatusData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={80}
                  label
                >
                  {taskStatusData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Bar Chart */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Tasks per Employee</Typography>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={tasksPerEmployeeData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#2196f3" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Line Chart */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Latest Tasks Timeline</Typography>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data.latest_tasks}>
                <XAxis dataKey="title" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="id" stroke="#ff9800" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

      </Grid>
    </Box>
  );
}
