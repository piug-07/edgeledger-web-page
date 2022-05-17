function initMap() {
    const loc = { lat: 28.704060, lng: 77.102493 };


    const map = new google.maps.Map(document.querySelector('.map')
    , {

        zoom: 14,
        center: loc

    });


    const marker = new google.maps.Marker({position: loc, map:
        map  });
}


