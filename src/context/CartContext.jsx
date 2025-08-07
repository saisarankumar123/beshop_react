
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  const updateQuantity = (id, change) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const handleHeart = (product) => {
     alert("Like to add in Cart")
    setCart(prevCart => {
      const isAlreadyInCart = prevCart.find(item => item.id === product.id);
      if (isAlreadyInCart) return prevCart;

      return [
        ...prevCart,
        {
          id: product.id,
          name: product.title || product.name,
          image: product.img || product.image,
          newPrice: product.price || product.newPrice,
          oldPrice: product.old || product.oldPrice,
          sku: product.sku || `SKU-${product.id}`,
          quantity: 1,
        }
      ];
    });
  };

  const calculateTotal = (price, quantity) => (price * quantity).toFixed(2);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        updateQuantity,
        handleHeart,
        promoCode,
        setPromoCode,
        discountApplied,
        setDiscountApplied,
        calculateTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
