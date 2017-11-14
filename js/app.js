
var inputBoxTwitter = document.getElementById("input-boxTwitter");
var boxTwiterCenterContent = document.querySelector(".boxTwiter-center-content");
var boxTwiterCenter = document.querySelector(".boxTwiter-center");

var inputButton = document.createElement("button");
inputButton.setAttribute("style","width:70px; heigth:20px; background-color:#4ab3f4; color:#fff; border:0; border-radius:10px; font-size:15px; padding:5px");
inputButton.textContent = "twittear";

var characters = document.createElement("p");
characters.setAttribute("style","display:inline-block; margin-left:350px; color: black");
characters.textContent = "140";



inputBoxTwitter.onclick = function(e){

    inputBoxTwitter.style.height = 110 + "px";
    boxTwiterCenterContent.appendChild(inputButton);
    boxTwiterCenterContent.appendChild(characters);
    inputBoxTwitter.addEventListener("keyup", countCharacters);  
};

var cont = 140;
var countCharacters = function(){
    var conteo = cont - inputBoxTwitter.textLength;
    characters.textContent = conteo;
    characters.style.color = "blue";
    changeColor(conteo, characters, inputButton);
};



/*
var enableButton = function(element){
    element.style.backgroundColor = "red";
    //element.disabled = false;
};
*/

var changeColor = function(contando, element, element2){
    if(contando < 20){
         element.style.color = "green";
    }
    if (contando < 10){
        element.style.color = "yellow";
    }
    if (contando < 0){
        element.style.color = "red";   
        element2.disabled = true; 
    }

     
};

var disabledButton = function(element){
    element.style.backgroundColor = "pink";
    //element.disabled = true;
    
    
};

inputButton.onclick = function(){
    var showTweet = document.createElement("div");
    showTweet.setAttribute("style", "width:580px; background-color:#fff")
    showTweet.textContent = inputBoxTwitter.value;
    boxTwiterCenter.appendChild(showTweet);
    inputBoxTwitter.value="";
};

























/*
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
/*
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
*//*
inputBoxTwitter.addEventListener("keypress", function(e){
   
    console.dir(e.target.value);
   /* while(e){
        contador--;
    }
    return contador;
    console.log(contador);
})*/
