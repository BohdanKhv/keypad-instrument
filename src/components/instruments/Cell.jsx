import { useState } from "react"

const Cell = ({}) => {
    const [active, setActive] = useState(false);

    return (
        <div 
            className={`note-cell${active ? ' note-cell-active' : ''}`}
            onClick={() => setActive(!active)}
        />
    )
}

export default Cell