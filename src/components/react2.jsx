import { useContext } from "react";
import { Clock1 } from "./react1";
const Clock = () => {
    let ClockColor=useContext(Clock1);
    console.log(ClockColor);
    return (  
        <>
            <h1 style={{ color: ClockColor.color }}>{ClockColor.time}</h1>
        </>
        );
}
 
export default Clock;