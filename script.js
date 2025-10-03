// Lista de produtos com imagens finais
const products = [
  { 
    id: 1, 
    name: "Sofá Moderno", 
    price: 499, 
    img: "https://media.istockphoto.com/id/2206251889/pt/foto/modern-living-room-with-turquoise-sofa-and-wooden-furniture.jpg?s=2048x2048&w=is&k=20&c=VKTLqjy5hiY4C7bd9hELfNC1EOQfiBL8hZMORSsoF8o=" 
  },
  { 
    id: 2, 
    name: "Mesa de Jantar", 
    price: 299, 
    img: "https://media.istockphoto.com/id/1309042044/pt/foto/interior-design-of-stylish-dining-room-interior-with-family-wooden-table-modern-chairs-plate.jpg?s=2048x2048&w=is&k=20&c=ONXrfHyQo8ekTVt5weRcqrYRnB9yT-oPRZsaG60YyrQ=" 
  },
  { 
    id: 3, 
    name: "Cama Casal", 
    price: 699, 
    img: "https://media.istockphoto.com/id/157529891/pt/foto/branco-e-luxuoso-hotel-quarto-de-dormir.jpg?s=2048x2048&w=is&k=20&c=qnPsciOffSM7AJyiCMzzqQIS88x8H3QnILL4AoGixHw=" 
  },
  { 
    id: 4, 
    name: "Poltrona Aconchego", 
    price: 199, 
    img: "https://media.istockphoto.com/id/1281696939/pt/foto/blue-armchair-isolated-on-a-white.jpg?s=612x612&w=0&k=20&c=9eFH6JOuPH4qKVQpf6Fv_-D91ZMt32AIFaopjyrHtC0=" 
  },
  { 
    id: 5, 
    name: "Estante Minimalista", 
    price: 249, 
    img: "https://media.istockphoto.com/id/826717278/pt/foto/home-library.jpg?s=2048x2048&w=is&k=20&c=t3aExI1kwveAA0sFm1P4v539QMKVW7dUkAaY5L1-CQ8=" 
  },
  { 
    id: 6, 
    name: "Candeeiro de Pé", 
    price: 129, 
    img: "https://media.istockphoto.com/id/2164110269/pt/foto/bedroom-interior-with-modern-reading-lamp-on-bedside-table-close-to-double-bed-with-pillow.jpg?s=2048x2048&w=is&k=20&c=-ePBcQv18M6ROFwAOT5ew7mevCWgKsn-fKtxHXq3-1E=" 
  }
];

// Renderizar produtos
const productList = document.getElementById("product-list");
products.forEach(p => {
  const div = document.createElement("div");
  div.classList.add("product");
  div.innerHTML = `
    <img src="${p.img}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>€${p.price}</p>
    <button onclick="addToCart(${p.id})">Adicionar</button>
  `;
  productList.appendChild(div);
});

// Carrinho
let cart = [];

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - €${item.price} 
      <button onclick="removeFromCart(${index})">❌</button>`;
    cartItems.appendChild(li);
  });

  document.getElementById("cart-total").innerText = total;
  document.getElementById("cart-count").innerText = cart.length;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("open");
}

function checkout() {
  if (cart.length === 0) {
    alert("O carrinho está vazio!");
  } else {
    alert("Compra finalizada com sucesso!");
    cart = [];
    updateCart();
    toggleCart();
  }
}
