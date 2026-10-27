
/* Voorbeeld: lijst met auto's */
const cars = [
  {
    name: "Nissan GT-R",
    category: "Road Car"
  },
  {
    name: "Toyota GR Supra",
    category: "Sports Car"
  }
];

/* Voorbeeld: auto's weergeven */
const carList = document.getElementById("car-list");

if (carList) {
  cars.forEach((car) => {
    const card = document.createElement("article");
    card.className = "car-card";

    const title = document.createElement("h3");
    title.textContent = car.name;

    const category = document.createElement("p");
    category.textContent = car.category;

    card.append(title, category);
    carList.appendChild(card);
  });
}

/* Plaats hier de overige bestaande GT7-JavaScript:
   - zoeken en filteren
   - auto-details openen
   - topsnelheid en acceleratie vergelijken
   - favorieten
   - tuning-simulator
   - build planner
*/
