import { useEffect, useState } from "react";
import { getStatistics } from "../hooks/statistics";
import Header from "./Header";

const StatisticsDetails = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const measures = {
    temperature: "Temperatura",
    humidity: "Humedad",
    movement: "Movimiento",
    sound: "Sonido",
    mean: "Promedio",
    max: "Máximo",
    min: "Mínimo",
    median: "Mediana",
    range: "Rango",
    variance: "Varianza",
    standardDeviation: "Desviación estándar",
    mode: "Moda",
  };

  const now = new Date();
  const startTimeStamp = new Date(now.getTime() - 1 * 60 * 60 * 1000)
    .toJSON()
    .slice(0, -1);

  const endTimeStamp = now.toJSON().slice(0, -1);
  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  const fetchData = async () => {
    const params = {
      sensorName: "",
      startTimeStamp,
      endTimeStamp,
    };
    const response = await getStatistics(params);

    setIsLoading(false);
    console.log("res" + response.data);
    setData(response.data);
  };

  return (
    <>
      <Header></Header>
      <div className="p-4 bg-gray-200 rounded-md shadow-md">
        {isLoading ? (
          <p className="text-xl font-semibold m-5">Cargando...</p>
        ) : data ? (
          <>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                Temperature Statistics:
              </h2>
              <ul>
                {Object.entries(data.temperature).map(([key, value]) => (
                  <li key={key}>
                    <span className="font-semibold">{measures[key]}:</span>{" "}
                    {value}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Humidity Statistics:
              </h2>
              <ul>
                {Object.entries(data.humidity).map(([key, value]) => (
                  <li key={key}>
                    <span className="font-semibold">{measures[key]}:</span>{" "}
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </>
  );
};

export default StatisticsDetails;
