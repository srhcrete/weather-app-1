var request = new XMLHttpRequest();

request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=portland&APPID=ff3c9f4d39e7e445f23cfbb2e3ba1f27', true);

console.log('outside the payload');

request.onload = function() {
  console.log('in the payload');
  var data = JSON.parse(this.response);
  var temp = data.main.temp;
  var cTemp = temp - 273;
  var fTemp = 9/5 * cTemp + 32;
  console.log('K =', temp);
  console.log('C =', cTemp);
  console.log('F =', fTemp);
}

request.send();
