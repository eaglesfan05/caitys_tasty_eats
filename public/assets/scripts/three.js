$(function() {
    let item;
let orders = []
let meat;
let firstSide;
let secondSide;
let price;
let comboOrder;
let combo = {
   comboOrder
}


var coll = document.getElementsByClassName('menu-section-header');
var i;
for(i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function() {
        // this.classList.toggle('active');
        var content = this.nextElementSibling;
        if(content.style.display === 'block') {
            content.style.display = "none";
        } else {
            content.style.display = "block"
        }

    })
}
var comboButtons = document.getElementsByClassName('comboMeal');
var i;
for(i = 0; i< comboButtons.length; i++) {
    comboButtons[i].addEventListener('click', function() {
        // alert('click')
        document.getElementById('side-options').style.display = 'block';
    }) 
}

var closeSideChoices = document.getElementsByClassName('combo-sides');
var i;
for(i = 0; i< closeSideChoices.length; i++) {
    closeSideChoices[i].addEventListener('click', function() {
        document.getElementById('side-options').style.display = 'none'
    })
}

// const addItemToMessage = (event) => {
//     // event.preventDefault();
//     $('.add-item-to-order:checked').each(()=> {
//         item = $(this).val();
//         console.log('item' + item)
//         // item = item.substring(0, item.length -1)
//         // order.push(item)
//         // console.log('order' + order)
//         // console.log("items: " + item)
//     })
// //    
// }

const addComboToMessage = (event) => {
    event.preventDefault()
    alert('Combo' )
}

const addMeatToMessage = (event) => {
    event.preventDefault()
  
}





// create event listener for add  item buttons being clicked
var addItemButton = $('.add-item-to-order');
for(var i = 0; i < addItemButton.length; i++) {
    addItemButton[i].addEventListener('click', function(event) {
        let title;
        let price;
        // alert('click')

        let order = {
            title,
            price
        }
        let button = event.target
        let messageItem = button.parentElement.parentElement
        title = messageItem.getElementsByClassName('title')[0].innerText
        order.title = title
        price = messageItem.getElementsByClassName('price')[0].innerText
        order.price = price;
        // console.log(order)
        // alert('title' + title)
        orders.push(order);
        console.log(orders)
        
        // let textHere = $('#orderHere');
        // textHere.val(orders)
    })
}


// create event listener for add  meat buttons being clicked
var addMeatButton = $('.comboMeal');
for(var i = 0; i <addMeatButton.length; i++) {
    addMeatButton[i].addEventListener('click', function(event) {
        let title;
        let price;
        let comboOrder = {
            title,
            price,
            firstSide,
            secondSide
        }
       
        let button = event.target
        let meatClicked = button.parentElement.parentElement
        title = meatClicked.getElementsByClassName('title')[0].innerText;
        comboOrder.title = "Combo item: " + title;
       
        price = meatClicked.getElementsByClassName('price')[0].innerText;
        comboOrder.price = "Combo price: " + price + "includes 2 sides: "
       console.log(comboOrder.title + comboOrder.price)
        
// create event listener for add  combo buttons being clicked
var addComboButton = $('#add-combo');
for(var i = 0; i < addComboButton.length; i++) {
    addComboButton[i].addEventListener('click', function() {
        $('.firstChoice:checked').each(function() {
            firstSide = $(this).val()
        })
        comboOrder.firstSide = firstSide
        $('.secondChoice:checked').each(function() {
            secondSide = $(this).val()
        })
        comboOrder.secondSide = secondSide
        alert(comboOrder.title + " " + comboOrder.firstSide + " " + comboOrder.secondSide + " " + comboOrder.price)
    })
}
       orders.push(comboOrder)

       console.log(orders)
    })
}
// for (var i in orders) {
//     console.log('Order Item: ' + i) 
//         for(j in orders[i]) {
//             console.log(orders[i][j])
        
//     }
// }
})