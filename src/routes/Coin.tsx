import { useParams } from "react-router-dom";



function Coin(){
    const {coinId} = useParams<{coinId:string}>(); //를 사용해서 url뒤에 있는 변수를 가져올 수 있다.
    return(
    <h1>Coin: {coinId}</h1>
    )
}

export default Coin;