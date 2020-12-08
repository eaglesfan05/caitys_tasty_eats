$(function() {
    console.log('loaded')

    var checkbox = document.querySelectorAll("input[type=checkbox]");
var checkLabel = document.querySelectorAll('add-item')
// for(i = 0; i < checkLabel.length; i++){
//     checkLabel = checkLabel[i];
//     console.log('checkbox is checked')
//     console.log(checkLabel)
// }
for (i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('change', function(event) {
      
        if (this.checked) {    
            console.log('Checkbox is checked..')    
            // let target = event.target.checkbox
            // console.log(target)
            // console.log(target)
            // let parent = target.parentElement
            // console.log(target.parentElement)
           
        } else {
          console.log("Checkbox is not checked..");
        }
      });
}

    
let orderButton = document.getElementById('sendOrder')
orderButton.addEventListener('click', sendOrder)
var coll = document.getElementsByClassName('menu-section-header');

var i;
for(i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function(event) {
        // let button = event.target
        //     let parent = button.parentElement;
        //     console.log(parent)
            // let label = parent.getElementsByClassName('add-item')
            // label.innerText = "added"
       
    //   let button = event.target
    //   let parent = button.parentElement;
    //   let id = parent.getAttribute('id')
    //   console.log(id)
    //   console.log(parent)
    //   let id = parent.id
    //   console.log(id)
    // //    console.log(button.length)
    // console.log(button)

        var content = this.nextElementSibling;
        if(content.style.display === 'block') {
            content.style.display = "none";
        } else {
            content.style.display = "block"
        }
        // document.addEventListener('click', function(event) {
        //     if(event.target.closest(id)) return;
        //     else content.style.display = 'none'
        //     // let button = event.target
        //     // let parent = button.parentElement;
        //     // let id = parent.getAttribute('id')
        //     console.log(id)
        // })
    })
}

$('.count').on('click', function(event) {
    event.preventDefault()
    var $button = $(this)
    var oldValue = $button.parent().find('input').val()
    if ($button.text() == "+") {
        var newVal = parseFloat(oldValue) + 1;
      } else {
     // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
  
    $button.parent().find("input").val(newVal);
  })
       

      function sendOrder() {
      let checks = document.getElementsByClassName('add-item-to-order');
      let radios = document.getElementsByClassName('add-side-to-order');
      var str = ''
     
      for(i= 0; i <checks.length; i++) {    
          if(checks[i].checked) {
            let parent = checks[i].parentElement.parentElement
            // parent.style.backgroundColor = "grey"
            let amount = parent.getElementsByClassName('amount-place')[0].value
            // let comboAmount = parent.getElementsByClassName('comboAmount')[0].value
            // if(comboAmount && comboAmount > 1) {
            //     alert('The fuck bro')
            // }
            // if(amount.classList.contains('comboAmount')) {
            //     let comboAmount = parent.getElementsByClassName('comboAmount')[0].value
            //     if(comboAmount > 1) {
            //         alert('Please check the message with your order and make sure you to enter all sides for your combos. Thank you!')
            //     }
            // }
           
            // let checkedLabel = parent.getElementsByClassName('add-item')[0].innerText
            // console.log(checkedLabel)
            // // should change content but not doing it.. going to try with span in html
            // checkedLabel.innerText = "added"
            console.log(amount)
            str += "Item: " + amount + " " + checks[i].value +   ", " 
          }
      }
  
      for(i= 0; i <radios.length; i++) {
          if(radios[i].checked) {
              str += "Combo Side: " + radios[i].value + ", "
          }
      }
      document.getElementById('orderHere').innerText = str
      }
  
//   var comboButtons = document.getElementsByClassName('comboMeal');
//   var i;
//   for(i = 0; i< comboButtons.length; i++) {
//       comboButtons[i].addEventListener('click', function() {
//         alert('click')
//       }) 
//   }
  
//   var closeSideChoices = document.getElementsByClassName('combo-sides');
//   var i;
//   for(i = 0; i< closeSideChoices.length; i++) {
//       closeSideChoices[i].addEventListener('click', function() {
//           document.getElementById('side-options').style.display = 'none'
//       })
//   }
  
  const toTop = document.querySelector('.scroll-top')
  
  window.addEventListener('scroll', () => {
      if(window.pageYOffset> 100) {
          toTop.classList.add('active')
      } else {
          toTop.classList.remove('active')
      }
  })

})