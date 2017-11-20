var boxTwiterCenter = document.querySelector('.boxtwitter-center');
var boxTwiterCenterContent = document.querySelector('#boxtwitter-center-content');
var inputBoxTwitter = document.getElementById('input-boxtwitter');

var inputButton = document.createElement('button');
inputButton.classList.add('styleButton');
inputButton.textContent = 'twittear';

var characters = document.createElement('p');
characters.classList.add('styleCharacters');
characters.textContent = '140';


inputBoxTwitter.addEventListener('click', (event) =>{
  inputBoxTwitter.addEventListener('keydown', autosize);
  boxTwiterCenterContent.appendChild(inputButton);
  boxTwiterCenterContent.appendChild(characters);
  inputBoxTwitter.addEventListener('keydown', countCharacters);
  disabledButtonByInput(inputBoxTwitter, inputButton);
});

var countCharacters = event =>{
  var cont = 140;
  console.dir(inputBoxTwitter.textLength);
  var count = cont - inputBoxTwitter.textLength;
  console.dir(inputBoxTwitter.textLength);
  characters.textContent = count;
  characters.style.color = 'blue';
  changeColor(count, characters);
  disabledButtonByCharacters(characters.style.color, inputButton);
  disabledButtonByInput(inputBoxTwitter, inputButton);     
};

var autosize = (event) =>{
  setTimeout((event) => {
    inputBoxTwitter.style.height = '70px'; 
    // inputBoxTwitter.style.cssText = 'height:' + inputBoxTwitter.scrollHeight + 'px';
    inputBoxTwitter.style.height = inputBoxTwitter.scrollHeight + 'px';
  }, 0);
};


var disabledButtonByInput = (element1, element2) => {
  if (element1.textLength === 0) {
    element2.disabled = true;
    element2.style.opacity = 0.2;
  } else {
    element2.disabled = false;   
  }
};

var disabledButtonByCharacters = (elementStyle, element) => {
  if (elementStyle === 'red') {
    element.disabled = true;
    element.style.opacity = 0.2;
  }
  else if (elementStyle === 'yellow' || elementStyle === 'green' || elementStyle === 'blue') {
    element.disabled = false;
    element.style.opacity = 1;
  }   
};

var changeColor = (count, element) => {
  if (count <= 20) {
    element.style.color = 'green';
  }
  if (count <= 10) {
    element.style.color = 'yellow';
  }
  if (count <= 0) {
    element.style.color = 'red';   
  } 
};


inputButton.addEventListener('click', (event) => {
  var showTweet = document.createElement('textarea');
  showTweet.classList.add('styleShowTweet');
  showTweet.textContent = inputBoxTwitter.value;
  boxTwiterCenter.appendChild(showTweet);
  inputBoxTwitter.style.height = 50 + 'px';
  inputBoxTwitter.value = '';
  characters.textContent = '140';
  characters.style.color = 'blue'; 
});

