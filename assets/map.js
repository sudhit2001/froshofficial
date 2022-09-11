mapboxgl.accessToken =
  "pk.eyJ1IjoiZGFrc2hhemFkMDUiLCJhIjoiY2w3a3hrMTR1MHY3ZjNubWc3bmhvbmY1bCJ9.LuzspF2JLyMGxFacsacQcA";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([76.36, 30.35]);
}

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGFrc2hhemFkMDUiLCJhIjoiY2w3a3hrMTR1MHY3ZjNubWc3bmhvbmY1bCJ9.LuzspF2JLyMGxFacsacQcA";
function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/navigation-night-v1",
    center: center,
    zoom: 15,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  map.addControl(directions, "top-left");

  map.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      // When active the map will receive updates to the device's location as it changes.
      trackUserLocation: true,
      // Draw an arrow next to the location dot to indicate which direction the device is heading.
      // showUserHeading: true,
    })
  );

  map.on("load", () => {
    // Add an image to use as a custom marker
    map.loadImage(
      "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
      (error, image) => {
        if (error) throw error;
        map.addImage("custom-marker", image);
        // Add a GeoJSON source with 2 points
        map.addSource("points", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [76.36321, 30.35117],
                },
                properties: {
                  title: "Hostel B",
                },
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [76.36447, 30.35175],
                },
                properties: {
                  title: "Hostel A",
                },
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [76.36242, 30.35142],
                },
                properties: {
                  title: "Hostel O",
                },
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [76.36338, 30.35328],
                },
                properties: {
                  title: "Hostel J",
                },
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [76.36471, 30.35301],
                },
                properties: {
                  title: "Hostel H",
                },
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [76.36123, 30.351],
                },
                properties: {
                  title: "Hostel C",
                },
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [76.36002, 30.35098],
                },
                properties: {
                  title: "Hostel D",
                },
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [76.36576, 30.35166],
                },
                properties: {
                  title: "Hostel PG",
                },
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [76.36781, 30.35184],
                },
                properties: {
                  title: "Hostel Q",
                },
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [76.36101, 30.35249],
                },
                properties: {
                  title: "Hostel M",
                },
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [76.3707, 30.35194],
                },
                properties: {
                  title: "Main Audi",
                },
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [76.37203, 30.3539],
                },
                properties: {
                  title: "F Block",
                },
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [76.37219, 30.35341],
                },
                properties: {
                  title: "E Block",
                },
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [76.36854, 30.3536],
                },
                properties: {
                  title: "Tan Building",
                },
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [76.36931, 30.35358],
                },
                properties: {
                  title: "G Block",
                },
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [76.37038, 30.35435],
                },
                properties: {
                  title: "Library",
                },
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [76.36936, 30.35498],
                },
                properties: {
                  title: "LT Building",
                },
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [76.36673, 30.35434],
                },
                properties: {
                  title: "Hostel G",
                },
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [76.36804, 30.35432],
                },
                properties: {
                  title: "Hostel N",
                },
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [76.36766, 30.35538],
                },
                properties: {
                  title: "Hostel I",
                },
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [76.36664, 30.35505],
                },
                properties: {
                  title: "Hostel E",
                },
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [76.36245, 30.35432],
                },
                properties: {
                  title: "COS",
                },
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [76.37133, 30.35308],
                },
                properties: {
                  title: "B Block",
                },
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [76.37123, 30.35353],
                },
                properties: {
                  title: "C Block",
                },
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [76.36358, 30.35694],
                },
                properties: {
                  title: "Hostel K",
                },
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [76.36741, 30.35756],
                },
                properties: {
                  title: "Polytechnic",
                },
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [76.36636, 30.35745],
                },
                properties: {
                  title: "Hostel L",
                },
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [76.37218, 30.35617],
                },
                properties: {
                  title: "TSLAS",
                },
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [76.37084, 30.35265],
                },
                properties: {
                  title: "Jaggi",
                },
              },
            ],
          },
        });

        // Add a symbol layer
        map.addLayer({
          id: "points",
          type: "symbol",
          source: "points",
          layout: {
            "icon-image": "custom-marker",
            // get the title name from the source's "title" property
            "text-field": ["get", "title"],
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 1.5],
            "text-anchor": "top",
          },
        });
      }
    );
  });
}
