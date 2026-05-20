import { useEffect, useRef } from "react";

declare global {
  interface Window {
    initColumbianMap?: () => void;
    google: any;
  }
}

const locations = [
  { name: "Palos de la Frontera, Spain", pos: { lat: 37.2293, lng: -6.8939 }, info: "Columbus departed here on August 3, 1492." },
  { name: "San Salvador, Bahamas", pos: { lat: 24.0507, lng: -74.5 }, info: "First landfall in the Americas — October 12, 1492." },
  { name: "Hispaniola", pos: { lat: 18.7357, lng: -70.1627 }, info: "Site of La Navidad, the first Spanish settlement (1492)." },
  { name: "Tenochtitlán (Mexico City)", pos: { lat: 19.4326, lng: -99.1332 }, info: "Aztec capital, conquered by Cortés in 1521." },
  { name: "Potosí, Bolivia", pos: { lat: -19.5836, lng: -65.7531 }, info: "Vast silver mines that fueled the global economy." },
  { name: "Lisbon, Portugal", pos: { lat: 38.7223, lng: -9.1393 }, info: "Hub of Portuguese exploration and the spice trade." },
  { name: "Elmina, Ghana", pos: { lat: 5.085, lng: -1.351 }, info: "Major slave-trading fort on the African coast." },
  { name: "Manila, Philippines", pos: { lat: 14.5995, lng: 120.9842 }, info: "Terminus of the Manila Galleon, linking Asia to the Americas." },
];

const route = [
  { lat: 37.2293, lng: -6.8939 },
  { lat: 28.1235, lng: -15.4363 }, // Canary Islands
  { lat: 24.0507, lng: -74.5 },
];

export function ColumbianMap() {
  const ref = useRef<HTMLDivElement>(null);
  const key = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY;
  const tid = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_TRACKING_ID;

  useEffect(() => {
    if (!ref.current || !key) return;

    const render = () => {
      const g = window.google;
      if (!g?.maps || !ref.current) return;
      const map = new g.maps.Map(ref.current, {
        center: { lat: 20, lng: -40 },
        zoom: 3,
        mapTypeId: "terrain",
        styles: [
          { elementType: "geometry", stylers: [{ color: "#e8dcc4" }] },
          { elementType: "labels.text.fill", stylers: [{ color: "#5a3a22" }] },
          { elementType: "labels.text.stroke", stylers: [{ color: "#f5ecd6" }] },
          { featureType: "water", elementType: "geometry", stylers: [{ color: "#b8c8d4" }] },
          { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#ecdfc4" }] },
          { featureType: "road", stylers: [{ visibility: "off" }] },
          { featureType: "poi", stylers: [{ visibility: "off" }] },
        ],
      });

      const info = new g.maps.InfoWindow();
      locations.forEach((loc) => {
        const marker = new g.maps.Marker({
          position: loc.pos,
          map,
          title: loc.name,
        });
        marker.addListener("click", () => {
          info.setContent(`<div style="font-family:Georgia,serif;max-width:220px"><strong>${loc.name}</strong><br/><span style="font-size:13px">${loc.info}</span></div>`);
          info.open({ map, anchor: marker });
        });
      });

      new g.maps.Polyline({
        path: route,
        geodesic: true,
        strokeColor: "#8b3a1f",
        strokeOpacity: 0.9,
        strokeWeight: 2.5,
        map,
      });
    };

    if (window.google?.maps) {
      render();
      return;
    }

    window.initColumbianMap = render;
    const existing = document.querySelector('script[data-google-maps]');
    if (existing) return;

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&loading=async&callback=initColumbianMap&channel=${tid}`;
    script.async = true;
    script.dataset.googleMaps = "true";
    document.head.appendChild(script);
  }, [key, tid]);

  if (!key) {
    return <div className="p-8 text-center text-muted-foreground">Map unavailable.</div>;
  }

  return <div ref={ref} className="w-full h-[600px] rounded-lg border border-border shadow-lg" />;
}
