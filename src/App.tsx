import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from 'styled-components'
import Header from "./Components/Header/Header";
import Modal from "./Components/Modal/Modal";
import Home from "./Routes/Home/Home";
import Search from "./Routes/Search";
import Tv from "./Routes/Tv/Tv";
import Movie from "./Routes/Movie/Movie";

const GlobalStyle = createGlobalStyle`
`;


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/:part/:sliderPart/:id" element={<Home />} />
        {/* 영화들을 보여줄 home라우트 */}
        <Route path="/netflix_clone/" element={<Home />} />
        <Route path="/netflix_clone/tv" element={<Tv />} />
        <Route path="/netflix_clone/movie" element={<Movie />} />
        <Route path="/netflix_clone/search" element={<Search />} />
      </Routes>
    </Router>
  )
}

export default App;