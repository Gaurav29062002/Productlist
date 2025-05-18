console.log("Script loaded");

fetch('https://productlist-6to8.onrender.com/')
  .then(res => res.json())
  .then(data => {
    console.log("Products fetched:", data);

    const container = document.getElementById('product-container');
    container.innerHTML = '';  // clear container

    data.forEach(product => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <img src="${product.image}" alt="${product.name}" width="100" />
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error("Fetch error:", err));
