//'use strict';
let username = prompt('What is your name?');
alert('Welcome '+username+' to \'About Me\' Quiz 😁\n\nYou can answer by (Y/N)\nOr (Yes/No)');
/****** 1 ******/
let score = 0;
let result = 'Correct!👍';
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
//console.log('Q1: ',myName,' Result: ', result);
alert('Your score after this question: '+score+'\nResult: '+ result);
/****** 2 ******/
let year =prompt(result +'\n\nQ2. Was I born in 1997🤔?');
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
//console.log('Q2: ',year,' Result: ', result);
alert('Your score after this question: '+score+'\nResult: '+ result);
/****** 3 ******/
let coffee =prompt(result +'\n\nQ3. Espresso(Y) VS Latte(N) ☕ ');
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
//console.log('Q3: ',coffee,' Result: ', result);
alert('Your score after this question: '+score+'\nResult: '+ result);
/****** 4 ******/

let free =prompt(result +'\n\nQ4. In my free time, i sleep😴. \n(Y/N) ');
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
//console.log('Q3: ',coffee,' Result: ', result);
alert('Your score after this question: '+score+'\nResult: '+ result);
/****** 5 ******/
let color =prompt(result +'\n\nQ5. Light blue is my favorite color.🤔');
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
//console.log('Q5: ',color,' Result: ', result);
alert('Result: '+ result);
//console.log('Your Score is: ',score,'/5');
alert(username+'\'s Final Score is: '+score+'/5');
