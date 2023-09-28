import logo from "./logo.svg";
import "./App.css";
import Encuestas from "./Components/Encuestas";
import "./Css/Encuestas.css";

function App() {
  const encuestas = [
    {
      id: 1,
      pregunta: "¿Cuál es tu color favorito?",
      opciones: ["Rojo", "Azul", "Verde"],
    },
    {
      id: 2,
      pregunta: "¿Cuál es tu comida favorita?",
      opciones: ["Pizza", "Hamburguesa", "Sushi"],
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Aplicacion de Encuestas</h1>

      <Encuestas encuestas={encuestas} />

      <footer className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </footer>
    </div>
  );
}

export default App;
