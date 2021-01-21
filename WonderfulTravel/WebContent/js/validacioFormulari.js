

//document.getElementById("continent").setAttribute("required", "");
//document.getElementById("nom").setAttribute("required", "");


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
    var indexContinent = event.target.selectedIndex - 1;
  
    for (let i = 0; i < continents.length; i++) {
      if (i == indexContinent) {
        for (let x = 0; x < continents[i].paisos.length; x++) {
          var nom = continents[i].paisos[x].nom;
          llistaPais += "<option value'" + nom + "'>" + nom + "</option>";
        }
      } 
    }
    document.getElementById("pais").innerHTML = llistaPais;

  });
}

//Omplir preu i foto un cop seleccionat el país
function omplirPreuFoto(){
  document.getElementById("pais").addEventListener('change', (event) => {
	  document.getElementById("errorPais").setAttribute("hidden", "");
    var paisSelect = event.target.value;

    for (let i = 0; i < continents.length; i++) {
      for (let x = 0; x < continents[i].paisos.length; x++) {
        var pais = continents[i].paisos[x].nom;
        if (pais == paisSelect) {
          var preu = continents[i].paisos[x].preu;
          comprovaDescompte(preu)
          document.getElementById("descompte").addEventListener('change', () => {
            comprovaDescompte(preu)
          });
          document.getElementById("foto").innerHTML = "<img id='fotoPais' height=250 src='" + continents[i].paisos[x].img + "'>";
        }
      } 
    }
  });
}


function comprovaDescompte(preu){
  var descompte =  document.getElementById("descompte").checked;
  if (descompte) {
    document.getElementById("preu").value = preu - ((preu * 20) / 100);
  } else {
    document.getElementById("preu").value = preu;
  }
}


function validacio(){
	var avui = new Date();
  if (document.getElementById("continent").value == "Continents" ||
		  document.getElementById("pais").value == "Països") {
	  document.getElementById("errorPais").removeAttribute("hidden");
	  alert("Afegeix una destinació");
	  return false;
  } else if (!document.getElementById("nom").value || 
		  		!document.getElementById("telefon").value ||
		  		!document.getElementById("persones").value){
	  alert("No hi poden haver camps buits");
	  return false;
  } else if(document.getElementById("dataReserva") <= avui){
	  alert("La data ha de ser superior a avui");
  }
}

//document.getElementById("telefon").setAttribute("pattern", "^[0-9]{9}$");

