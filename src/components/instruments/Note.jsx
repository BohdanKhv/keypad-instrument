import { useRef } from "react"
import { Cell } from '../';

const Note = ({note, index, cellSize, currCell}) => {
    const noteRef = useRef(null)

    const playNote = () => {
        const audio = noteRef.current
        audio.currentTime = 0
        audio.play();
    }

    return (
        <div className="instrument-note-container">
            <div className="instrument-note" 
                style={{
                    backgroundColor: `var(--color-${index+1})`
                }}
                onClick={playNote}
            >
                {note.name}
            </div>
            <audio src={note.sound} ref={noteRef}/>
            {Array(+cellSize).fill(null).map((_, j) => (
                <Cell
                    key={`note-cell-${note}-${j}`}
                    index={index}
                    playNote={playNote}
                    currCell={currCell}
                    thisIndex={j}
                />
            ))}
        </div>
    )
}

export default Note