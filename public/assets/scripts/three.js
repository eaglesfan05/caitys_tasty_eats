

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
let itemTitle;
let orderText;


var coll = document.getElementsByClassName('menu-section-header');
var i;
for(i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function() {
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

$('#sendOrder').click((e) => {
    e.preventDefault();
    // alert('CLICK CLICK MOTHAFUCKA')
    $('.add-item-to-order:checked').each(() => {
        let name = $(this).val()
        console.log(name)
        // alert(name + 'checked')
        // let order = [];
        // let selection = $(this).val()
        // console.log('this is the selection' + selection)
        // order.push(selection);
        // console.log('this is the order' + " " + order)
    })
})

// const addComboToMessage = (event) => {
//     event.preventDefault()
//     alert('Combo' )
// }



// function addText(orderText) {
//     // console.log('this is the order text' + orderText)
//     // console.log('Item title in new function' + itemTitle)
//     // console.log(orders)
//     // $('#orderHere').val(orders[i].price)
//     let ele = document.getElementById('orderHere');
//     let node = document.createTextNode(orderText)
//     ele.appendChild(node)
// }

// function addItemToMessage () {
//     // orders.forEach((order) => {
//     //     console.log('order: ' + order[i])
//     // })
//     for(var i = 0; i < orders.length; i++) {
//         // let stringThem = orders[i].toString()
//         // console.log(stringThem)
//         // $('.here').empty()
//         // console.log(orders)
//         // $('.here').append(orders[i])
//         // orderText = ''
//         itemTitle = orders[i].title
       
//         itemPrice = orders[i].price;
        
//         sideOne = orders[i].firstSide;
//         sideTwo = orders[i].secondSide;

//        if(sideOne !== undefined && sideTwo !== undefined) {
//         orderText += "Title: " + itemTitle + " | " + "Price: " + itemPrice + " | " + "First Side: " + sideOne + " | " + "Second Side: " + sideTwo 
        
//        } else {
//         orderText += "Title: " + itemTitle + " " + "Price: " + itemPrice
     
//        }
//     }
//     //     // titleArray.substring(0, titleArray.length -1);
        
        
//     //     // if(!sideOne && !sideTwo) {
//     //     //     alert('no sides')
//     //     //     // orderText += "Title: " + itemTitle + " " + "Price: " + itemPrice 
//     //     // } else {
//     //     //     // not getting to this else statement. 
//     //     //     alert('has sides')
//     //     // }
//     //     // if(sideOne == undefined && sideTwo == undefined) {
//     //     //     orderText += "Title: " + itemTitle + " " + "Price: " + itemPrice 
//     //     // }

//     //     // console.log(orderText)
//     //     // $('#orderHere').val(orderText)
//     //     // (sideOne && sideTwo) {
          
//     //     //     putInText()
//     //     // } else {
//     //     //     orderText += "Title: " + itemTitle + " " + "Price: "  + itemPrice
//     //     //     putInText()
//     //     // }if
      
        
//     //     // let brhere = document.createElement('</br>')
//     //     // orderText += itemTitle + "title "
//     //     // console.log(itemTitle)
//     //     // let motion = $('.here').append(itemTitle)

//     //     // putInText()
//     //     // $('#orderHere').innerText = orderText
//     //     // console.log("item title: " + itemTitle)
//     //     // orders.toString()
//     //     // console.log(orders)
//     //     // console.log(orders[i])
//     //     // orders = orders[i]
//     //     // let menuItem = JSON.stringify(orders[i].title)
//     //     // let text = JSON.stringify(orders )
//     //     // // if(!firstSide || !secondSide || !comboOrder) {
//     //     // //     // text += "Order Item " + menuItem
//     //     // // } else {
//     //     // //     // text += "Order Item " + menuItem + "Combo Item "
//     //     // // }
        
//     //     // // console.log("this is the text" + text)

//     //     // // text = text.substring(1, text.length -1)
//     //     // text = menuItem.substring(1, menuItem.length -1)
//     //     // $("#orderHere").val(orders)
//     // }
//     // let firstText = JSON.stringify(firstSide)
//     // alert(firstText)
//     // console.log(orders + "in the order box")
//     // let text = JSON.stringify(orders);
//     // console.log(text)
//     // let orderTitle = orders.title
//     // console.log(orderTitle)
//     // $('#orderHere').val(text)
//     // $('.here').append(orderText + "<br>")
//     addText(orderText)
// }
// // create event listener for add  item buttons being clicked
// var addItemButton = $('.add-item-to-order');
// for(var i = 0; i < addItemButton.length; i++)  {
//     addItemButton[i].addEventListener('click', function(event) {
//         let title;
//         let price;
      

//         let order = {
//             title,
//             price
//         }
//         let button = event.target
//         let messageItem = button.parentElement.parentElement
//         title = messageItem.getElementsByClassName('title')[0].innerText
//         order.title = title
//         price = messageItem.getElementsByClassName('price')[0].innerText
//         order.price = price;
//         item = title + price
//         orders.push(order);
//         console.log(orders)
        
//         // addTextToMessage(orders)
//     //    $('#orderHere').val(orders)
//         addItemToMessage()
//     })
// }

// // create event listener for add  meat buttons being clicked
// var addMeatButton = $('.comboMeal');
// for(var i = 0; i <addMeatButton.length; i++) {
//     addMeatButton[i].addEventListener('click', function(event) {
//         let title;
//         let price;
//         let comboOrder = {
//             title,
//             price,
//             firstSide,
//             secondSide
//         }
       
//         let button = event.target
//         let meatClicked = button.parentElement.parentElement
//         title = meatClicked.getElementsByClassName('title')[0].innerText;
      
       
//         price = meatClicked.getElementsByClassName('price')[0].innerText;
      
//     //    console.log(comboOrder.title + comboOrder.price)
//     //    addItemToMessage()
        
// // create event listener for add  combo buttons being clicked
// var addComboButton = $('#add-combo');
// for(var i = 0; i < addComboButton.length; i++) {
//     addComboButton[i].addEventListener('click', function() {
//         $('.firstChoice:checked').each(function() {
//             firstSide = $(this).val()
//         })
//         comboOrder.firstSide = firstSide
//         $('.secondChoice:checked').each(function() {
//             secondSide = $(this).val()
//         })
//         comboOrder.secondSide = secondSide
//         alert(comboOrder.title + " " + comboOrder.firstSide + " " + comboOrder.secondSide + " " + comboOrder.price)
//     })
  
// }

// comboOrder.title = "Combo item: " + title;
// comboOrder.price = "Combo price: " + price
// // console.log(comboOrder)
//        orders.push(comboOrder)
//        addItemToMessage()
//        console.log(orders)
//     })
// }


})