// getUserLocation.js

const submit = document.getElementById("submit");

function getLocation() {
    return new Promise((resolve, reject) => {
        submit.addEventListener('click', function(event) {
            event.preventDefault();
            const locationValue = document.getElementById("location").value;
            resolve(locationValue);
        });
    });
}

// Example function that uses the location value
function processLocation(location) {
    console.log("Processing location:", location);
    // Add your logic here to process the location value
}

export { getLocation, processLocation };
