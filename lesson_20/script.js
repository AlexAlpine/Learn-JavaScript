// Запрос к первому API для получения данных о широте, долготе и городе:

fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true"
)
  .then((response) => response.json())
  .then((data) => {
    const { latitude, longitude, name } = data.current_weather;
    console.log(
      `Latitude: ${latitude}, Longitude: ${longitude}, City: ${name}`
    );
  })
  

fetch(
  `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
)
  .then((response) => response.json())
  .then((data) => {
    const { temperature, windspeed, weathercode } = data.current_weather;
    console.log(
      `Temperature: ${temperature}°C, Wind speed: ${windspeed}m/s, Weather code: ${weathercode}`
    );
  });
 
  fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
  .then(response => response.json())
  .then(data => {
    const { temperature, windspeed, weathercode } = data.current_weather;
    console.log(`Temperature: ${temperature}°C, Wind speed: ${windspeed}m/s, Weather code: ${weathercode}`);})