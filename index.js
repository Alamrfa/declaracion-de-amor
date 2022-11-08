const siBtn = document.querySelector("#siBtn");

siBtn.addEventListener("click",function () {
    alert("muchas gracias por aceptar, la verdad me da verguenza peritelo asi sin mas, pero es algo que siento desde hace mucho y nos savia como pedirtelo")
});

const noBtn = document.querySelector("#noBtn");

noBtn.addEventListener("mouseover",function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty("top",randomY+"%");
    noBtn.style.setProperty("left",randomX+"%");
    noBtn.style.setProperty("transform",`translate(-${randomX}%,-${randomY}%)`)
});