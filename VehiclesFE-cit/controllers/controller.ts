
function createCar(plate:string,brand:string,color:string){
    let car=new Car(plate,color,brand);
    car.addWheel(new Wheel(2,"SEAT"));
    document.body.innerText="CAR: PLATE: " + car.plate 
    + " COLOR: " +car.color + " BRAND: " + brand 
    + " WHEELS: " + JSON.stringify(car.wheels);
}

function createCar2(){
    let carPlate = document.querySelector('#plate')
    let carBrand = document.querySelector('#brand')
    let carColor = document.querySelector('#color')

   
    $("#response").removeClass('d-none');
    let carContent = document.querySelector('#responseContent');

    document.querySelector('#responseContent').innerHTML = ''
    
    let createPlate = document.createElement('p');
    createPlate.setAttribute("class", "col-3");

    let createBrand = document.createElement('p');
    createBrand.setAttribute("class", "col-3");

    let createColor = document.createElement('p');
    createColor.setAttribute("class", "col-3");

    carContent.appendChild(createPlate).textContent = `Plate: ${carPlate.value}`;
    carContent.appendChild(createBrand).textContent = `Brand: ${carBrand.value}`;
    carContent.appendChild(createColor).textContent = `Color: ${carColor.value}`;
   
    return true
}

