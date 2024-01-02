import React from 'react'
import {bookNodes, bookContent} from '../static/books'
import styled from 'styled-components' 
import {Books, Footer} from '../components/index'
import BlobSVG from '../assets/internal-images/heroBlob.svg'
import Navbar from '../components/Navbar'
import {useParams, useNavigate} from 'react-router-dom'

const Section = styled.section`
    background-color: var(--light-cream);
    position: relative;
    padding: 5%;
    padding-top: 10%;
    overflow: hidden;
    min-height: 100vh;
    
    @media only screen and (min-width: 1440px) {
        padding: 5% 10%;
    }
`

const Title = styled.h2`
    z-index: 10;
    width: 70%;
    margin-bottom: 2rem;
    
    @media only screen and (max-width: 576px) {
        margin-top: 4rem;
        font-size: 3.5rem;
        width: 95%;
    }
`


const Content = styled.div`
    z-index: 10;
    line-height: 1.5rem;
`

const Purchase = styled.a`
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 2rem;
`

const Email = styled.span`
    margin-top: 1rem;
    font-size: 1.3rem;
    font-weight: 400;
`

const Blob = styled.img`
    position: absolute;
    z-index: 1;
`

const BookSummery = () => {
    const {id} = useParams();
    console.log(id);
    
    const node = bookNodes[id]
    const content = bookContent[id]

    const scaler1 = window.innerWidth > 576 ? 10 : 2
    const scaler2 = window.innerWidth > 576 ? 1 : 20

    const blobStyle = {
        top: `${node.direction === 'rtl' ? '-75vh': '-82vh'}`,
        left: `${node.direction === 'rtl' ? `-${120 / scaler1}%`: ''}`,
        right: `${node.direction === 'rtl' ? '': `-${1 * scaler2}%`}`,
        transform: `scaleX(${node.direction === 'rtl' ? '1': '-1'})`
    }
    return (
        <>
        <Navbar />
        <Section style={{direction: node.direction}}>
            <Blob
                style={blobStyle} 
                src={BlobSVG} 
                alt='blob'
            />
            <Title>{node.name}</Title>
            
            <Content>
                {content.subHeading &&<h4>{content.subHeading}</h4>}
                {content.paragraphs.map(p => 
                    <div>
                        {p.heading && <h4>{p.heading}</h4>}
                        <p>{p.content ? p.content : p}</p>
                    </div>
                )}
                {content.points && 
                    <ul>
                        {content.points.map(p=> <li>{p}</li>)}
                    </ul>
                }
                {node.purchaseUrl ? 
                    <div>
                        <h3 style={{lineHeight: '2.5rem'}}>
                            {node.direction === 'rtl' ? 'לרכישת הספר': 'To purchase the book'} &nbsp; <br/>
                            <Purchase href={node.purchaseUrl} target='#blank'>
                            {node.direction === 'rtl' ? 'לחצו כאן': 'Click here'}
                            </Purchase>
                        </h3>
                    </div>
                :
                    (node.direction === 'rtl' ? 
                    (<h3 style={{lineHeight: '2.5rem'}}>
                        לרכישה צרו קשר <br/> <Email>yigalpinchas@gmail.com</Email>
                    </h3>) :
                    (<h4>
                        Sorry, this item is not longer available
                    </h4>)
                    )
                }
            </Content>
        </Section>
        <Books heading="ספרים נוספים" active={id} hideActive={true}/>
        <Footer/>
        </>
    )
}

export default BookSummery
 