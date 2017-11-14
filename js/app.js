

var inputBoxTwitter= document.querySelector(".input-boxTwiter");
var boxTwiterCenter = document.querySelector(".boxTwiter-center");
var buttonInput = document.createElement("button");
var cont = document.createElement("p");//para el contador
var tweetsMessages = document.querySelector(".tweets-messages");

var contador=140;

//esta parte del código agranda textArea y agrega el botón y contador (140)
inputBoxTwitter.addEventListener("click", function eventClickInputBoxTwitter(e){
    inputBoxTwitter.style.height = 150 + "px";
    //dando contenido al botón y anexándolo a .boxTwiterCenter
    buttonInput.textContent = "twittear";
    boxTwiterCenter.appendChild(buttonInput);
    //creando p para el contador y anexándolo a .boxTwiterCenter
    cont.textContent = "140";
    boxTwiterCenter.appendChild(cont);
    //clickInput.removeEventListener("click",eventClickInput,false)
})

//esta parte coge lo escrito en textArea y lo muestra en otro div
buttonInput.addEventListener("click", function showMessage(){
    var showTweet = document.createElement("div");
    showTweet.className = "show-tweet";
    showTweet.textContent = inputBoxTwitter.value;
    tweetsMessages.appendChild(showTweet);
    //boxTwiterCenter.appendChild(showTweet);
    inputBoxTwitter.value="";
    
})

//en esta parte estoy tratando de implementar los colores al contador
inputBoxTwitter.addEventListener("keypress", function (e){
   // inputBoxTwitter.value);
    if(inputBoxTwitter.textLength >= 10){
        cont.style.color = "yellow";
        //contador = 0;
        //contador--;
        //console.log(contador);
    } else {
        cont.style.color = "red";
    } 
})
