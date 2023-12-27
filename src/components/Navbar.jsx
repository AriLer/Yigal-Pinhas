import React, {useState} from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import MenuStart from '../assets/internal-images/menu-start.png'
import MenuEnd from '../assets/internal-images/menu-end.png'
import '../styles/globalStyles.css'

const NavbarSection = styled.nav`
    position: fixed;
    width: 100%;
    height: 10vh;
    z-index: 100;
    top: 0;
`

const NavbarContainer = styled.div`
    background: linear-gradient(180deg, var(--cream), #fef4ea);
    display: flex;
    align-items: center;
    border-bottom: 2px solid #51312684;
    
    @media only screen and (max-width: 768px) {
        display: none;
    }
`

const LinksContainer = styled.div`
    display: flex;
    gap: 1rem;

    & a {
        cursor: pointer;
        padding: .5rem 1rem;
        box-shadow: inset 0 0 0 0 var(--highlight);
        transition: color .3s ease-in-out, box-shadow 0.4s ease-in-out;
        transition: color .5s cubic-bezier(0.75, 0, 1, .5), box-shadow .5s ease-in-out;
        &:hover {
            box-shadow: inset 0 350px 0 0 var(--highlight);
            color: white;
            transition: color .2s ease-in-out, box-shadow .5s ease-in-out;
        }
    }
`

const HomeLink = styled.button`
    font-weight: bold;
    display: flex;
    background-color: transparent;
    padding: 13px;
    font-size: 1.3rem;
    color: var(--dark-brown);
    margin: 1% 5%;
    transition: all .2s ease-in-out;

    &:hover {
        color: var(--highlight);
        filter: brightness(1);
    }

    @media only screen and (min-width: 1440px) {
        margin: 1% 10%;
    }

`

const MobileContainer = styled.div`
    overflow: hidden;
    background-color: var(--cream);
    margin: 1rem;
    border-radius: 15px;
    width: 50%;
    height: 60vh;
    transition: all 0.2s ease-in-out;
    box-shadow:
        0 1px 1px hsl(0deg 0% 0% / 0.075),
        0 2px 2px hsl(0deg 0% 0% / 0.075),
        0 4px 4px hsl(0deg 0% 0% / 0.075),
        0 8px 8px hsl(0deg 0% 0% / 0.075),
        0 16px 16px hsl(0deg 0% 0% / 0.075)
    ;
    display: none;

    @media only screen and (max-width: 768px) {
        display: block;
    }

    @media only screen and (max-width: 576px) {
        width: 60%;
        height: 60vh;
    }
`

const Hamburger = styled.img`
    height: calc(8vh - 10px);
    margin: 10px;
   
    &:hover {
        filter: brightness(0.9);
    }
`

const ModalLinkContainer = styled.div`
    font-size: 4rem;
`

const ModalLink = styled.div`
    position: relative;
    display: flex;
    padding: .8rem 0px;
    padding-right: 20px;
    font-size: 2rem;
    color: var(--dark-brown);
    box-shadow: inset 0 0 0 0 var(--highlight);
    transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
    
    &:hover {
        box-shadow: inset 350px 0 0 0 var(--highlight);
        color: white;
    }
`

const Navbar = () => {

    const navigate = useNavigate();  
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        if (isOpen) {
            setIsOpen(false);
        } else{
            setTimeout(setIsOpen(true), 300)
        }
    };

    return (
        <NavbarSection>
            <MobileContainer style={!isOpen ? {width: '72px', height: '70px'}: {}}>
                <Hamburger 
                    onClick={handleOpen} 
                    src={isOpen ? MenuEnd : MenuStart}
                    style={{ cursor: 'pointer' }} 
                />
                {isOpen &&
                    <ModalLinkContainer style={{flexDirection: 'column'}}>
                            <ModalLink className={isOpen ? 'open': ''} onClick={() => navigate(`/`)}>
                                דף הבית
                            </ModalLink>
                            <ModalLink className={isOpen ? 'open': ''} onClick={() => navigate(`/books/0`)}>
                                ספרים
                            </ModalLink>
                            <ModalLink className={isOpen ? 'open': ''} onClick={() => navigate(`/multimedia`)}>
                                לומדת מולטימדיה
                            </ModalLink>
                            <ModalLink className={isOpen ? 'open': ''} onClick={() => navigate(`/courses`)}>
                                קורסים
                            </ModalLink>
                            <ModalLink className={isOpen ? 'open': ''} onClick={() => navigate(`/papers`)}>
                                מאמרים
                            </ModalLink>
                    </ModalLinkContainer>
                } 
            </MobileContainer>
            
            <NavbarContainer style={{}}>  
                <HomeLink onClick={() => navigate(`/`)}>{'ד"ר יגאל פנחס'}</HomeLink>
                <LinksContainer>
                    <a onClick={() => navigate(`/books/0`)}>ספרים</a>
                    <a onClick={() => navigate(`/multimedia`)}>לומדת מולטימדיה</a>
                    <a onClick={() => navigate(`/courses`)}>קורסים</a>
                    <a onClick={() => navigate(`/papers`)}>מאמרים</a>
                </LinksContainer>
            </NavbarContainer>
        </NavbarSection>
  )
}

export default Navbar;