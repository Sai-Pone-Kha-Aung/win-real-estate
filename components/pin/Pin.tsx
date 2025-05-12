import {  Marker, Popup } from "react-leaflet";
import './Pin.scss'
import Link from "next/link";

const Pin = ({item}: CardProps) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
    <Popup>
      <div className="popupContainer">
        <img src={item.images[0]} alt=""/>        
      <div className="textContainer">
        <Link href={`/${item.id}`}>{item.title}</Link>
        <span>{item.bedroom} bedroom</span>
        <b>${item.price}</b>
      </div>
      </div>
    </Popup>
  </Marker>
  )
}

export default Pin