import { useState, useEffect } from 'react';

export default function ProductList() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("useEffect ran"); 

    async function fetchProducts() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!res.ok) {
          throw new Error('Feil ved henting av produkter');
        }

        const data = await res.json();
        console.log('API Response:', data);

        if (data && data.length > 0) {
          setProduct(data[0]);
        } else {
          setError('Ingen produkter funnet');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []); 

  if (loading) {
    return <div>Laster produkt...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Produkt:</h2>
      {product ? (
        <div>
          <h3>{product.title}</h3>
          <p>{product.body}</p>
        </div>
      ) : (
        <p>Ingen produktdata tilgjengelig</p>
      )}
    </div>
  );
}
