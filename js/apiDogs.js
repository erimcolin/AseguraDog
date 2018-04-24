const card = document.getElementById('card');

window.addEventListener('load', () => {
    getDogsJson();
});

getDogsJson = () => {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => {
            response.json().then(json => {
                getDataDogs(json.message);
            })
        }).catch(error => {
            console.log(error);
        });
}

getDataDogs = dogs => {
    // let output = ``;
    for (let dog in dogs) {
        let output = `
                        <div class="col s6 m5">
                           <h2 class="header">${dog}</h2>
                           <div class="card horizontal">
                             <div class="card-image">
                               <img src="http://lorempixel.com/100/190/dogs/1">
                             </div>
                             <div class="card-stacked">
                               <div class="card-content">
                                 <p>Mi amigo</p>
                               </div>
                               <div class="card-action">
                                 <form action="#">
                                   <p>
                                     <label>
                                       <input type="checkbox" />
                                       <span>Mi amigo</span>
                                     </label>
                                   </p>
                                  </form> 
                               </div>
                             </div>
                           </div>
                        </div>
                        `;
        card.insertAdjacentHTML('beforeend', output);
    }
    // selectDogs.innerHTML = output;
}

// paintData = (dog, images) => {
//     const output = `
//                     <a href="www.facebook.com">
//                         <img src="${images}" alt="${dog}">                        
//                         <span>${capitalize(dog)}</span>
//                     <a>
//     `;
//     container.insertAdjacentHTML('beforeend', output);
// }

// capitalize = (str) => {
//     var newStr = str.split(" ");
//     var result = [];
//     newStr.forEach(function (palabra) {
//         var primerLetra = palabra.charAt(0).toUpperCase();
//         var mediaPalabra = palabra.slice(1, palabra.length);
//         result.push(primerLetra + mediaPalabra);
//     });
//     return result.join(" ");
// };