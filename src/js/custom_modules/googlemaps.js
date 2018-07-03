/**
 * -------------------
 * LOAD MAP
 *
 * Initialise a Google
 * Map with a provided
 * latitude, longitude
 * and zoom-level.
 * -------------------
 */
const initGoogleMap = options => {
    var customMarkerIcon = '';

    // Sanitise variables
    var mapZoom = parseInt(options.zoom),
        mapLat = parseFloat(options.lat),
        mapLng = parseFloat(options.lng);

    var map; // Setup the Google Maps variable

    function initialize() {
        // Call in the desired offset, and setup the offset latitude and longitude
        var testingOffsetLat = mapLat + 0;
        var testingOffsetLng = mapLng + 0;

        // Declare map centre position
        var currentTarget = new google.maps.LatLng(mapLat, mapLng);
        // Declare marker position
        var currentCentre = new google.maps.LatLng(testingOffsetLat, testingOffsetLng);

        // Setup map options
        var mapOptions = {
            center: currentCentre,
            zoom: mapZoom,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.MAP,
            styles: options.styles,
            disableDefaultUI: true,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false
        };

        // Make the map
        map = new google.maps.Map(document.getElementById('map__canvas'), mapOptions);

        // Set the marker marker

        var icon = {
            path:
                'M15,0C8.4,0,3,5.4,3,12c0,0.8,0.1,1.5,0.2,2.3c0,0,0,0.2,0.1,0.4c0.2,0.8,0.5,1.6,0.8,2.4c1.3,3.1,4.1,7.7,10.4,12.8 c0.2,0.1,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2c6.2-5,9.1-9.7,10.4-12.8c0.4-0.8,0.6-1.6,0.8-2.4c0.1-0.2,0.1-0.4,0.1-0.4 C27,13.5,27,12.8,27,12C27,5.4,21.6,0,15,0z M25.1,14C25.1,14,25.1,14,25.1,14c0,0.1,0,0.2-0.1,0.3c0,0,0,0,0,0 c-0.2,0.7-0.4,1.4-0.7,2.1c0,0,0,0,0,0c-1.2,2.8-3.8,7-9.4,11.7c-5.6-4.6-8.2-8.9-9.4-11.7c0,0,0,0,0,0c-0.3-0.7-0.5-1.3-0.7-2.1 c0,0,0,0,0,0c0-0.1-0.1-0.2-0.1-0.3c0,0,0,0,0,0c-0.1-0.6-0.2-1.3-0.2-2C4.7,6.3,9.3,1.7,15,1.7S25.3,6.3,25.3,12 C25.3,12.7,25.3,13.3,25.1,14z M15,4.5c-4.2,0-7.6,3.4-7.6,7.6s3.4,7.6,7.6,7.6s7.6-3.4,7.6-7.6S19.2,4.5,15,4.5z M15,18.1c-3.3,0-5.9-2.7-5.9-5.9 s2.7-5.9,5.9-5.9s5.9,2.7,5.9,5.9S18.3,18.1,15,18.1z',
            fillColor: '#e94f51',
            fillOpacity: 1,
            strokeWeight: 0,
            scale: 2,
            size: new google.maps.Size(30, 30),
            anchor: new google.maps.Point(15, 30)
        };

        var marker = new google.maps.Marker({
            position: currentCentre,
            map: map,
            icon: icon
        });
    }

    initialize();
};

export default initGoogleMap;
