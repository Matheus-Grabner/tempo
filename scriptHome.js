// Exemplo de dados da API (substitua por uma requisição real)
const weatherData = {
    cidade: "São Paulo",
    nuvens: "Poucas nuvens",
    temperaturaAtual: 25,
    humidade: 60,
    temperaturaMaxima: 28,
    temperaturaMinima: 18,
    velocidadeDoVento: 10,
    icone: "https://cdn-icons-png.flaticon.com/512/1163/1163661.png" // Ícone de sol
};

// Atualizando os elementos HTML com os dados da API
document.getElementById('city').textContent = `Cidade: ${weatherData.cidade}`;
document.getElementById('clouds').textContent = weatherData.nuvens;
document.getElementById('current-temp').textContent = `${weatherData.temperaturaAtual}°C`;
document.getElementById('humidity').textContent = `${weatherData.humidade}%`;
document.getElementById('max-temp').textContent = `${weatherData.temperaturaMaxima}°C`;
document.getElementById('min-temp').textContent = `${weatherData.temperaturaMinima}°C`;
document.getElementById('wind-speed').textContent = `${weatherData.velocidadeDoVento} km/h`;
document.getElementById('weather-icon').src = weatherData.icone;