
import { Header } from './components/Header/Header';
import './App.css';
import Rotas from './Rotas';
import { Baseboard } from './components/Baseboard/Baseboard';

export default function App() {
  return (
    <div className="App">
        <Header></Header>
        <Rotas></Rotas>  
    </div>
  )
}