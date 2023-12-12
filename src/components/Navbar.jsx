import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const NavbarContainer = styled.div`
    overflow: hidden;
    width: 90%;
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    @media only screen and (max-width: 576px) {
        display: none;
    }
`

const HomeLink = styled.button`
    margin: 1% 5%;
    display: inline-block;
    font-weight: bold;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    background-color: #d0d0d0;
    padding: 15px;
    border-radius: 10px;
    text-align: center;
`

const Back = styled.img`
    height: 5vh;
    transform: rotate(180deg);
    margin-right: -5px;
`


const Navbar = () => {
    const navigate = useNavigate();

    const goHome = () => { navigate(`/`) }

  return (
    <NavbarContainer>
        <HomeLink onClick={goHome}>
            <Back src="https://img.icons8.com/pastel-glyph/64/back.png" alt="back"/>
            לעמוד הראשי
        </HomeLink>
    </NavbarContainer>
  )
}

export default Navbar;