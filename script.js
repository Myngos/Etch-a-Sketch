const container = document.querySelector(".container");


for(let i = 1; i <= 256; i++){
    const divs = document.createElement('div');
    divs.textContent = i;
    divs.style.cssText = "border:3px Solid Blue; width: 50px; height: 50px; display:flex; justify-content:center;align-items: center;";

    divs.addEventListener('mouseover', ()=>{
        divs.style.backgroundColor = "blue";
    })

    divs.addEventListener('mouseout', ()=>{
        divs.style.backgroundColor = ""
    })

    container.appendChild(divs);
}
