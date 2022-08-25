import { useState, useEffect, useRef } from "react";
import { Tabs, Drums, Guitar, BPM, Bars, Play, PlayBar } from "../components";
import '../components/instruments/styles/Instrument.css';

const instrumentTabs = [
    {
        label: "Drums",
        value: 0
    },
    {
        label: "Guitar",
        value: 1
    }
];

const Home = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [bpm, setBpm] = useState('120');
    const [cellSize, setCellSize] = useState('18');
    const [isPlaying, setIsPlaying] = useState(false);
    const [currCell, setCurrCell] = useState(0);
    const instrumentRef = useRef(null);
    // Global timer for the playbar
    let timer;

    const updateCurrCell = () => {
        timer = !timer && setInterval(() => {
        console.log('ticking')
        setCurrCell(prevCount => prevCount === +cellSize ? 0 : prevCount + 1)
        }, 1000 / (bpm / 60))
    }
    
    useEffect(() => {
        if(isPlaying) {
            updateCurrCell();
        } else {
            clearInterval(timer);
            setCurrCell(0);
        }
        return () => clearInterval(timer)
    }, [isPlaying]);

    const onWheel = (e) => {
        if (e.deltaY > 0) {
            instrumentRef.current.scrollLeft  += 58
        } else {
            instrumentRef.current.scrollLeft  -= 58
        }
    }

    return (
        <main className="py-3">
            <BPM bpm={bpm} setBpm={setBpm}/>
            <Bars bar={cellSize} setBar={setCellSize}/>
            <Tabs items={instrumentTabs} active={activeTab} onChange={setActiveTab} />
            <section className="section-container mt-1 pb-2">
                <div className="flex justify-between mb-2">
                    <div className="bg-main box-sm border-radius">
                        {currCell}
                    </div>
                    <Play isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
                </div>
                <div className="instrument"
                    onWheel={onWheel}
                    ref={instrumentRef}
                >
                    <PlayBar bpm={bpm} currCell={currCell} cellSize={cellSize}/>
                    {activeTab === 0 && <Drums cellSize={cellSize} />}
                    {activeTab === 1 && <Guitar cellSize={cellSize} />}
                </div>
            </section>
        </main>
    )
}

export default Home