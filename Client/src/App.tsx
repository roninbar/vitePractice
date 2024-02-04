import { useEffect, useState } from "react";
import "./App.css";
import Product from "./Components/Product";
import { IProduct } from "./types/IProduct";

function App() {
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data: IProduct[]) => setProducts(data));
  }, []);

  const [products, setProducts] = useState<IProduct[]>([]);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.name}>
          <Product
            name={product.name}
            description={product.desc}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        </li>
      ))}
    </ul>
  );
}

export default App;
