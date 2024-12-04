document.querySelectorAll('.videoBlock').forEach(function(event){
        document.querySelector(`#${event.id}`).addEventListener('mouseenter',function(){
            document.querySelector(`#${event.id}`).play();
        })
})
document.querySelectorAll('.videoBlock').forEach(function(event){
        document.querySelector(`#${event.id}`).addEventListener('mouseleave',function(){
            document.querySelector(`#${event.id}`).pause();
        })
})


// search

function filter(search){
    fetch('cars.json')
    .then(response => response.json())
    .then(data => {
        document.querySelector(".carsGrid").innerHTML= "";
        for (let i = 0 ; i < data.cars.length ; i++)
            {
            if(((data.cars[i].name)).toLowerCase().includes(search)){
                
                document.querySelector(".carsGrid").innerHTML +=
            `
            <div>
                <div class="gridImgContainer">
                    <div class="imageContainer">
                        <img class="gridImg" src="img/gridesCar/${i+1}.jpg" alt="car image in grid">
                    </div>
                    <div class="carName">${data.cars[i].name} Cruiser</div>
                    <div class="carPrice">$${data.cars[i].price}</div>
                </div>
            </div>
            `
            }  
        }

        if(document.querySelector(".carsGrid").innerHTML== ""){
            document.querySelector(".carsGrid").innerHTML= "<h1>No result found..</h1>"
        }
        
    });
}





