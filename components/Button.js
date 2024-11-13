// Kvitteringen/components/Button.js
import Link from 'next/link';
import Image from 'next/image';
import styles from '../src/app/styles/page.module.css';  // Korrigert importbane

const Button = ({ href, image, alt, label }) => {
  return (
    <Link href={href}>
      <button
        className="btn btn-primary d-flex align-items-center justify-content-start mb-3"
        style={{ padding: '10px' }}
      >
        <div>
          <Image
            src={image}
            alt={alt}
            width={200}
            height={100}
            className="rounded-circle"
          />
          <span className={styles.customText}>{label}</span>
        </div>
      </button>
    </Link>
  );
};

export default Button;
