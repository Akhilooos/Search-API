
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Eachitem from './pages/Eachitem';
import Searchresults from './pages/Searchresults';

function App() {
  return (
    <div className="App">

      <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/item/:id' element={<Eachitem/>}></Route>
        <Route path='/search/:id' element={<Searchresults/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
