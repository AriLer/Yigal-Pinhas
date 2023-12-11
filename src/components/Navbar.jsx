import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import BackIcon from '../assets/internal-images/icons8-back-50.png'

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
    margin: 1rem 5%;
    margin-right: 4%;
    color: var(--dark-brown);
    display: inline-block;
    font-weight: bold;
    font-size: 1.4rem;
    margin-left: 2rem;
    display: flex;
    align-items: center;
    background-color: var(--cream);
    padding: 15px;
    border-radius: 10px;
`

const Back = styled.img`
    height: 5vh;
    margin-left: 10px;
    transform: rotate(180deg);
`


const Navbar = () => {
    const navigate = useNavigate();

    const goHome = () => { navigate(`/`) }

  return (
    <NavbarContainer>
        <HomeLink onClick={goHome}>
            <Back src={BackIcon}/>
            לעמוד הראשי
        </HomeLink>
    </NavbarContainer>
  )
}

export default Navbar;