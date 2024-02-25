import React from 'react';
import { useState } from 'react';
import Tasks from './Tasks';

export default function Add() {
    const[def,setDefault] = useState("")
    const addTask = () => {
        if(tmp!=""){
        setVal([...val, tmp])
        setDefault("")
        setTmp("")
        }
    }

    const handleChange = (e) => {
        setTmp(e.target.value)
        setDefault(e.target.value)
    }



    const [val, setVal] = useState([]);
    const [tmp, setTmp] = useState("");

    return (
        <div>
            <h1 className='mt-5'>To-Do List</h1>
            <h4>Describe your list</h4>
            <div className="row g-2">
                <input className="form-control form-control-lg mt-3" type="text" placeholder="Enter Task here..." aria-label=".form-control-lg example" onChange={handleChange} value={def} />
                <button type='btn' className='btn btn-primary' onClick={addTask}>Add</button>
            </div>

            <Tasks list={val}/>

        </div>
    );
}
