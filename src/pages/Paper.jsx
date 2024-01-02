import React from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import {papers} from '../static/papers'
import { Worker, Viewer, SpecialZoomLevel  } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css'; // Import default styles
import styled from 'styled-components';
import { Navbar, Footer } from '../components';
import { getFilePlugin } from '@react-pdf-viewer/get-file';
import { RenderDownloadProps } from '@react-pdf-viewer/get-file';
    

const Section = styled.section`
    min-height: 100vh;
    margin-top: 10vh;
    background-color: var(--light-cream);
`

const BackBtn = styled.button`
    height: 3rem;
    margin: 2rem 5%;
    border-radius: 10px;
    background-color: var(--highlight);
    color: var(--light-cream);
    font-size: 1rem;
    padding: 1rem;
    
    @media only screen and (min-width: 1440px) {
        margin: 2rem 10%;
    }
`

const ViewerContainer = styled.div`
    margin: auto;
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
    width: 95%;
    display: flex;
    justify-content: center;
    height: 80vh;
    margin-bottom: 2rem;
    
    @media only screen and (max-width: 768px) {
        height: 70vh;
    }
    
    @media only screen and (max-width: 576px) {
        height: 40vh;
    }
`

const DownloadBtn = styled.button`
    background-color: var(--highlight);
    padding: .8rem 1.8rem;
    border-radius: 10px;
    color: var(--light-cream);
    margin-bottom: 1rem;
    font-size: 1rem;
    box-shadow:
        0 1px 1px hsl(0deg 0% 0% / 0.03),
        0 2px 2px hsl(0deg 0% 0% / 0.03),
        0 4px 4px hsl(0deg 0% 0% / 0.03),
        0 8px 8px hsl(0deg 0% 0% / 0.03),
        0 16px 16px hsl(0deg 0% 0% / 0.03)
    ;
`

const Paper = () => {
    const {id} = useParams();
    const paper = papers[id]
    const pdfjsVersion = require('pdfjs-dist/package.json').version;
    const getFilePluginInstance = getFilePlugin();
    const { Download } = getFilePluginInstance;
    
    const navigate = useNavigate();

    console.log(paper);
    return (
        <Section>
            <Navbar/>
                <BackBtn onClick={() => navigate(-1)}>
                        {'< חזרה'}
                </BackBtn>
        <ViewerContainer>
            {id == 13 &&
                <>
                <h3 style={{width: '95%'}}>האבולוציה של החנוך הגופני</h3>
                <VideoContainer>
                    <iframe
                    width="100%"
                    src={`https://www.youtube.com/embed/Q2FBKluBJhQ`}
                    title="YouTube Video Preview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    />
                </VideoContainer>
                </>
            }
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}>
                <Viewer fileUrl={paper.url} defaultScale={SpecialZoomLevel.PageWidth} plugins={[getFilePluginInstance]}/>
                <Download>
                    { (props: RenderDownloadProps) => (
                    <DownloadBtn onClick={props.onCLick}>
                        <img width="30" height="30" src="https://img.icons8.com/material-rounded/24/FFFFFF/download--v1.png" alt="download--v1"/>
                    </DownloadBtn>
                    )}
                </Download> 
            </Worker>
        </ViewerContainer>
        <Footer/>
        </Section>
    )
}

export default Paper