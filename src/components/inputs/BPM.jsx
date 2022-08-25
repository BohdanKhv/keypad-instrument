import { useRef, useEffect } from 'react';
import './styles/BPM.css';

const bpmValues = [ '100', '110', '120', '130', '140', '150', '160', '170', '180', '190', '200', '210', '220', '230', '240', '250', '260', '270', '280', '290', '300', '310', '320', '330', '340', '350', '360', '370', '380', '390', '400'];

const BPM = ({bpm, setBpm}) => {
    const bpmRef = useRef(null);

    const onWheel = (e) => {
        if (e.deltaY > 0) {
            bpmRef.current.scrollLeft  += 100
        } else {
            bpmRef.current.scrollLeft  -= 100
        }
    }

    useEffect(() => {
        // move the scrollbar to the middle of the list
        // as bpm is the current mid value
        const currSelected = document.querySelector(`[data-bpm="${bpm}"]`);
        bpmRef.current.scrollLeft = currSelected.offsetLeft - bpmRef.current.offsetWidth / 2;
    }, [bpm]);

    return (
        <section className="section-container">
            <h5 className="fs-3 px-2">
                BPM
            </h5>
            <div className="bpm-menu">
                <div 
                    className="bpm-wrapper"
                    ref={bpmRef}
                    onWheel={onWheel}
                >
                    {bpmValues.map(bpmVal => (
                        <span
                            key={bpmVal}
                            className={`bpm-item${bpm === bpmVal ? ' bpm-item-active' : ''}`}
                            data-bpm={bpmVal}
                            onClick={() => setBpm(bpmVal)}
                        >
                            {bpmVal}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BPM