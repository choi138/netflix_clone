import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {createGlobalStyle } from 'styled-components'
import Header from "./Components/Header/Header";
import Modal from "./Components/Modal/Modal";
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
            {/* <Route path="/:part/:sliderPart/:id" element={<Tv/>}/>  TV프로그램들을 위한 라우트 */}
            <Route path="/search" element={<Search/>}/>  {/*검색을 위한 라우트*/}
            <Route path="/:part/:sliderPart/:id" element={<Home/>}/>  
            {/* 영화들을 보여줄 home라우트 */}
            <Route index element={<Home/>}/>
        </Routes>
    </Router>
  )
}

export default App;