

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
    var llistaPais = "<option disabled selected>Països</option>";
    var indexContinent = event.target.selectedIndex;
  
    for (let i = 0; i < continents.length; i++) {
      if (i == indexContinent) {
        for (let x = 0; x < continents[i].paisos.length; x++) {
          var id = continents[i].paisos[x].id;
          llistaPais += "<option value'" + continents[i].paisos[x].id + "'>" + continents[i].paisos[x].nom + "</option>";
        }
      } 
    }
    document.getElementById("pais").innerHTML = llistaPais;

  });
}

//NO ESTÀ ACABAT!
function omplirPreuFoto(){
  document.getElementById("pais").addEventListener('change', (event) => {
    var paisSelect = event.target.value;
  
    for (let i = 0; i < continents.length; i++) {
      for (let x = 0; x < continents[i].paisos.length; x++) {
        var pais = continents[i].paisos[x].nom;
        if (pais == paisSelect) {
          document.getElementById("preu").value = continents[i].paisos[x].preu + "€";
          document.getElementById("foto").innerHTML = "<img height=250 src='" + continents[i].paisos[x].img + "'>";
        }
      } 
    }
  });
}




