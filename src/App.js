import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Login2 from "./components/Login2";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/Log" element={<Login2/>} />
                <ThemeProvider theme={darkTheme}>
      <CssBaseline /> 
      <Login2 />
    </ThemeProvider>
            </Routes>
        </Router>
    );
};

export default App;
