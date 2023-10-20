// pages/productList/[slug].js
import React from 'react';
import { useRouter } from 'next/router';

const ProductDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Product Details for Product ID: {slug}</h1>
    </div>
  );
};

export default ProductDetail;
