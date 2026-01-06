import React from 'react'

function Product({ product }) {
    const { name, description, image, price } = product

    return (
        <div
            className="product-card"
            style={{
                flex: '0 1 calc(33.333% - 20px)', // 3 per row
                boxSizing: 'border-box',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '15px',
                backgroundColor: '#f9f9f9',
                transition: 'transform 0.2s',
            }}
        >
            {/* Product Image */}
            <div className="product-image">
                <img
                    src={image}
                    alt={name}
                    style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover',
                        borderRadius: '5px',
                    }}
                />
            </div>

            {/* Product Content */}
            <div
                className="product-content"
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginTop: '10px',
                    textAlign: 'left',
                    gap: '10px',
                    flexWrap: 'wrap',
                }}
            >
                <div style={{ flex: '1 1 60%' }}>
                    <h5 style={{ margin: '0 0 5px 0' }}>{name}</h5>
                    <p style={{ margin: 0, fontSize: '14px', color: '#555' }}> {description}</p>
                    <button type="button" style={{width:'100%', border:'1px solid black',marginTop:'10px'}}>Buy Now</button>
                </div>
                <div style={{ flex: '1 1 30%', textAlign: 'right' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '16px' }}>৳{price}</span>
                </div>
            </div>
        </div>
    )
}

export default Product
