import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity?: number; // quantity field made optional
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
const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = sampleProducts.find((p) => p.id.toString() === id);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  useEffect(() => {
    const savedItems = localStorage.getItem("cartItems");
    if (savedItems) {
      setCartItems(JSON.parse(savedItems));
    }
  }, []);
  const handleAddItem = (product: Product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    let updatedItems: Product[];
    if (!existingItem) {
      updatedItems = [...cartItems, { ...product, quantity: 1 }];
    } else {
      updatedItems = cartItems.map(
        (item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity! + 1 }
            : item // !를 사용하여 optional chaining을 피함
      );
    }
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };
  const handleRemoveItem = (product: Product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    let updatedItems: Product[];
    if (existingItem && existingItem.quantity! > 1) {
      updatedItems = cartItems.map(
        (item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity! - 1 }
            : item // !를 사용하여 optional chaining을 피함
      );
    } else {
      updatedItems = cartItems.filter((item) => item.id !== product.id);
    }
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };
  if (!product) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }
  const inCart = cartItems.some((item) => item.id === product.id);
  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <img
        src={product.imageUrl}
        alt={product.name}
        className="product-detail__image"
      />
      <p className="product-detail__price">
        {product.price.toLocaleString()}원
      </p>
      <p className="product-detail__description">
        이곳에 상품 설명을 추가하세요.
      </p>
      <button
        className="product-detail__add-to-cart"
        onClick={() =>
          inCart ? handleRemoveItem(product) : handleAddItem(product)
        }
      >
        {inCart ? "담기 취소" : "장바구니에 담기"}
      </button>
    </div>
  );
};
export default ProductDetail;
