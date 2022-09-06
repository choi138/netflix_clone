import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {createGlobalStyle } from 'styled-components'
import Header from "./Components/Header/Header";
import Home from "./Routes/Home/Home";
import Search from "./Routes/Search";
import Tv from "./Routes/Tv";

const GlobalStyle = createGlobalStyle`
`;


function App() {
  return(
    <Router>
        <Header/>
        <Routes>
            <Route path="/tv" element={<Tv/>}/>  {/* TV프로그램들을 위한 라우트*/}
            <Route path="/search" element={<Search/>}/>  {/*검색을 위한 라우트*/}
            <Route path="/" element={<Home/>}/>  {/*영화들을 보여줄 home라우트*/}
        </Routes>
    </Router>
  )
}

export default App;