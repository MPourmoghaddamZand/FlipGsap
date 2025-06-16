import React, { forwardRef } from 'react';

const Cart = forwardRef((props, ref) => (
    <div ref={ref} {...props} className="text-3xl">
        🛒
    </div>
));

export default Cart;
