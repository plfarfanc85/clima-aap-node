const clima = require("./clima/clima");
const lugar = require("./lugar/lugar");

// Yargs
// Para no configurar un comando sino directamente las opciones
const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Dirección de la ciudad para obtener el clima",
    demand: true,
  },
  limite: {
    alias: "l",
    desc: "Limite de las ciudades a consultar",
    demand: true,
  },
}).argv;

//console.log(argv.direccion);
//lugar.getLugarLatLng(argv.direccion, argv.limit).then(console.log);
//clima.getClima(0, 0).then(console.log);

const getInfo = async (direccion, limite) => {
  try {
    const ciudad = await lugar.getLugarLatLng(direccion, limite);
    const temperatura = await clima.getClima(ciudad.lat, ciudad.lng);

    return `La temperatura de la ciudad ${ciudad.direccion} es ${temperatura}`;
  } catch (e) {
    return `No se pudo determinar el clima de ${direccion}`;
  }
};

getInfo(argv.direccion, argv.limite).then(console.log).catch(console.log);
