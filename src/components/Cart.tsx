// src/components/Cart.tsx
import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number; // 수량 속성 추가
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // 로컬 스토리지에서 장바구니 아이템 불러오기
  useEffect(() => {
    const savedItems = localStorage.getItem("cartItems");
    if (savedItems) {
      setCartItems(JSON.parse(savedItems));
    }
  }, []);

  // 아이템을 장바구니에서 제거하는 로직
  const handleRemoveItem = (product: Product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    let updatedItems: Product[];

    if (existingItem && existingItem.quantity > 1) {
      // 수량을 1 감소시킴
      updatedItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
    } else {
      // 개수가 1 이하일 경우, 장바구니에서 제거
      updatedItems = cartItems.filter((item) => item.id !== product.id);
    }

    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  // 아이템을 장바구니에 추가하는 로직
  const handleAddItem = (product: Product) => {
    const updatedItems = cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );

    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  return (
    <main className="main-content">
      <h2>장바구니</h2>
      {cartItems.length === 0 ? (
        <p>장바구니가 비어 있습니다.</p>
      ) : (
        <div className="product-grid">
          {cartItems.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.imageUrl} alt={product.name} />
              <h3 className="product-card__name">{product.name}</h3>
              <p className="product-card__price">
                {product.price.toLocaleString()}원
              </p>
              <p className="product-card__quantity">수량: {product.quantity}</p>
              {/* 수량 조절 버튼 */}
              <button onClick={() => handleRemoveItem(product)}>빼기</button>
              <button onClick={() => handleAddItem(product)}>추가</button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Cart;
