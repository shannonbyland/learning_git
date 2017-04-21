alert('Welcome to Git!');

console.log('we are on a new branch!');

var firstName = 'Shannon';
var lastName = 'Byland';
var age = 23;

console.log('Full Name: ' + firstName + ' ' + lastName);

if (age > 19)
console.log('not a teen');
else
console.log('we are a teen. We hate our parents!');


var carButton = document.getElementById('get-car');

carButton.addEventListener('click', function() {
  // i need to find the input off the page
   var carInput = document.getElementById('car');
  // I need to console log the input value
  console.log(carInput.value);
});
