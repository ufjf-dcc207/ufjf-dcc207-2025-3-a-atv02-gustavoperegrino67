import "./App.css";
import Disciplina from "./Disciplina";

function App(){
  return (
    <>
    <h1>Olá, mundo</h1>
    <h2>Olá react</h2>
    <Disciplina codigo="DCC202" nome="Desenvolvimento web I" />
    <Disciplina codigo="DCC206" nome="Desenvolvimento web II" />
    <Disciplina codigo="Dcc207" nome="Desenvolvimento web Front-End" />
    </>

  )
}

export default App;