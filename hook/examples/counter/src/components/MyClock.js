import useClock from "../hooks/useClock";

function MyClock() {
    const [clock, ampm] = useClock();

    return (
        <div className="clock">
            {clock} {ampm}
        </div>
    );
}

export default MyClock;