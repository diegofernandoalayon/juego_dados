var algo = true;
document.querySelector(".sonido").addEventListener("click", function (event) {
  if (document.querySelector(".sonido").innerText === "Sonido: ON") {
    document.querySelector(".sonido").innerHTML = "Sonido: OFF";
    algo = false;
  } else if (document.querySelector(".sonido").innerText === "Sonido: OFF") {
    document.querySelector(".sonido").innerHTML = "Sonido: ON";
    algo = true;
  }
});

document.querySelector(".boton").addEventListener("click", function () {
  if (algo) {
    var audio = new Audio("sonido.mp3");
    audio.play();
  } else {
  }
  dados();
});
// addEventListener("load",function(){  // para hacer que se actulice al recargar la pagina
//     dados();
// })

function dados() {
  //para primer dado
  var numAl1 = Math.floor(Math.random() * 6) + 1; //crea un numero aleatorio de 1 a 6
  var randomDiceImage = "dice" + numAl1 + ".png"; // concatenamos la palabra dice con el numero y la extencion del archivo
  var randomImageSource =  randomDiceImage; // como las imagenes se encuentran dentro de la carpeta images se realiza esta concatencacion

  var image1 = document.querySelectorAll(".img1")[0];

  image1.setAttribute("src", randomImageSource);
  //console.log(randomImageSource);

  //para segundo dado
  var numAl2 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource2 = "dice" + numAl2 + ".png";
  var image2 = document.querySelector(".img2");
  image2.setAttribute("src", randomImageSource2);
  // console.log("numero aleatorio 1: ",numAl1);
  // console.log("numero aleatorio 2: ",numAl2);

  if (numAl1 > numAl2) {
    document.querySelector("h1").innerHTML = "🚩 Gana jugador 1";
  } else if (numAl1 === numAl2) {
    document.querySelector("h1").innerHTML = "🚩 Empate 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Gana jugador 2 🚩";
  }
}
