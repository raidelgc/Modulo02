import React, { useState } from 'react';

function Form({ addUser }) {
  const [nickname, setNickname] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = [];

    if (!nickname) {
      errors.push('Por favor, preencha o campo "Nickname".');
    }

    if (!idade) {
      errors.push('Por favor, preencha o campo "Idade".');
    }

    if (!email) {
      errors.push('Por favor, preencha o campo "Email".');
    }

    if (!senha) {
      errors.push('Por favor, preencha o campo "Senha".');
    }

    if (errors.length === 0) {
      const newUser = {
        nickname,
        idade,
        email,
        senha,
      };

      addUser(newUser);
      setNickname('');
      setIdade('');
      setEmail('');
      setSenha('');
      setErrorMessages([]);
    } else {
      setErrorMessages(errors);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nickname:
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </label>
        <br />
        <label>
          Idade:
          <input
            type="number"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Senha:
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
      {errorMessages.length > 0 && (
        <div>
          <p>Por favor, complete los siguientes campos:</p>
          <ul>
            {errorMessages.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Form;
