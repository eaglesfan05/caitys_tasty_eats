
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



var order = ''
var item = ''

var comboItem = ''
var firstChoice = ''
var secondChoice = ''
var combo = comboItem + firstChoice + secondChoice
function buildOrder(item, combo) {
    // let order = '';
    if (!combo) {
        console.log(item)
    }else {
        console.log(combo)
    
    }
  
}


    $('.hide-from-view').click(function() {
     
        ;
        $('.hide-from-view:checked').each(function() {
            item += "Order Item:" + $(this).val() + " | "
        })
        buildOrder(item)
        // item =item.substring(0, item.length -1)
        // $('#orderHere').val(item)
    })

    $('.comboMeal').click(function() {
        combo = comboItem + firstChoice + secondChoice
        ;
        $('.comboMeal:checked').each(function() {
            comboItem += "Combo Item:" + $(this).val() + " | "
        })
        // buildOrder(comboItem)
        // item =item.substring(0, item.length -1)
        // $('#orderHere').val(item)
    })
    
    
    // combo buttons
    $('.add-combo').click(function() {
        
        var text = ''   
       
        
       
        $('.firstChoice:checked').each(function() {
            firstChoice+= "First Side: " + $(this).val()
            // buildOrder(firstChoice)
        })
        $('.secondChoice:checked').each(function() {
            secondChoice+= "Second Side: " + $(this).val()
            // buildOrder(secondChoice)
        })
        // text += firstChoice + " " +  secondChoice
        // text =text.substring(0, text.length -1)
        
    })
    // console.log("item: " + item + " first: " + firstChoice + " second: " + secondChoice)
    order = item + comboItem
    order = order.substring(0, order.length -1)
    $('#orderHere').val(order)
    console.log("this is the order" + order)





const toTop = document.querySelector('.scroll-top')

window.addEventListener('scroll', () => {
    if(window.pageYOffset> 100) {
        toTop.classList.add('active')
    } else {
        toTop.classList.remove('active')
    }
})
})
