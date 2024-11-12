// pages/index.js

import ProductList from '@components/ProductList';

export default function Home() {
  return (
    <div>
      <h1>Velkommen til vår butikk</h1>
      <ProductList />  {/* Her legger vi til produktlisten */}
    </div>
  );
}