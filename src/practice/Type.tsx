import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
`;
const H1 = styled.h1`
`;

interface DummyProps {
  text: string;
  active?: boolean; //끝에?를 했기 때문에 선택 가능한 interface임.
}

function Dummy({text, active = false}:DummyProps){ //active이 undefind라면 flase를 받는다.
  return<H1>{text}</H1>
}

function Type() {
  const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    
  }
  return(
    <Container>
      <Dummy active text="hello"/>                                                                                                                                                                                                                                                                                                                                                      
        <button onClick={onClick}>Click me</button>
    </Container>
  )
}

export default Type;