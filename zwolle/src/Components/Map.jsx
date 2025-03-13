import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import newMap from "../assets/mapsImages/satelite.png";
import roadMap from "../assets/mapsImages/streetmap.png";
import oldMap from "../assets/mapsImages/Swolla.png";
import mapJson from "./map.json";
// import $ from "jquery";
// import "jquery-ui-dist/jquery-ui"; 
// import "jquery-ui-dist/jquery-ui.css";


function Map() {
    const [selectedMap, setSelectedMap] = useState(newMap);
    const [opacity, setOpacity] = useState(100);
    const [overlayMap, setOverlayMap] = useState(null);
    const [opacity2, setOpacity2] = useState(100);
    const [zoom, setZoom] = useState(1);

    const [rotation, setRotation] = useState(0);
    const mapWrapperRef = useRef(null);
    const [mapDimensions, setMapDimensions] = useState({ width: 0, height: 0 });
    const [popUpData, setPopUpData] = useState(null);

    useEffect(() => {
        const updateDimensions = () => {
            if (mapWrapperRef.current) {
                setMapDimensions({
                    width: mapWrapperRef.current.offsetWidth,
                    height: mapWrapperRef.current.offsetHeight
                });
            }
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);

        return () => {
            window.removeEventListener("resize", updateDimensions);
        };
    }, []);

    const mapChange = (event) => {
        const value = event.target.value;
        setSelectedMap(value === "oldMap" ? oldMap : value === "roadMap" ? roadMap : newMap);
    };

    const overlayMapChange = (event) => {
        const value = event.target.value;
        setOverlayMap(
            value === "oldMap2" ? oldMap : value === "roadMap2" ? roadMap : value === "newMap2" ? newMap : null
        );
    };

    const handleZoom = (factor) => {
        setZoom((prevZoom) => Math.max(0.5, Math.min(2, prevZoom + factor)));

    };


    const scaleCoords = (x, y) => {
        const scaledX = ((x / 2000) * mapDimensions.width);
        const scaledY = ((y / 1500) * mapDimensions.height);

        return { x: scaledX, y: scaledY };
    };


    const popUp = (map) => {
        setPopUpData(map);
    };

    // useEffect(() => {
    //     if (typeof window !== "undefined") {
    //         window.$ = window.jQuery = $;
    //     }

    //     setTimeout(() => {
    //         console.log("jQuery version:", $.fn.jquery);
    //         console.log("jQuery UI draggable available:", $.fn.draggable);

    //         if ($.fn.draggable) {
    //             $("#draggable").draggable();
    //         } else {
    //             console.warn("jQuery UI draggable() is not loaded properly.");
    //         }
    //     }, 100);
    // }, [popUpData]);

    return (
        <div className="map-page">
            <div className="sidebar">
                <button className="menu-toggle">Toggle</button>
                <div className="menu-content">
                    <label>Choose Base Map:</label>
                    <select onChange={mapChange} defaultValue="newMap">
                        <option value="newMap">New Map</option>
                        <option value="oldMap">Old Map</option>
                        <option value="roadMap">Road Map</option>
                    </select>
                    <input type="range" min="0" max="100" value={opacity} onChange={(e) => setOpacity(e.target.value)} />
                    <input type="range" id="rotation" min="0" max="360" value={rotation} onChange={(e) => setRotation(e.target.value)} />
                    <label>Add Overlay Map:</label>
                    <select onChange={overlayMapChange} defaultValue="noMap2">
                        <option value="noMap2">No Overlay</option>
                        <option value="newMap2">New Map</option>
                        <option value="oldMap2">Old Map</option>
                        <option value="roadMap2">Road Map</option>
                    </select>
                    {overlayMap && (
                        <div>
                            <input type="range" min="0" max="100" value={opacity2} onChange={(e) => setOpacity2(e.target.value)} />

                        </div>
                    )}
                    <div className="zoom-controls">
                        <button onClick={() => handleZoom(0.1)}>+</button>
                        <button onClick={() => handleZoom(-0.1)}>-</button>
                    </div>
                </div>
            </div>

            <div className="map-wrapper" ref={mapWrapperRef}>
                {popUpData && (
                    <div className="popup" id="draggable">
                        <button onClick={() => setPopUpData(null)}>X</button>
                        <div className="popup-content">
                            <img src={popUpData.image} alt={popUpData.name} />
                            <div>
                                <h1>{popUpData.name}</h1>
                                <p>{popUpData.description}</p>
                            </div>
                        </div>
                    </div>
                )}
                <div className="map-container-inner">
                    <div className="imageFrame">
                        <img
                            src={selectedMap}
                            alt="Map"
                            className="map"
                            style={{
                                opacity: opacity / 100,
                                transform: `scale(${zoom}) rotate(${rotation}deg)`,
                            }}
                        />
                        {overlayMap && (
                            <img
                                src={overlayMap}
                                alt="Overlay Map"
                                className="map overlay"
                                style={{
                                    left: `${scaledX}px`,
                                    top: `${scaledY}px`,
                                    width: `${radius * 2 * zoom}px`,
                                    height: `${radius * 2 * zoom}px`,
                                }}
                            />
                        )}
                        <div className="areaPoints" style={{
                            zIndex: 100,
                            transform: `scale(${zoom})`,

                        }} >
                            {mapJson.map((map, index) => {
                                const [x, y, radius] = map.coords.split(",").map(Number);
                                const { x: scaledX, y: scaledY } = scaleCoords(x, y);
                                return (
                                    <div
                                        key={index}
                                        className="map-overlay"
                                        style={{
                                            left: `${scaledX}px`,
                                            top: `${scaledY}px`,
                                            width: `${radius}px`,
                                            height: `${radius}px`,
                                        }}
                                        title={map.name}
                                        onMouseEnter={() => popUp(map)}
                                        onClick={() => popUp(map)}

                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Map;
