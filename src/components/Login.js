import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #667eea, #764ba2);
`;

const LoginBox = styled.div`
    background: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    width: 350px;
    text-align: center;
`;

const Title = styled.h2`
    color: #333;
    margin-bottom: 20px;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    transition: all 0.3s;

    &:focus {
        border-color: #667eea;
        outline: none;
        box-shadow: 0 0 8px rgba(102, 126, 234, 0.5);
    }
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 14px;
    margin-bottom: 10px;
`;

const Button = styled.button`
    width: 100%;
    padding: 12px;
    background-color: #667eea;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 18px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background-color: #5563c1;
    }
`;

const Login = () => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(""); 
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        if (!validateEmail(newEmail)) {
            setEmailError("Invalid email format");
        } else {
            setEmailError("");
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address.");
            return;
        }

        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/login/",
                { email, password },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer your_api_token_here", // Replace with actual token
                    },
                }
            );
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
        } catch (error) {
            console.error("Login failed", error);
            alert("Invalid credentials");
        }
    };

    return (
        <LoginContainer>
            <LoginBox>
                <Title>Login</Title>
                <form onSubmit={handleLogin}>
                    <Input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={handleEmailChange} 
                        required 
                    />
                    {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
                    
                    <Input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    
                    <Button type="submit">Login</Button>
                </form>
            </LoginBox>
        </LoginContainer>
    );
};

export default Login;
