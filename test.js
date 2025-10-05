const Mock = require("./Temp30yearsOnePoint.json");

const filterDataByVariable = (list, day, min, max) => {
  return Object.entries(list)
    .filter(
      ([key, value]) => key.slice(4) === day && value >= min && value <= max
    )
    .map(([_, value]) => value);
};

function processData(day, values, ideals) {
  const results = [];

  Object.entries(values.properties.parameter).map((object) => {
    const [key, value] = object;

    switch (key) {
      case "T2M":
        ({ objetivo, variabilidad } = ideals.T2M);
        break;
      case "WS10M":
        ({ objetivo, variabilidad } = ideals.WS10M);
        break;
      default:
        console.warn(`Variable no reconocida: ${key}`);
        return; // Salir del switch y no procesar esta variable
    }

    const min = objetivo - variabilidad;
    const max = objetivo + variabilidad;

    const arr = filterDataByVariable(value, day, min, max);
    const probability = arr.length / 30;

    results.push({ [key]: probability });
  });

  console.log(results);
}

const dateNow = new Date();
const year = dateNow.getFullYear();
const month = String(dateNow.getMonth() + 1).padStart(2, "0");
const day = String(dateNow.getDate()).padStart(2, "0");
const formattedDate = `${year}${month}${day}`;

fetch(
  `https://power.larc.nasa.gov/api/temporal/daily/point?parameters=T2M,WS10M,RH2M,PRECTOT&community=RE&longitude=-68.517215&latitude=-31.5223438&format=JSON&start=20010101&end=${formattedDate}`
)
  .then((response) => response.json())
  .then((data) => {
    let presets = {
      T2M: { objetivo: 17, variabilidad: 2 },
      WS10M: { objetivo: 3, variabilidad: 100 },
      RH2M: { objetivo: 3, variabilidad: 100 },
      PRECTOT: { objetivo: 3, variabilidad: 100 },
    };
    processData("0501", data, presets);
  })
  .catch((error) => {
    console.error("Error al obtener los datos:", error);
  });
