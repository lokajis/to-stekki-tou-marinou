import { Map, Marker } from '@googlemaps/react-wrapper'; // Correct the import based on actual export

const YOUR_API_KEY = "YOUR_ACTUAL_API_KEY"; // Ensure you have the correct API key
const mapStyles = [
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        { color: '#193341' }
      ]
    }
];

function GoogleMaps (){
    return (
        <div>
            <Map
              apiKey={YOUR_API_KEY}
              defaultZoom={8}
              defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
              defaultOptions={{ styles: mapStyles, disableDefaultUI: true }}
            >
                {/* Marker can be used here if it's a child component of Map */}
                <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
            </Map>
        </div>
    );
}

export { GoogleMaps };
