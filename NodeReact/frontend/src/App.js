import './App.css';
import Card from './Components/Card';
import { useState, useEffect } from 'react';

function App() {
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    useEffect(() => {
        fetch("/example")
            .then(data => data.json())
            .then(dataJSON => {
                setHours(dataJSON.hours);
                setMinutes(dataJSON.minutes);
                setSeconds(dataJSON.seconds);
            })
    }, [])

    return (
        <main>
            <Card timeValue={hours} timeType="Hours"/>
            <Card timeValue={minutes} timeType="Minutes"/>
            <Card timeValue={seconds} timeType="Seconds"/>
        </main>
    );
}

export default App;