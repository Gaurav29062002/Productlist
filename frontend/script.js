const apiUrl = 'https://productlist-6to8.onrender.com/'; // Replace this with your real backend URL

async function loadProducts() {
  try {
    const res = await fetch(apiUrl);
    const products = await res.json();

    const container = document.getElementById('product-list');
    container.innerHTML = '';

    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹ ${product.price}</p>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading products:', error);
  }
}

loadProducts();
