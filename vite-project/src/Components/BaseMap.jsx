import { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "../assets/Styles/BaseMap.css";

mapboxgl.accessToken = "pk.eyJ1IjoiZ2VycnkyNy0wOCIsImEiOiJjbGtxYmR5NDUxb3pzM2R0bXM1N3ptdm4yIn0.PSgW0rhmrEKRUg22HmJDCg"; // Reemplaza "TU_ACCESS_TOKEN_DE_MAPBOX" con tu token de Mapbox

function BaseMap({ longitud, latitud }) {
  useEffect(() => {
    // Inicializar el mapa cuando se cargue el componente
    const map = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/mapbox/streets-v12",
      center: [longitud, latitud],
      zoom: 15,
    });

    // Crear un marcador
    const marker = new mapboxgl.Marker().setLngLat([longitud, latitud]).addTo(map);

    // Limpiar el marcador y volver a agregarlo cuando cambie la ubicación
    marker.setLngLat([longitud, latitud]);
  }, [latitud, longitud]);

  return <div id="map-container" className="map-container" />;
}

export default BaseMap;
