const apiKey = 'acd8f94e1d12e611d684ecc6e1859dc8';

// Função para buscar dados da cidade
async function fetchCity(cidade) {
    try {
        console.log('✔ Sucess (1)');

        let chamada = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}`);
        let cityData = await chamada.json();

        let cityDataList = {
            city: cityData.name, // Nome da cidade
            coord: cityData.coord, // Coordenadas
            clouds: cityData.clouds.all, // Núvens
            humidity: String(cityData.main.humidity), // Humidade
            currentTemperature: KelvinToCelsius(cityData.main.temp), // Temperatura atual
            tempMin: KelvinToCelsius(cityData.main.temp_min), // Temperatura mínima
            tempMax: KelvinToCelsius(cityData.main.temp_max), // Temperatura máxima
            windSpeed: cityData.wind.speed,
            icon: `https://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png` // Ícone do clima
        };

        console.log(cityDataList);
        return cityDataList;
    } catch (error) {
        console.log(`❎ Erro: ${error.stack}`);
    }
}

// Converte Graus Kelvin em Celsius
function KelvinToCelsius(temp) {
    let temperatureConversion = temp - 273.15;
    let removeDecimal = String(temperatureConversion).split(".")[0];

    return removeDecimal;
}

// Função principal para atualizar o DOM
async function main(cidade) {
    document.getElementById('loading').style.display = 'block';

    let dataCity = await fetchCity(cidade);

    if (dataCity) {
        // Atualizando os elementos HTML com os dados da API
        document.getElementById('city').textContent = `Cidade: ${dataCity.city}`;
        document.getElementById('clouds').textContent = `Nuvens: ${dataCity.clouds}%`;
        document.getElementById('current-temp').textContent = `${dataCity.currentTemperature}°C`;
        document.getElementById('humidity').textContent = `${dataCity.humidity}%`;
        document.getElementById('max-temp').textContent = `${dataCity.tempMax}°C`;
        document.getElementById('min-temp').textContent = `${dataCity.tempMin}°C`;
        document.getElementById('wind-speed').textContent = `${dataCity.windSpeed} km/h`;
        document.getElementById('weather-icon').src = dataCity.icon;
    }

    document.getElementById('loading').style.display = 'none';
}

// Evento de clique no botão de busca
document.getElementById('search-btn').addEventListener('click', () => {
    const cidade = document.getElementById('city-input').value;
    if (cidade) {
        main(cidade);
    }
});

// Evento de pressionar Enter no campo de busca
document.getElementById('city-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const cidade = document.getElementById('city-input').value;
        if (cidade) {
            main(cidade);
        }
    }
});

// Chama a função principal com uma cidade padrão
main('São Paulo');

console.log

