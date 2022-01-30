import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/home/Home';
import Posts from './components/pages/posts/Posts';
import About from './components/pages/about/About';
import PostEdit from './components/pages/posts/forms/PostEdit';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/posts' element={<Posts/>}/>
        <Route path='/post/edit/:id' element={<PostEdit/>}/>

        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
