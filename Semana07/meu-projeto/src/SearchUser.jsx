import React, { useState } from 'react';

const SearchUser = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [foundUser, setFoundUser] = useState(null);

  const handleSearch = () => {
    const found = users.find(user => user.nickname === searchTerm);
    setFoundUser(found);
  };

  return (
    <div>
      <h2>Pesquisar Usuário</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Pesquisar</button>

      {foundUser ? (
        <div>
          <h3>Dados do usuário:</h3>
          <p>Nickname: {foundUser.nickname}</p>
          <p>Idade: {foundUser.idade}</p>
          <p>Email: {foundUser.email}</p>
          <p>Senha: {foundUser.senha}</p>
        </div>
      ) : (
        <p>Cadastro não encontrado.</p>
      )}
    </div>
  );
};

export default SearchUser;
