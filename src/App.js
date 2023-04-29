
import { Header } from './components/Header/Header';
import './App.css';
import Rotas from './Rotas';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Rotas></Rotas>  
        <Outlet></Outlet>
    </div>
  );
}

export default App;
