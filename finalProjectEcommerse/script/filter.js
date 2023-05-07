import { data } from "./dummyData.js";

console.log(data);

const productsContainer = document.querySelector(".products");
const searchContainer = document.querySelector(".search");
const categoryContainer = document.querySelector(".cats");
const priceRangeContainer = document.querySelector(".priceRange");
const priceValueContainer = document.querySelector(".priceValue");
const logout = document.querySelector(".login");

// displaying all the data




const displayProduct = (filteredProducts) => {
  productsContainer.innerHTML = filteredProducts
    .map(
      (product) =>

        `
    <div class="product">
    <div class="productImg">
    <span id="pid">${product.id} </span>
    <img src=${product.img} alt="" />
    </div>
    <span class="name">${product.name}</span>
    <span class="priceText">$${product.price}</span>
    <input type="submit" class="buyButton" onclick="addtocart(this)" value="GET IT NOW">
    <div class="cartButton">
        <img src="../img/cart.png" class="cartImg" alt="" srcset="">
    </div>
</div>
    `
    )
    .join("");

    filteredProducts.find("button").
      alert(value.name);
      //setNames(value.name);
  };





displayProduct(data);







// filter the product accordinf to search input

searchContainer.addEventListener("keyup", (e) => {
  const selectedValue = e.target.value.toLowerCase();
  //   console.log(selectedValue);

  if (selectedValue) {
    displayProduct(
      data.filter(
        (item) => item.name.toLowerCase().indexOf(selectedValue) != -1
      )
    );
  } else {
    displayProduct(data);
  }
});

// displaying and adding the category

const setCategories = () => {
  const everyCat = data.map((item) => item.cat);
  //   console.log(everyCat);

  // we have to remove the duplicated cat
  const categories = [
    "All",
    ...everyCat.filter((cat, i) => everyCat.indexOf(cat) === i),
  ];
  //   console.log(categories);

  // setting up the categories
  categoryContainer.innerHTML = categories
    .map(
      (category) =>
        `
<span class="cat">${category}</span>
`
    )
    .join("");
};

// filtering the category

categoryContainer.addEventListener("click", (e) => {
  const selectedCat = e.target.textContent;
  //   console.log(selectedCat);

  selectedCat === "All"
    ? displayProduct(data)
    : displayProduct(data.filter((item) => item.cat === selectedCat));
});

const setPrice = () => {
  const priceRange = data.map((item) => item.price);
  //   console.log(priceRange);
  const maximum = Math.max(...priceRange);
  const minimum = Math.min(...priceRange);
  priceRangeContainer.max = maximum;
  priceRangeContainer.min = minimum;
  priceRangeContainer.value = maximum;

  priceValueContainer.innerHTML = "$" + maximum;

  priceRangeContainer.addEventListener("input", (e) => {
    // console.log(e.target.value);
    const priceRangeSelected = e.target.value;
    priceValueContainer.innerHTML = "$" + priceRangeSelected;
    displayProduct(
      data.filter((product) => product.price <= priceRangeSelected)
    );
  });
};

setCategories();
setPrice();

logout.addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.pathname = "../index.html";
});
