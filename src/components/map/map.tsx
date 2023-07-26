import { useRef, useEffect } from 'react';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { Icon, Marker, layerGroup } from 'leaflet';
import { City } from '../../types/types';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { Offers } from '../../types/offers';

type MapProps = {
  city: City;
  offers: Offers;
  activeId?: string;
};
const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});
const Map = ({ city, offers, activeId }: MapProps) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const [lat, lng] = offer.cordinates;
        const marker = new Marker({ lat, lng });
        marker
          .setIcon(
            activeId !== undefined && activeId === offer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeId]);
  return <section ref={mapRef} className="cities__map map" />;
};

export default Map;
