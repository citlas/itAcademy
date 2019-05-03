

document.querySelector('html').addEventListener('click', eraseRating);

function eraseRating (){
    var toDelete = document.querySelectorAll('.ex5')
    for(var i=0;i<toDelete.length;i++){
        toDelete[i].classList.remove('gold');
    }
}

//exercici 4
document.querySelector('.blueEx4').addEventListener('click', fav);

function fav(e) {
  var tgt = e.target;
  var theId= tgt.id
  
  tgt.classList.add('gold');
  
  for(var i = theId; i>0; i--){
    document.getElementById(i).classList.add('gold')

  }
  
}

//exercici 5
document.querySelector('.blueEx5').addEventListener('click', rating);

function rating(e) {
  var tgtEx5 = e.target;
  var theIdEx5= tgtEx5.id
  console.log(parseInt(theIdEx5)+1)
  
  if(tgtEx5.classList.contains('gold')){
    //console.log('ya tiene gold')
    for(var i = parseInt(theIdEx5)+1; i<16; i++){
        document.getElementById(i).classList.remove('gold')
      }
    //tgtEx5.classList.remove('gold');
  } else {
    tgtEx5.classList.add('gold');
    for(var i = theIdEx5; i>10; i--){
      document.getElementById(i).classList.add('gold')
    }
  }  
  e.stopPropagation();
}

