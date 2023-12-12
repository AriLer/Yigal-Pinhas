import React from 'react'
import {bookNodes, bookContent} from '../static/books'
import styled from 'styled-components' 
import {Books, Footer} from './index'
import BlobSVG from '../assets/internal-images/heroBlob.svg'
import Navbar from './Navbar'

const Section = styled.section`
    position: relative;
    padding: 5%;
    padding-top: 10%;
    overflow-x: hidden;
`

const Title = styled.h2`
    width: 70%;
    margin-bottom: 2rem;
`

const SubHeading = styled.h4`   
`

const Email = styled.span`
    font-weight: 400;
    font-size: 25px;
`

const Blob = styled.img`
    position: absolute;
    top: -75vh;
    z-index: -10;
`

const BookSummery = () => {
    let id = window.location.href
    id = id[id.length - 1]
    const node = bookNodes[id]
    const content = bookContent[id]

    const blobStyle = {
        left: `${node.direction === 'rtl' ? '-8%': ''}`,
        right: `${node.direction === 'rtl' ? '': '0%'}`,
        transform: `scaleX(${node.direction === 'rtl' ? '': '-1'})`
    }
    return (
        <>
        <Section style={{direction: node.direction}}>
        <Navbar />
            <Blob
                style={blobStyle} 
                src={BlobSVG} 
                alt='blob'
            />
            <Title> {node.name} </Title>
            {content.subHeading &&<SubHeading>{content.subHeading}</SubHeading>}
            {content.paragraphs.map(p => 
                <div>
                    {p.heading && <SubHeading>{p.heading}</SubHeading>}
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
                    <h3>{node.direction === 'rtl' ? 'לרכישה': 'Purchase'}</h3>
                    <a href={node.purchaseUrl} target='#blank'>{node.purchaseUrl}</a>
                </div>
            :
                (node.direction === 'rtl' ? 
                (<h3>
                    לרכישה צרו קשר <br/> <Email>yigalpinchas@gmail.com</Email>
                </h3>) :
                (<h3>
                    Sorry, item is not longer available or purchase
                </h3>)
                )
            }
        </Section>
        <Books heading="ספרים נוספים" active={id} hideActive={true}/>
        <Footer/>
        </>
    )
}

export default BookSummery
 