var ville ;

if ("geolocation" in  navigator) {
   navigator.geolocation.watchPosition((position)=>{
      const url = `https://api.openweathermap.org/data/2.5/weather?lon=${position.coords.longitude}&lat=${position.coords.latitude}&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric`;
console.log(url)
      const temperature = document.querySelector('#temperature_label');
      const laville = document.querySelector('#ville');
   
    axios.get(url)
      .then(requete =>{
         temperature.textContent = requete.data.main.temp;
         laville.textContent     = requete.data.name;
      
      })
      .catch(error=>{
         alert('une erreur est intervenue, veillez réessayer plutard');
      })
   
   }, error, options)
} else {
   ville="Paris"
   recuprerTemperature(ville);
}


function error() {
   ville="Paris"
   recuprerTemperature(ville);
}

var options = {
enableHighAccuracy : true
}
const changer = document.querySelector('#changer')
changer.addEventListener('click',()=>{
   ville = prompt('veillez indiquer une ville')
   recuprerTemperature(ville);
})



async function recuprerTemperature(ville) {

   const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';

   const temperature = document.querySelector('#temperature_label');
   const laville = document.querySelector('#ville');

   await axios.get(url)
   .then(requete =>{
      temperature.textContent = requete.data.main.temp;
      laville.textContent     = requete.data.name;
   
   })
   .catch(error=>{
      alert('une erreur est intervenue, veillez réessayer plutard');
   })


}

