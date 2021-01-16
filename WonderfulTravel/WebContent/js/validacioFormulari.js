

//Afegir els continents a la llista
function omplirContinents(){
  var llistaContinents = "";
  for (var i = 0; i < continents.length; i++) {
    llistaContinents += "<option value'" + continents[i].continent + "'>" + continents[i].continent + "</option>";
  }
  document.getElementById("continent").innerHTML = llistaContinents;
}

//Omplir països a la llista un cop seleccionat el continent
function omplirPais(){
  document.getElementById("continent").addEventListener('change', (event) => {
    var llistaPais = "";
    var indexContinent = event.target.selectedIndex;
  
    for (let i = 0; i < continents.length; i++) {
      if (i == indexContinent) {
        for (let x = 0; x < continents[i].paisos.length; x++) {
          llistaPais += "<option value'" + continents[i].paisos[x].nom + "'>" + continents[i].paisos[x].nom + "</option>";
        }
      } 
    }
    document.getElementById("pais").innerHTML = llistaPais;

  });
}

//NO ESTÀ ACABAT!
function omplirPreu(){
  document.getElementById("pais").addEventListener('change', (event) => {
    var preu = "";
    var indexPreu = event.target.selectedIndex;
  
    for (let i = 0; i < continents.length; i++) {
      for (let x = 0; x < continents[i].paisos.length; x++) {
        //if (x == indexPreu) {
          preu = document.getElementById("preu").innerHTML = continents[i].paisos[x].preu;
        //}
      } 
    }
    document.getElementById("preu").innerHTML = preu;

  });
}




