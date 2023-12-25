import React from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import {papers} from '../static/papers'

import { Worker, Viewer, SpecialZoomLevel  } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css'; // Import default styles
import styled from 'styled-components';

    

const Section = styled.section`
    min-height: 100vh;
`

const BackBtn = styled.button`
    height: 3rem;
    margin: 1rem 2rem;
    margin-top: 2rem;
    border-radius: 10px;
    background-color: var(--highlight);
    color: var(--light-cream);
    font-size: 1rem;
    padding: 1rem;

    `

const ViewerContainer = styled.div`
    margin: auto;
    background-color: var(--cream);
    overflow-x: hidden;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;

    @media only screen and (max-width: 768px) {
        width: 80%;
    }

    @media only screen and (max-width: 576px) {
        width: 95%;
    }
    `

const VideoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 80vh;
    
    @media only screen and (max-width: 768px) {
        height: 70vh;
    }
    
    @media only screen and (max-width: 576px) {
        height: 50vh;
    }
`

const Paper = () => {
    const {id} = useParams();
    console.log(id);
    const paper = papers[id]

    const pdfjsVersion = require('pdfjs-dist/package.json').version;
    const navigate = useNavigate();

    console.log(paper);
    return (
        <Section>
                <BackBtn onClick={() => navigate(-1)}>
                        חזרה לדף הבית
                </BackBtn>
        <ViewerContainer>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}>
                <Viewer fileUrl={paper.url} defaultScale={SpecialZoomLevel.PageWidth}/>
            </Worker>
                {id == 13 &&
                    <VideoContainer>
                        <iframe
                        width="100%"
                        // height="100%"
                        src={`https://www.youtube.com/embed/Q2FBKluBJhQ`}
                        title="YouTube Video Preview"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        />
                    </VideoContainer>
                }
        </ViewerContainer>
        </Section>
    )
}

export default Paper