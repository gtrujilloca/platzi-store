import React from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/Checkout.scss';

const order = {
  id: 1,
  title: 'Gorgeous Granite Pants',
  price: 296,
  description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
  category: {
    id: 1,
    name: 'Clothes',
    image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=982',
  },
  images: ['https://api.lorem.space/image/fashion?w=640&h=480&r=290', 'https://api.lorem.space/image/fashion?w=640&h=480&r=363', 'https://api.lorem.space/image/fashion?w=640&h=480&r=747'],
};

const Checkout = () => {
  return (
    <div className="Checkout">
      <div className="Checkout-container">
        <h1 className="title">My order</h1>
        <div className="Checkout-content">
          <div className="order">
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
          </div>
        </div>
        <OrderItem product={order} />
      </div>
    </div>
  );
};

export default Checkout;
