import { useState, useEffect } from 'react';

export default function ProductList() {
  const [products, setProducts] = useState([]); // For å lagre hentede produkter
  const [loading, setLoading] = useState(true); // For å håndtere laste-tilstand
  const [error, setError] = useState(null); // For å håndtere eventuelle feil

  useEffect(() => {
    async function fetchProducts() {
      try {
        // API-kall
        const res = await fetch('/api/fetchProducts?search=lettmelk&sort=price_desc');
        
        // Hvis responsen ikke er OK, kast en feil
        if (!res.ok) {
          throw new Error('Feil ved henting av data');
        }
        
        const data = await res.json();
        setProducts(data); // Sett produktene
      } catch (error) {
        setError(error.message); // Hvis det er feil, sett feilmeldingen
      } finally {
        setLoading(false); // Sett loading til false uansett om det lykkes eller ikke
      }
    }

    fetchProducts();
  }, []); // Bruk tomt array for å kjøre kallet én gang ved mount

  // Hvis vi laster data, vis "Loading..."
  if (loading) {
    return <div>Loading...</div>;
  }

  // Hvis det er en feil, vis feilmeldingen
  if (error) {
    return <div style={{ color: 'red' }}>Error: {error}</div>;
  }

  // Når produktene er hentet, vis dem
  return (
    <div>
      <h2>Produkter:</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} NOK
          </li>
        ))}
      </ul>
    </div>
  );
}
