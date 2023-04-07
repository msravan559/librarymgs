import Navbar from './components/navbar';
import SideBar from './components/sidebar';
import Home from './components/home';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import AddVideos from './components/addvideos';
import PageNotFound from './components/pagenotfound';


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      {/*common components  */}
      < Navbar/>
      
      <Routes>
        {/* homepage */}
        
        <Route path='/' element={
        <div className='homepage'>
        <SideBar />
        <Home />
      </div>} />

          <Route path='/about' element={<About/>}/>

          <Route path='/addvideos' element={<AddVideos/>}/>

          <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      
      
      </BrowserRouter>
        
    </div>
    
  );
}

export default App;
