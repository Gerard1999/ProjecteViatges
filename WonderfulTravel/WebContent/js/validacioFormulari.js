

//Afegir els continents a la llista
function omplirContinents(){
  var llistaContinents = "<option disabled selected>Continents</option>";
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

//Omplir preu i foto un cop seleccionat el país
function omplirPreuFoto(){
  document.getElementById("pais").addEventListener('change', (event) => {
    var paisSelect = event.target.value;

    for (let i = 0; i < continents.length; i++) {
      for (let x = 0; x < continents[i].paisos.length; x++) {
        var pais = continents[i].paisos[x].nom;
        if (pais == paisSelect) {
          var preu = continents[i].paisos[x].preu;
          
          var descompte =  document.getElementById("descompte").checked;
          if (descompte) {
            document.getElementById("preu").value = preu - ((parseInt(preu) * 20) / 100).toString() + ",00€";
          } else {
            document.getElementById("preu").value = continents[i].paisos[x].preu + ",00€";
          }
          document.getElementById("descompte").addEventListener('change', (event) => {
            var descompte =  document.getElementById("descompte").checked;
            if (descompte) {
              document.getElementById("preu").value = preu - ((parseInt(preu) * 20) / 100).toString() + ",00€";
            } else {
              document.getElementById("preu").value = continents[i].paisos[x].preu + ",00€";
            }
          });
          document.getElementById("foto").innerHTML = "<img height=250 src='" + continents[i].paisos[x].img + "'>";
        }
      } 
    }
  });
}




