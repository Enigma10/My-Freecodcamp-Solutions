var lon,lat;
var calsius
window.onload=getLocation() ;
function getLocation() {
    console.log("hello");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    lat= position.coords.latitude,
    lon= position.coords.longitude;
    console.log(lon+"-"+lat);
    showWeather(lon,lat);
}

function showWeather(lon,lat){
  console.log("hello")
  var request = new XMLHttpRequest();
  request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&'+'lon='+lon+'&appid=bf5f6615ed5a4e5d830211248e5a1b24', true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.setRequestHeader("Accept","application/json");
  request.send()
  request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
      var data = JSON.parse(request.responseText);
      console.log(data);
      document.getElementById('location').textContent=data.name;
      document.getElementById('weather').textContent=data.weather[0].main;
      document.getElementById('temprature').textContent=data.main.temp-273.15;
      calsius=data.main.temp-273.15;
      var textBox = document.createElement("a");
      textBox.setAttribute("href","#");
      textBox.setAttribute("onclick","changeTemprature()");
      textBox.textContent='C';
      document.getElementById("check").appendChild(textBox).setAttribute("id", "temp");
      var weather=data.weather[0].main;
      changeBackground(weather);
}
else {
 alert("ERROR");
  // We reached our target server, but it returned an error
}
};

}


function changeBackground(weather){
    if(weather=='Clouds') document.body.style.backgroundColor = "red";
    else if(weather=='Clear') document.body.style.backgroundColor = "blue";
    else if(weather=='Snow')  document.body.style.backgroundColor = "gray";
    else if(weather=='Rain')  document.body.style.backgroundColor = "green";
    }


function changeTemprature() {
  var val= document.getElementById('temp').textContent;

  if (val=='C')
  { calsius=calsius*9/5+32;
    document.getElementById('temprature').textContent=calsius;
    document.getElementById('temp').textContent='F';


  }
  if (val=='F')
  { calsius=(calsius-32)*5/9;
    document.getElementById('temprature').textContent=calsius;
    document.getElementById('temp').textContent='C';

  }

}
