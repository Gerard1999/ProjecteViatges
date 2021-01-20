<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/estils.css">
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

    <form action="">
      <div class="inputs">
        DATA: <input type="date" name="data" id="dataReserva" ><script>dataReserva();</script><br>
        DESTÍ: <label for="continent"></label>
				 <select id="continent" name="continent">Hola</select>
         <script>omplirContinents();</script>

         <label for="pais"></label>
          <select id="pais" name="pais">
            <option disabled selected>Països</option>
          </select><br>
            
          <script>omplirPais();</script>
        PREU: <input type="text" id="preu" name="preu" placeholder="00,00€" disabled><br>
        <script>omplirPreuFoto();</script>
        <div id="foto"></div>
        NOM: <input type="text" name="nom" id="nom"><br>
        TELÈFON: <input type="text" name="telefon"><br>
        PERSONES: <input type="text" name="persones"><br>
        Descompte 20% <input id="descompte" type="checkbox" name="descompte"><br>
        <input type="submit" name="enviar" value="Afegir">
      </div>
    </form>
  	<h4>Reserves: </h4>
    <div class="reserves">
		<c:forEach var="reserva" items="${reservaLlista}">
			<div class="reserva">
				<div class="dadesReserva">
					<c:out value="${reserva.data}"></c:out><br>
					<c:out value="${reserva.pais}"></c:out><br>
					<c:out value="${reserva.nom}"></c:out><br>
					<c:out value="${reserva.telefon}"></c:out><br>
					<c:out value="${reserva.persones} persones"></c:out><br>
					<c:out value="${reserva.preu}0€"></c:out>
				</div>
				<div>
					<img class="fotoReserva" src="${reserva.foto}" width="250px"></a>
				</div>
			</div>
		</c:forEach>
        
    </div>
</body>
</html>
