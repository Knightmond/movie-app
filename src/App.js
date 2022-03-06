import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Blog from './views/blog';
import MovieList from './components/movie_list';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList></MovieList>} />
        <Route path="/blog" element={<Blog></Blog>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
