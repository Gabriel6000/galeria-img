const imgGaleria = document.querySelectorAll(".img-min img");
let imgPrincipal = document.querySelector(".img-principal");
let textoImg = document.querySelector("#texto-img");

imgGaleria.forEach(img => {
	img.addEventListener("click", seleccionarImg);
})

function seleccionarImg(e) {

	const evento = e.target;
	let texto = "";

	switch (evento) {
		case imgGaleria[0]:
			texto = "Piso de madera"
			break;
		case imgGaleria[1]:
			texto = "Flor"
			break;
		case imgGaleria[2]:
			texto = "Mar"
			break;
		case imgGaleria[3]:
			texto = "Canoa"
			break;
	}

	const imgObj = {
		img: evento.src,
		texto
	}

	modificarImg(imgObj)
	
}

function modificarImg(image) {
	imgPrincipal.src = image.img
	textoImg.textContent = image.texto
}