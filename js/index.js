// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')

  const totalProductPrice = price.textContent * quantity.value

  const subtotal = product.querySelector('.subtotal span')
  subtotal.textContent = totalProductPrice
  return totalProductPrice
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = product.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const totalHolder = document.querySelector('#total-value span')
  let totalAmount = 0
  console.log(totalAmount)
  const productList = document.querySelectorAll('.product')
  console.log(productList)
  productList.forEach((product) => {
    totalAmount += updateSubtotal(product)
  })
  totalHolder.textContent = totalAmount

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
