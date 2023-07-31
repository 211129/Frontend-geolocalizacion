import { useEffect, useState } from "react";
import BaseMap from "./BaseMap";
import { io } from "socket.io-client";

function SectionMapa() {
    const [socket, setSocket] = useState(io("http://localhost:8085/gps"));
    const [latitud, setLatitud] = useState(0);
    const [longitud, setLongitud] = useState(0);
    const [temperature, setTemperature] = useState(0);
    const [humidity, setHumidity] = useState(0);

    useEffect(() => {
        socket.on("connect", () => {
            console.log("Conectado");
        });

        socket.on("newData", (data) => {
            data.data.map((item) => {
                if (item.name === "location") {
                    console.log(item.latitude, item.longitude);
                    setLatitud(item.latitude);
                    setLongitud(item.longitude);
                } else if (item.name === "temperature") {
                    console.log(item.value);
                    setTemperature(item.value);
                }
                else if (item.name === "humidity") {
                    console.log(item.value);
                    setHumidity(item.value);
                }
            });
        });
    }, [socket, latitud, longitud]);

    return (
        <div>
            <section id="home">
                <div className="inner-width" style={{ "display": "flex", flexDirection: "column" }}>
                    <h1 style={{"fontSize": "2rem"}}>Datos del Auto</h1>
                    <br />
                    <table style={{ width: "100%" }}>
                        <thead>
                            <tr>
                                <th>Parámetro</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Temperatura </td>
                                <td>{temperature > 0 ? temperature : "--"}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>Humedad </td>
                                <td>{humidity > 0 ? humidity : "--"}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>Latitud </td>
                                <td>{latitud != 0 ? latitud : "--"}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>Longitud </td>
                                <td>{longitud != 0 ? longitud : "--"}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="content" style={{ width: "100%" }}>
                        <BaseMap latitud={latitud} longitud={longitud} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SectionMapa;