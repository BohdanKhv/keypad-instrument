import { Note, Cell } from '../';

const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

const Drums = ({cellSize}) => {
  return (
    <div className="instrument-notes">
      {notes.map((note, i) => (
        <Note key={`note-${note}-${i}`} note={note} index={i}>
          {Array(+cellSize).fill(null).map((_, j) => (
            <Cell key={`note-cell-${note}-${j}`} index={i}/>
          ))}
        </Note>
      ))}
    </div>
  )
}

export default Drums