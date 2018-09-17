var button = document.getElementById('button');

button.onclick = function () {

  // set amount variables and prices arrays
  var total = 0;
  var subTotal = 0;
  var picked = 0;
  var invoice = [];
  var prices = [];

  // select input elements
  var size = document.getElementsByClassName('size');
  var meats = document.getElementsByClassName('meats');
  var veggies = document.getElementsByClassName('veggies');
  var cheese = document.getElementsByClassName('cheese');
  var sauce = document.getElementsByClassName('sauce');
  var crust = document.getElementsByClassName('crust');
  var buttonPay = document.getElementsByClassName('buttonPay');
  var amount = document.getElementById('amount');
  var leftInvoice = document.getElementById('leftInvoice');
  var rightInvoice = document.getElementById('rightInvoice');
  var totalText = document.getElementById('totalText');

  // check to see which size is checked
  for (var i = 0; i < size.length; i++) {
    if (size[i].checked == true) {
      total = size[i].value;
      invoice.push(size[i].id);
      prices.push("$" + size[i].value);
      picked = 1;
    } 
  }

  // check to see if a size was clicked
  if (picked < 1) {
    alert("Please select a size for your pizza.");
  }
  picked = 0;

  // convert string to an integer
  total = parseInt(total);

  // see which meats are checked
  for (var i = 0; i < meats.length; i++) {
    if (meats[i].checked == true) {
      subTotal = subTotal + 1;
      invoice.push(meats[i].value);
      // first meat is free
      if (subTotal > 1) {
        prices.push("$1.00");
      } else {
        prices.push("$0.00");
      }
    }
  }

  // check if more than one meat because 1st meats free
  if (subTotal == 1) {
    subTotal = 0;
  } else if (subTotal >= 2) {
    subTotal = subTotal - 1;
  }

  // add to total
  total = total + subTotal;
  subTotal = 0;

  // see what veggies are checked
  for (var i = 0; i < veggies.length; i++) {
    if (veggies[i].checked == true) {
      subTotal = subTotal + 1;
      invoice.push(veggies[i].value);
      // first veggie is free
      if (subTotal > 1) {
        prices.push("$1.00");
      } else {
        prices.push("$0.00");
      }
    }
  }

  // check if more than one veggie because 1st veggie is free
  if (subTotal == 1) {
    subTotal = 0;
  } else if (subTotal >= 2) {
    subTotal = subTotal - 1;
  }
  // add to total
  total = total + subTotal;
  subTotal = 0;

  // see what cheese is checked
  for (var i = 0; i < cheese.length; i++) {
    if (cheese[i].checked == true) {
      invoice.push(cheese[i].value);
      // add 3.00 if extra cheese
      if (cheese[i].value == "Extra cheese") {
        prices.push("$3.00");
      } else {
        prices.push("$0.00");
      }
    }
  }

  // add 3.00 to total if extra cheese
  if (cheese[2].checked == true) {
    total = total + 3;
  }

  // see what sauce is checked
  for (var i = 0; i < sauce.length; i++) {
    if (sauce[i].checked == true) {
      invoice.push(sauce[i].value);
      prices.push("$0.00");
    }
  }

  // see what crust is checked
  for (var i = 0; i < crust.length; i++) {
    if (crust[i].checked == true) {
      invoice.push(crust[i].value);
      if (crust[i].value == "Cheese Stuffed Crust") {
        // add 3.00 if cheese stuffed crust
        prices.push("$3.00");
        picked = 1;
      } else {
        prices.push("$0.00");
        picked = 1;
      }
    }
  }

  // add 3.00 to total if cheese stuffed crust
  if (crust[4].checked == true) {
    total = total + 3.00;
  }

  // check to see if a crust was clicked
  if (picked < 1) {
    alert("Please select a crust type for your pizza.");
  }

  invoice = invoice.join("<br>");
  prices = prices.join("<br>");

  leftInvoice.style.visibility = "visible";
  rightInvoice.style.visibility = "visible";
  totalText.style.visibility = "visible";

  amount.innerHTML = "$" + total + ".00";
  leftInvoice.innerHTML = "<h3>Your Order</h3>" + invoice;
  rightInvoice.innerHTML = "<h3 id='hideme'>|</h3>" + prices;

  // display pay button
  buttonPay[0].style.visibility = "visible";

}; //close function

