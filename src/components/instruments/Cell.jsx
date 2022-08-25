import { useState } from "react"

const Cell = ({index}) => {
    const [active, setActive] = useState(false);

    return (
        <div 
            className={`note-cell${active ? ' note-cell-active' : ''}`}
            onClick={() => setActive(!active)}
            style={{
                ['--cell-note-index']: `var(--color-${index+1})`
            }}
        />
    )
}

export default Cell