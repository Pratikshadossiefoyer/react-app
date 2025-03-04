import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/");
            return;
        }

        axios.get("http://127.0.0.1:8000/api/user/", {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((response) => {
            setUserData(response.data);
        })
        .catch(() => {
            localStorage.removeItem("token");
            navigate("/");
        });
    }, [navigate]);

    return (
        <div>
            <h2>Dashboard</h2>
            {userData ? <p>Welcome, {userData.email}!</p> : <p>Loading...</p>}
        </div>
    );
};

export default Dashboard;
