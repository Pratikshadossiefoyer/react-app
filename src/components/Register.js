import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const RegisterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #ff9a9e, #fad0c4);
`;

const RegisterBox = styled.div`
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
        border-color: #ff758c;
        outline: none;
        box-shadow: 0 0 8px rgba(255, 117, 140, 0.5);
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
    background-color: #ff758c;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 18px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background-color: #e84568;
    }
`;

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [passwordError, setPasswordError] = useState(""); 
    const [error, setError] = useState(""); // State for general errors
    const navigate = useNavigate();

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        return passwordRegex.test(password);
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        if (!validatePassword(newPassword)) {
            setPasswordError(
                "Password must be at least 6 characters and contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character (@, $, !, %, *, ?, &)"
            );
        } else {
            setPasswordError(""); // Clear error when password is valid
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!validatePassword(password)) {
            setError("Invalid password format!");
            return;
        }

        if (password !== password2) {
            setError("Passwords do not match!");
            return;
        }

        setError("");

        try {
            const token = "your_api_token_here"; // Replace with actual token

        await axios.post(
            "http://127.0.0.1:8000/api/register/",
            {
                first_name: firstName,
                last_name: lastName,
                email,
                password,
                password2
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`, // Bearer Authentication Token
                },
            }
        );
            alert("Registration successful! Please login.");
            navigate("/");
        } catch (error) {
            console.error("Registration failed", error);
            alert("Error registering user.");
        }
    };

    return (
        <RegisterContainer>
            <RegisterBox>
                <Title>Register</Title>
                <form onSubmit={handleRegister}>
                    <Input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    <Input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                    {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
                    <Input
                        type="password"
                        placeholder="Confirm Password"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                        required
                    />
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    <Button type="submit">Register</Button>
                </form>
            </RegisterBox>
        </RegisterContainer>
    );
};

export default Register;
