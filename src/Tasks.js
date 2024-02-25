import React from 'react';
import { useState } from 'react';

export default function Tasks(props) {


    const handleCheck = (e)=>{
        if(e.target.checked){
            e.target.nextElementSibling.style.textDecoration = "line-through"
            e.target.nextElementSibling.style.color = "grey"
            console.log(e.target.nextElementSibling.style.textDecoration)
        }
    }


    return (
        <div className='mt-5'>
            {props.list.map((item, index) => (
                <>
                    <div className="form-check custom mt-2 px-5 py-2">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={handleCheck}/>
                        <label className="form-check-label mx-3 autoCap" htmlFor="flexCheckDefault">
                            <h5 key={index}>{item}</h5>
                        </label>
                    </div>
                    
                </>
            ))}
        </div>
    );
}
