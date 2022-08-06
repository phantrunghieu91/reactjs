import { useEffect, useState } from "react";

function Selector() {
    const [selected, setSelected] = useState(0);
    const [selectedValue, setSelectedValue] = useState('');

    useEffect(() => {
        switch(selected) {
            case '0':
                setSelectedValue('Java');
                break;
            case "1":
                setSelectedValue("Angular");
                break;
            case "2":
                setSelectedValue("Javascript");
                break;
            case "3":
                setSelectedValue("Php");
                break;
            default:
        }
    }, [selected]);

    const choice = e => {
        setSelected(e.currentTarget.value);
    };

    return (
        <div className='selector'>
            Course: <select onChange={choice}>
                <option value='0'>Java</option>
                <option value='1'>Angular</option>
                <option value='2'>Javascript</option>
                <option value='3'>PHP</option>
            </select>
            <h3>Your select: {selectedValue}</h3>
        </div>
    );
}

export default Selector;