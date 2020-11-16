// Check if document is still loading
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
  // add event listeners
 function ready() {
//   var addToCartButtons = document.getElementsByClassName('add-to-cart-button');

//   for(var i; i < addToCartButtons; i++) {
//     var button = addToCartButtons[i]
//     button.addEventListener('click', addButtonClicked)
//   }
var button = document.getElementsByClassName('add-to-cart-button')
button.addEventListener('click', function() {
    alert('clicked')
}) 
 }

// function addButtonClicked (event) {
//   // var button = event.target
//   // var itemAdded = button.parentElement
//   // var title = itemAdded.getElementsByClassName('title')[0].innerText
//   // var price = itemAdded.getElementsByClassName('price')[0].innerText
//   // alert(title, price)
//   // addToCart(title, price)
//   alert('clicked')
// }


//  function addToCart(title, price){
//   var cartRow = document.createElement('div')
//   var cart = document.getElementsByClassName('cart')[0]
//   var cartContents = `
//   <div>
// <span>${title}</span>
// <span>${price}</span>
// </div>
// `
// cartRow.innerHTML = cartContents
// cart.append(cartRow)
//  }
// var button = document.getElementsByClassName('add-to-cart-button');



