import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

interface DummyProps {
  text: string;
  active?: boolean; //끝에?를 했기 때문에 선택 가능한 interface임.
}

function Dummy({text, active = false}:DummyProps){ //active이 undefind라면 flase를 받는다.
  return<H1>{text}</H1>
}

function App() {
  const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    
  }
  return(
    <Container>
      <Dummy active text="hello"/>                                                                                                                                                                                                                                                                                                                                                      
        <button onClick={onClick}>Click me</button>
    </Container>
  )
}

export default App;