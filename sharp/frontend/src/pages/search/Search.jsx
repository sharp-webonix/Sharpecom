import React, { useState, useEffect } from "react";

const ProductSearch = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch products based on the search query
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:5000/products?search=${searchQuery}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch products whenever the search query changes
  useEffect(() => {
    fetchProducts();
  }, [searchQuery]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Search</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          fontSize: "16px",
          marginBottom: "20px",
        }}
      />

      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        {products.length > 0 ? (
          <ul>
            {products.map((product) => (
              <li key={product._id}>
                {product.name} - ${product.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductSearch;
