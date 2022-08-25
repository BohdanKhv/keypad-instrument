import { useState, useEffect, useRef } from "react";
import { Tabs, Drums, Pad, BPM, Bars, Play, PlayBar } from "../components";
import '../components/instruments/styles/Instrument.css';

const instrumentTabs = [
    {
        label: "Pad",
        value: 0
    },
    {
        label: "Drums",
        value: 1
    },
];

const Home = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [bpm, setBpm] = useState(120);
    const [cellSize, setCellSize] = useState(18);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currCell, setCurrCell] = useState(-1);
    const instrumentRef = useRef(null);
    // Global timer for the playbar
    let timer;

    const updateCurrCell = () => {
        timer = !timer && setInterval(() => {
        setCurrCell(prevCount => prevCount === +cellSize ? -1 : prevCount + 1)
        }, 1000 / (bpm / 60))
    }
    
    useEffect(() => {
        if(isPlaying) {
            updateCurrCell();
        } else {
            clearInterval(timer);
            setCurrCell(-1);
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
            <Tabs items={instrumentTabs} active={activeTab} onChange={setActiveTab} />
            <div className="flex gap-1 justify-between">
                <div className="w-50">
                    <BPM bpm={bpm} setBpm={setBpm}/>
                </div>
                <div className="w-50">
                    <Bars bar={cellSize} setBar={setCellSize}/>
                </div>
            </div>
            <section className="section-container mt-1 pb-2">
                <div className="flex justify-between">
                    <div className="bg-main box-sm border-radius">
                        {currCell+1}
                    </div>
                    <Play isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
                </div>
                <div className="instrument pt-2"
                    onWheel={onWheel}
                    ref={instrumentRef}
                >
                    {currCell > -1 &&
                        <PlayBar bpm={bpm} currCell={currCell} cellSize={cellSize}/>
                    }
                    {activeTab === 0 && <Pad cellSize={cellSize} currCell={currCell} />}
                    {activeTab === 1 && <Drums cellSize={cellSize} currCell={currCell} />}
                </div>
            </section>
        </main>
    )
}

export default Home