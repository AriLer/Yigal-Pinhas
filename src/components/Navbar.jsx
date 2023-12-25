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
    background-color: var(--dark-brown);
    padding: 15px;
    color: var(--light-cream);
    border-radius: 10px;
    font-size: 1rem;
    @media only screen and (min-width: 1440px) {
        margin: 1% 10%;
    }

    @media only screen and (max-width: 576px) {
        margin-top: 10%;
        justify-content: flex-start;
    }
`


const Navbar = ({direction}) => {

    const navigate = useNavigate();  
    const goHome = () => { navigate(`/`) }
    const dir = (direction === 'rtl' ? "row-reverse" : 'row');
    
    return (
        <NavbarContainer style={{}}>
        <HomeLink onClick={goHome} style={{flexDirection: dir}}>
            {direction === 'rtl' ? "חזרה לדף הבית" : 'Back to home'}
        </HomeLink>
    </NavbarContainer>
  )
}

export default Navbar;