// lib/kassalApi.js
export async function fetchProducts(search = 'lettmelk', sort = 'price_desc') {
    const response = await fetch(`https://kassal.app/api/v1/products?search=${search}&sort=${sort}`, {
      headers: {
        Authorization: `Bearer ${process.env.KASSAL_API_TOKEN}`,  // Husk å sette KASSAL_API_TOKEN i .env
      },
    });
  
    if (!response.ok) {
      throw new Error('Error fetching data from Kassal API');
    }
  
    return response.json();
  }