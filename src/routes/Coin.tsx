import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto; 
`;


const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Loader = styled.span`
    text-align: center;
    display: block;
`;

const Title = styled.h1`
    color:${props => props.theme.accentColor};
    font-size: 48px;
`;

interface ILocation {
    state:{
    name:string;
    };
}

function Coin(){
    const [loading, setLoading] = useState(true);
    const {coinId} = useParams(); //useParams를 사용해서 url뒤에 있는 변수를 가져올 수 있다.
     //useLocation을 사용해서 url을 가져올 수 있다.
    const {state} = useLocation() as ILocation;
    const [info, setInfo] = useState({});
    const [priceInfo, setPriceInfo] = useState({});
    useEffect(() => {
        (async () => {
            const infoData = await (
                await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
                ).json();
            const priceData = await(
                await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
            ).json();
            setInfo(infoData);
            setPriceInfo(priceData);
        })();
    }, [])
    return(
        <Container>
            <Header>
              <Title>{state.name || "Loading"}</Title>  
            </Header>
            {loading ? (
                <Loader>Loading...</Loader>
            ) : null}
        </Container>
    )
}

export default Coin;