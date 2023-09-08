function getData(search){

    fetch(`https://images-api.nasa.gov/search?q=${search}`)
    .then(response => response.json())
    .then(data => showData(data));

};

function showData(array){
    let container = document.getElementById('contenedor');
    let data = array.collection.items;
    container.innerHTML="";
    data.forEach(item => {
        container.innerHTML +=`<div class="card m-3" style="overflow-y: auto; width: 18rem;">
                                    <img style="object-fit: contain; height: 15rem;" class="card-img-top" src="${item.links ? item.links[0].href.slice(0, item.links[0].href.length) : "No_hay_imágen"}" alt="Card image cap">
                                <div class="card-body" style="height: 10rem;">
                                    <p class="card-text">${parseInt(item.data[0].date_created)}</p> 
                                    <h5 class="card-title">${item.data[0].title}</h5>
                                    <p class="card-text">${item.data[0].description}</p>                                                                   
                                </div>
                            </div>`
    });
};

document.addEventListener('DOMContentLoaded',()=>{

    let btnBuscar = document.getElementById('btnBuscar');
    let input = document.getElementById('inputBuscar');

    btnBuscar.addEventListener('click',()=>{
        getData(input.value)        
    });
});