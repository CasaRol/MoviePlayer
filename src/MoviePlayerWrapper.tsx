import React, { useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import './player.css'


interface myProps {
    myUrl: string
    videoTitle: string
}
const MoviePlayerWrapper: React.FC<myProps> = (props) => {
    let player = useRef<ReactPlayer | null>(null);

    const [playing, setPlaying] = useState<boolean>(false);
    const [pip, setPip] = useState<boolean>(false);
    const [volume, setVolume] = useState<number>(70);
    const [prevVolume, setPrevVolume] = useState<number>(0)
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

    const toggleMute: any = () => {
        if (mute === false) {
            setPrevVolume(volume)
            setVolume(0);
        } else if (mute) {
            setVolume(prevVolume)
        }
        setMute(!mute)
    }

    return (
        <div className="m-2">
            <h2>{props.videoTitle}</h2>
            <div className="d-flex justify-content-center player-wrapper">
                <ReactPlayer className="m-2 border border-dark react-player" width="65%" height="65%" ref={player} url={props.myUrl} controls={false} playing={playing} pip={pip} volume={(volume / 100)} muted={mute} />
            </div>
            <div className="d-flex justify-content-center">
                <div>
                    <button className="btn btn-secondary m-2" onClick={() => { seeking(-10) }} >minus 10s</button>
                    <button className="btn btn-secondary m-2" onClick={() => { playPause() }}> {playing ? "Pause" : "Play"} </button>
                    <button className="btn btn-secondary m-2" onClick={() => { seeking(10) }}>plus 10s</button>
                </div>
                <div>
                    <button className="btn btn-secondary m-2" onClick={() => { toggleMute() }}> {mute ? "Unmute" : "Mute"}</button>
                    <input
                        type="range"
                        step={1}
                        min={0}
                        max={100}
                        value={volume}
                        onChange={event => {
                            if (mute && volume === 0) {
                                setMute(false)
                            }
                            setVolume(event.target.valueAsNumber)

                        }} />
                </div>
                <button className="btn btn-secondary m-2" onClick={() => { pipAction() }}>PIP</button>
            </div>
        </div>
    )
}

export default MoviePlayerWrapper;