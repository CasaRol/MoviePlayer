import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

    let navigate = useNavigate();

    const goToVideo = () => {
        navigate('videoplayer')
    }

    return (
        <div>
            <h1>Landing page for movie streaming</h1>
            <button onClick={() => { goToVideo() }}>Watch video</button>
        </div>
    )
}

export default LandingPage;