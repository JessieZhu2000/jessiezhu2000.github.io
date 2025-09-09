import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet';
import L from 'leaflet';
import '../css/LocationDetail.css';

// Basic orange marker icon (using a simple Leaflet divIcon alternative)
const markerHtmlStyles = (active) => `
  background-color: ${active ? '#E67514' : '#2d2928'};
  width: 16px;
  height: 16px;
  display: block;
  left: -8px;
  top: -8px;
  position: relative;
  border-radius: 50%;
  border: 2px solid #E67514;
  box-shadow: 0 0 0 2px rgba(0,0,0,0.25);
`;

const pinIcon = (active) => L.divIcon({
    className: "custom-pin",
    html: `<span style="${markerHtmlStyles(active)}"></span>`
});

// Coordinates (approximate) for Cambridge & nearby villages
const AREAS = [
    { name: "Trumpington", coords: [52.176, 0.118] },
    { name: "Cambridge central", coords: [52.205, 0.120] },
    { name: "Cherry Hinton", coords: [52.188, 0.173] },
    { name: "Granchester", coords: [52.180, 0.089] },
    { name: "Eddington", coords: [52.214, 0.087] },
    { name: "Hardwick", coords: [52.216, -0.013] },
    { name: "Coton", coords: [52.207, 0.042] },
    { name: "Madingley", coords: [52.224, 0.056] },
    { name: "Barton", coords: [52.174, 0.067] },
    { name: "Highfield Caldecote", coords: [52.212, -0.028] },
    { name: "Comberton", coords: [52.188, 0.023] },
    { name: "Dry Drayton", coords: [52.242, 0.043] }
];

const INTERVAL_MS = 4200;
const LocationDetail = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const timerRef = useRef(null);

    const active = AREAS[activeIndex]?.name;

    const handleSelect = (name) => {
        const idx = AREAS.findIndex(a => a.name === name);
        if (idx !== -1) setActiveIndex(idx);
    };

    const goTo = (idx) => {
        setActiveIndex(idx);
        restartTimer();
    };

    const restartTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % AREAS.length);
        }, INTERVAL_MS);
    };

    useEffect(() => {
        restartTimer();
        return () => clearInterval(timerRef.current);
    }, []);

    return (
        <div className='locationDetail'>
            <h2>
                We cover Cambridge & surrounding villages&nbsp;&nbsp;
                <Link to="/booking">Book Now</Link>
            </h2>
            <div className="coverageMap">
                <div className="mapFrame" aria-label="Interactive map of Cambridge coverage">
                    <MapContainer center={[52.200, 0.12]} zoom={12} scrollWheelZoom={false} style={{width:'100%',height:'100%'}}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {AREAS.map(a => (
                            <Marker
                                key={a.name}
                                position={a.coords}
                                eventHandlers={{ click: () => handleSelect(a.name) }}
                                icon={pinIcon(active === a.name)}
                            >
                                <Popup>
                                    <strong>{a.name}</strong><br/>
                                    Covered area.
                                </Popup>
                            </Marker>
                        ))}
                        {active && (() => {
                            const found = AREAS.find(a => a.name === active);
                            return found ? <CircleMarker center={found.coords} radius={26} pathOptions={{color:'#E67514',fillOpacity:0.08}} /> : null;
                        })()}
                    </MapContainer>
                    <a
                        className="mapAttribution"
                        href="https://www.openstreetmap.org/#map=13/52.200/0.120"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Full map</a>
                </div>
                <div className="coverageCarousel" aria-live="polite" aria-label="Service coverage areas slideshow">
                    {AREAS.map((area, i) => {
                        const isActive = i === activeIndex;
                        return (
                            <button
                                key={area.name}
                                type="button"
                                className={`coverageSlide coverageTag${isActive ? ' active' : ''}`}
                                aria-hidden={!isActive}
                                aria-pressed={isActive}
                                onClick={() => goTo(i)}
                                title={`Highlight ${area.name}`}
                            >
                                {area.name}
                            </button>
                        );
                    })}
                    <div className="coverageDots" role="tablist" aria-label="Coverage area dots">
                        {AREAS.map((area,i) => (
                            <button
                                key={area.name+"dot"}
                                className={`coverageDot ${i === activeIndex ? 'is-active' : ''}`}
                                aria-label={`Show ${area.name}`}
                                aria-selected={i === activeIndex}
                                role="tab"
                                onClick={() => goTo(i)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationDetail;