import React from "react";
import styled from "styled-components"

interface ContainerProps{
    bgColor: string;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 100px;
    border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps { //interface는 object의 타입을 설명해준다.
    bgColor: string;  //끝에 ?를 안붙이면 얘는 필수가 된다.
    borderColor?: string; // 필수가 아닌 옵션으로 바꾸는건 끝에 ?를 붙이면 된다.
    text?: string;
}

function Circle({bgColor, borderColor, text = "defalut text"}: CircleProps){ //만약 text가 존재하지 않다면 defalut text 값을 넣어라
    return (
        <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
            {text}
        </Container>
    );
}

// borderColor ?? bgColor 뜻은 만약 borderColor가 undefined상태라면 bgColor를 값으로 해라.

export default Circle;

interface playerShape {
    name: string;
    age: number;
}

const sayHello = (playerObj:playerShape) => `Hello ${playerObj.name} you are ${playerObj.age} old.`

sayHello({name:"justin", age:17})
sayHello({name: "hi", age:12})