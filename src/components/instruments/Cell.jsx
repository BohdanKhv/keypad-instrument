import { useState, useEffect, useRef } from "react"

const Cell = ({index, playNote, currCell, thisIndex}) => {
    const [active, setActive] = useState(false);
    const cellRef = useRef(null);

    useEffect(() => {
        if(currCell === thisIndex && active) {
            playNote();
            cellRef.current.classList.add("animate-cell");
            cellRef.current.addEventListener("animationend", () => {
                cellRef.current.classList.remove("animate-cell");
            });
        }
    }, [currCell]);

    return (
        <div 
            className={`note-cell${active ? ' note-cell-active' : ''}`}
            onClick={() => setActive(!active)}
            style={{
                ['--cell-note-index']: `var(--color-${index+1})`
            }}
            ref={cellRef}
        >
            {/* {thisIndex} */}
        </div>
    )
}

export default Cell