let obj = {
  title: "Steel",
  description:
    "Steel is an alloy made up of iron with typically a few tenths of a percent of carbon to improve its strength and fracture resistance compared to other forms of iron.",
  imageurl:
    "https://th.bing.com/th/id/OIP.BuNCDy8LETLputeFEF8q3gHaEo?w=269&h=180&c=7&r=0&o=5&pid=1.7",
  price: 1200,
};
let obj2 = {
  title: "Alloy",
  description:
    "An alloy is a mixture of chemical elements of which at least one is a metal. Unlike chemical compounds with metallic bases, an alloy will retain all the properties of a metal in the resulting material",
  imageurl:
    "https://th.bing.com/th/id/OIP.9Pd8fiBzYpCTld0BS0ljTAHaEG?w=296&h=180&c=7&r=0&o=5&pid=1.7",
  price: 800,
};
let obj3 = {
  title: "Copper",
  description:
    "Copper is a chemical element with the symbol Cu (from Latin: cuprum) and atomic number 29. It is a soft, malleable, and ductile metal with very high thermal and electrical conductivity. A freshly exposed surface of pure copper has a pinkish-orange color. Copper is used as a conductor of heat and electricity",
  imageurl:
    "https://th.bing.com/th/id/OIP.6fGRLWtNfHsup_rfIX9SzQHaD3?pid=ImgDet&rs=1",
  price: 400,
};
let obj4 = {
  title: "Stainless Steel",
  description:
    "Stainless steel is an alloy of iron that is resistant to rusting and corrosion. It contains at least 11% chromium and may contain elements such as carbon, other nonmetals and metals to obtain",
  imageurl:
    "https://th.bing.com/th/id/OIP.kQmcPjcqUYjH4wpyD2raDwHaE0?w=272&h=180&c=7&r=0&o=5&pid=1.7",
  price: 1400,
};

let obj5 = {
  title: "Aluminium",
  description:
    "Aluminium (aluminum in American and Canadian English) is a chemical element with the symbol Al and atomic number 13. Aluminium has a density lower than those of other common metals, at approximately one third that of steel.",
  imageurl:
    "https://www.bing.com/th?id=ALSTU51D2845918BD5B64DEBDDA34238EC620ACF9B673CBFBE782CB1DD409016FC661&w=132&h=143&o=6&oif=webp&pid=SANGAM",
  price: 700,
};
let obj6 = {
  title: "Bronze",
  description:
    "Bronze is an alloy consisting primarily of copper, commonly with about 12–12.5% tin and often with the addition of other metals (including aluminium, manganese, nickel, or zinc) and sometimes non-metals, such as phosphorus, or metalloids such as arsenic or silicon.",
  imageurl:
    "https://th.bing.com/th/id/OIP.b-PX4hQtMHC5YBh6hBE9cQHaEV?w=273&h=180&c=7&r=0&o=5&pid=1.7",
  price: 1800,
};
let obj7 = {
  title: "Brass",
  description:
    "Brass is an alloy of copper and zinc, in proportions which can be varied to achieve varying mechanical, electrical, and chemical properties. ",
  imageurl:
    "https://www.bing.com/th?id=ODL.6b6ee0e5665567616d7273a83f4fbb97&w=143&h=198&c=12&rs=1&qlt=99&pcl=faf9f7&o=6&pid=13.1",
  price: 2600,
};
let obj8 = {
  title: "Zinc",
  description:
    "Zinc is a chemical element with the symbol Zn and atomic number 30. Zinc is a slightly brittle metal at room temperature and has a shiny-greyish appearance when oxidation is removed. ",
  imageurl:
    "https://th.bing.com/th/id/OIP.6iUc4mLRFmsPllYbUr75CgHaEh?w=305&h=186&c=7&r=0&o=5&pid=1.7",
  price: 2300,
};

let products = [obj, obj2, obj3, obj4];
let products2 = [obj5, obj6, obj7, obj8];

function createElementFromHTML(htmlString) {
  var div = document.createElement("div");
  div.innerHTML = htmlString.trim();
  return div.firstChild;
}
products.map((value, index) => {
  let card = `<div class="card" style="width: 18rem;">
  <img src="${value.imageurl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${value.title}</h5>
    <p class="card-text">${value.description}.</p>
    <h6>Price => <strong>${value.price}</strong></h6>
    <button  id="${value.title}" onclick="handleAddToCard(this)" class="btn btn-primary">Add to cart</button>
  </div>
</div>`;
  document.getElementById("card1").appendChild(createElementFromHTML(card));
});
products2.map((value, index) => {
  let card = `<div class="card" style="width: 18rem;">
  <img src="${value.imageurl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${value.title}</h5>
    <p class="card-text">${value.description}.</p>
    <h6>Price => <strong>${value.price}</strong></h6>
    <button  id="${value.title}" onclick="handleAddToCard(this)" class="btn btn-primary">Add to cart</button>
  </div>
</div>`;
  document.getElementById("card2").appendChild(createElementFromHTML(card));
});

localStorage.setItem("price: Steel", 1200);
localStorage.setItem("price: Alloy", 800);
localStorage.setItem("price: Copper", 400);
localStorage.setItem("price: Stainless Steel", 1700);
localStorage.setItem("price: Aluminium", 700);
localStorage.setItem("price: Bronze", 1800);
localStorage.setItem("price: Brass", 2600);
localStorage.setItem("price: Zinc", 2300);

let handleAddToCard = function (event) {
  let alreadyAddedCount = localStorage.getItem(event.id);

  if (!alreadyAddedCount) {
    localStorage.setItem(event.id, 1);
  } else {
    alreadyAddedCount = parseInt(alreadyAddedCount) + 1;
    localStorage.setItem(event.id, alreadyAddedCount);
  }
};
