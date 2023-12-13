import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const NavbarContainer = styled.div`
    overflow: hidden;
    width: 100%;
    display: flex;
    position: absolute;
    top: 0;
    right: 0;

`

const HomeLink = styled.button`
    margin: 1% 5%;
    font-weight: bold;
    display: flex;
    background-color: #d0d0d0;
    padding: 15px;
    border-radius: 10px;
    
    @media only screen and (min-width: 1440px) {
        margin: 1% 10%;
    }

    @media only screen and (max-width: 576px) {
        margin-top: 10%;
        width: 20%;
        padding: 5px;
        justify-content: flex-start;
    }
`

const Back = styled.img`
    height: 5vh;
`


const Navbar = ({direction}) => {
    const navigate = useNavigate();
    
    const goHome = () => { navigate(`/`) }
    
    const deg = (direction === 'rtl' ? "180deg" : '0deg');
    const dir = (direction === 'rtl' ? "row-reverse" : 'row');

    return (
        <NavbarContainer style={{}}>
        <HomeLink onClick={goHome} style={{transform: `rotate(${deg})`, flexDirection: dir}}>
            <Back src="https://img.icons8.com/pastel-glyph/64/back.png" alt="back"/>
        </HomeLink>
    </NavbarContainer>
  )
}

export default Navbar;