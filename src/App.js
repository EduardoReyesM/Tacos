import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Pedidos from "./Components/Pedidos"

//nuestro componente principal
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Menu />
      <Pedidos />

    </div>
  );
}

export default App;
