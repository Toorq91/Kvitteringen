// Denne filen håndterer API-kall for å hente produkter fra Kassal API

export default async function handler(req, res) {
    // Sjekk om det er en GET-forespørsel (du kan legge til flere metoder senere)
    if (req.method === 'GET') {
      try {
        // Hent søkeord og sorteringsvalg fra spørringsparametre
        const { search = 'lettmelk', sort = 'price_desc' } = req.query;
  
        // Bygg URL-en til API-kallet
        const url = `https://kassal.app/api/v1/products?search=${search}&sort=${sort}`;
  
        // Gjør fetch-kallet til Kassal API med riktig header (Authorization)
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${process.env.KASSAL_API_TOKEN}`,  // Bruk API-nøkkelen fra .env-filen
          },
        });
  
        // Hvis responsen ikke er OK, kast en feil
        if (!response.ok) {
          throw new Error('Feil ved henting av produkter');
        }
  
        // Hent JSON-data fra API-responsen
        const data = await response.json();
  
        // Send data som svar til klienten
        res.status(200).json(data);
      } catch (error) {
        // Hvis det er en feil, returner en feilmelding
        res.status(500).json({ message: error.message });
      }
    } else {
      // Hvis det ikke er en GET-forespørsel, returner en 405 (Method Not Allowed)
      res.status(405).json({ message: 'Metoden støttes ikke' });
    }
  }