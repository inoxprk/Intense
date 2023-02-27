const position = document.querySelector('.position');
const ButtonTxt = document.querySelector('.key_button');
const line = document.querySelector('.line');
const currentCredit = document.querySelector('.currentcredit');
let left = 50;
var winline = 28;
var loseline = 72;
let credit = parseInt(localStorage.getItem('credit'));
if (credit != NaN) {
  console.log('hello');
  localStorage.setItem('credit', 0);
}
let wantedcredit;
let holdername;
let lastcarddigit;

if (document.title === 'INTENSE.NET | Home') {
  document.querySelector('.currentcrd').innerText = 'Your current credit: $' + credit;
}

if (document.title === 'INTENSE.NET | Add Credits') {
  document.querySelector('.currentcrd').innerText = 'Your current credit: $' + credit;
  //first form
  const creditsInput = document.querySelector('#credits-input');
  const saveCreditsButton = document.querySelector('#save-credits-button');



  // Enable the save button when the input field has a value
  creditsInput.addEventListener('input', () => {
    if (creditsInput.value) {
      saveCreditsButton.disabled = false;
    } else {
      saveCreditsButton.disabled = true;
    }
  });

  // Save the credits when the save button is clicked
  saveCreditsButton.addEventListener('click', () => {
    wantedcredit = creditsInput.valueAsNumber;

  });

  saveCreditsButton.addEventListener('click', () => {
    document.querySelector('.cardinfo').style.display = "block";
  });

  //second form


  const form = document.querySelector('.cardinfoform');
  const nextButton = document.querySelector('#next-button');
  const cardholder = document.querySelector('#cardholder-name');
  const cardnumber = document.querySelector('#card-number');

  // Check if all required fields are filled before enabling the submit button
  form.addEventListener('input', () => {
    const inputs = form.querySelectorAll('input');
    let filled = true;
    inputs.forEach(input => {
      if (!input.value) {
        filled = false;
      }
    });
    holdername = cardholder.value;
    lastcarddigit = cardnumber.value.substr(cardnumber.value.length - 4);
    nextButton.disabled = !filled;
  });


  const confirmation = document.querySelector('.confirmation');
  nextButton.addEventListener('click', () => {
    confirmation.style.display = "block";
    document.querySelector('.amountdue').innerText = '$' + wantedcredit;
    document.querySelector('.cardnumber').innerText = 'VISA **** **** **** ' + lastcarddigit;
    document.querySelector('.holdername').innerText = holdername;
  });



  //third form
  const confirmbtn = document.querySelector('#confirmbtn')
  confirmbtn.addEventListener('click', () => {
    credit += wantedcredit;
    localStorage.setItem('credit', credit);
    // credit = creditsInput.valueAsNumber;
    credit = localStorage.getItem('credit');
    console.log(`Credit saved: ${credit}`);
    document.querySelector('.confirmationalert').style.display = "block";
  });

}

if (document.title === 'INTENSE.NET | Tug of Wars') {
  var randomNumber = Math.random() * (1 - 0.2) + 0.2;
  var level = document.querySelector('.itsLevel');
  if (0.2 < randomNumber <= 0.3) {
    level.innerText = "Opponent Level: 2"
  } else if (0.3 < randomNumber <= 0.4) {
    level.innerText = "Opponent Level: 3"
  } else if (0.4 < randomNumber <= 0.5) {
    level.innerText = "Opponent Level: 4"
  } else if (0.5 < randomNumber <= 0.6) {
    level.innerText = "Opponent Level: 5"
  } else if (0.6 < randomNumber <= 0.7) {
    level.innerText = "Opponent Level: 6"
  } else if (0.7 < randomNumber <= 0.8) {
    level.innerText = "Opponent Level: 7"
  } else if (0.8 < randomNumber <= 0.9) {
    level.innerText = "Opponent Level: 8"
  } else if (0.9 < randomNumber <= 1) {
    level.innerText = "Opponent Level: 9"
  }

  function levelGen() {
    randomNumber = Math.random() * (1 - 0.2) + 0.2;
    if (0.2 < randomNumber <= 0.3) {
      level.innerText = "Opponent Level: 2"
    } else if (0.3 < randomNumber <= 0.4) {
      level.innerText = "Opponent Level: 3"
    } else if (0.4 < randomNumber <= 0.5) {
      level.innerText = "Opponent Level: 4"
    } else if (0.5 < randomNumber <= 0.6) {
      level.innerText = "Opponent Level: 5"
    } else if (0.6 < randomNumber <= 0.7) {
      level.innerText = "Opponent Level: 6"
    } else if (0.7 < randomNumber <= 0.8) {
      level.innerText = "Opponent Level: 7"
    } else if (0.8 < randomNumber <= 0.9) {
      level.innerText = "Opponent Level: 8"
    } else if (0.9 < randomNumber <= 1) {
      level.innerText = "Opponent Level: 9"
    }

    if (credit >= 10) {
      credit = parseInt(credit) - 10
      localStorage.setItem('credit', credit);
      credit = localStorage.getItem('credit');
      currentCredit.innerText = "Your Credits: $" + credit;
    } else {alert("You need more credit to renew the opponent level!")}
  }

  console.log(randomNumber);

  function increaseValue() {
    if (left >= 100) return;
    left += randomNumber; //speed of increase speed of increasespeed of increasespeed of increasespeed of increasespeed of increase
    position.style.left = left + '%';

    if (document.querySelector('.position').style.left >= loseline + "%") { //if lost
      clearInterval(intervalId);
      intervalId = null;
      spacebarPressed = false;
      document.querySelector('.position').style.left = "50%";
      left = 50;
      line.classList.remove('shake');
      alert("YOU LOST. Better luck next time (-$30)");
      ButtonTxt.innerText = "Hit Space to Start Pulling";
      document.querySelector('.rotatebartop').classList.remove('counterclockwise');
      document.querySelector('.rotatebarbottom').classList.remove('clockwise');
      document.querySelector('.pullingcomputer').classList.remove('shake');
      randomNumber = Math.random() * (1 - 0.2) + 0.2;
      if (0.2 < randomNumber <= 0.3) {
        level.innerText = "Opponent Level: 2"
      } else if (0.3 < randomNumber <= 0.4) {
        level.innerText = "Opponent Level: 3"
      } else if (0.4 < randomNumber <= 0.5) {
        level.innerText = "Opponent Level: 4"
      } else if (0.5 < randomNumber <= 0.6) {
        level.innerText = "Opponent Level: 5"
      } else if (0.6 < randomNumber <= 0.7) {
        level.innerText = "Opponent Level: 6"
      } else if (0.7 < randomNumber <= 0.8) {
        level.innerText = "Opponent Level: 7"
      } else if (0.8 < randomNumber <= 0.9) {
        level.innerText = "Opponent Level: 8"
      } else if (0.9 < randomNumber <= 1) {
        level.innerText = "Opponent Level: 9"
      }
      if (credit >= 30) {
        credit = parseInt(credit) - 30
        localStorage.setItem('credit', credit);
        credit = localStorage.getItem('credit');
        currentCredit.innerText = "Your Credits: $" + credit;
      }
    }
  }

  function decreaseValue() {
    if (left <= winline) return;
    left -= .5; // speed of decrease speed of decrease speed of decrease speed of decrease speed of decrease speed of decrease
    position.style.left = left + '%';
  }

  var spacebarPressed = false;
  var gameOver;
  var intervalId = null;

  document.addEventListener('keydown', function (event) {

    if (event.code === 'Space' && !spacebarPressed) {
      credit = localStorage.getItem('credit');
      if (credit >= 30) {
        intervalId = setInterval(increaseValue, 100);
        ButtonTxt.innerText = "Keep Pulling!!"
        line.classList.add('shake');
        document.querySelector('.rotatebartop').classList.add('counterclockwise');
        document.querySelector('.rotatebarbottom').classList.add('clockwise');
        document.querySelector('.pullingcomputer').classList.add('shake');
        spacebarPressed = true;


      }
    }

    if (event.code === 'Space') {
      credit = localStorage.getItem('credit');
      if (credit >= 30) {
        decreaseValue();
        console.log(document.querySelector('.position').style.left);
        if (document.querySelector('.position').style.left <= winline + "%") { //if win
          clearInterval(intervalId);
          intervalId = null;
          spacebarPressed = false;
          document.querySelector('.position').style.left = "50%";
          left = 50;
          line.classList.remove('shake');
          alert("Congratulations! You won!! (+$30)");
          randomNumber = Math.random() * (1 - 0.2) + 0.2;
          if (0.2 < randomNumber <= 0.3) {
            level.innerText = "Opponent Level: 2"
          } else if (0.3 < randomNumber <= 0.4) {
            level.innerText = "Opponent Level: 3"
          } else if (0.4 < randomNumber <= 0.5) {
            level.innerText = "Opponent Level: 4"
          } else if (0.5 < randomNumber <= 0.6) {
            level.innerText = "Opponent Level: 5"
          } else if (0.6 < randomNumber <= 0.7) {
            level.innerText = "Opponent Level: 6"
          } else if (0.7 < randomNumber <= 0.8) {
            level.innerText = "Opponent Level: 7"
          } else if (0.8 < randomNumber <= 0.9) {
            level.innerText = "Opponent Level: 8"
          } else if (0.9 < randomNumber <= 1) {
            level.innerText = "Opponent Level: 9"
          }
          ButtonTxt.innerText = "Hit Space to Start Pulling";
          document.querySelector('.rotatebartop').classList.remove('counterclockwise');
          document.querySelector('.rotatebarbottom').classList.remove('clockwise');
          document.querySelector('.pullingcomputer').classList.remove('shake');
          credit = localStorage.getItem('credit');
          credit = parseInt(credit) + 30
          localStorage.setItem('credit', credit);
          credit = localStorage.getItem('credit');
          currentCredit.innerText = "Your Credits: $" + credit;
        }
      } else {
        alert('You need at least $30 credits to play this game.');
      }
    }

  });

  document.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
      document.querySelector('.key_button').classList.add('active');
      document.querySelector('.default').classList.add('hide')
    }
  });

  document.addEventListener('keyup', function (event) {
    if (event.code === 'Space') {
      document.querySelector('.key_button').classList.remove('active')
      document.querySelector('.default').classList.remove('hide');
    }
  });

  const howToPlayButton = document.querySelector('#howtoplay');
  const instructionDiv = document.querySelector('.instruction');

  howToPlayButton.addEventListener('click', function () {
    instructionDiv.style.display = 'flex';
  });

  credit = localStorage.getItem('credit');
  console.log(credit);
  console.log(typeof credit);

  currentCredit.innerText = "Your Credits: $" + credit;

  function hideInstructions() {
    instructionDiv.style.display = 'none';
  }
}



// popup ads

if (document.title !== 'INTENSE.NET | Tug of Wars') {
  let randomPopupNumber = Math.floor(Math.random() * 7) + 1;
  let randomPopupNumber2 = Math.floor(Math.random() * 7) + 1;
  let randomPosition = Math.floor(Math.random() * (65 - 35 + 1)) + 35;
  let randomTime = Math.floor(Math.random() * 10000) + 5000;
  let randomTime2 = Math.floor(Math.random() * 10000) + 5000;

  const xIcons = document.querySelectorAll(".imgwrap .xicon");
  const imgWraps = document.querySelectorAll('.popupads2 .imgwrap');


  function popupTrigger() {
    randomTime = Math.floor(Math.random() * 15000) + 10000;
    randomPopupNumber = Math.floor(Math.random() * 7) + 1
    console.log(randomTime)


    document.querySelector('.popupads .imgwrap:nth-of-type(' + randomPopupNumber + ')').style.display = 'flex';
  }

  setInterval(popupTrigger, randomTime);

  xIcons.forEach(icon => {
    icon.addEventListener("click", function () {
      console.log(this.parentElement);
      this.parentElement.style.display = "none";

      document.querySelector('.popupads2').style.display = 'none';
    });
  });



  function popup2Trigger() {
    document.querySelector('.popupads2 .imgwrap:nth-of-type(' + randomPopupNumber2 + ')').style.display = 'none';
    randomTime2 = Math.floor(Math.random() * 25000) + 10000;
    randomPopupNumber2 = Math.floor(Math.random() * 7) + 1;

    document.querySelector('.popupads2').style.display = 'block';
    document.querySelector('.popupads2 .imgwrap:nth-of-type(' + randomPopupNumber2 + ')').style.display = 'block';

  }

  setInterval(popup2Trigger, randomTime2);
}