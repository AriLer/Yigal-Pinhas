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
    height: 100%;
    @media only screen and (max-width: 768px) {
        display: none;
    }
`

const LinksContainer = styled.div`
    display: flex;
    height: 100%;
`

const HomeLink = styled.button`
    font-weight: bold;
    display: flex;
    background-color: transparent;
    padding: 13px;
    padding-right: 0;
    font-size: 1.45rem;
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

    @media only screen and (max-width: 992px) {
        font-size: 1.4rem;
        padding: 0px;
    }

`

const Link = styled.div`
    display: flex;
    align-items: center;
    color: var(--highlight);
    box-shadow: inset 0 0 0 0 var(--highlight);
    transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
    padding: 0 2.5vw;
    &:hover {
        box-shadow: inset 0 400px 0 0 var(--highlight);
        color: white;
        transition: color .2s ease-in-out, box-shadow .5s ease-in-out;
    }
    
    @media only screen and (max-width: 992px) {
        padding: 0 2vw;
    }
`

const LinkImg = styled.img`
    width: 25px;
    height: 25px;
    
    
    @media only screen and (max-width: 992px) {
        width: 20px;
        height: 20px;
    }

     
`

const LinkText = styled.a`
    font-weight: 600;
    font-size: 1.12rem;
    letter-spacing: .3px;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;
    padding-right: 10px;
    
    @media only screen and (max-width: 992px) {
        font-size: 1.1rem;
        letter-spacing: 0px;
        padding-right: 5px;
    }
`

const MobileContainer = styled.div`
    overflow: hidden;
    background-color: var(--cream);
    margin: 1rem;
    border-radius: 15px;
    width: 50%;
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
    }
`

const Hamburger = styled.img`
    height: calc(45px);
    margin: 10px;
    opacity: 0.8;

    &:hover {
        filter: brightness(0.9);
    }
`

const ModalLinkContainer = styled.div`
    font-size: 4rem;
`

const ModalLink = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 1.03rem 0px;
    padding-right: 3vw;
    font-size: 1.8rem;
    color: var(--dark-brown);
    color: var(--dark-brown);
    box-shadow: inset 0 0 0 0 var(--highlight);
    transition: color .3s ease-in-out, box-shadow .4s ease-in-out;
    
    border-bottom: 1px solid #51312689;
    &:hover {
        box-shadow: inset 500px 0 0 0 var(--highlight);
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

    const links = [
        {text: 'ספרים', route: 'ספרים/0', img: 'https://img.icons8.com/ios/50/book--v1.png'},
        {text: 'לומדת מולטימדיה', route: 'dvd', img: 'https://img.icons8.com/ios/50/internet--v1.png'},
        {text: 'קורסים', route: 'קורסים', img: 'https://img.icons8.com/ios/50/school.png'},
        {text: 'מאמרים', route: 'מאמרים_', img: 'https://img.icons8.com/ios/50/paper.png'},
    ]

    return (
        <NavbarSection>
            <MobileContainer style={!isOpen ? {width: '65px', height: '65px'}: {}}>
                <Hamburger 
                    onClick={handleOpen} 
                    src={isOpen ? MenuEnd : MenuStart}
                    style={{ cursor: 'pointer' }} 
                />
                {isOpen &&
                    <ModalLinkContainer style={{flexDirection: 'column'}}>
                            <ModalLink className={isOpen ? 'open': ''} onClick={() => navigate(`/`)}>
                                <LinkImg width="30" height="30" src='https://img.icons8.com/ios/home--v1.png' alt='home-icon'/>
                                דף הבית
                            </ModalLink>
                            {links.map((link, index) => (
                                <ModalLink
                                    className={isOpen ? 'open': ''}
                                    key={index}
                                    onClick={() => navigate(`/${link.route}`)}
                                >
                                    <LinkImg width="30" height="30" src={link.img} alt={`${link.text}-icon`}/>
                                    {link.text}
                                </ModalLink>
                            ))}
                    </ModalLinkContainer>
                } 
            </MobileContainer>
            
            <NavbarContainer style={{}}>  
                <HomeLink onClick={() => navigate(`/`)}>{'ד"ר יגאל פנחס'}</HomeLink>
                <LinksContainer>
                    {links.map((link, index) => (
                        <Link key={index}>
                            <LinkImg src={link.img} alt={`${link.text}-icon`}/>
                            <LinkText onClick={() => navigate(`/${link.route}`)}>
                                {link.text}
                            </LinkText>
                        </Link>
                    ))}
                </LinksContainer>
            </NavbarContainer>
        </NavbarSection>
  )
}

export default Navbar;