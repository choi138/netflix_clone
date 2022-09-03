import { useQuery } from "react-query";
import styled from "styled-components";
import { getMovies, IGetMoviesResult } from "../api";
import { makeImagePath } from "../utilities";

const Wrapper = styled.div`
  background-color: black;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1)), url(${(props) => props.bgPhoto}); //  linear-gradient를 사용해서 배경색을 살짝 어둡게 만들어준다.
  background-size: cover;
`;

const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`;

const Overview = styled.p`
  font-size: 23px;
  width: 50%;
`;

function Home() {
  const {data, isLoading} = useQuery<IGetMoviesResult>(["movies", "nowplaying"], getMovies); // useQuery는 data랑 아직 로딩중인지9isLoading)을 알려준다.
  // console.log(data, isLoading);
    return (
      <Wrapper>{isLoading? (
        <Loader>Loading..</Loader>
      ):(
        <>
        <Banner bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}>
          <Title>{data?.results[0].title}</Title> 
          <Overview>
          {data?.results[0].overview}
          </Overview>
        </Banner>       
        </>
      )}
      </Wrapper>
    );
  }
  export default Home;