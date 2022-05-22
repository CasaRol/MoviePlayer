import React from 'react'
import { useNavigate } from 'react-router-dom'
import VideoCard from './VideoCard'

const LandingPage: React.FC = (props) => {

    let navigate = useNavigate();

    const goToVideo = () => {
        navigate('videoplayer')
    }

    return (
        <div>
            <h1>Landing page for movie streaming</h1>
            <button className="btn-primary btn" onClick={() => { goToVideo() }}>Watch video</button>

            <div className="d-flex flex-wrap">
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