"use client";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import Link from "next/link";
import { TbRouteAltRight } from "react-icons/tb";

interface MapProps {}

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBtVckxcTI9nUTSQFhbxR4XpLZoXEMSEEI",
  });

  const position = {
    lat: -26.348693,
    lng: -48.770824,
  };
  return (
    <div className="md:w-3/5 md:h-96 w-full h-96 relative mx-auto">
      <div className="ml-1 mt-2 absolute left-0 top-0 z-10 p-4 bg-colorWhite">
        <div className="flex items-center gap-2">
          <div>
            <p className="text-xs font-bold">
              R. Natanael Amorim Vieira, 451 - Paranaguamirim,
            </p>
            <p className="text-xs font-semibold">Joinville - SC, 89234-042</p>
          </div>
          <Link target="_blank" href="https://www.google.com/maps/dir//-26.348635,-48.7706171/@-26.348635,-48.773192,17z?hl=pt-BR&entry=ttu">
            <div className="flex flex-col items-center">
              <TbRouteAltRight
                title="Ver rotas para esse local no google maps"
                className="hover:scale-125"
                size={25}
              />
              <p
                title="Ver rotas para esse local no google maps"
                className="text-blue-500 border-b-2 border-transparent hover:border-solid hover:border-b-2 hover:border-blue-500"
              >
                Rotas
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link target="_blank" href="https://www.google.com/maps/place/26%C2%B020'55.1%22S+48%C2%B046'14.2%22W/@-26.348635,-48.773192,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-26.348635!4d-48.7706171?hl=pt-BR&entry=ttu">
            <p className="text-xs inline-block text-blue-500 border-b-2 border-transparent hover:border-solid hover:border-b-2 hover:border-blue-500">
              Ver mapa ampliado
            </p>
          </Link>
        </div>
      </div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={position}
          zoom={14}
        >
          <Marker position={position} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Map;
