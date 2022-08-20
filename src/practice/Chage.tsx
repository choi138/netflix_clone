import React, { useState } from "react";


function Change(){
    const [value, setValue] = useState("");
    const [showing, setShowing] = useState(true)
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: {value}
        } = event;
        setValue(value);
    };
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault();
        setShowing(false);
    }
    return(
    <div>
        {showing ? (
        <form onSubmit={onSubmit}>
            <input
            value={value}
            onChange={onChange}
            type="text"
            placeholder="username"/>
            <button>Log in</button>
        </form>) : 
        (<h2>hello, {value}</h2>)
        }
        <button onClick={() => {
            setShowing(false);
        }}>show</button>
        <button onClick={() => {
            setShowing(true);
            setValue("")
        }}>hide</button>
    </div>
    )

}

export default Change;