const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const currentTitle = document.querySelector(".productTitle");
const currentPrice = document.querySelector(".productPrice");
const currentDesc = document.querySelector(".productDesc");
const currentImg = document.querySelector(".productImg");
const currentColors = document.querySelectorAll(".color");
const currentSizes = document.querySelectorAll(".size");
const buyButton = document.querySelector(".productButton");
const checkoutSection = document.querySelector(".checkout");
const buyCloseButton = document.querySelector(".closeCheck");
const checkoutButton = document.querySelector(".checkButton");
const logout = document.querySelector(".login");

// product array

const products = [
  {
    id: 2,
    title: "CANADIAN GOOSE",
    price: 199,
    desc: "Unisex's Waterproof Fleece Lined Winter Coats Parka Mountain Windproof Warm Snow Ski Jacket with Multi-Pockets.",
    colors: [
      {
        code: "red",
        img: "../img/jacket1.png",
      },
      {
        code: "#92cfb0",
        img: "../img/jacket2.png",
      },
      {
        code: "white",
        img: "../img/jacket3.png",
      },
    ],
  },
  {
    id: 3,
    title: "BACKSTRI HOODY",
    price: 59,
    desc: "Hanes Unisex’s Ultimate Cotton Heavyweight Pullover Hoodie Sweatshirt",
    colors: [
      {
        code: "yellow",
        img: "../img/hoody1.png",
      },
      {
        code: "blue",
        img: "../img/hoody2.png",
      },
      {
        code: "white",
        img: "../img/hoody3.png",
      },
    ],
  },
  {
    id: 4,
    title: "AIR JORDAN",
    price: 129,
    desc: "The Latest Launches. The Retro Classics. The All-Time Icons. Discover Air Jordan At group5Store.",
    colors: [
      {
        code: "#16233d",
        img: "../img/air2.png",
      },
      {
        code: "white",
        img: "../img/blazer.png",
      },
      {
        code: "grey",
        img: "../img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "WEATHERGEAR",
    price: 99,
    desc: "Jerzees Unisex's Navy Adult Crew Sweatshirt specially for Winter wardrobe.",
    colors: [
      {
        code: "#a44725",
        img: "../img/sweetshirt1.png",
      },
      {
        code: "#463432",
        img: "../img/sweetshirt2.png",
      },
      {
        code: "#9eb6ce",
        img: "../img/sweetshirt3.png",
      },
    ],
  },
  {
    id: 6,
    title: "JOGGER",
    price: 99,
    desc: "Be bold but stay cool—here’s the classic elitefts tagline combined with a decidedly different color.",
    colors: [
      {
        code: "#a44725",
        img: "../img/jogger1.png",
      },
      {
        code: "#463432",
        img: "../img/jogger2.png",
      },
      {
        code: "#9eb6ce",
        img: "../img/jogger3.png",
      },
    ],
  },
];

let choosenProduct = products[0];

// sliding effect

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // changing the slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // choosing the choosenProduct according to index number
    choosenProduct = products[index];

    // changing the contents in product section through choosenProduct
    currentTitle.textContent = choosenProduct.title;
    currentDesc.textContent = choosenProduct.desc;
    currentPrice.textContent = "$" + choosenProduct.price;
    currentImg.src = choosenProduct.colors[0].img;

    // assigning the color to the div

    currentColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

// changing the color of the product based on the color

currentColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentImg.src = choosenProduct.colors[index].img;
  });
});

// changing the background of the size buttons

currentSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    //restoring the initial color for sizes
    currentSizes.forEach((size) => {
      size.borderRadius = "1px solid teal";
      size.style.backgroundColor = "transparent";
      size.style.color = "white";
    });
    size.style.backgroundColor = "white";
    size.style.color = "teal";
  });
});

// Model toggle

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

logout.addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.pathname = "../index.html";
});
