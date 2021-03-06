<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/estils.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <script src="js/destinacions.js"></script>
    <script src="js/validacioFormulari.js"></script>
    <title>Wonderful Travel</title>
</head>
<body>
    <h1>Wonderful Travel!</h1>
    <h3>RELLOTGE:</h3>
    <canvas id="canvas" width="150" height="150"></canvas>
    <script src="js/rellotge.js"></script>
    <h6 id="data"><script>fullDate();</script></h6>

    <form action="InserirDades" method="POST" onsubmit="return validacio()">
      <div class="inputs">
        DATA: <input type="date" name="data" id="dataReserva" ><script>dataReserva();</script><br>
        <p id="errorData" hidden>La data ha de ser a partir d'avui</p>
        DESTÍ: <label for="continent"></label>
				 <select id="continent" name="continent"></select>
         <script>omplirContinents();</script>

         <label for="pais"></label>
          <select id="pais" name="pais">
            <option disabled selected>Països</option>
          </select><br>
          <p id="errorPais" hidden>Afegeix una destinació</p>
            
          <script>omplirPais();</script>
        PREU: <input type="number" id="preu" name="preu" readonly placeholder="00.00€">
        <script>omplirPreuFoto();</script>
        <div id="fotografia"></div>
        <input type="text" id="foto" name="foto" hidden></input>
        NOM: <input type="text" name="nom" id="nom"><br>
        <p id="errorNom" hidden>Afegeix un nom</p>
        TELÈFON: <input type="number" name="telefon" id="telefon" maxlength="9"><br>
        <p id="errorTelefonNum" hidden>El telèfon ha de tenir 9 dígits</p>
        <p id="errorTelefon" hidden>Afegeix un telèfon</p>
        PERSONES: <input type="number" name="persones" id="persones"><br>
        <p id="errorPersones" hidden>Afegeix nombre de persones</p>
        Descompte 20% <input id="descompte" type="checkbox" name="descompte"><br>
        <input type="submit" name="enviar" value="Afegir">
      </div>
    </form>
  	<h4>Reserves: </h4>
  	<ul>
  		<li><a class="ordenacio" href="ObtenirPerData">Ordenar per data</a></li>
  		<li><a class="ordenacio" href="ObtenirPerPais">Ordenar per país</a></li>
  	</ul>
    <div class="reserves">
		<c:forEach var="reserva" items="${reservaLlista}">
			<div class="reserva" name="${reserva.id}">
				<div class="dadesReserva">
					<c:out value="${reserva.data}"></c:out><br>
					<c:out value="${reserva.pais}"></c:out><br>
					<c:out value="${reserva.nom}"></c:out><br>
					<c:out value="${reserva.telefon}"></c:out><br>
					<c:out value="${reserva.persones} persones"></c:out><br>
					<c:out value="${reserva.preu}0€"></c:out>
					<div class="paperera"><a href="EsborrarRegistre?idreserva=${reserva.id}" class="fotoPaperera">Esborrar</a></div>
        		</div>
				<div>
					<img class="fotoReserva" src="${reserva.foto}" height="200px" width="300px"></a>
				</div>
			</div>
		</c:forEach>
        
    </div>
</body>
</html>
