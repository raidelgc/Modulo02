import React, { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext/ModalContext';

const ModalComponent = () => {
  const { show, data, setShow } = useContext(ModalContext);

  const closeModal = () => {
    setShow(false);
    setData({ title: null, description: null });
  };

  return (
    <>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <button onClick={closeModal}>Cerrar</button>
    </>
  )
};

export default ModalComponent;
