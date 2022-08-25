import { useRef, useEffect } from 'react';
import './styles/BPM.css';

const barValues = ['6', '12', '18', '24', '30', '36', '42', '48', '54', '60', '66', '72', '78', '84', '90', '96', '102', '108', '114', '120', '126', '132', '138', '144', '150', '156', '162', '168', '174', '180', '186', '192', '198', '204', '210', '216', '222', '228', '234', '240', '246', '252', '258', '264', '270', '276', '282', '288', '294', '300', '306', '312', '318', '324', '330', '336', '342', '348', '354', '360', '366', '372', '378', '384', '390', '396', '402', '408', '414', '420', '426', '432', '438', '444', '450', '456', '462', '468', '474', '480', '486', '492', '498', '504'];

const Bars = ({bar, setBar}) => {
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
        const currSelected = document.querySelector(`[data-bar="${bar}"]`);
        bpmRef.current.scrollLeft = currSelected.offsetLeft - bpmRef.current.offsetWidth / 2;
    }, [bar]);

    return (
        <div className="section-container mb-3">
            <h5 className="fs-3 px-2">
                Bars
            </h5>
            <div className="bpm-menu">
                <div 
                    className="bpm-wrapper"
                    ref={bpmRef}
                    onWheel={onWheel}
                >
                    {barValues.map(barVal => (
                        <span
                            key={barVal}
                            className={`bpm-item${bar === +barVal ? ' bpm-item-active' : ''}`}
                            data-bar={barVal}
                            onClick={() => setBar(+barVal)}
                        >
                            {barVal}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Bars