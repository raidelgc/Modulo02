import React, { useContext, useState } from 'react';
import { BannerContext } from '../../context/BannerContext';

const Banner = () => {
  const { title, subtitle, updateBanner, updateAppTitles } = useContext(BannerContext);
  const [newTitle, setNewTitle] = useState('');
  const [newSubtitle, setNewSubtitle] = useState('');

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleSubtitleChange = (e) => {
    setNewSubtitle(e.target.value);
  };

  const handleUpdateClick = () => {
    updateBanner(newTitle, newSubtitle);
    setNewTitle('');
    setNewSubtitle('');
  };

  const handleUpdateAppTitlesClick = () => {
    updateAppTitles(newTitle, newSubtitle);
    setNewTitle('');
    setNewSubtitle('');
  };

  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <input type="text" value={newTitle} onChange={handleTitleChange} placeholder="Novo Título" />
      <input type="text" value={newSubtitle} onChange={handleSubtitleChange} placeholder="Novo Subtítulo" />
      <button onClick={handleUpdateClick}>Atualizar Banner</button>
      <button onClick={handleUpdateAppTitlesClick}>Atualizar Títulos do App</button>
    </div>
  );
};

export default Banner;
