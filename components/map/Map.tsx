"use client";

// IMPORTANT: the order matters!
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import { MapContainer, TileLayer } from "react-leaflet";
import './map.scss'
import Pin from "../pin/Pin";

interface Item {
  id: number;
  title: string;
  images: string[];
  bedroom: number;
  bathroom: number;
  price: number;
  address: string;
  latitude: number;
  longitude: number;
}

interface CardProps {
  item: Item[]; 
}
export default function Map({item}: CardProps) {

  return (
      <MapContainer
        center={item.length === 1 ? [item[0].latitude, item[0].longitude] : [52.4797, -1.90269]}
        zoom={11}
        scrollWheelZoom={true}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {item.map((item) => (
          <Pin item={item} key={item.id} />
        ))}
      </MapContainer>
  );
}