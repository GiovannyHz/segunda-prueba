/*Modal-Info esta informa que la pagina esta en beta(Prueba)*/
(function(){
	var modalInfo = document.getElementById("modalInfo");//- Obtenido Modal
	var continuar = document.getElementById("continuar");//- Boton de continuar

		continuar.onclick = function(){
			//modalInfo.style.opacity = 0;
			//modalInfo.style.transition = "visibility .2s";
			//modalInfo.style.visibility = "hidden";
			//modalInfo.style.animation = "none";
			modalInfo.style.display = "none";
		};
})();