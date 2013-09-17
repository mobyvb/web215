window.onload = function() {
  document.getElementById('green-purple').onclick = function() {changeBG('green', 'purple');};
  document.getElementById('red-orange').onclick = function() {changeBG('red', 'orange');};
  document.getElementById('black-white').onclick = function() {changeBG('black', 'white');};
  document.getElementById('blue-red').onclick = function() {changeBG('blue', 'red');};
};

var changeBG = function(color1, color2) {
  var baseString = 'linear-gradient(45deg,'+color1+','+color2+')';
  document.getElementById('background-grad').style.backgroundImage = baseString;
  document.getElementById('background-grad').style.backgroundImage = '-webkit-'+baseString;
  document.getElementById('background-grad').style.backgroundImage = '-moz-'+baseString;
};