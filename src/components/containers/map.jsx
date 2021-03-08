import React, {
  useEffect,
  useRef
} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {
  map as offersPropTypes
} from "../../prop-types/offers-validation";

import "leaflet/dist/leaflet.css";

const Map = ({
  offers,
  activeOfferID = 0
}) => {
  const {
    latitude,
    longitude,
    zoom
  } = offers[0].city.location;

  const mapRef = useRef();
  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: latitude,
        lng: longitude
      },
      zoom,
      zoomControl: false
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    offers.forEach((offer) => {
      const {
        latitude: offerLatitude,
        longitude: offerLongitude
      } = offer.location;

      const icon = leaflet.icon({
        iconUrl: `${activeOfferID === offer.id ? `img/pin-active.svg` : `img/pin.svg`}`,
        iconSize: [27, 39]
      });

      leaflet.marker({
        lat: offerLatitude,
        lng: offerLongitude
      }, {
        icon
      })
        .addTo(mapRef.current);
    });

    return () => {
      mapRef.current.remove();
    };
  });

  return (
    <div id="map" style={{
      height: `100%`
    }} />
  );
};

Map.propTypes = {
  offers: offersPropTypes,
  activeOfferID: PropTypes.number
};

export default Map;
