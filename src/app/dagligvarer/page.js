'use client';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function DagligvarePage() {
    const rows = Array.from({ length: 8}, (_, rowIndex) =>
    Array.from({ length: 4}, (_, colIndex) => ({
        label: `Rad ${rowIndex + 1}, Knapp ${colIndex + 1}`,
        id: `${rowIndex}-${colIndex}`,
    }))
);
    
return (
    <div className="container mt-5">
      <h1 className="mb-4">Dagligvarer</h1>
      <p>Her finner du alle varene som finnes i butikk:</p>
      <div className="row">
        {rows.map((row, rowIndex) => (
          <div className="row mb-3" key={rowIndex}>
            {row.map((button) => (
              <div className="col-md-3" key={button.id}>
                <button
                  className="btn btn-primary w-100"
                  onClick={() => alert(`${button.label} klikket`)}
                >
                  {button.label}
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}