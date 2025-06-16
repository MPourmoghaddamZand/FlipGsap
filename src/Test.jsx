import React, { useRef } from 'react';
import gsap from 'gsap';
import Cart from './components/Cart';

// GSAP without Flip plugin for simpler clone animation

const Test = () => {
  const imgRef = useRef(null);
  const cartRef = useRef(null);

  const handleAddToCart = () => {
    const source = imgRef.current;
    const cart = cartRef.current;
    if (!source || !cart) return;
    const clone = source.cloneNode(true);
    document.body.appendChild(clone);
    const srcRect = source.getBoundingClientRect();
    const cartRect = cart.getBoundingClientRect();
    Object.assign(clone.style, {
      position: 'absolute',
      top: (srcRect.top + 60) + 'px',
      left: (srcRect.left + 60) + 'px',
      width: srcRect.width + 'px',
      height: srcRect.height + 'px',
      margin: '0',
      zIndex: '9999',
    });
    gsap.to(clone, {
      x: cartRect.left - srcRect.left - 50,
      y: cartRect.top - srcRect.top,
      width: 32,
      height: 32,
      duration: 0.6,
      opacity: 0,
      ease: 'power1.inOut',
      onComplete: () => clone.remove(),
    });
  };

  return (
    <div className="relative h-screen  overflow-x-hidden ">
      <div className="fixed top-4 right-4" ref={cartRef}>
        <Cart />
      </div>
      <button
        onClick={handleAddToCart}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer z-50"
      >
        افزودن به سبد خرید
      </button>
      <div className="absolute inset-0">
        {/* original static product image */}
        <img
          src="/img1.jpg"
          alt="product"
          ref={imgRef}
          className="absolute w-32 h-32 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        {/* clone is handled imperatively */}
      </div>
    </div>
  )
}

export default Test