import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';


const MapContainer: React.FC<any> = ({ locations,center }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyAphZIQpmekU3Z8jrX0N0GNACFvA07WAXA',
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={{ width: '100%', height: '400px' }} zoom={15} center={{ lat:37.7937,lng:-122.3965 }}>
      {locations.map((location:any, index:any) => (
        <Marker key={index} position={{ lat: location.lat, lng: location.lng }} />
      ))}
    </GoogleMap>
  ) : (
    <div>{loadError ? 'Map could not be loaded' : 'Loading map...'}</div>
  );
};

export default MapContainer;
