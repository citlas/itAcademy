"use strict";
/*
function createCar(plate:string,brand:string,color:string){
    let car=new Car(plate,color,brand);
    car.addWheel(new Wheel(2,"SEAT"));
    document.body.innerText="CAR: PLATE: " + car.plate
    + " COLOR: " +car.color + " BRAND: " + brand
    + " WHEELS: " + JSON.stringify(car.wheels);
}
*/
function createCar2() {
    document.querySelector('#responseContent').innerHTML = '';
    $("#response").removeClass('d-none');
    createContent('createPlate', 'plate');
    createContent('createBrand', 'brand');
    createContent('createColor', 'color');
}
function createContent(carFeature, name) {
    var plate = document.querySelector('#plate');
    var brand = document.querySelector('#brand');
    var color = document.querySelector('#color');
    var carContent = document.querySelector('#responseContent');
    carFeature = document.createElement('p');
    carFeature.setAttribute("class", "col-3");
    if (name == 'plate') {
        carContent.appendChild(carFeature).textContent = name + ": " + plate.value;
    }
    else if (name == 'brand') {
        carContent.appendChild(carFeature).textContent = name + ": " + brand.value;
    }
    else if (name == 'color') {
        carContent.appendChild(carFeature).textContent = name + ": " + color.value;
    }
}
