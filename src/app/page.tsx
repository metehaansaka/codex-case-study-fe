"use client"
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Form from "@/components/nearby-search/Form";
import MapContainer from "@/components/nearby-search/MapContainer";

export default function Home() {
  const [locations, setLocations] = useState([]);
  const [center, setCenter] = useState({
    lat:0,
    lng:0
  });
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      require('bootstrap/dist/js/bootstrap.js')
    }
  }, [])
  return (
    <main>
        <div className="container pt-5">
            <Form setLocations={setLocations} setCenter={setCenter}/>
            {locations.length > 0 && 
            <MapContainer locations={locations} center={center} />}
        </div>
    </main>
  );
}
