window.addEventListener('load', function(event) {
  var boxTwiterCenter = document.querySelector('.boxtwitter-center');
  var boxTwiterCenterContent = document.querySelector('#boxtwitter-center-content');
  var inputBoxTwitter = document.getElementById('input-boxtwitter');
  var contentShowTweet = document.createElement('contentShowTweet');
  boxTwiterCenter.appendChild(contentShowTweet);

  var inputButton = document.createElement('button');
  inputButton.classList.add('styleButton');
  inputButton.textContent = 'twittear';

  var characters = document.createElement('p');
  characters.classList.add('styleCharacters');

  inputBoxTwitter.addEventListener('click', (event) =>{
    inputBoxTwitter.addEventListener('keydown', autosize);
    boxTwiterCenterContent.appendChild(inputButton);
    boxTwiterCenterContent.appendChild(characters);
    inputBoxTwitter.addEventListener('keyup', countCharacters);
    disabledButtonByInput(inputBoxTwitter, inputButton);
  });

  var countCharacters = event =>{
    var cont = 140;
    var count = cont - inputBoxTwitter.textLength;
    // var count = cont - event.target.value.trim().length;
    // console.log(event.target.value.trim().length);
    characters.textContent = count;
    characters.style.color = 'blue';
    changeColor(count, characters);
    disabledButtonByCharacters(characters.style.color, inputButton);
    disabledButtonByInput(inputBoxTwitter, inputButton); 
  };

  var autosize = function() {
    inputBoxTwitter.style.height = '70px'; 
    inputBoxTwitter.style.height = inputBoxTwitter.scrollHeight + 'px';
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
    } else if (elementStyle === 'yellow' || elementStyle === 'green' || elementStyle === 'blue') {
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
    contentShowTweet.insertBefore(showTweet, contentShowTweet.firstElementChild);
    inputBoxTwitter.style.height = 50 + 'px';
    inputBoxTwitter.value = '';
    characters.textContent = '140';
    characters.style.color = 'blue'; 
  });
});

 /* ya no era necesario colocar setTiemout
  var autosize = (event) =>{
    setTimeout((event) => {
      inputBoxTwitter.style.height = '70px'; 
      inputBoxTwitter.style.height = inputBoxTwitter.scrollHeight + 'px';
    }, 0);
  };*/

