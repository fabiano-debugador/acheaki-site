// import { useState } from 'react';

// import {
//   MapContainer,
//   Marker,
//   Popup,
//   // Marker,
//   // Popup,
//   TileLayer,
//   // useMap,
//   useMapEvents,
// } from 'react-leaflet';

// import classes from './Map.module.sass';
// function LocationMarker() {
//   const [position, setPosition] = useState({ lat: 51.505, lng: -0.09 });
//   const map = useMapEvents({
//     click() {
//       map.locate();
//     },
//     locationfound(e) {
//       setPosition(e.latlng);
//       map.flyTo(e.latlng, map.getZoom());
//     },
//   });

//   return position === null ? null : (
//     <Marker position={position}>
//       <Popup>You are here</Popup>
//     </Marker>
//   );
// }

const Map: React.FC = () => {
  return (
    <>
      <div>
        <h1>Mapa</h1>
        {/* <MapContainer
          center={{ lat: 51.505, lng: -0.09 }}
          zoom={4}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
        </MapContainer> */}
        {/* <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer> */}
      </div>
    </>
  );
};

export default Map;
