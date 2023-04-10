import { createContext, useEffect, useState } from "react";
import Clock from "./react2";
export let Clock1 = createContext();
const Comp1 = () => {
    let [color, setColor] = useState("red");
    let initialtime=new Date().toLocaleTimeString();
    let [time, setTime] = useState(initialtime);
    useEffect(() => {
        let rtime = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);
        return (()=>clearInterval(rtime))
    }, [])
    return (
        <>
            <Clock1.Provider value={{color:color,time:time}}>
                <select name="color" id="color" value={color} onChange={(e) => setColor(e.target.value)}>
                    <option value="blue">blue</option>
                    <option value="yellow">yellow</option>
                    <option value="red">red</option>
                </select>
                <Clock />
            </Clock1.Provider>
        </>
    );
}

export default Comp1;