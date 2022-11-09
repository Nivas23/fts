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

let products = [obj, obj2];
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
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div>`;
  document.getElementById("card1").appendChild(createElementFromHTML(card));
});
