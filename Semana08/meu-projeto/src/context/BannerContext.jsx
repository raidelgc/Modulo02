import React, { createContext, useState } from 'react';

export const BannerContext = createContext();

export const BannerProvider = ({ children }) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  const updateBanner = (newTitle, newSubtitle) => {
    setTitle(newTitle);
    setSubtitle(newSubtitle);
  };

  const updateAppTitles = (newTitle, newSubtitle) => {
    document.querySelector('h1').innerText = newTitle;
    document.querySelector('h2').innerText = newSubtitle;
  };

  return (
    <BannerContext.Provider value={{ title, subtitle, updateBanner, updateAppTitles }}>
      {children}
    </BannerContext.Provider>
  );
};
