import React from 'react';
import ProductInfo from '@components/ProductInfo';
import '@styles/ProductDetail.scss';
import close from '@icons/icon_close.png';
import Image from 'next/image';

const ProductDetail = () => {
  return (
    <aside className="ProductDetail">
      <div className="ProductDetail-close">
        <Image height="100%" width="100%" layout="responsive"  src={close} alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
};

export default ProductDetail;
