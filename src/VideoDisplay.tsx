import React, { useState, useEffect } from 'react'
import MoviePlayerWrapper from './MoviePlayerWrapper'

const VideoDisplay: React.FC = () => {

    const [videoId, setVideoId] = useState<string | null>();
    const [videoUrl, setVideoUrl] = useState<string>();

    useEffect(() => {
        const vidId = new URLSearchParams(window.location.search).get("vidId");
        setVideoId(vidId)

        if (vidId === "1234") {
            setVideoUrl("Ballerup.mp4")
        }
    }, [videoId])

    return (
        <div>
            <h1>VideoDisplay</h1>
            {videoUrl !== undefined &&
                <MoviePlayerWrapper myUrl={videoUrl} videoTitle="Station Ballerup udkald - ABA" />
            }
        </div>
    )
}

export default VideoDisplay;