"use strict";
function createCar(plate, brand, color) {
    var car = new Car(plate, color, brand);
    car.addWheel(new Wheel(2, "SEAT"));
    document.body.innerText = "CAR: PLATE: " + car.plate
        + " COLOR: " + car.color + " BRAND: " + brand
        + " WHEELS: " + JSON.stringify(car.wheels);
}
function createCar2() {
    var carPlate = document.querySelector('#plate');
    var carBrand = document.querySelector('#brand');
    var carColor = document.querySelector('#color');
    $("#response").removeClass('d-none');
    var carContent = document.querySelector('#responseContent');
    document.querySelector('#responseContent').innerHTML = '';
    var createPlate = document.createElement('p');
    createPlate.setAttribute("class", "col-3");
    var createBrand = document.createElement('p');
    createBrand.setAttribute("class", "col-3");
    var createColor = document.createElement('p');
    createColor.setAttribute("class", "col-3");
    carContent.appendChild(createPlate).textContent = "Plate: " + carPlate.value;
    carContent.appendChild(createBrand).textContent = "Brand: " + carBrand.value;
    carContent.appendChild(createColor).textContent = "Color: " + carColor.value;
    return true;
}
