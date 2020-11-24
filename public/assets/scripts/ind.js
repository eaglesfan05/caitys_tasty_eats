
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

var addButtonClicked = document.getElementsByClassName('add-item')
var i;
for(i = 0; i < addButtonClicked.length; i++){
    addButtonClicked[i].addEventListener('click', function(event) {
        var button = event.target;
        var comfortItem = button.parentElement;
        var title = comfortItem.getElementsByClassName('title')[0].innerText       
        var price = comfortItem.getElementsByClassName('price')[0].innerText
        // alert(title + " " + price)
        addItemToCart(title, price)
        // get the element clicked
        // get the value of the title, price
        // set to variables
        // get the div of the order message
        // set the text to the value of the variables
    })
}

function addItemToCart(title, price) {
    let orderRow = document.createElement('div')

    let orderContents = `
    <div>${title} ${price} </div> ` 
console.log(orderContents)

orderRow.innerHTML += orderContents


    let order = document.getElementsByClassName('orderHere')[0];

//    orderRow.innerHTML = orderContents;
   order.append(orderRow)
    // console.log("fuckin" + item)
    // order.push(item)
    // console.log('this is the order' + order)
    // let i;
    // for(i = 0; i < order.length; i++) {
    //     document.getElementById('orderHere').innerText = order[i]
    // }
   
   
    
    
}

const toTop = document.querySelector('.scroll-top')

window.addEventListener('scroll', () => {
    if(window.pageYOffset> 100) {
        toTop.classList.add('active')
    } else {
        toTop.classList.remove('active')
    }
})