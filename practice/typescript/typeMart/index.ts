import products from './products'


const productName: string = 'tote bag';
let product;


products.forEach((item, index) => {
  if (item.name === productName)
    product = item;
})

//console.log(product);

if (product.preOrder === true) {
  console.log('We will send you a message when your product is on its way.');
}

let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;

let shippingAddress: string = 'address 7';

if (Number(product.price) > 24) {
  console.log('free shipping!')
  shipping = 0;
} else {
  shipping = 5;
}

if (shippingAddress.match('New York')) {
  taxPercent = 0.1;
}
else {
  taxPercent = 0.5;
}

taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;

console.log(`Product: ${product.name}\nAddress: ${shippingAddress}\nPrice: ${product.price}\nTax: ${taxTotal}\nShipping: ${shipping}\nTotal: ${total}`);
