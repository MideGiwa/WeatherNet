

let weather = {
  apikey: "965d013d760e3900578211c340d1eb17",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apikey + "&units=metric"
    )
    .then((response) => {
      return response.json();
    })
    .then((data) => this.dislpayWeather(data));
  },
  dislpayWeather: function (data) {
    const { name } = data;
    const { description, icon } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    console.log(name, icon, description, temp, humidity, speed);
    console.log(data);
    document.querySelector(".location-city").innerHTML = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".temperature-degree").innerHTML = temp + "°C";
    document.querySelector(".humidity").innerHTML =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerHTML = "Wind: " + speed + "Km/hr";
    document.querySelector(".weather ").classList.remove("loading");
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".location-city").innerHTML = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".temperature-degree").innerHTML = temp + "°C";
    document.querySelector(".humidity").innerHTML =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerHTML = "Wind speed: " + speed + "Km/hr";
    document.querySelector(".weather ").classList.remove("loading");

    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + description + "')";
  },

  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});
document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") weather.search();
  });
weather.fetchWeather("Lagos");


//background transition

/**
function() {

  // Settings.
    var settings = {

      // Images (in the format of 'url': 'alignment').
        images: {
          url("'https://source.unsplash.com/1600x900/?" + weather.dislpayWeather.description + "'"): 'center',
        },

      // Delay.
        delay: 6000

    };

  // Vars.
    var	pos = 0, lastPos = 0,
      $wrapper, $bgs = [], $bg,
      k, v;

  // Create BG wrapper, BGs.
    $wrapper = document.createElement('div');
      $wrapper.id = 'bg';
      $body.appendChild($wrapper);

    for (k in settings.images) {

      // Create BG.
        $bg = document.createElement('div');
          $bg.style.backgroundImage = 'url("' + k + '")';
          $bg.style.backgroundPosition = settings.images[k];
          $wrapper.appendChild($bg);

      // Add it to array.
        $bgs.push($bg);

    }

  // Main loop.
    $bgs[pos].classList.add('visible');
    $bgs[pos].classList.add('top');

    // Bail if we only have a single BG or the client doesn't support transitions.
      if ($bgs.length == 1
      ||	!canUse('transition'))
        return;

    window.setInterval(function() {

      lastPos = pos;
      pos++;

      // Wrap to beginning if necessary.
        if (pos >= $bgs.length)
          pos = 0;

      // Swap top images.
        $bgs[lastPos].classList.remove('top');
        $bgs[pos].classList.add('visible');
        $bgs[pos].classList.add('top');

      // Hide last image after a short delay.
        window.setTimeout(function() {
          $bgs[lastPos].classList.remove('visible');
        }, settings.delay / 2);

    }, settings.delay);

})();
**/
