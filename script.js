let obj = {
  title: "PROCUS Viper 16MP",
  description:
    "Lens: 140 degree wide angle lens, Slow motion, Loop record, Time lapse, Burst Photo, Timer, HDMI etc., Image Resolution",
  imageurl: "https://m.media-amazon.com/images/I/41UwxJyXOwL._AC_UY218_.jpg",
};
let obj2 = {
  title: "boAt Xtend Smartwatch",
  description:
    "Alexa- Alexa built-in Voice Assistant that sets reminders, alarms and answers questions from weather forecasts to live cricket scores at your command!",
  imageurl: "https://m.media-amazon.com/images/I/61IMRs+o0iL._SX522_.jpg",
};
let obj3 = {
  title: "Zebronics ZEB-KM2100",
  description:
    "Superior Built Quality: The keyboard has a superior Quality and is built to last Modular Design The modular design on the keyboard makes customizations a possibilty",
  imageurl:
    "https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Covid19/V195588257_IN_CEPC_Contingency_Covid_GW_April20_rush_dbqc0.5x_1._SY116_CB433895198_.jpg",
};

let products = [obj, obj2, obj3];
/*let products2 = [obj, obj2, obj, obj2, obj];*/
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
    <button id="${value.title}" onclick="handleAddToCard(this)" class="btn btn-primary">Add to cart</button>
  </div>
</div>`;
  document.getElementById("card1").appendChild(createElementFromHTML(card));
});
/*products2.map((value, index) => {
  let card = `<div class="card" style="width: 18rem;">
  <img src="${value.imageurl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${value.title}</h5>
    <p class="card-text">${value.description}.</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div>`;
  document.getElementById("card2").appendChild(createElementFromHTML(card));
});*/

localStorage.setItem("price:PROCUS Viper 16MP", 15000);
localStorage.setItem("price:boAt Xtend Smartwatch", 2500);
localStorage.setItem("price:Zebronics ZEB-KM2100", 500);

let handleAddToCard = function (event) {
  let alreadyAddedCount = localStorage.getItem(event.id);

  if (!alreadyAddedCount) {
    localStorage.setItem(event.id, 1);
  } else {
    alreadyAddedCount = parseInt(alreadyAddedCount) + 1;
    localStorage.setItem(event.id, alreadyAddedCount);
  }
};
