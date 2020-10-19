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
  $(".submitOrder").click(function () {
    var text = "";
    $(".check:checked").each(function () {
      text += $(this).val() + ", ";
      text = text.substring(0, text.length - 1);
      $("#orderHere").val(text);
    });
  });
});
