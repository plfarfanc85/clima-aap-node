const axios = require("axios");

const getLugarLatLng = async (dir, limit) => {
  const encodeUlr = encodeURI(dir);

  const instance = axios.create({
    baseURL: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=${limit}`,
    headers: {
      "x-rapidapi-key": "3bab896e66msh7be3670497658abp1ac982jsnf83027358f44",
      "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
      useQueryString: true,
    },
  });

  const resp = await instance.get();

  if (resp.data.data.length === 0) {
    throw new Error(`No hay resultados para ${dir}`);
  }

  const data = resp.data.data[0];
  const direccion = data.name;
  const lat = data.latitude;
  const lng = data.longitude;

  return {
    direccion,
    lat,
    lng,
  };
};

module.exports = {
  getLugarLatLng,
};
