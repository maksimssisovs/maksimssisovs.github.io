function initMap() {
    const location = { lat: 40.7128, lng: -74.0060 }; // Replace with your desired location coordinates
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: location
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
