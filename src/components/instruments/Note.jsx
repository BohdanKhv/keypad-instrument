const Note = ({children, note}) => {
    return (
        <div className="instrument-note-container">
            <div className="instrument-note">
                {note}
            </div>
            {children}
        </div>
    )
}

export default Note