import React from "react";
import { Link } from "react-router-dom";
import "../styles/MainContent.css";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const sampleProducts: Product[] = [
  {
    id: 1,
    name: "패션 아이템 1",
    price: 50000,
    imageUrl: "https://via.placeholder.com/300x400?text=Item+1",
  },
  {
    id: 2,
    name: "패션 아이템 2",
    price: 75000,
    imageUrl: "https://via.placeholder.com/300x400?text=Item+2",
  },
  {
    id: 3,
    name: "패션 아이템 3",
    price: 25000,
    imageUrl: "https://via.placeholder.com/300x400?text=Item+3",
  },
];

const MainContent: React.FC = () => {
  return (
    <main className="main-content">
      <h2>신상품</h2>
      <div className="product-grid">
        {sampleProducts.map((product) => (
          <Link to={`/product/${product.id}`} className="product-card" key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <h3 className="product-card__name">{product.name}</h3>
            <p className="product-card__price">
              {product.price.toLocaleString()}원
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default MainContent;
