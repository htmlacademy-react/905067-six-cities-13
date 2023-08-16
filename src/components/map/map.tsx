import { useRef, useEffect } from 'react';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { Icon, Marker, layerGroup } from 'leaflet';
import { City } from '../../types/types';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { Offers } from '../../types/offers';
import cn from 'classnames';

type MapProps = {
  city: City;
  offers: Offers;
  activeId?: string;
  isMainPage: boolean;
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
const Map = ({ city, offers, activeId, isMainPage }: MapProps) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const {latitude:lat, longitude:lng} = offer.cordinates;
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
  return (
    <section
      ref={mapRef}
      className={cn(
        { 'offer__map': !isMainPage },
        { 'cities__map': isMainPage },
        'map'
      )}
    />
  );
};

export default Map;
