import React from "react";
import styled from "styled-components"

interface CircleProps { //interface는 object의 타입을 설명해준다.
    bgColor: string;
}

const Container = styled.div<CircleProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 100px;
`;

function Circle({bgColor}: CircleProps){
    return (
    <Container bgColor={bgColor} />
    );
}

export default Circle;

interface playerShape {
    name: string;
    age: number;
}

const sayHello = (playerObj:playerShape) => `Hello ${playerObj.name} you are ${playerObj.age} old.`

sayHello({name:"justin", age:17})
sayHello({name: "hi", age:12})