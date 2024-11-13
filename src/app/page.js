'use client'; // Mark the file as a Client Component

import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import styles from './page.module.css'
import ProductList from '../../components/productList';
import Link from 'next/link'; // Importer Link fra next.js

export default function Home() {
  const handleButtonClick = (i) => {
    console.log(`Button ${i} clicked!`);
  };

  return (
    <div className="container-fluid bg-dark min-vh-100 d-flex align-items-center">
      <div className="row w-100">
        <h1 className="text-danger text-center w-100">Kvitteringen!</h1>
        <div className="col-md-3 d-flex flex-column justify-content-center">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i}>
              {/* INFO-knappen, naviger til /info når den klikkes */}
              {i === 0 ? (
                <Link href="/info">
                  <button
                    className="btn btn-primary d-flex align-items-center justify-content-start mb-3"
                    style={{ padding: '10px' }}
                    onClick={() => handleButtonClick(i)}
                  >
                    <div>
                      <Image
                        src="/img/info.jpg"
                        alt="Info"
                        width={200}
                        height={100}
                        className='rounded-circle'
                      />
                      <span className={`${styles.customText}`}>Info</span>
                    </div>
                  </button>
                </Link>
              ) : (
                // For alle andre knapper (ikke INFO)
                <button
                  key={i}
                  className="btn btn-primary d-flex align-items-center justify-content-start mb-3"
                  style={{ padding: '10px' }}
                  onClick={() => handleButtonClick(i)}
                >
                  <div>
                    {i === 1 && (
                      <Image
                        src="/img/dagligvarer.avif"
                        alt="Dagligvarer"
                        width={200}
                        height={100}
                        className='rounded-circle'
                      />
                    )}
                    {i === 2 && (
                      <Image
                        src="/img/prishopp.jpg"
                        alt="Prishopp"
                        width={200}
                        height={100}
                        className='rounded-circle'
                      />
                    )}
                    {i === 3 && (
                      <Image
                        src="/img/prisfall.webp"
                        alt="Prisfall"
                        width={200}
                        height={100}
                        className='rounded-circle'
                      />
                    )}
                    {i === 4 && (
                      <Image
                        src="/img/kart.avif"
                        alt="Kart"
                        width={200}
                        height={100}
                        className='rounded-circle'
                      />
                    )}
                    {i === 5 && (
                      <Image
                        src="/img/matkasse.jpg"
                        alt="Matkasse"
                        width={200}
                        height={100}
                        className='rounded-circle'
                      />
                    )}
                    <span className={`${styles.customText}`}>{i === 1 ? "Dagligvarer" : i === 2 ? "Prishopp" : i === 3 ? "Prisfall" : i === 4 ? "Butikker i nærheten" : "Matkasse"}</span>
                  </div>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Legg til ProductList-komponenten her */}
      <ProductList /> {/* Dette vil vise produktet som vi henter fra JSONPlaceholder */}
    </div>
  );
}
