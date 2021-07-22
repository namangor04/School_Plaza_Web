var cardIds = ["card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9", ];
var ids = ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", ];
var priceIds = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', ];
var nameIds = ['n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7', 'n8', 'n9', ];
var qtyIds = ['qty1', 'qty2', 'qty3', 'qty4', 'qty5', 'qty6', 'qty7', 'qty8', 'qty9', ];
var checkBoxes = [];
var checkedBoxes = [];
var cards = [];
var prices = [];
var qty_s = [];
var names = [];
var output = "";
var cartedCode = "";
var splitList;

function init() {
    for (let index = 0; index < ids.length; index++) {
        /* For Cards Layout */
        var innerHtmlOfCardsLayout = document.getElementsByClassName("cards-layout")[0].innerHTML;
        var splittedList = innerHtmlOfCardsLayout.split("<!-- CARD-DIVISION -->");
        splitList = splittedList;
        cards = splittedList;
        /*  */
        checkBoxes[index] = document.getElementsByName(ids[index])[0];
        checkedBoxes[index] = checkBoxes[index].checked;
        prices[index] = document.getElementById(priceIds[index]);
        qty_s[index] = document.getElementsByName(qtyIds[index])[0].value;
        names[index] = document.getElementById(nameIds[index]);
    }
    console.log(typeof splitList);
}

function refreshCart() {
    for (let index = 0; index < checkBoxes.length; index++) {
        /* For Cards Layout */
        var innerHtmlOfCardsLayout = document.getElementsByClassName("cards-layout")[0].innerHTML;
        var splittedList = innerHtmlOfCardsLayout.split("<!-- CARD-DIVISION -->");
        splitList = splittedList;
        cards = splittedList;
        /* For Check-Boxes */
        checkedBoxes[index] = checkBoxes[index].checked;
        /* For Quantities */
        qty_s[index] = document.getElementsByName(qtyIds[index])[0].value;
    }
}

function onCart() {
    // document.lastChild.innerHTML += splitList;
    output = "";
    cartedCode = "";
    var noItems = false;
    var total = 0;
    refreshCart();
    for (let index = 0; index < checkedBoxes.length; index++) {
        var priceBox = prices[index];
        var nameBox = names[index];
        var qtyBox = qty_s[index];
        if (checkedBoxes[index]) {
            log(`checked ${index}`);
            total += Number(priceBox.textContent) * Number(qtyBox);
            var thisQtyPriceTotal = Number(priceBox.textContent) * Number(qtyBox);
            output += `\n${nameBox.textContent}, price: ${Number(priceBox.textContent)}, Qty: ${Number(qtyBox)}, Total(This item): ${thisQtyPriceTotal}`;
            /* Here index + 1 is used as we have zero as beginning index in the loop, while in the list we have elements + "division comment" */
            // cartedCode += cards[index + 1];
            cartedCode += cards[index + 1].replace('value="1"', `value="${qtyBox}"`);
        } else {
            log(`index = ${index}, output = ${output}`);
            if (index == (checkedBoxes.length - 1)) {
                log("Last Item");
                if (output == '') {
                    noItems = true;
                    log("No items");
                    log('\n\n\n\n\n\n\n\n\n\n\n\n\n');
                }
            }
        }
    }
    if (noItems == false) {
        // alert(output);
        localStorage["cart"] = output;
        localStorage["cartedCode"] = cartedCode;
        location.href = "./popup.html";
    } else {
        alert("Please add something to the cart !");
    }
}

function log(content) {
    console.log(content);
}

function onItemChecked(index) {
    if (checkBoxes[index].checked) {
        var selectedBox = names[index];
        var toast = document.getElementById("toast");
        toast.textContent = `${selectedBox.textContent.substring(6, selectedBox.textContent.length)} added to Cart`;
        log("showing toast");
        showToast();
    } else {
        var selectedBox = names[index];
        var toast = document.getElementById("toast");
        toast.textContent = `${selectedBox.textContent.substring(6, selectedBox.textContent.length)} removed from Cart`;
        log("showing toast");
        showToast();
    }
}

function showToast() {
    // Get the toast DIV
    var x = document.getElementById("toast");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function() {
        x.className = x.className.replace("show", "");
    }, 3000);
}