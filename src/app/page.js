import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container-fluid bg-dark min-vh-100 d-flex align-items-center">
      <div className="row w-100">
        <h1 className="text-danger text-center w-100">Thor's kvittering!</h1>
        <div className="col-md-3 d-flex flex-column justify-content-center">
          {Array.from({ length: 10 }, (_, i) => (
            <button
              key={i}
              className="btn btn-primary d-flex align-items-center justify-content-start mb-3"
              style={{ padding: '10px' }}
            >
                            {i === 0 && (
                <div className="me-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path
                      d="M20.0005 7L14.1543 12.9375C14.0493 13.0441 13.9962 13.0976 13.9492 13.1396C13.1899 13.8193 12.0416 13.8193 11.2822 13.1396C11.2352 13.0976 11.1817 13.0442 11.0767 12.9375C10.9716 12.8308 10.9191 12.7774 10.8721 12.7354C10.1127 12.0557 8.96397 12.0557 8.20461 12.7354C8.15771 12.7773 8.10532 12.8305 8.00078 12.9367L4 17M20.0005 7L20 13M20.0005 7H14"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}

              {/* SVG Icon for Button 2 */}
              {i === 1 && (
                <div className="me-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path
                      d="M20.0005 17L14.1543 11.0625C14.0493 10.9559 13.9962 10.9024 13.9492 10.8604C13.1899 10.1807 12.0416 10.1807 11.2822 10.8604C11.2352 10.9024 11.1817 10.9558 11.0767 11.0625C10.9716 11.1692 10.9191 11.2226 10.8721 11.2646C10.1127 11.9443 8.96397 11.9443 8.20461 11.2646C8.15759 11.2226 8.10506 11.1692 8 11.0625L4 7M20.0005 17L20 11M20.0005 17H14"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}

              {/* Button Text */}
              <span>{i === 0 ? 'Prishopp' : i === 1 ? 'Prisfall' : `Button ${i + 1}` }</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}