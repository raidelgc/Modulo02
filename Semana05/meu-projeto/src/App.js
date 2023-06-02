import "./styles/App.css";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import googlelogo from "./imagens/googlelogo.png";
import Input from "./components/Input.js";
import Button from "./components/Button";


function App() {

  return (
    <div className="App">
      <Header />
      <img className="app-logo" src={googlelogo} alt="" />
      <Input />      
      <Main />


    </div>
  );
}

export default App;