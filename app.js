const content = document.getElementById('info');
const form = document.querySelector('form');
const submit = document.querySelector('button');

function handleButtonClick() {
    event.preventDefault(); // Avoid the page from refreshing

    let location = document.getElementById('location').value;
    location = location.replace(' ', '+');
    let units = document.getElementById('units').value;
    
    getWeather(location, units);
}

async function getWeather(location, units) {
    // const location = 'london';
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=WCFVXG228SL6NK7AP9TVRVSHH&unitGroup=${units}`)
    
    console.log(location);
    // console.log(response);
    console.log(units);

    const data = await response.json();
    
    console.log(data);
    content.textContent = `The actual temperature is ${data.currentConditions.temp} ${units === 'uk'? 'C' : 'F'} \n`;

    content.textContent += `but it feels like ${data.currentConditions.feelslike} ${units === 'uk'? 'C' : 'F'}.`;

}

submit.addEventListener('click', handleButtonClick);

// getWeather();