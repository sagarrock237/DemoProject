
import './App.css';
import Home from './Components/Home';
import Search from './Components/Search';
import Movies from './Components/Movies';
import MovieMain from './Components/MovieMain';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './Components/ErrorPage';
import { useContext } from 'react';
import { AppContext } from './Components/Contexts';

function App() {



  return (
    <div class="bg-black">

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="movieMain/:id" element={<MovieMain></MovieMain>}></Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
