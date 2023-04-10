import { useContext } from "react";
import { Clock1 } from "./react1";
const Clock = () => {
    let ClockColor=useContext(Clock1);
    console.log(ClockColor);
    return (  
        <div className="text-center mt-4">
            <h1 style={{ color: ClockColor.color }}>{ClockColor.time}</h1>
        </div>
        );
}
 
export default Clock;