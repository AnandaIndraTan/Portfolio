import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const NavbarContainer = styled.div``


export default function Navbar() {
    return (
        <NavbarContainer>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </NavbarContainer>
    );
}