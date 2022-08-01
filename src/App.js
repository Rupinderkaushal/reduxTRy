import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Card from './components/card/Card';
import CardItem from './components/cardItem/CardItem';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' exact element={<Home/>} />
    <Route path='/product/:productId' element={<CardItem/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
