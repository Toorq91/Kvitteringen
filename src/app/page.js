'use client'; // Mark the file as a Client Component

import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import styles from './page.module.css'

export default function Home() {
  const handleButtonClick = (i) => {
    console.log(`Button ${i} clicked!`);
  };

  return (
    <div className="container-fluid bg-dark min-vh-100 d-flex align-items-center">
      <div className="row w-100">
        <h1 className="text-danger text-center w-100">Thor's kvittering!</h1>
        <div className="col-md-3 d-flex flex-column justify-content-center">
          {Array.from({ length: 6 }, (_, i) => (
            <button
              key={i}
              className="btn btn-primary d-flex align-items-center justify-content-start mb-3"
              style={{ padding: '10px' }}
              onClick={() => handleButtonClick(i)} // Attach the click handler directly to the button
            >
              {i === 0 && (
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
              )}
              {i === 1 && (
                <div className="me-3">
                  <Image
                    src="/img/dagligvarer.avif"
                    alt="Prishopp"
                    width={200}
                    height={100}
                    className='rounded-circle'
                  />
                  <span className={`${styles.customText}`}>Dagligvarer</span>
                </div>
              )}
              {i === 2 && (
                <div className="me-3">
                 <Image
                 src="/img/prishopp.jpg"
                 alt="Prishopp"
                 width={200}
                 height={100}
                 className='rounded-circle'
                 />      
                 <span className={`${styles.customText}`}>Prishopp</span>
                 </div>
              )}
              {i === 3 && (
                <div>
                  <Image
                  src="/img/prisfall.webp"
                  alt="Prisfall"
                  width={200}
                  height={100}
                  className='rounded-circle'
                  />
                  <span className={`${styles.customText}`}>Prisfall</span>
                </div>
              )}
              {i === 4 && (
                <div>
                  <Image
                  src="/img/kart.avif"
                  alt="Kart"
                  width={200}
                  height={100}
                  className='rounded-circle'
                  />
                  <span className={`${styles.customText}`}>Butikker i nærheten</span>
                </div>
              )}
              {i === 5 && (
                <div>
                  <Image
                  src="/img/matkasse.jpg"
                  alt="Matkasse"
                  width={200}
                  height={100}
                  className='rounded-circle'
                  />
                  <span className={`${styles.customText}`}>Matkasse</span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
