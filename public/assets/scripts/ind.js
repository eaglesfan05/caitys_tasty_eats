

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
        text += "Order Item:" + $(this).val() + " | "
    })

    text =text.substring(0, text.length -1)
    $('#orderHere').val(text)
})


// combo buttons
$('.add-combo').click(function() {
    var text = ''
    var title = ''
    var firstChoice = ''
    var secondChoice = '';
    
   
    $('.firstChoice:checked').each(function() {
        firstChoice+= "First Side: " + $(this).val()
        console.log(firstChoice)
    })
    $('.secondChoice:checked').each(function() {
        secondChoice+= "Second Side: " + $(this).val()
        console.log(secondChoice)
    })

})




const toTop = document.querySelector('.scroll-top')

window.addEventListener('scroll', () => {
    if(window.pageYOffset> 100) {
        toTop.classList.add('active')
    } else {
        toTop.classList.remove('active')
    }
})
})
