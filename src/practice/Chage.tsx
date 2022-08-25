import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
`;

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
    const onClickFalse = () => {
        setShowing(false);
    }
    const onClickTrue = () => {
        setShowing(true);
        setValue("")
    } 
    return(
    <Container>
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
        <button onClick={onClickFalse}>show</button>
        <button onClick={onClickTrue}>hide</button>
    </Container>
    )

}

export default Change;