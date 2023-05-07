let minusButton = document.getElementById("minusButton");
let plusButton = document.getElementById("plusButton");
// let valueButton = document.getElementById("valueButton");
// let itemval = document.getElementById("itemval");
let product_total_amount = document.getElementById("product_total_amount");
let total_cart_amount = document.getElementById("total_cart_amount");
let discount_code = document.getElementById("discount_code");
let error_here = document.getElementById("error_here");
const buyButton = document.querySelector(".btnBuy");
const checkoutSection = document.querySelector(".checkout");
const buyCloseButton = document.querySelector(".closeCheck");
const checkoutButton = document.querySelector(".checkButton");
const logout = document.querySelector(".login");

const decreaseNum = (incdec, itemRate) => {
  let valueButton = document.getElementById(incdec);
  let itemval = document.getElementById(itemRate);

  if (valueButton.value <= 0) {
    valueButton.value = 0;
    alert("Choose atleast one product");
  } else {
    valueButton.value = parseInt(valueButton.value) - 1;
    itemval.innerHTML = parseInt(itemval.innerHTML) - 99;
    product_total_amount.innerHTML =
      parseInt(product_total_amount.innerHTML) - 99;
    total_cart_amount.innerHTML = Math.floor(
      parseInt(total_cart_amount.innerHTML) - 99 - 20
    );
  }
};

const increaseNum = (incdec, itemRate) => {
  let valueButton = document.getElementById(incdec);
  let itemval = document.getElementById(itemRate);

  if (valueButton.value >= 5) {
    valueButton.value = 5;
    alert("Buy upto 5 items in one time");
  } else {
    valueButton.value = parseInt(valueButton.value) + 1;
    itemval.innerHTML = parseInt(itemval.innerHTML) + 99;
    product_total_amount.innerHTML =
      parseInt(product_total_amount.innerHTML) + 99;
    total_cart_amount.innerHTML = Math.floor(
      parseInt(total_cart_amount.innerHTML) + 99 + 20
    );
  }
};

buyButton.addEventListener("click", () => {
  checkoutSection.style.display = "flex";
});

buyCloseButton.addEventListener("click", () => {
  checkoutSection.style.display = "none";
});

checkoutButton.addEventListener("click", () => {
  let free1 = "archan";
  let free = prompt(
    "We are working on our Payment Service....Sorry for inconvinience....WANNA GET THIS ITEM FOR FREE....code-archan"
  );
  if (free === free1) {
    const today = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    alert(`Your expected delievery is on ${tomorrow}`);
  } else {
    alert("Couldn't proceed your item");
  }
});

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
var code1 = makeid(5);
console.log(code1);
document.getElementById("codee").innerHTML = code1;

const applyDiscount = () => {
  let discountProductAmount = parseInt(total_cart_amount.innerHTML);
  let discount_amount = discount_code.value;

  if (discount_amount === code1) {
    alert("You got $50 off");
    total_cart_amount.innerHTML = discountProductAmount - 50;
    error_here.innerHTML = "";
  } else {
    error_here.innerHTML = "Invalid Code. Try Again";
  }
};

logout.addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.pathname = "../index.html";
});
