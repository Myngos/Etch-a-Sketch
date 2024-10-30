const div = document.querySelector(".container");

const divs = document.createElement('div');
divs.textContent = 1;
divs.style.cssText = "border:3px Solid Blue; width: 50px; height: 50px;";

div.appendChild(divs)