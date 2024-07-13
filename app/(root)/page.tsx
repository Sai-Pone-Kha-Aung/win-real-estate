import Image from "next/image";
import "./layout.scss";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="layout">
      <Navbar />
    </div>
  );
}