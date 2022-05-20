import React, { useRef, useState } from 'react'
import ReactPlayer from 'react-player'


interface myProps {
    myUrl: string
    videoTitle: string
}
const MoviePlayerWrapper: React.FC<myProps> = (props) => {
    let player = useRef<ReactPlayer | null >(null);

    const [playing, setPlaying] = useState<boolean>(false); 
    const [pip, setPip] = useState<boolean>(false);
    const [value, setValue] = useState<number>(70);
    const [mute, setMute] = useState<boolean>(false);

    //Move current duration either forward or backwards (default 10s)
    const seeking: any = (duration: number) => {
        if (player.current) {
            var currentTime: number = currentTime = player.current.getCurrentTime();
             
            player.current.seekTo(currentTime += duration);
        }
    }

    const playPause: any = () => {
        if (player.current) {
            setPlaying(!playing) //Setting inverse playing state
        }

    }

    const pipAction: any = () => {
        if (player.current) {
            setPip(!pip)
        }
    }

    return (
        <div>
            <h2>{props.videoTitle}</h2>
            <ReactPlayer ref={player} url={props.myUrl} controls={false} playing={playing} pip={pip} volume={(value/100)} muted={mute} />
            <div>
                <button onClick={() => { seeking(-10) }} >minus 10s</button>
                <button onClick={() => { playPause() }}> { playing ? "Pause" : "Play" } </button>
                <button onClick={() => { seeking(10) }}>plus 10s</button>
            </div>
            <div>
                <button onClick={() => { setMute(!mute) }} > {mute ? "Unmute" : "Mute"}</button>
                <input
                    type="range"
                    step={1}
                    min={0}
                    max={100}
                    value={value}
                    onChange={event => {
                        setValue(event.target.valueAsNumber)
                }} />
            </div>
            <button onClick={() => { pipAction() }}>PIP</button>
        </div>
    )
}

export default MoviePlayerWrapper;