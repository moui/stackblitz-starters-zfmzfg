import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import React from 'react';

import './style.css';

function Mapa() {
  const mapDiv = React.useRef(null);

  React.useEffect(() => {
    if (mapDiv.current) {
      /**
       * Initialize application
       */
      const map = new Map({
        basemap: 'topo',
      });

      const view = new MapView({
        container: mapDiv.current,
        map: map,
      });
    }
  }, []);

  return <div className="mapDiv" ref={mapDiv}></div>;
}

export default Mapa;
