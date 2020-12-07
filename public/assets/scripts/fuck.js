$(function() {
    console.log('loaded')
    
let orderButton = document.getElementById('sendOrder')
orderButton.addEventListener('click', fuckinDoIt)
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
       
        let amount
        const count = () => {
          $('.count').on('click', function() {
            // e.preventDefault()
            var $button = $(this);
            var oldVal = $button.parent().find('input').val()
            if($button.text() == '+') {
              var newVal = parseFloat(oldVal) + 1;
            } else {
              if(oldVal > 0) {
                var newVal = parseFloat(oldVal) -1;
              } else {
              newVal = 0
            }
            }
          })
        }
  count()
        // document.getElementById('sendOrder').on('click', function () {
          
        // })
      function fuckinDoIt() {
      let checks = document.getElementsByClassName('add-item-to-order');
      let radios = document.getElementsByClassName('add-side-to-order');
      var str = ''
     
      for(i= 0; i <checks.length; i++) {    
          if(checks[i].checked) {
            let parent = checks[i].parentElement.parentElement
            let amount = parent.getElementsByClassName('amount-place')[0].value
            let checkedLabel = parent.getElementsByClassName('add-item')[0].textContent
            // console.log(checkedLabel.textContent)
            checkedLabel.textContent = "added"
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
  
  var comboButtons = document.getElementsByClassName('comboMeal');
  var i;
  for(i = 0; i< comboButtons.length; i++) {
      comboButtons[i].addEventListener('click', function() {
        alert('click')
      }) 
  }
  
  var closeSideChoices = document.getElementsByClassName('combo-sides');
  var i;
  for(i = 0; i< closeSideChoices.length; i++) {
      closeSideChoices[i].addEventListener('click', function() {
          document.getElementById('side-options').style.display = 'none'
      })
  }
  
  const toTop = document.querySelector('.scroll-top')
  
  window.addEventListener('scroll', () => {
      if(window.pageYOffset> 100) {
          toTop.classList.add('active')
      } else {
          toTop.classList.remove('active')
      }
  })

// function fuckinDoIt() {
//     // e.preventDefault()
//     let checks = document.getElementsByClassName('add-item-to-order');
//     var str = ''
//     for(i= 0; i <checks.length; i++) {
//         if(checks[i].checked) {
//             str += checks[i].nodeValue
//         }
//     }
//     console.log(str)
// }

// // var comboButtons = document.getElementsByClassName('comboMeal');
// // var i;
// // for(i = 0; i< comboButtons.length; i++) {
// //     comboButtons[i].addEventListener('click', function() {
// //         document.getElementById('side-options').style.display = 'block';
// //     }) 
// // }

// var closeSideChoices = document.getElementsByClassName('combo-sides');
// var i;
// for(i = 0; i< closeSideChoices.length; i++) {
//     closeSideChoices[i].addEventListener('click', function() {
//         document.getElementById('side-options').style.display = 'none'
//     })
// }

// // $('#sendOrder').click((e) => {
// //     e.preventDefault();
// //     let order = []
// //    $('input:checkbox[name="choices"]:checked').each(() => {
// //        console.log($(this).val())
// //         // console.log(choices)
// //         // let selection = $(this).val()
// //         // console.log('selection' + selection)
// //     })
// //     // console.log("choices" + choices.val())
// //     // alert('CLICK CLICK MOTHAFUCKA')
// //     // $('input:checkbox[name="choices"]:checked').each(() => {
// //     //     let name = $(this).()
// //     //     order.push(name)
// //     //     console.log(order)
// //     //     // alert(name + 'checked')
// //     //     // let order = [];
// //     //     // let selection = $(this).val()
// //     //     // console.log('this is the selection' + selection)
// //     //     // order.push(selection);
// //     //     // console.log('this is the order' + " " + order)
// //     // })
// // })
fuckinDoIt()
})