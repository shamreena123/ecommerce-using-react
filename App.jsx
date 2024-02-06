import React, { useState } from 'react';
import './App.css';

const productData = [
  { id: 1, title: 'Beige Heels', price: 999, description: 'Description for Product 1', image: 'beigesandals.jpg'},
  { id: 2, title: 'Black Heels', price: 1099, description: 'Description for Product 2', image: 'blackheel.jpg' },
  { id: 3, title: 'Blue Mules', price: 999, description: 'Description for Product 3', image: 'bluemules.jpg' },
  { id: 4, title: 'Boots', price: 1499, description: 'Description for Product 4', image: 'boots.jpg' },
  { id: 5, title: 'White Sandals', price: 899, description: 'Description for Product 5', image: 'chunkysandals.jpg' },
  { id: 6, title: 'Mules', price: 899, description: 'Description for Product 1', image: 'mules.jpg' },
  { id: 7, title: 'Shoe', price: 1299, description: 'Description for Product 1', image: 'shoe.jpg' },
  { id: 8, title: 'Brown Sandals', price: 899, description: 'Description for Product 1', image: 'th.jpg' },
  // Add more products as needed
];

const HomePage = ({ products, addToCart }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <pre><img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>INR {product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          </pre>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;
  const totalPages = Math.ceil(productData.length / productsPerPage);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, { ...product }]);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = productData.slice(startIndex, endIndex);

  return (
    <div>
      <nav>
        <div id='homepage'>
          <h1>Homepage</h1>
        </div>
        <div className="cart-icon">
          🛒
          <span className="badge">{cart.length}</span>
        </div>
      </nav>
      <HomePage products={displayedProducts} addToCart={addToCart} />
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous Page
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default App;
