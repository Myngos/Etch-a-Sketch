const container = document.querySelector(".container");

for(let i = 1; i <= 256; i++){
    const divs = document.createElement('div');
   
    divs.style.cssText = "border:2px solid blue; width: 50px; height: 50px; display:flex; justify-content:center;align-items: center;";
    divs.textContent = i;
    divs.addEventListener("mouseover", function() {
        divs.style.backgroundColor = `rgb(${randomColorValue()}, ${randomColorValue()}, ${randomColorValue()})`;
    });

  divs.addEventListener("mouseout", ()=>{
    divs.style.backgroundColor = "";
  })

    container.appendChild(divs);
}

function randomColorValue() {
    return Math.floor(Math.random() * 256);
}

document.getElementById('btn').addEventListener('click', ()=>{

    container.textContent = "";
    
    let i = prompt('Enter the number of squares per side for the new grid!');
    
    if(i > 100 || i < 1){
        let i = prompt("Enter a number between 1 and 100!");
    }

    for(j = 1; j <= i; j++){
        const divs = document.createElement('div');
   
    divs.style.cssText = "border:2px solid blue; width: 50px; height: 50px; display:flex; justify-content:center;align-items: center;";
    divs.addEventListener("mouseover", function() {
        divs.style.backgroundColor = `rgb(${randomColorValue()}, ${randomColorValue()}, ${randomColorValue()})`;
    });

  divs.addEventListener("mouseout", ()=>{
    divs.style.backgroundColor = "";
  }) 

    container.appendChild(divs);
    }
})