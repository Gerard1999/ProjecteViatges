//Gerard López i Sergi Alcòria

//Afegir els continents a la llista mitjançant un bucle for per 
//recórrer l'objecte continents del document destinacions.js
function omplirContinents(){
  var llistaContinents = "<option disabled selected>Continents</option>";
  for (var i = 0; i < continents.length; i++) {
    llistaContinents += "<option value'" + continents[i].continent + "'>" + continents[i].continent + "</option>";
  }
  document.getElementById("continent").innerHTML = llistaContinents;
}

//Omplir països a la llista un cop seleccionat el continent mitjançant
//bucles for per recórrer l'objecte continents del document destinacions.js
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

//Omplir preu i foto un cop seleccionat el país mitjançant bucles for per
//recórrer l'objecte continents del document destinacions.js
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
          document.getElementById("fotografia").innerHTML = "<img id='fotoPais' height=250 src='" + continents[i].paisos[x].img + "'>";
          document.getElementById("foto").value = continents[i].paisos[x].img;
        }
      } 
    }
  });
}

//Funció per comprovar si està marcat el checkbox de descompte, si és així,
// aplica el 20% del tota del preu de la reserva.
function comprovaDescompte(preu){
  var descompte =  document.getElementById("descompte").checked;
  if (descompte) {
    document.getElementById("preu").value = preu - ((preu * 20) / 100);
  } else {
    document.getElementById("preu").value = preu;
  }
}

//Funció per validar el formulari, compara dates, comprova els camps buits i
// retorna false si no és correcta algun camp. S'utilitza l'atribut hidden per
// amagar i fer sortir els missatges d'error
function validacio(){
	var avui = new Date();
	var any = avui.getFullYear();
	var mes = avui.getMonth()+1;
	var dia = avui.getDate();
	var data_posada = document.getElementById("dataReserva").value.split("-");
	
	if(parseInt(data_posada[0]) <= any && parseInt(data_posada[1]) <= mes && parseInt(data_posada[2]) < dia){
		document.getElementById("errorData").removeAttribute("hidden");
		return false;
	} else{
	    document.getElementById("errorData").setAttribute("hidden", "");
	}
	
	if (document.getElementById("continent").value == "Continents" || document.getElementById("pais").value == "Països") {
		document.getElementById("errorPais").removeAttribute("hidden");
		return false;
	} else{
		document.getElementById("errorPais").setAttribute("hidden", "");
	}	
  
  if (!document.getElementById("nom").value) {
      document.getElementById("errorNom").removeAttribute("hidden");
      document.getElementById("nom").setAttribute("focus", "");
      return false;
  } else{
    document.getElementById("errorNom").setAttribute("hidden", "");
  }
  
  if (!document.getElementById("telefon").value){
      document.getElementById("errorTelefon").removeAttribute("hidden");
      return false;
  } else{
    document.getElementById("errorTelefon").setAttribute("hidden", "");
  }
  
  if (!document.getElementById("persones").value){
      document.getElementById("errorPersones").removeAttribute("hidden");
      return false;
  }else{
	    document.getElementById("errorPersones").setAttribute("hidden", "");
}
  if(document.getElementById("telefon").value.length != 9){
	  document.getElementById("errorTelefonNum").removeAttribute("hidden");
	  return false;
  } else {
	  document.getElementById("errorTelefonNum").setAttribute("hidden", "");
  }
  
}






