import styled from "styled-components";
import { motion, useAnimation, useScroll } from "framer-motion";
import { Link, useMatch } from "react-router-dom";

export const Nav = styled(motion.nav)` // nav는 UI전환. Fragment 트랜잭션 관리, 딥링크 구현 및 처리, 안전한 데이터 전달 등 다양한 기능을 제공하고 있다.
    z-index: 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    height: 80px;
    font-size: 12px;
`;

export const Col = styled.div`
    display: flex;
    align-items: center;
    margin: 0px 20px;
`;

export const Logo = styled(motion.svg)`
    margin-right: 50px;
    width: 95px;
    height: 25px;
    fill: ${(props) => props.theme.red};
    path {
        stroke-width: 6px;
        stroke: white;
    }
`;

export const Items = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
`;

export const Item = styled.li`
    margin-right: 20px;
    color: ${(props) => props.theme.white.darker};
    transition: color 0.3s ease-in-out;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    &:hover {
        color: ${(props) => props.theme.white.lighter};
    }
`;

export const Search = styled.form`
    color: white;
    display: flex;
    align-items: center;
    position: relative;
    svg{
        height: 25px;
    }
    cursor: pointer;
`

export const Circle = styled(motion.span)`
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 5px;
    bottom: -5px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background-color: ${(props) => props.theme.red};
`

export const Input = styled(motion.input)` 
    outline: 0; 
    transform-origin: right center;
    position: absolute;
    right: 0px;
    padding: 5px 10px;
    padding-left: 40px;
    z-index: -1;
    color: white;
    font-size: 16px;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.white.lighter};
    caret-color: auto; // 커서 색상
`;

export const logoVariants = {
    normal: {
        fillOpacity: 1,
    },
    active: {
        fillOpacity: [0, 1, 0],
        transition: {
            repeat: Infinity,
        },
    },
};

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const navVariants = {
    top: {
        backgroundColor: 'rgba(0,0,0,0)'
    },
    scroll: {
        backgroundColor: 'rgba(0,0,0,1)'
    }
}