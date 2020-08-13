// Fetch method - fetch JSON file & print to console

document.addEventListener('DOMContentLoaded', () => {
// Fetch method - fetch JSON file & print to console, http response
    fetch('https://api.punkapi.com/v2/beers/random')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            // name, description 
            const name = data[0].name
            console.log(name);
            const description = data[0].description
            const {volume} = data[0]
            const volumeValue = volume.value
            const volumeUnit = volume.unit
        
        })
})

