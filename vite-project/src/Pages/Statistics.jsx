import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { getSensorData } from "../hooks/statistics";
import StatisticsCard from "../Components/StatisticsCard";
import Chart from "../Components/Chart";
import Header from "../Components/Header";
import StatisticsDetails from "../Components/StatisticsDetails";
import { useNavigate } from "react-router-dom";

const Statistics = () => {
  const { authState } = useAuth();
  const [data, setData] = useState(null);
  const [chartData, setChartData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const chartTitles = {
    "temperature": "Temperatura",
    "humidity": "Humedad",
    "sound": "Sonido",
  }

  const now = new Date();
  const startTimeStamp = new Date(now.getTime() - 1 * 60 * 60 * 1000)
    .toJSON()
    .slice(0, -1);

  const endTimeStamp = now.toJSON().slice(0, -1);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      setChartData(data);
      setIsLoading(false);
    }
  }, [data]);

  const fetchData = async () => {
    const params = {
      sensorName: "",
      startTimeStamp,
      endTimeStamp,
    };

    const response = await getSensorData(params);
    console.log(response);
    setData(response.data);
  };

  return (
    <>
      <Header></Header>
      <div className="text-center items-center justify-center h-screen p-4">
        <p className="text-3xl font-semibold m-5">Estadísticas</p>
        <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          navigate("/statistics/details");
        }}
      >
        Ver detalles
      </button>
        <div className="flex flex-row flex-wrap justify-center items-center">
        {isLoading ? (
            <div className="col-span-3 flex justify-center items-center">
              <p className="text-xl font-semibold m-5">Cargando...</p>
            </div>
          ) : chartData &&
            Object.keys(chartData).length > 0 &&
            Object.values(chartData).every(
              (dataList) => dataList.length === 0
            ) ? (
            <div className="col-span-3 flex justify-center items-center">
              <p className="text-xl font-semibold m-5">No hay datos</p>
            </div>
          ) : isLoading ? (
            <p>Cargando...</p>
          ) : (
            Object.entries(chartData).map(([chartType, dataList], index) => {
              if (dataList.length > 0) {
                return (
                  <StatisticsCard
                    key={index}
                    Chart={
                      <Chart
                        type="line"
                        dataList={dataList}
                        color="#EF4444"
                      />
                    }
                    title={chartTitles[chartType]}
                  />
                );
              }
              return null;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Statistics;
