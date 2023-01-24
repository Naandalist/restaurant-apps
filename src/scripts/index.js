import "regenerator-runtime";
import "../styles/main.css";
import "../styles/responsive.css";

// Fetch local data json
import("../DATA.json").then(({ default: jsonData }) => {
  let datas = jsonData["restaurants"];
  const items = datas.map((data) => {
    return `
           

            <div class="card" tabindex="${0}">
              <img src="${data["pictureId"]}"
                alt="${data["name"]}" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">${data["name"]}</h5>
                <p class="card-text">${data["description"]}</p>
                <p class="card-text">City: <span class="city">${
                  data["city"]
                }</span></p>
                <p class="card-text">Rating: <span class="rating">${
                  data["rating"]
                }</span></p>
              </div>
            </div>
        `;
  });

    document.querySelector("#content-resto").innerHTML = items.join("");
});

// Menu
const menu = document.querySelector("#menu");
const hero = document.querySelector(".hero");
const main = document.querySelector("main");
const drawer = document.querySelector("#drawer");

menu.addEventListener("click", (event) => {
  drawer.classList.toggle("open");
  event.stopPropagation();
});

hero.addEventListener("click", () => {
  drawer.classList.remove("open");
});

main.addEventListener("click", () => {
  drawer.classList.remove("open");
});
