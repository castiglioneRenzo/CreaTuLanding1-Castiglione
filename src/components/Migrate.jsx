import { useEffect } from 'react';
import { addDocumentToCollection } from '../firebase/db'; // Adjust the import path as necessary

function Migrate() {
    useEffect(() => {
    const url = 'https://fakestoreapi.com/products';

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
          data.forEach((item) => {
            addDocumentToCollection('productos', {
                title: item.title,
                price: item.price,
                description: item.description,
                category: item.category,
                image: item.image,
                rating: {
                    rate: item.rating.rate,
                    count: item.rating.count
                }
            });
          });
        })
        .catch((error) => console.error('Error fetching products:', error));
    }, []);
  return (
    <div>
      <h1>Migrating to Firebase</h1>
      <p>This component is for migrating data to Firebase.</p>
    </div>
  );
}

export default Migrate;