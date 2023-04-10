import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

import { createContext, useEffect, useState } from "react";
import Clock from "./react2";
import Navbar from './navbar';
export let Clock1 = createContext();
const Comp1 = () => {
    let [color, setColor] = useState("aqua");
    let initialtime=new Date().toLocaleTimeString();
    let [time, setTime] = useState(initialtime);
    useEffect(() => {
        let rtime = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);
        return (()=>clearInterval(rtime))
    }, [])
    return (
        <div className="bg-dark" style={{height:"100vh"}}>
        <Navbar/>
            <div className="d-flex align-items-center justify-content-center text-center" style={{height:"88vh"}}>
                <div className='p-5 border border-light rounded'> <Clock1.Provider value={{ color: color, time: time }}>
                    <Form.Select aria-label="Default select example" name="color" id="color" value={color} onChange={(e) => setColor(e.target.value)}>
                        <option>Select The Color</option>
                        <option value="white">White</option>
                        <option value="yellow">Yellow</option>
                        <option value="Red">Red</option>
                    </Form.Select>
                    <Clock />
                </Clock1.Provider></div>
            </div>
        </div>
    );
}

export default Comp1;