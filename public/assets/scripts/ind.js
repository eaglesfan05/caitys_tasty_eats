

$(function() { 

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
var comboButtons = document.getElementsByClassName('combo');
var i;
for(i = 0; i< comboButtons.length; i++) {
    comboButtons[i].addEventListener('click', function() {
        alert('click')
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


$('.hide-from-view').click(function() {
    var text = '';
    $('.hide-from-view:checked').each(function() {
        text += $(this).val() + ','
    })

    text =text.substring(0, text.length -1)
    $('#orderHere').val(text)
})

// $('#orderButton').click(function(e) {
//     e.preventDefault()
  
//     var order = [];
//   $.each($('input[name="choices"]:checked'), () => {
//       order.push($(this.val()))
//       alert('order is ' + order.join(','))
//   })
//     // $('#orderHere').text(order)
// })
// get value of all checked buttons


// let orderButton = document.getElementById('orderButton')
// orderButton.addEventListener('click', function(e) {
//    e.preventDefault();
//    var order = []
// const checkedButtons = document.querySelectorAll('input[name="choices"]:checked');
// checkedButtons.forEach(function() {
//     let selection = checkedButtons.values()
//     console.log(selection)
// })
// })



// checkedButtons.forEach((checkbox)=> {
    // order.push(checkbox.value)
    // console.log(order)
// })
// var addButtonClicked = document.getElementsByClassName('add-item')
// var i;
// for(i = 0; i < addButtonClicked.length; i++){
//     var button = addButtonClicked[i]
//     button.addEventListener('click', addItemToCart)
// }

// function addItemToCart(event) {
//     event.preventDefault()
//     var button = event.target;
//     var menuItem = button.parentElement;
//     var title = menuItem.getElementsByClassName('title')[0].innerText;
//     var price = menuItem.getElementsByClassName('price')[0].innerText;

//     addTextToMessage(title, price)
    
// }

const addTextToMessage =(title, price) => {

   
    // alert(title+  price)

    // let textarea = document.createElement('textarea');
    // textarea.setAttribute('name', 'comments')
    
    let orders = []
    let order = {
        id: Date.now(),
        title: title,
        price: price
    }

for(var i = 0; i < orders.length; i++) {
    order = order[i]
    orders.push(order)
    console.log(orders)

}
   
    // orders[orders.length] = title + price
    // console.log(orders)
    // for(var i = 0; i < orders.length; i++) {
      
        // document.getElementById('orderHere').value=
        // `<div>${title} ${price}</div>` 
    // }
   
  
//    orders.push(item)

//    orders.length(price)
    // textarea.innerText =`${title} `
    // let orderHere = document.getElementsByClassName('orderHere');
    // orderHere.append(textarea2804)
   
// console.log('item here' + itemHere);

console.log('order' + order.title )

// Store
localStorage.setItem("title", title);
localStorage.setItem("price", price);

// Retrieve
// document.getElementById("orderHere").innerHTML = localStorage.getItem("title" + "price");

    // for(var i = 0; i< order.length; i++) {
        // console.log(order.length)
        // alert(order[i])
        // console.log(order)
     
        // let item = document.getElementById('orderHere')[0];
        // item.value = order[i]
    }
    
    // let orderRow = document.createElement('div')
    // let order = document.getElementsByClassName('orderHere')[0];
    // let orderContents = `
    // <div class="cart-row"><span>${title}</span> ${" "} <span>${price}</span> </div> ` 
// console.log(orderContents)

// orderRow.innerHTML = orderContents


  

//    orderRow.innerHTML = orderContents;
//    order.append(orderRow)
    // console.log("fuckin" + item)
    // order.push(item)
    // console.log('this is the order' + order)
    // let i;
    // for(i = 0; i < order.length; i++) {
    //     document.getElementById('orderHere').innerText = order[i]
    // }
   
   
  // alert('done')

// }

// let addItem = document.getElementsByClassName('add-item')
// addItem.addEventListener('click',function() {
//     alert('clicked')
// })

function checkThem() {
    const checkboxes = document.getElementsByClassName('hide-from-view');
    // for(var i; i< checkboxes.length; i++) {
    //     checkboxes = checkboxes[i]
    // }
    checkboxes.addEventListener('change',(e)=> {
        if(e.target.checked){
            alert('checked')
        } else {
            alert('fuck')
        }

    })
}


// let order = []

// for(var i; i < checkboxes.length; i++) {
//     checkboxes[i].addEventListener('click', addToMessage)
// }

function addToMessage(event) {
    // alert('checked')
// let title = event.target.name;
// console.log(title)
}

// for(const button of addItem) {
//     button.addEventListener('click', ()=> {
//         alert('click')
//     })
// }

// addItem.forEach(function(checkbox) {
//     checkbox.addEventListener('change', function(){
//         alert('checked')
//     })
// })


const toTop = document.querySelector('.scroll-top')

window.addEventListener('scroll', () => {
    if(window.pageYOffset> 100) {
        toTop.classList.add('active')
    } else {
        toTop.classList.remove('active')
    }
})
})
