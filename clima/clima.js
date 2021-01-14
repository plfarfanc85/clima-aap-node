const axios = require("axios");

const getClima = async (lat, lng) => {
  const instance = axios.create({
    baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?lat=${lat}&lon=${lng}`,
    headers: {
      "x-rapidapi-key": "3bab896e66msh7be3670497658abp1ac982jsnf83027358f44",
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      useQueryString: true,
    },
  });

  const resp = await instance.get();

  return resp.data.main.temp;
};

module.exports = {
  getClima,
};
