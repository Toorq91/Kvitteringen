// src/app/api/fetchProducts/route.js
export async function GET(req) {
    console.log('API Call received'); // Bekreft at API-kallet blir mottatt
    try {
        const { search = 'lettmelk', sort = 'price_desc' } = req.nextUrl.searchParams;
        console.log(`Søker etter: ${search}, Sorteringsvalg: ${sort}`);

        const url = `https://kassal.app/api/v1/products?search=${search}&sort=${sort}`;
        console.log(`Kaller API: ${url}`);

        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${process.env.KASSAL_API_TOKEN}`,
            },
        });

        if (!response.ok) {
            console.error('API Response Error:', response.statusText); // Logg feilstatus
            const errorData = await response.json();  // Logg også innholdet i feilmeldingen
            console.error('API Error Data:', errorData);
            throw new Error('Feil ved henting av produkter');
        }

        const data = await response.json();
        console.log('Data fra Kassal API:', data);

        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        console.error('Feil ved API-kall:', error.message);
        return new Response(JSON.stringify({ message: error.message }), { status: 500 });
    }
}
