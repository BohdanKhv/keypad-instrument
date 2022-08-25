import drum from '../../assets/drum/drum'
import { Note } from '../';

const Drums = ({cellSize, currCell}) => {
  return (
    <div className="instrument-notes">
      {drum.map((note, i) => (
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

export default Drums