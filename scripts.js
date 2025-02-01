const apiUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat=-26.938905924789964&lon=-49.127794437280976&appid=2f9fdfb36a650f75c5519b1713641539'

//Chamada da API

async function fetchData() {
    try {

        let response = await fetch('https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=acd8f94e1d12e611d684ecc6e1859dc8');


        if (response.ok || response.status == 401 || !response.status == 200 || !response.status == 201) {
            throw new Error('Erro ao buscar dados da API');
        }

        console.log(`Retorno da API:`);
        console.log(response);

    } catch (error) {
        console.log('Caiu no catch')
        console.log(`Erro: ${error}`)
    }

}

fetchData()
