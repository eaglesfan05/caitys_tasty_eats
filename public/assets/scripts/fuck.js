

$(function() {
    console.log('loaded')
    

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

function fuckinDoIt() {
    // e.preventDefault()
    let checks = document.getElementsByClassName('add-item-to-order');
    var str = ''
    for(i= 0; i <checks.length; i++) {
        if(checks[i].checked) {
            str += checks[i].nodeValue
        }
    }
    console.log(str)
}

// var comboButtons = document.getElementsByClassName('comboMeal');
// var i;
// for(i = 0; i< comboButtons.length; i++) {
//     comboButtons[i].addEventListener('click', function() {
//         document.getElementById('side-options').style.display = 'block';
//     }) 
// }

var closeSideChoices = document.getElementsByClassName('combo-sides');
var i;
for(i = 0; i< closeSideChoices.length; i++) {
    closeSideChoices[i].addEventListener('click', function() {
        document.getElementById('side-options').style.display = 'none'
    })
}

// $('#sendOrder').click((e) => {
//     e.preventDefault();
//     let order = []
//    $('input:checkbox[name="choices"]:checked').each(() => {
//        console.log($(this).val())
//         // console.log(choices)
//         // let selection = $(this).val()
//         // console.log('selection' + selection)
//     })
//     // console.log("choices" + choices.val())
//     // alert('CLICK CLICK MOTHAFUCKA')
//     // $('input:checkbox[name="choices"]:checked').each(() => {
//     //     let name = $(this).()
//     //     order.push(name)
//     //     console.log(order)
//     //     // alert(name + 'checked')
//     //     // let order = [];
//     //     // let selection = $(this).val()
//     //     // console.log('this is the selection' + selection)
//     //     // order.push(selection);
//     //     // console.log('this is the order' + " " + order)
//     // })
// })
})