import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const CoinsList = styled.ul`
`;

const Coin = styled.li`
    background-color: #ffff;
    color: ${(props) => props.theme.bgColor};
    border-radius: 15px;
    margin-bottom: 10px ;
    a {
        align-items: center;
        display: flex;
        padding: 20px;
        transition: color 0.2s ease-in;
        /* display: block; //block은 가로로 꽉차게 만들어준다. 그래서 끝부분을 클릭해도 작동이된다. */
    }
    &:hover{
        a{
            color: ${(props) => props.theme.accentColor};
        }
    }
`;

const Title = styled.h1`
    color:${props => props.theme.accentColor};
    font-size: 48px;
`;

const Loader = styled.span`
    text-align: center;
    display: block;
`;

const Img = styled.img`
    width: 25px;
    height: 25px;
    margin-right: 10px;
`;

interface CoinInterface {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
};

function Coins(){
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => { //useEffect를 사용해서 컴포넌트가 언제 실행될지 정할 수 있다.
        (async() => {
            const response = await fetch("https://api.coinpaprika.com/v1/coins");
            const json = await response.json(); //.json을 붙임으로써 api를 json으로 변환 
            setCoins(json.slice(0, 100)); //json의 0번째부터 100번째까지만 가져온다.
        })()
        setLoading(false);
    }, [])
    return(
    <Container>
        <Header>
          <Title>코인</Title>  
        </Header>
        {loading ? (
            <Loader>Loading...</Loader>
        ) : (
        <CoinsList>
            {coins.map( coin => 
            <Coin key={coin.id}>
                <Link to={`/${coin.id}`}>
                    <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}/>
                    {coin.name} &rarr;
                    </Link>
            </Coin>)}
        </CoinsList>)}
    </Container>
    );
}

export default Coins;