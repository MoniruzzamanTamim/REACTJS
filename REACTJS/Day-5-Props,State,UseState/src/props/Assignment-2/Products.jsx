import React from 'react'
import ProductsList from './ProductsList'
import Product from './Product'
import { v4 as uuidv4 } from 'uuid';

function Products() {
  return (
    <>
      <div style={{ textAlign: 'center', margin: '20px 0', fontSize: '24px', fontWeight: 'bold' }}>
        E-Commerce Site
      </div>



      {/* Parent div - flex container */}
      <div
        className="products-container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
        }}
      >
        {ProductsList.map((product) => (
          <Product product={product} key={uuidv4()} />
        ))}
      </div>
    </>
  )
}

export default Products
