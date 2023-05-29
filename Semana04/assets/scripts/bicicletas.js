const products = [
    {
      title: "Nimbus Stark",
      price: 4999,
      priceUnity: 'R$',
      imagen: "./assets/img/nimbus.jpg"
    },
    {
      title: "Magic Might",
      price: 2499,
      priceUnity: 'R$',
      imagen: "./assets/img/magic.jpg"
    },
    {
      title: "Nebula Cosmic",
      price: 3999,
      priceUnity: 'R$',
      imagen: "./assets/img/nebula.jpg"
    }
  ];
  
  const bicicletas = [
    { id: 1, name: 'Nimbus Stark', price: 4999 },
    { id: 2, name: 'Magic Might', price: 2499 },
    { id: 3, name: 'Nebula Cosmic', price: 3999 },
  ];
  
  function loadProduct() {
    const productContainer = document.getElementById('product-list');
  
    products.forEach((product, index) => {
      const colDiv = document.createElement('div');
      colDiv.className = 'col-sm-12 col-md-6';
  
      const productDiv = document.createElement('div');
      productDiv.className = 'product';
  
      const imageDiv = document.createElement('div');
      imageDiv.className = 'imagen';
  
      const image = document.createElement('img');
      image.src = product.imagen;
      image.alt = product.title;
  
      imageDiv.appendChild(image);
      productDiv.appendChild(imageDiv);
  
      const titleSpan = document.createElement('span');
      titleSpan.className = 'title-product';
      titleSpan.textContent = product.title;
      productDiv.appendChild(titleSpan);
  
      const priceSpan = document.createElement('span');
      priceSpan.className = 'price-product';
      priceSpan.textContent = `${product.priceUnity} ${product.price}`;
      productDiv.appendChild(priceSpan);
  
      const buyButton = document.createElement('button');
      buyButton.className = 'buy-button';
      buyButton.textContent = 'Mais sobre';
      buyButton.addEventListener('click', () => {
        goToBicyclePage(index + 1);
      });
      productDiv.appendChild(buyButton);
  
      colDiv.appendChild(productDiv);
      productContainer.appendChild(colDiv);
    });
  }

  document.addEventListener("DOMContentLoaded", function() {
    loadProduct();
  });
  
  
  function goToBicyclePage(bicycleId) {
    const selectedBicycle = bicicletas.find(bicicleta => bicicleta.id === bicycleId);
    console.log(`Ir para a página da bicicleta ${selectedBicycle.name} ${selectedBicycle.price}`);
  }
  
  function changeActiveColor() {
    const elements = document.getElementsByClassName('buy-button');
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove('active');
      elements[i].classList.add('new-active');
    }
  }
  
  const changeColorButton = document.getElementById('changeColorButton');
  changeColorButton.addEventListener('click', changeActiveColor);
  
// Función para cambiar de tema claro a oscuro y viceversa
function changeTheme() {
    // Obtener el elemento body
    const body = document.body;
  
    // Toggle entre las clases "theme-light" y "dark-theme"
    body.classList.toggle('theme-light');
    body.classList.toggle('dark-theme');
  }
  
  // Obtener el botón de cambio de tema por su ID
  const changeThemeButton = document.getElementById('changeThemeButton');
  
  // Agregar un evento de clic al botón para llamar a la función changeTheme()
  changeThemeButton.addEventListener('click', changeTheme);
  