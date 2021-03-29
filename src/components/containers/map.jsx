import React, {
  useEffect,
  useRef,
} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {
  map as offersPropTypes,
} from "../../prop-types/offers-validation";

import "leaflet/dist/leaflet.css";

const Map = ({
  offers,
  activeOfferID = 0,
  currentCity = ``,
}) => {
  const {
    latitude,
    longitude,
    zoom,
  } = offers[0].city.location;

  const mapRef = useRef();
  const markersRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: latitude,
        lng: longitude,
      },
      zoom,
      zoomControl: false,
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    return () => {
      mapRef.current.remove();
    };
  }, [
    currentCity,
  ]);

  useEffect(() => {
    const markers = offers.map((offer) => {
      const {
        latitude: offerLatitude,
        longitude: offerLongitude,
      } = offer.location;

      const icon = leaflet.icon({
        iconUrl: `${activeOfferID === offer.id ? `img/pin-active.svg` : `img/pin.svg`}`,
        iconSize: [27, 39],
      });

      return leaflet.marker({
        lat: offerLatitude,
        lng: offerLongitude,
      }, {
        icon,
      });
    });

    markersRef.current = leaflet.layerGroup(markers);
    markersRef.current.addTo(mapRef.current);

    return () => {
      mapRef.current.removeLayer(markersRef.current);
    };
  }, [
    currentCity,
    activeOfferID,
  ]);

  return (
    <div id="map" style={{
      height: `100%`,
    }} />
  );
};

Map.propTypes = {
  offers: offersPropTypes,
  activeOfferID: PropTypes.number,
  currentCity: PropTypes.string,
};

export default Map;
