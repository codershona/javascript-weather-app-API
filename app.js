// function :
var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
// var name = document.querySelector('.name');

fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=478cc3c9e7cd7db831d6f004db3d70f7')
   .then()
