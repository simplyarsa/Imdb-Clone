import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Movielist from './components/Movielist';
import Home from './pages/Home';
import Movie from './pages/Movie';

function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route path="movies/:type" element={<Movielist />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>     
    </>
  );
}

export default App;
