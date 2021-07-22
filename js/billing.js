var qtyTotal = 0;
var priceTotal = 0;
var grandTotal = 0;
var billDisplay;
var cartedCards = [];

function onLoad() {
    billDisplay = document.getElementById("bill-display");
    // document.write("<h1>Written By JAVASCRIPT</h1>");
    var code = localStorage["cartedCode"];
    document.getElementById("appendent").insertAdjacentHTML('beforeend', code);
    cartedCards = document.getElementsByClassName('card');

    log(cartedCards.length);
    var length = cartedCards.length;

    for (let index = 0; index < length; index++) {
        const element = cartedCards[index];
        var inputs = element.getElementsByTagName("input");
        inputs[0].remove();
        /* Index is 0(ZERO) here as we have already removed the first element */
        inputs[0].readOnly = true;

        var qty = Number(inputs[0].value);

        qtyTotal += qty;

        var price = Number(element.getElementsByClassName("price")[0].textContent);

        priceTotal += price;

        grandTotal += (price * qty);

        /* for changing content of "Cart it" div to "Quantity" */
        element.getElementsByTagName("div")[3].textContent = "Quantity";
    }
    document.getElementById("bill-row").insertAdjacentHTML("beforeend", `<h2>|| Total Quantity = ${qtyTotal} || Price Total For 1 Qty = ${priceTotal} || Grand Total = ${grandTotal} ||</h2>`);
}

function onPayClick() {
    // Get the toast DIV
    var x = document.getElementById("toast");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function() {
        x.className = x.className.replace("show", "");
    }, 3000);
}