import React from 'react'
import styled from 'styled-components'


const NavbarContainer = styled.div`
    position: absolute;
    height: 2.5rem;
    margin: 0 5%;
    width: 90%;
    /* align-items: center; */
    `

const HomeLink = styled.a`
    display: inline-block;
    font-weight: bold;
    `

const LinksContainer = styled.div`
    display: inline-block;
`

const Link = styled.a`
    margin: 10px;
`

const ActionButton = styled.button`
    width: 6rem;
    height: 2rem;
    position: absolute;
    left: 1%;

`

const Navbar = () => {
  return (
    <NavbarContainer>
        <HomeLink>{'ד"ר יגאל פנחס'}</HomeLink>
        <LinksContainer>
            <Link>אודות</Link>
            <Link>ספרים</Link>
            <Link>קורסים</Link>
            <Link>מאמרים</Link>
        </LinksContainer>
        <ActionButton className='action-button'>לצפייה בספרים</ActionButton>
    </NavbarContainer>
  )
}

export default Navbar;