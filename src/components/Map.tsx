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
      <div className="ml-1 w-9/12 mt-2 absolute left-0 top-0 z-10 p-4 bg-colorWhite">
        <div className="flex items-center gap-2">
          <div>
            <p className="text-xs font-bold">
              R. Natanael Amorim Vieira, 451 - Paranaguamirim,
            </p>
            <p className="text-xs font-semibold">Joinville - SC, 89234-042</p>
          </div>
          <Link
            target="_blank"
            href="https://www.google.com/maps/dir//R.+Natanael+Amorim+Vieira,+451+-+Paranaguamirim,+Joinville+-+SC,+89234-042/@-26.3487785,-48.7743253,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94deb5438760d413:0xc1846df7435f012a!2m2!1d-48.7708135!2d-26.3486835?entry=ttu"
          >
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
          <Link
            target="_blank"
            href="https://www.google.com/maps/place/R.+Natanael+Amorim+Vieira,+451+-+Paranaguamirim,+Joinville+-+SC,+89234-042/@-26.3487785,-48.7743253,16.75z/data=!4m6!3m5!1s0x94deb5438760d413:0xc1846df7435f012a!8m2!3d-26.3486835!4d-48.7708135!16s%2Fg%2F11lgd05l_s?entry=ttu"
          >
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
