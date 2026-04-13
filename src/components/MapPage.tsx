import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const places = [
  { name: "Lake Pichola", lat: 24.576, lng: 73.68 },
  { name: "City Palace", lat: 24.5767, lng: 73.6835 },
  { name: "Jag Mandir", lat: 24.5712, lng: 73.6798 },
];

export default function MapPage() {
  return (
    <MapContainer
      center={[24.5854, 73.7125]}
      zoom={13}
      className="h-[400px] w-full rounded-2xl"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {places.map((place, i) => (
        <Marker key={i} position={[place.lat, place.lng]} icon={icon}>
          <Popup>{place.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
