'use strict';

let result = 'Correct!👍';
let score = 0;
let username = prompt('What is your name?');
while(!username || parseInt(username)){
  username = prompt('Please write your name.');
}
alert('Welcome '+username+' to \'About Me\' Quiz 😁\n\nYou can answer by (Y/N)\nOr (Yes/No)');
/****** 1 ******/
function q1(){
  let myName=prompt('Q1. Is my name Noor🤔?');
  switch (myName.toUpperCase()){
  case 'Y':
  case 'YES':
    score+=1;
    break;
  case 'N':
  case 'NO':
    result = 'OMG😲! It was easy, but the answer is wrong ❌...';
    break;
  default:
    result = 'You answerd wrong 😞, please type only (Y/N) OR (Yes/No)';
  }
  alert('Your score after this question: '+score+'\nResult: '+ result); }
q1();
/****** 2 ******/

function q2(){
  let year =prompt('Q2. Was I born in 1997🤔?');
  year = year.toLowerCase();
  if (year === 'n' || year === 'no')
  {
    score+=1;
    result = 'Awesome!👍👍👍';
  }
  else if (year === 'y' || year === 'yes')
  {
    result = 'I was born in 1998✔️, Good luck with next questions';
  }
  else
    result = 'You answerd wrong 😞, please type only (Y/N) OR (Yes/No)';
  alert('Your score after this question: '+score+'\nResult: '+ result);
}
q2();

/****** 3 ******/
function q3(){
  let coffee =prompt('Q3. Espresso(Y) VS Latte(N) ☕ ');
  switch (coffee.toUpperCase()){
  case 'Y':
  case 'YES':
    result = 'OMG! Who loves espresso more?🤣';
    break;

  case 'N':
  case 'NO':
    score+=1;
    result = 'Great!👍';
    break;
  default:
    result = 'You answerd wrong 😞, please type only (Y/N) OR (Yes/No)';
  }
  alert('Your score after this question: '+score+'\nResult: '+ result);
}
q3();
/****** 4 ******/
function q4(){
  let free =prompt('Q4. In my free time, i sleep😴. \n(Y/N) ');
  switch (free.toUpperCase()){
  case 'Y':
  case 'YES':
    result = 'I wish your answer was correct😭, in fact I suffer from insomnia.';
    break;

  case 'N':
  case 'NO':
    score+=1;
    result = 'Correct👍, I watch Kdramas📺 instead.';
    break;
  default:
    result = 'You answerd wrong 😞, please type only (Y/N) OR (Yes/No)';
  }
  alert('Your score after this question: '+score+'\nResult: '+ result);
}

q4();

/****** 5 ******/
function q5(){
  let color =prompt('Q5. Light blue is my favorite color.🤔');
  switch (color.toLowerCase()){
  case 'y':
  case 'yes':
    result = 'the answer is very close, Cyan is my favorite.';
    break;

  case 'n':
  case 'no':
    score+=1;
    result = 'Correct!👍';
    break;
  default:
    result = 'You answerd wrong 😞, please type only (Y/N) OR (Yes/No)';
  }
  alert('Your score after this question: '+score+'\nResult: '+ result);
}
q5();

/****** 6 ******/
function q6(){
  let num;
  for(let i=0; i<6 ; i++)
  {
    num =prompt('Q6. Quess a number from 1-5 \nYou Have 6 attempts');
    num = parseInt(num);
    if (num === 3)
    {
      score+=1;
      alert('Got it right!👍👍👍');
      break;
    }

    else if (num > 3 && num <=5)
    {
      alert('Too high');
    }
    else if (num < 3 && num > 0)
    {
      alert('Too low');
    }
    else if (!num){
      alert('You did not insert a number, please write a number that is between 1-5');
    }
    else
      alert('Please write a number that is between 1-5');
  }

  if(num !==3){
    num =3;
    alert('The correct answer is: ' +num);
  }

  alert('Your score after this question: '+score);
}
q6();


/****** 7 ******/
function q7(){
  let guess = ' ';
  let drinks = ['Google Chrome', 'Mozilla Firefox','Microsoft Edge','Safari','Opera', 'Brave Browser','Chromium','Vivaldi', 'Torch','Maxthon'];
  for(let i=0; i<6;)
  {
    guess=prompt('Q7. Quess one of top 10 Web browsers\nYou Have 6 attempts');
    let correct =0;
    for (let j = 0; j < drinks.length; j++) {
      if (drinks[j].toLowerCase() === guess.toLowerCase())
      {
        score+=1;
        alert('Got it right!👍👍👍');
        correct = 1;
        break;
      }
    }

    if (correct ===1)
    {
      break;
    }
    else if (!guess.toString())
    {
      alert('please fill the gap.');
    }
    else if (parseInt(guess))
    {
      alert('what you wrote is a number, I need a word \nPlease try again.');
    }
    else
    {
      alert('Please try again.');
    }

    alert('This is your ' + ++i +' Atempt.');
  }

  alert('The possible 10 answers are:\n\n'+ drinks.join('\n'));
}
q7();
alert(username+'\'s Final Score is: '+score+'/7');
