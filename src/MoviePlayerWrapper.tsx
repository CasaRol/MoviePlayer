import React, { useRef } from 'react'
import ReactPlayer from 'react-player'


interface myProps {
    myUrl: string
}
const MoviePlayerWrapper: React.FC<myProps> = (props) => {

    let player = useRef<ReactPlayer | null>(null);

    const seeking: any = (duration: number) => {
        if (player.current) {
            var currentTime: number = currentTime = player.current.getCurrentTime();
             
            player.current.seekTo(currentTime += duration);
        }
    }

    return (
        <div>
            <ReactPlayer ref={player} url={props.myUrl} controls={true} />
            <button onClick={() => { seeking(10) }}>plus 10s</button>
            <button onClick={() => { seeking(-10) }} >minus 10s</button>
        </div>
    )
}

export default MoviePlayerWrapper;