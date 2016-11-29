/*Reproductores*/
(function(){
	play = document.getElementById("Play");//- Reproductor de Video(Enseñanza de la Semana)
	streamingLive = document.getElementById("streamingLive"); //- Reproductor de Streaming(Radio en Vivo)
	openPlay = document.getElementById("openPlay");//- botom que abre reproductor de Video
	openStreaming = document.getElementById("openStreaming");//- botom que abre reproductor Streaming
		
			openStreaming.onclick = function() {
				play.style.display = "none"; //- Quitando Enseñanza de la Semana		
				streamingLive.style.display = "block"; //- Agregando Straming...
				openStreaming.classList.remove("live_btn");//- Quitando Class
				openStreaming.classList.add("activoLive");//- Agrgando nueva Class

				/*Desactivando Style de Enseñanza de la Semana*/
				openPlay.classList.remove("activoVideo");
			};

				openPlay.onclick = function(){
					streamingLive.style.display = "none";//- Quitando Streaming
					play.style.display = "block"; //- Mostrando Video
					
					/*Quitando y asignandole otra clase Radio en Vivo*/
					openStreaming.classList.remove("activoLive"); //- Lo quitamos
					openStreaming.classList.add("live_btn"); //- Agragando Clase

					/*Activando el boton de Video*/
					openPlay.classList.add("activoVideo");


				}
			
	

})();