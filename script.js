


const products = [
  {name:"Classic Espresso",category:"Coffee",price:120,image:"https://img.magnific.com/free-photo/closeup-classic-fresh-espresso-served-dark-surface_1220-5376.jpg"},
  {name:"Caramel Cappuccino",category:"Coffee",price:180,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmvAjbbvewNnuaBLAngWg468FMLbeol9BTam6_xcG1tQzzoNuglJUtrho&s=10"},
  {name:"Iced Americano",category:"Coffee",price:150,image:"https://spooncalc.com/wp-content/uploads/2026/01/Iced-Americano-matters.webp"},

  {name:"Chocolate Chip Cookies",category:"Cookies",price:100,image:"https://www.modernhoney.com/wp-content/uploads/2020/12/Oatmeal-Chocolate-Chip-Cookies-6-scaled.jpg"},
  {name:"Oatmeal Raisin Cookies",category:"Cookies",price:110,image:"https://i.pinimg.com/1200x/9f/46/ea/9f46eaa22cac87589547884d7e413f20.jpg"},
  {name:"Butter Shortbread Cookies",category:"Cookies",price:90,image:"https://i.pinimg.com/736x/5c/8e/26/5c8e26db07115f7379014407c242016c.jpg"},

  {name:"Chocolate Truffle Cake",category:"Cakes",price:220,image:"https://i.pinimg.com/736x/ee/6e/f5/ee6ef5cbf05b16e404215abafd2eb24a.jpg"},
  {name:"Strawberry Cream Cake",category:"Cakes",price:210,image:"https://i.pinimg.com/736x/2f/10/89/2f10895ecd12ac32e9befe98b3c8f231.jpg"},
  {name:"Red Velvet Cake",category:"Cakes",price:230,image:"https://i.pinimg.com/736x/f1/fa/37/f1fa378de5b82e4deebef8dfac793b4a.jpg"},

  {name:"Chocolate Danish",category:"Pastries",price:150,image:"https://i.pinimg.com/736x/f9/bb/fa/f9bbfa8200af8d08f302594cc29d940e.jpg"},
  {name:"Butter Croissant",category:"Pastries",price:130,image:"https://i.pinimg.com/1200x/0d/08/76/0d08760883e3ffc22383bd4583a62da9.jpg"},
  {name:"Cream Puff",category:"Pastries",price:120,image:"https://i.pinimg.com/736x/b1/be/ac/b1beacce6f4252cf8b2228bb471211f7.jpg"},

  {name:"Vanilla Milkshake",category:"Milkshakes",price:160,image:"https://i.pinimg.com/736x/c8/3a/fb/c83afbed244397d12461f855d0806960.jpg"},
  {name:"Chocolate Milkshake",category:"Milkshakes",price:170,image:"https://i.pinimg.com/736x/44/c7/20/44c720ae340be2b62c60e71e3740e325.jpg"},
  {name:"Strawberry Milkshake",category:"Milkshakes",price:170,image:"https://i.pinimg.com/736x/ad/bb/8b/adbb8b385812e16742f463fedf2f1960.jpg"},

  {name:"Fresh Lemonade",category:"Drinks",price:100,image:"https://i.pinimg.com/736x/6c/59/52/6c59523c1a3b822d2761c335ae4ed0f0.jpg"},
  {name:"Iced Peach Tea",category:"Drinks",price:130,image:"https://i.pinimg.com/736x/5b/6a/14/5b6a14753f4eab989b81efdeb8b94176.jpg"},
  {name:"Mixed Fruit Smoothie",category:"Drinks",price:180,image:"https://i.pinimg.com/736x/2a/2e/64/2a2e6425495a5ec02937eea45db7c66c.jpg"},

  {name:"Garden Veggie Sandwich",category:"Sandwiches",price:160,image:"https://i.pinimg.com/736x/ee/f3/a8/eef3a814739bbc4a540f74f482babbb5.jpg"},
  {name:"Grilled Cheese Sandwich",category:"Sandwiches",price:170,image:"https://i.pinimg.com/736x/da/8f/36/da8f36c0f5a6e305cd14f2aa856a6ebe.jpg"},
  {name:"Paneer Tikka Sandwich",category:"Sandwiches",price:190,image:"https://i.pinimg.com/736x/ab/1d/7d/ab1d7d63dc3ad87625963f6935afb94b.jpg"},

  {name:"Artisan Sourdough",category:"Breads",price:180,image:"https://i.pinimg.com/1200x/3c/6c/3e/3c6c3eb64f20919c13aab6730e5664e7.jpg"},
  {name:"French Baguette",category:"Breads",price:150,image:"https://i.pinimg.com/736x/75/a9/f8/75a9f8eeb60bc8ff78bc2284e6690857.jpg"},
  {name:"Classic Brioche",category:"Breads",price:170,image:"https://i.pinimg.com/736x/3d/46/d5/3d46d5982ed9618823f67f0811fc9cd8.jpg"},

  {name:"Blueberry Cheesecake",category:"Desserts",price:230,image:"https://i.pinimg.com/736x/41/a9/22/41a922fa3f14f28f0eba6fc0ead9cdc0.jpg"},
  {name:"Cinnamon Roll",category:"Desserts",price:140,image:"https://i.pinimg.com/736x/89/6a/36/896a36b21b5d5da661f76a90ad64ab81.jpg"},
  {name:"Belgian Waffles",category:"Desserts",price:190,image:"https://i.pinimg.com/736x/5e/9e/f2/5e9ef22efa16b901a27f5b9ef804f3a8.jpg"},
  {name:"Chocolate Brownie",category:"Desserts",price:130,image:"https://i.pinimg.com/1200x/23/74/46/2374466fa632ebfd6f015e96c67015ce.jpg"},
  {name:"Avocado Toast",category:"Breakfast",price:210,image:"https://i.pinimg.com/1200x/54/5d/5d/545d5dacdad4ade25342fdfedf0aadd3.jpg"},
  {name:"Mango Smoothie",category:"Drinks",price:170,image:"https://i.pinimg.com/736x/89/79/78/8979787890938df537d960f23263df35.jpg"}
];

let activeCategory = "All";
let cart = [];

const categories = ["All", ...new Set(products.map(p => p.category))];

function renderCategories() {
  document.getElementById("categories").innerHTML = categories.map(category => `
    <button class="category-button ${activeCategory === category ? "active" : ""}"
      onclick="selectCategory('${category}')">${category}</button>
  `).join("");
}

function selectCategory(category) {
  activeCategory = category;
  renderCategories();
  renderProducts();
}

function renderProducts() {
  const search = document.getElementById("search").value.toLowerCase();

  const filtered = products.filter(product =>
    (activeCategory === "All" || product.category === activeCategory) &&
    product.name.toLowerCase().includes(search)
  );

  document.getElementById("products").innerHTML = filtered.map(product => {
    const index = products.indexOf(product);
    return `
      <article class="product-card">
        <img src="${product.image}" alt="${product.name}" loading="lazy"
          onerror="this.onerror=null;this.alt='Image unavailable for ${product.name}';this.style.objectFit='contain';this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22%23eee6dc%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2218%22 text-anchor=%22middle%22 fill=%22%2349372d%22%3EImage unavailable%3C/text%3E%3C/svg%3E'">
        <div class="product-info">
          <h3>${product.name}</h3>
          <p class="rating">★★★★★ <span>4.8</span></p>
          <div class="product-bottom">
            <span class="price">₹${product.price}</span>
            <button class="add-button" onclick="addToCart(${index})">Add to cart</button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  if (!filtered.length) {
    document.getElementById("products").innerHTML = "<p>No matching products found.</p>";
  }
}

function addToCart(index) {
  const product = products[index];
  const existing = cart.find(item => item.name === product.name);

  if (existing) existing.quantity++;
  else cart.push({...product, quantity: 1});

  updateCart();
}

function updateCart() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  document.getElementById("cart-count").textContent = count;
  document.getElementById("cart-total").textContent = total;

  document.getElementById("cart-items").innerHTML = cart.map((item, index) => `
    <div class="cart-row">
      <div>
        <strong>${item.name}</strong>
        <p>₹${item.price} × ${item.quantity}</p>
      </div>
      <div>
        <button onclick="changeQuantity(${index},-1)">−</button>
        ${item.quantity}
        <button onclick="changeQuantity(${index},1)">+</button>
      </div>
    </div>
  `).join("");
}

function changeQuantity(index, amount) {
  cart[index].quantity += amount;
  if (cart[index].quantity <= 0) cart.splice(index, 1);
  updateCart();
}

function toggleCart() {
  document.getElementById("cart-panel").classList.toggle("open");
  document.getElementById("overlay").style.display =
    document.getElementById("cart-panel").classList.contains("open") ? "block" : "none";
}

function closePanels() {
  document.getElementById("cart-panel").classList.remove("open");
  document.getElementById("overlay").style.display = "none";
}

function openCheckout() {
  if (!cart.length) {
    alert("Your cart is empty.");
    return;
  }
  closePanels();
  document.getElementById("checkout").classList.add("show");
}

function closeCheckout() {
  document.getElementById("checkout").classList.remove("show");
}

document.getElementById("checkout-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const form = new FormData(this);
  const customer = form.get("name");
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  alert(
    "Thank you, " + customer + "!\n" +
    "Your demo order total is ₹" + total + ".\n" +
    "Payment: " + form.get("payment") + ".\n\n" +
    "This is a website demo. No real order has been sent."
  );

  cart = [];
  updateCart();
  this.reset();
  closeCheckout();
});

renderCategories();
renderProducts();
updateCart();
