// Fetch method - fetch JSON file & print to console

document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.querySelector('.beer-button')
    const randomBeer = document.querySelector('.random-beer')
    const descriptionDisplay = document.querySelector('.description')



// Fetch method - fetch JSON file & print to console, http response
function getData(e) {
    e.preventDefault()


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

            randomBeer.innerHTML = name + ' ' + volumeValue + volumeUnit
            descriptionDisplay.innerHTML = description
            volumeDisplay.innerHTML = volumeValue + volumeUnit
        
        })
}    

startBtn.addEventListener('click', getData)

})

