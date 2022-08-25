const Note = ({children, note, index}) => {
    return (
        <div className="instrument-note-container">
            <div className="instrument-note" style={{ backgroundColor: `var(--color-${index+1})` }}>
                {note}
            </div>
            {children}
        </div>
    )
}

export default Note