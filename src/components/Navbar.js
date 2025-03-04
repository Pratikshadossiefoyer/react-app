import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
    background-color: #333;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavLinks = styled.div`
    display: flex;
    gap: 20px;
`;

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    transition: color 0.3s;

    &:hover {
        color: #ffcc00;
    }
`;

const LogoutButton = styled.button`
    background-color: #ff4d4d;
    color: white;
    border: none;
    padding: 8px 15px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.3s ease-in-out;

    &:hover {
        background-color: #cc0000;
    }
`;

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <NavbarContainer>
            <NavLinks>
                <StyledLink to="/">Login</StyledLink>
                <StyledLink to="/register">Register</StyledLink>
                <StyledLink to="/dashboard">Dashboard</StyledLink>
            </NavLinks>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </NavbarContainer>
    );
};

export default Navbar;
