import React from 'react'
import MoviePlayerWrapper from './MoviePlayerWrapper'

interface myProps {
    myUrl?: string
}
const VideoDisplay: React.FC<myProps> = (props) => {

    return (
        <div>
            <h1>VideoDisplay</h1>
            <MoviePlayerWrapper myUrl="Ballerup.mp4" videoTitle="Station Ballerup udkald - ABA" />
        </div>
    )
}

export default VideoDisplay;