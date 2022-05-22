import React from 'react'
import VideoCard from './VideoCard'
import './index.css'

const LandingPage: React.FC = (props) => {

    return (
        <div className="general-bg">
            <h1 className="m-3 text-center">Landing page for movie streaming</h1>

            <div className="d-flex flex-wrap contrast-bg w-75 m-auto border border-dark justify-content-center rounded">
                <VideoCard videoTitle="Ballerup - ABA" videoImg="Ballerup_miniature.png" videoDescription="Station Ballerup Kører til ABA (BA M1, BA S1, BA P1)" videoId="1234" />
                <VideoCard videoTitle="Ballerup - ABA" videoImg="Ballerup_miniature.png" videoDescription="Station Ballerup Kører til ABA (BA M1, BA S1, BA P1)" videoId="1234" />
                <VideoCard videoTitle="Ballerup - ABA" videoImg="Ballerup_miniature.png" videoDescription="Station Ballerup Kører til ABA (BA M1, BA S1, BA P1)" videoId="1234" />
                <VideoCard videoTitle="Ballerup - ABA" videoImg="Ballerup_miniature.png" videoDescription="Station Ballerup Kører til ABA (BA M1, BA S1, BA P1)" videoId="1234" />
                <VideoCard videoTitle="Ballerup - ABA" videoImg="Ballerup_miniature.png" videoDescription="Station Ballerup Kører til ABA (BA M1, BA S1, BA P1)" videoId="1234" />
                <VideoCard videoTitle="Ballerup - ABA" videoImg="Ballerup_miniature.png" videoDescription="Station Ballerup Kører til ABA (BA M1, BA S1, BA P1)" videoId="1234" />
                <VideoCard videoTitle="Ballerup - ABA" videoImg="Ballerup_miniature.png" videoDescription="Station Ballerup Kører til ABA (BA M1, BA S1, BA P1)" videoId="1234" />
                <VideoCard videoTitle="Ballerup - ABA" videoImg="Ballerup_miniature.png" videoDescription="Station Ballerup Kører til ABA (BA M1, BA S1, BA P1)" videoId="1234" />
            </div>
        </div>
    )
}

export default LandingPage;