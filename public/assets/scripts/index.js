// Functionallity
// when Item is clicked add it to Order
// can edit order from form
// submit order and send email

// for combos when pick a meat generate side selection

// send contact email
//   $("select.order").change(function () {
//     let order = [];
//     let items = $(this).children("option:selected").val();
//     // alert("adding " + items);
//     order.push(items);
//     order.forEach((item) => $("#orderHere").text(item));
//     // console.log(order.length);
//     // let seperate = order.split(",");
//     // seperate.join("\n");
//     // $("#orderHere").text(order);
//     // alert(order);
//   });
$(document).ready(function () {
  $("#submitOrder").click(function (e) {
    e.preventDefault()
    var order = [];
    $(".check:checked").each(function () {
      let selection = $(this).val();
      console.log(selection)
      order.push(selection);
      
    });
    $("option:selected").each(function () {
 
      let selection = $(this).val();
      order.push(selection);
      //   if ($("option:selected").attr("id") == "default") {
      //     // alert("DEFAULT");
      //     order.filter((item) => item.id !== "default");
      //   }
    });

    // var myArr = [{id:'a'},{id:'myid'},{id:'c'}];
    // var index = order.findIndex(function (o) {
    //   return $("option:selected").attr("id") === "default";
    // });
    // if (index !== -1) order.splice(index, 1);

    // if ($("option:selected").attr("id") == "default") {
    //   //   alert("DEFAULT");
    //   let filtered = order.filter((item) => item.id !== "default");
    //   alert(filtered);
    // }
         //  I want to stop default values from being included in the message.
    const elementGone = 'Make Your Pick'
    order = order.filter((item) => item !== elementGone);
    $("#orderHere").text(order);
    console.log("this is the order " + order);
    // order.join("<br>");
    // alert(order);
    // var apart = order.split(",");
    // alert(apart);
    // var together = apart.join("<br>");
    // $("#orderHere").text(together);
    // var text = "";
    // $(".check:checked").each(function () {
    //   text += $(this).val() + ", ";
    //   text = text.substring(0, text.length - 1);
    //   $("#orderHere").text(text);
    // });
    // $("option:selected").each(function () {
    //   text += $(this).val() + ", ";
    //   text = text.substring(0, text.length - 1);
    //   $("#orderHere").text(text);
    // });
    // let picked = $("#comfort option:selected").text();
    // alert(`${picked} was picked`);
    // $('#orderHere').text(picked)
  });
  // $('#sendOrder').on('submit', (e) => {
  //   e.preventdefault()
  // setTimeout(function() {
  //   location.reload()
  // }, 1000)
  // })
  
});
