// Kvitteringen/src/app/page.js
'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import styles from './styles/page.module.css';  // Styles for hovedsiden
import ProductList from '../../components/productList';
import Button from '../../components/Button';

export default function Home() {
  return (
    <div className="container-fluid bg-dark min-vh-100 d-flex align-items-center">
      <div className="row w-100">
        <h1 className="text-danger text-center w-100">Kvitteringen!</h1>
        <div className="col-md-3 d-flex flex-column justify-content-center">
          <Button href="/info" image="/img/info.jpg" alt="Info" label="Info" />
          <Button href="/dagligvarer" image="/img/dagligvarer.avif" alt="Dagligvarer" label="Dagligvarer" />
          <Button href="/prishopp" image="/img/prishopp.jpg" alt="Prishopp" label="Prishopp" />
          <Button href="/prisfall" image="/img/prisfall.webp" alt="Prisfall" label="Prisfall" />
          <Button href="/kart" image="/img/kart.avif" alt="Kart" label="Butikker i nærheten" />
          <Button href="/matkasse" image="/img/matkasse.jpg" alt="Matkasse" label="Matkasse" />
        </div>
      </div>

      <ProductList />  {/* Dette vil vise produktet som vi henter fra JSONPlaceholder */}
    </div>
  );
}
