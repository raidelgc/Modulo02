const express = require('express');
const app = express();

app.use(express.json());

app.post('/contact', (req, res) => {
  const formData = req.body; // Los datos del formulario se encuentran en req.body

  // Aquí puedes realizar las operaciones necesarias con los datos recibidos, como guardarlos en una base de datos

  res.status(200).json({ message: 'Mensaje recibido correctamente' });
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
