import { useState } from "react";

function useClock() {
    const [time, setTime] = useState('');
    const [ampm, setAppm] = useState('');

    function updateTime() {
        let timeInfo = new Date();
        let hour = 0;

        if(timeInfo.getHours() === 0){
            hour = 12;
        } else if(timeInfo.getHours() > 12) {
            hour = `0${timeInfo.getHours() - 12}`;
        } else {
            hour = timeInfo.getHours;
        }

        let minute = timeInfo.getMinutes() > 10 ? timeInfo.getMinutes() : `0${timeInfo.getMinutes()}`;

        let second = timeInfo.getSeconds() > 10 ? timeInfo.getSeconds() : `0${timeInfo.getSeconds()}`;

        let ampm = timeInfo.getHours() > 12 ? 'PM' : 'AM';

        setAppm(ampm);
        setTime(`${hour}:${minute}:${second}`);
    }

    setInterval(updateTime, 1000);

    return [time, ampm];
}

export default useClock;