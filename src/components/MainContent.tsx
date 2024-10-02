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
    name: "RUGBY MERINO POLO KNIT [BROWN STRIPE]",
    price: 50000,
    imageUrl:
      "https://image.msscdn.net/thumbnails/images/goods_img/20240903/4398526/4398526_17253509491619_big.jpg?w=1200",
  },
  {
    id: 2,
    name: "레드 하트 로고 맨투맨 - 블랙 / BFUSW001730001",
    price: 75000,
    imageUrl:
      "https://image.msscdn.net/thumbnails/images/goods_img/20240801/4288950/4288950_17234187400333_big.png?w=1200",
  },
  {
    id: 3,
    name: "에일리언 그래픽 오버핏 롱슬리브 티셔츠 블랙",
    price: 55200,
    imageUrl:
      "https://image.msscdn.net/thumbnails/images/goods_img/20240813/4325275/4325275_17244056354605_big.jpg?w=1200",
  },
  {
    id: 4,
    name: "파라슈트 원턱 카고 데님 팬츠 [블랙]",
    price: 43300,
    imageUrl:
      "https://image.msscdn.net/thumbnails/images/goods_img/20240725/4274053/4274053_17254226160330_big.jpg?w=1200",
  },
];
const MainContent: React.FC = () => {
  return (
    <main className="main-content">
      <h2>신상품</h2>
      <div className="product-grid">
        {sampleProducts.map((product) => (
          <Link
            to={`/product/${product.id}`}
            className="product-card"
            key={product.id}
          >
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
