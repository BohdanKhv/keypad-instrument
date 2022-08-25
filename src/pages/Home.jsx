import { useState } from "react";
import { Tabs, Drums, Guitar, BPM, Bars } from "../components";
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

    return (
        <main className="py-3">
            <Tabs items={instrumentTabs} active={activeTab} onChange={setActiveTab} />
            <BPM bpm={bpm} setBpm={setBpm}/>
            <Bars bar={cellSize} setBar={setCellSize}/>
            <section className="section-container mt-1 pb-2">
                <div className="instrument">
                    {activeTab === 0 && <Drums cellSize={cellSize} />}
                    {activeTab === 1 && <Guitar cellSize={cellSize} />}
                </div>
            </section>
        </main>
    )
}

export default Home