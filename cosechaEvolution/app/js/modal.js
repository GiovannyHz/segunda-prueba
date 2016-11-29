/*Modal de Contacto, Contactanos y Correo*/
(function (){
	var modal, openModal, close;
		modal = document.getElementById("modal");
		close = document.getElementsByClassName("close")[0];
		openModal = document.getElementsByClassName("openModal");
		// Llamando los indices para efectuar el Style en Modal
		for(var i = 0; i < openModal.length; i++){
			openModal[i].onclick = function(){
				modal.style.display = "block";//- Agrandole Style en Modal
			};
		}
		//Click  en close(X)
		close.onclick = function(){
			modal.style.display = "none";//- Quitandole style a Modal
		};
		//Click fuera de la Ventana
		window.onclick = function(event){
			if (event.target == modal) {//- Quitandole style a Modal
				modal.style.display = "none";
			}
		};

})();
