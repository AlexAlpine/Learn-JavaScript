// запрос к первой api
fetch("https://get.geojs.io/v1/ip/geo.json")
  .then(res => res.json())
  .then(data => {
    // деструктуризация данных из data
    const { city, latitude, longitude } = data;
    // запрос ко второй api с данными и первой
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    )
      .then(res => res.json())
      .then(data => {
        // создаем карточку и ее отдельные элементы
        const card = document.createElement('div')
        card.className = 'weather-card'

        const h3 = document.createElement('h3')
        h3.textContent = city

        const p = document.createElement('p')
        p.textContent = `Temperature: ${data.current_weather.temperature} ${data.current_weather_units.temperature}`

        const p1 = document.createElement('p')
        p1.textContent = `Wind: ${data.current_weather.interval} ${data.current_weather_units.interval}`

        const p2 = document.createElement('p')
        p2.textContent = `Weather: ${decodeWeather(data.current_weather.weathercode)}`
        // добавляем элементы к карточке
        card.append(h3, p, p1, p2)
        // добавляем карточку на страницу
        document.body.appendChild(card)
      });
  });


  function decodeWeather(code) {
    switch (code) {
      case 0:
        return 'Clear sky'
    }
    // ! здесь должны быть описаны все случаи в  case чтобы приложение работало корректно
  }
