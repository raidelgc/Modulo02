import React, { useState } from 'react';
import { FaHeart, FaEdit } from 'react-icons/fa';

const UserCard = ({ users, setUsers }) => {
  const [likes, setLikes] = useState({});
  const [editingUser, setEditingUser] = useState(null);
  const [editedNickname, setEditedNickname] = useState('');
  const [editedIdade, setEditedIdade] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const [editedSenha, setEditedSenha] = useState('');

  const handleLike = (index) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [index]: prevLikes[index] ? prevLikes[index] + 1 : 1,
    }));
  };

  const handleEdit = (index) => {
    const user = users[index];
    setEditingUser(index);
    setEditedNickname(user.nickname);
    setEditedIdade(user.idade);
    setEditedEmail(user.email);
    setEditedSenha(user.senha);
  };

  const handleSave = () => {
    const updatedUser = {
      nickname: editedNickname,
      idade: editedIdade,
      email: editedEmail,
      senha: editedSenha,
    };
    const updatedUsers = [...users];
    updatedUsers[editingUser] = updatedUser;
    setEditingUser(null);
    setUsers(updatedUsers);
  };

  const handleCancel = () => {
    setEditingUser(null);
  };

  return (
    <div className="card-container">
      <h2>Usuários cadastrados:</h2>
      {users.map((user, index) => (
        <div className="card" key={index}>
          <div className="card-header">
            <h3>{user.nickname}</h3>
            {!editingUser && (
              <button className="edit-button" onClick={() => handleEdit(index)}>
                <FaEdit />
              </button>
            )}
          </div>
          {editingUser === index ? (
            <div className="edit-form">
              <label>
                Nickname:
                <input
                  type="text"
                  value={editedNickname}
                  onChange={(e) => setEditedNickname(e.target.value)}
                />
              </label>
              <label>
                Idade:
                <input
                  type="number"
                  value={editedIdade}
                  onChange={(e) => setEditedIdade(e.target.value)}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  value={editedEmail}
                  onChange={(e) => setEditedEmail(e.target.value)}
                />
              </label>
              <label>
                Senha:
                <input
                  type="password"
                  value={editedSenha}
                  onChange={(e) => setEditedSenha(e.target.value)}
                />
              </label>
              <div className="edit-buttons">
                <button className="save-button" onClick={handleSave}>
                  Save
                </button>
                <button className="cancel-button" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <p>Idade: {user.idade}</p>
              <p>Email: {user.email}</p>
              <p>Senha: {user.senha}</p>
              <div className="like-container">
                <button className="like-button" onClick={() => handleLike(index)}>
                  <FaHeart />
                </button>
                <p className="like-count">{likes[index] || 0} likes</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserCard;
