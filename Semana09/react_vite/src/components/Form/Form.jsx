import { useState } from "react";
import "./Form.css";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    telefone: '',
    email: '',
    messagem: '',
  });

  const handleInput = (event) => {
    event.preventDefault();
    const { value, id } = event.target;

    const data = { ...formData, [id]: value };
    setFormData(data);

  }

  const handleSubmit = (event) => {
    event.preventDefault();

    isFormValid()
    ? alert(`${formData.email} logado com sucesso`)
    : alert(`Verifique os campos`);
  }

  const isFormValid = () => {
    let validate = true;

    const data = Object.entries(formData);

    for (const [key] of data) {
      if (!formData[key].length) {
        validate = false;
      }
    }

    return validate;
  }

  return (
    <>
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <p>Deixe o seu recado</p>
        <label htmlFor="name">Nome</label>
        <input type="name" id="name" placeholder="Digite seu nome" onInput={handleInput} />

        <label htmlFor="telefone">Telefone</label>
        <input type="text" id="telefone" pattern="[0-9]+" placeholder="Digite seu telefone" onInput={handleInput} />
        
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" placeholder="Digite seu e-mail" onInput={handleInput} />

        <label htmlFor="messagem">Messagem</label>
        <input type="messagem" id="messagem" placeholder="Digite seu messagem" onInput={handleInput} />

        <button type="submit">Enviar</button>
      </form>
    </>
  )
}

export default FormComponent;