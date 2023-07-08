import React from 'react';
import './App.css';
import QRCode from 'react-qr-code';

function App() {
  const products = [
    { name: 'Lays', price: 10, quantity: 5 },
    { name: 'Kelloggs', price: 20, quantity: 3 },
    { name: 'M n M', price: 15, quantity: 2 },
  ];

  function calculateTotalPrice(product) {
    return product.price * product.quantity;
  }

  function printProductInfo(product) {
    const totalPrice = calculateTotalPrice(product);

    console.log('Product Name:', product.name);
    console.log('Price:', product.price);
    console.log('Quantity:', product.quantity);
    console.log('Total Price:', totalPrice);
  }
  // log the product information 

  products.forEach(printProductInfo)

  // Calculate the total price
  const totalBill = products.reduce(
    (total, product) => total + calculateTotalPrice(product),
    0
  );

  // Generate the bill information string
  const billInfo = products
    .map((product) => `${product.name}: $${calculateTotalPrice(product)}`)
    .join(', ');

  // Include the total price in the bill information
  const billInfoWithTotal = `${billInfo} | Total Bill: $${totalBill}`;
  console.log(billInfoWithTotal)


  return (
    <div className="bill-container">
      <h2 className="bill-header">YK'S MART Bill</h2>

      {products.map((product, index) => (
        <div key={index} className="product-info">
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Total Price: ${calculateTotalPrice(product)}</p>
        </div>
      ))}

      <p className="total-price">
        Total Bill: $
        {products.reduce(
          (total, product) => total + calculateTotalPrice(product),
          0
        )}
      </p>
      <div className="qr-code">
        <QRCode value={billInfoWithTotal} size={128} />
      </div>
    </div>
  );
}

export default App;
