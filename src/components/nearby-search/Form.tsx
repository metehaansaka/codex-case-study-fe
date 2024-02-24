import { findNearbyPlaces } from "@/api/nearbySearchApi";
import { useRef } from "react";

export default function Form(props:any) {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(formRef.current!);
        try {
            const response = await findNearbyPlaces(formData);
            if(response.success && response.results.length > 0) {
                props.setLocations(response.results.map((result:any) => result.geometry.location));
                props.setCenter({
                    lat: parseFloat(formData.get('latitude')?.toString() || ''),
                    lng: parseFloat(formData.get('longitude')?.toString() || '')
                });
            }
          } catch (error) {
            console.error('API request error:', error);
          }
      };

    return (
        <form className="row g-3" ref={formRef} onSubmit={handleSubmit}> 
            <h1>Nearby Search</h1>
            <div className="col-auto">
                <label htmlFor="latitude">Latitude</label>
                <input type="text" required className="form-control" id="latitude" name="latitude"/>
            </div>
            <div className="col-auto">
                <label htmlFor="longitude">Longitude</label>
                <input type="text" required className="form-control" id="longitude" name="longitude"/>
            </div>
            <div className="col-auto">
                <label htmlFor="radius">Radius</label>
                <input type="text" required className="form-control" id="radius" name="radius"/>
            </div>
            <div className="col-auto d-flex align-items-end">
                <button type="submit" className="btn btn-primary">Search</button>
            </div>
        </form>    
    );
  }