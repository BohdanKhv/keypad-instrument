import { useEffect, useRef, useState } from 'react';
import './styles/PlayBar.css';

const PlayBar = ({currCell, bpm, cellSize}) => {
    const playBarRef = useRef(null);

    useEffect(() => {
        // Move the playbar to the current cell
        const playBar = playBarRef.current;
        playBar.style.left = `${55 + currCell * 58}px`;
        // const currSelected = document.querySelector(`.instrument`);
        // currSelected.scrollLeft = (currCell * 58) / 2;
    } , [currCell]);

    return (
        <div className="play-bar" ref={playBarRef}
        style={{
            transitionDuration: `${currCell === 0 ? 0 : bpm / 60}s`
        }} />
    )
}

export default PlayBar