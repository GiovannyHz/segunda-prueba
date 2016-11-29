<?php
	// Datos para el Email
	$para = "ministerioeltiempodelacosecha@gmail.com";
	// Campos
	$nombre = $_POST['nombre_txt'];
	$apellido = $_POST['apellido_txt'];
	$correo = $_POST['email_txt'];
	$pais = $_POST['pais_txt'];
	$mensaje = $_POST['mensaje_txt'];
	$vengoDe = $_POST['info_hidden']; #esto es el input hidden pasa una informacion
	//$voyA = array("inicio" => "index.html", "otro" => "otro.html"); #no creo que sea necesario

	/*Este Msj es para Contacto*/
	$mensajeContacto = "De: Contacto " . "\nNombre: $nombre $apellido " . "\nCorreo: $correo " . "\nPais: $pais " . "\nMensaje\n" . $mensaje;

	/*Este Msj es para Motivo de Oración*/
	$mensajeMT_Oracion = "De: Oración "."\nNombre: $nombre $apellido "."\nCorreo: $correo "."\nPais: $pais "."\nMotivo de Oración\n".$mensaje;

	//Direccionando a Donde voy
	if ($vengoDe == "inicio") { #verificando de donde viene
		//- Enviar correo
			$mail = mail($para,"Contacto",$mensajeContacto);
		#voy  a
			header("Location: index.html");

	} else if ($vengoDe == "nosotros") { #verificando
		//- Enviar correo
			$mail = mail($para,"Contacto",$mensajeContacto);
		#voy  a
			header("Location: nosotros.html");

	} else if ($vengoDe == "fundador") {
		//- Enviar correo
			$mail = mail($para,"Contacto",$mensajeContacto);
		#voy a
			header("Location: fundador.html");

	} else if ($vengoDe == "oracion") {

		//- Enviar correo
			$mail = mail($para,"Contacto",$mensajeContacto);

		#voy a
			header("Location: oracion.html");

	} else if ($vengoDe == "motivoDeOracion"){

		//- Enviar correo
			$mail = mail($para, "Motivo de Oracion", $mensajeMT_Oracion);

		#voy a
			header("Location: oracion.html");
	}
?>
