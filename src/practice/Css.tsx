import styled from "styled-components";

// const Box  = styled.div`
// background-color: ${(props) => props.bgColor};
// width: 100px;
// height: 100px;
// `;

// const Circle = styled(Box)
// // styled.(Box)이 코드는 Box의 모든 속성들을 들고 온 다음 Circle안에 넣겠다는것이다.
// ` 
// border-radius: 50px;
// `

//<Btn as="a" href="/">Log in</Btn>는 as를 사용함으로써 button태그를 a태그로 바꿨다.

// attrs({})를 통해서 속성을 정해줄 수 있다. 예(attrs({required: true, minLength: 10}))

const Title = styled.h1`
  color: ${props => props.theme.textColor};
  &:hover{
    color: teal;
  }
`;

const Wrapper = styled.div`
display: flex;
height: 100vh;
width: 100vw;
justify-content: center;
align-items: center;
background-color: ${props => props.theme.bgColor};
`;


function Css(){
  return(
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}



export default Css;
