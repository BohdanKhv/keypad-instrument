import pad from '../../assets/pad/pad'
import { Note } from '../';

const Pad = ({cellSize, currCell}) => {
  return (
    <div className="instrument-notes">
      {pad.map((note, i) => (
        <Note
          key={`note-${note}-${i}`}
          note={note}
          index={i}
          cellSize={cellSize}
          currCell={currCell}
        />
      ))}
    </div>
  )
}

export default Pad