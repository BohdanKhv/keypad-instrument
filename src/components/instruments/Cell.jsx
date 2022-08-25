import { useState, useEffect } from "react"

const Cell = ({index, playNote, currCell, thisIndex}) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        if(currCell === thisIndex && active) {
            playNote();
            // console.log(thisIndex, currCell);
        }
    }, [currCell]);

    return (
        <div 
            className={`note-cell${active ? ' note-cell-active' : ''}`}
            onClick={() => setActive(!active)}
            style={{
                ['--cell-note-index']: `var(--color-${index+1})`
            }}
        >
            {/* {thisIndex} */}
        </div>
    )
}

export default Cell