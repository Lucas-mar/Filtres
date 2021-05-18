(function() {
	var invertbutton = null;

	function myInvert(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;

		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;
		//console.log(pix);

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
			// Inverser les couleurs : 255 - pix[i];
			pix[i] = 255 - pix[i]; // red
			pix[i+1] = 255 - pix[i+1]; // green
			pix[i+2] = 255 - pix[i+2]; // blue
			// i+3 is alpha (the fourth element)
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);

		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);

		// AFfiche l'histogramme
		histogram();
	}

	function myGray(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;

		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;
		//console.log(pix);

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
			// Mettre en gris :  (pix[i] + pix[i+1] + pix[i+2])/3;
			var moy = (pix[i] + pix[i+1] + pix[i+2])/3;
			pix[i] = moy; // red
			pix[i+1] = moy; // green
			pix[i+2] = moy; // blue
			// i+3 is alpha (the fourth element)
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);

		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);

		// AFfiche l'histogramme
		histogram();
	}

	function myBlack(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;

		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;
		//console.log(pix);

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
			// Mettre en noir :  pix[i] <= 128 ? 0 : 255;
			pix[i] = pix[i] <= 128 ? 0 : 255; // red
			pix[i+1] = pix[i+1] <= 128 ? 0 : 255; // green
			pix[i+2] = pix[i+2] <= 128 ? 0 : 255; // blue
			// i+3 is alpha (the fourth element)
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);

		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);

		// AFfiche l'histogramme
		histogram();
	}

	function myCanal(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;

		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;
		//console.log(pix);

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
			// Garder que le rouge
			pix[i] = pix[i]; // red
			pix[i+1] = 0; // green
			pix[i+2] = 0; // blue
			// i+3 is alpha (the fourth element)
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);

		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);

		// AFfiche l'histogramme
		histogram();
	}

	function myAddNoise(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;

		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;
		//console.log(pix);

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
			// Ajouter du bruit
			if(getRandomIntInclusive(1, 100) == 1){
				var noiceColor = getRandomIntInclusive(1, 2) == 1 ? 255 : 0;
				pix[i] = noiceColor; // red
				pix[i+1] = noiceColor; // green
				pix[i+2] = noiceColor; // blue
				// i+3 is alpha (the fourth element)
			}
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);

		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);

		// AFfiche l'histogramme
		histogram();
	}

	function myTVNoise(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;

		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;
		//console.log(pix);

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
			// Ajouter du bruit de TV
			pix[i] = getRandomIntInclusive(0, 255); // red
			pix[i+1] = getRandomIntInclusive(0, 255); // green
			pix[i+2] = getRandomIntInclusive(0, 255); // blue
			// i+3 is alpha (the fourth element)
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);

		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);

		// AFfiche l'histogramme
		histogram();
	}

	function myAddLuminosity(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;

		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;
		//console.log(pix);

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
			// Ajouter de la luminosité
			pix[i] = pix[i] + 20; // red
			pix[i+1] = pix[i+1] + 20; // green
			pix[i+2] = pix[i+2] + 20; // blue
			// i+3 is alpha (the fourth element)
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);

		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);

		// AFfiche l'histogramme
		histogram();
	}

	function myRemoveLuminosity(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;

		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;
		//console.log(pix);

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
			// Diminuer la luminosité
			pix[i] = pix[i] - 20; // red
			pix[i+1] = pix[i+1] - 20; // green
			pix[i+2] = pix[i+2] - 20; // blue
			// i+3 is alpha (the fourth element)
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);

		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);

		// AFfiche l'histogramme
		histogram();
	}

	function myVerticalMirror(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;

		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;
		//console.log(pix);

		// 1 tab 1D -> 4 tab 2D (r,g,b,a)
		// déclaration de 4 tableaux à 2 dim (de taille width * height)
		var tr = new Array(width).fill().map(() => Array(height));
		var tg = new Array(width).fill().map(() => Array(height));
		var tb = new Array(width).fill().map(() => Array(height));
		var ta = new Array(width).fill().map(() => Array(height));

		// copie des valeurs
		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				tr[x][y] = pix[x*4+y*(width*4)+0];
				tg[x][y] = pix[x*4+y*(width*4)+1];
				tb[x][y] = pix[x*4+y*(width*4)+2];
				ta[x][y] = pix[x*4+y*(width*4)+3];
			}
		}

		// RETOUR EN 1D POUR AFFICHER LES MODIFICATIONS
		// 4 tab 2D (r,g,b,a) -> 1 tab 1D POUR METTRE A JOUR L'IMAGE
		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				// - 1 car on commence à 0 dans un tableau
				pix[x*4+y*(width*4)+0] = tr[width-1-x][y];
				pix[x*4+y*(width*4)+1] = tg[width-1-x][y];
				pix[x*4+y*(width*4)+2] = tb[width-1-x][y];
				pix[x*4+y*(width*4)+3] = ta[width-1-x][y];
			}
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, 0, 0);

		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);

		// AFfiche l'histogramme
		histogram();
	}

	function myHorizontalMirror(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;

		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;
		//console.log(pix);

		// 1 tab 1D -> 4 tab 2D (r,g,b,a)
		// déclaration de 4 tableaux à 2 dim (de taille width * height)
		var tr = new Array(width).fill().map(() => Array(height));
		var tg = new Array(width).fill().map(() => Array(height));
		var tb = new Array(width).fill().map(() => Array(height));
		var ta = new Array(width).fill().map(() => Array(height));

		// copie des valeurs
		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				tr[x][y] = pix[x*4+y*(width*4)+0];
				tg[x][y] = pix[x*4+y*(width*4)+1];
				tb[x][y] = pix[x*4+y*(width*4)+2];
				ta[x][y] = pix[x*4+y*(width*4)+3];
			}
		}

		// RETOUR EN 1D POUR AFFICHER LES MODIFICATIONS
		// 4 tab 2D (r,g,b,a) -> 1 tab 1D POUR METTRE A JOUR L'IMAGE
		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				// - 1 car on commence à 0 dans un tableau
				pix[x*4+y*(width*4)+0] = tr[x][height-1-y];
				pix[x*4+y*(width*4)+1] = tg[x][height-1-y];
				pix[x*4+y*(width*4)+2] = tb[x][height-1-y];
				pix[x*4+y*(width*4)+3] = ta[x][height-1-y];
			}
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, 0, 0);

		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);

		// AFfiche l'histogramme
		histogram();
	}

	function myBlur(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;

		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;
		//console.log(pix);

		// 1 tab 1D -> 4 tab 2D (r,g,b,a)
		// déclaration de 4 tableaux à 2 dim (de taille width * height)
		var tr = new Array(width).fill().map(() => Array(height));
		var tg = new Array(width).fill().map(() => Array(height));
		var tb = new Array(width).fill().map(() => Array(height));
		var ta = new Array(width).fill().map(() => Array(height));

		// copie des valeurs
		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				tr[x][y] = pix[x*4+y*(width*4)+0];
				tg[x][y] = pix[x*4+y*(width*4)+1];
				tb[x][y] = pix[x*4+y*(width*4)+2];
				ta[x][y] = pix[x*4+y*(width*4)+3];
			}
		}

		// TRAITEMENT / APPLICATION D'UN FILTRE
			for (var y = 1; y < (height-1); y++) {
				for (var x = 1; x < (width-1); x++) {
					tr[x][y] = (tr[x-1][y-1] + tr[x][y-1] + tr[x+1][y-1] + tr[x-1][y] + tr[x][y] + tr[x+1][y] + tr[x-1][y+1] + tr[x][y+1] + tr[x+1][y+1]) / 9;
					tg[x][y] = (tg[x-1][y-1] + tg[x][y-1] + tg[x+1][y-1] + tg[x-1][y] + tg[x][y] + tg[x+1][y] + tg[x-1][y+1] + tg[x][y+1] + tg[x+1][y+1]) / 9;
					tb[x][y] = (tb[x-1][y-1] + tb[x][y-1] + tb[x+1][y-1] + tb[x-1][y] + tb[x][y] + tb[x+1][y] + tb[x-1][y+1] + tb[x][y+1] + tb[x+1][y+1]) / 9;
					// ta[x][y] = ta[x][y];
				}
			}

		// RETOUR EN 1D POUR AFFICHER LES MODIFICATIONS
		// 4 tab 2D (r,g,b,a) -> 1 tab 1D POUR METTRE A JOUR L'IMAGE
		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				// - 1 car on commence à 0 dans un tableau
				pix[x*4+y*(width*4)+0] = tr[x][y];
				pix[x*4+y*(width*4)+1] = tg[x][y];
				pix[x*4+y*(width*4)+2] = tb[x][y];
				pix[x*4+y*(width*4)+3] = ta[x][y];
			}
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, 0, 0);

		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);

		// AFfiche l'histogramme
		histogram();
	}

	function myFrenchy(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;

		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;
		//console.log(pix);

		// 1 tab 1D -> 4 tab 2D (r,g,b,a)
		// déclaration de 4 tableaux à 2 dim (de taille width * height)
		var tr = new Array(width).fill().map(() => Array(height));
		var tg = new Array(width).fill().map(() => Array(height));
		var tb = new Array(width).fill().map(() => Array(height));
		var ta = new Array(width).fill().map(() => Array(height));

		// copie des valeurs
		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				tr[x][y] = pix[x*4+y*(width*4)+0];
				tg[x][y] = pix[x*4+y*(width*4)+1];
				tb[x][y] = pix[x*4+y*(width*4)+2];
				ta[x][y] = pix[x*4+y*(width*4)+3];
			}
		}

		// TRAITEMENT / APPLICATION D'UN FILTRE
		// Mettre le bleu
		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width/3; x++) {
				tr[x][y] = tr[x][y];
				tg[x][y] = tg[x][y];
				tb[x][y] = 255;
				// ta[x][y] = ta[x][y];
			}
		}

		// TRAITEMENT / APPLICATION D'UN FILTRE
		// Mettre le blanc
		for (var y = 0; y < height; y++) {
			for (var x = Math.round(width*1/3); x < Math.round(width*2/3); x++) {
				tr[x][y] = tr[x][y] + 100;
				tg[x][y] = tg[x][y] + 100;
				tb[x][y] = tb[x][y] + 100;
				// ta[x][y] = ta[x][y];
			}
		}

		// TRAITEMENT / APPLICATION D'UN FILTRE
		// Mettre le rouge
		for (var y = 0; y < height; y++) {
			for (var x = Math.round(width*2/3); x < width; x++) {
				tr[x][y] = 255;
				tg[x][y] = tg[x][y];
				tb[x][y] = tb[x][y];
				// ta[x][y] = ta[x][y];
			}
		}

		// RETOUR EN 1D POUR AFFICHER LES MODIFICATIONS
		// 4 tab 2D (r,g,b,a) -> 1 tab 1D POUR METTRE A JOUR L'IMAGE
		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				// - 1 car on commence à 0 dans un tableau
				pix[x*4+y*(width*4)+0] = tr[x][y];
				pix[x*4+y*(width*4)+1] = tg[x][y];
				pix[x*4+y*(width*4)+2] = tb[x][y];
				pix[x*4+y*(width*4)+3] = ta[x][y];
			}
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, 0, 0);

		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);

		// AFfiche l'histogramme
		histogram();
	}

	function afterload(){
		invertbutton = document.getElementById('invertbutton');
		graybutton = document.getElementById('graybutton');
		blackbutton = document.getElementById('blackbutton');
		redcanalbutton = document.getElementById('redcanalbutton');
		addnoisebutton = document.getElementById('addnoisebutton');
		tvnoisebutton = document.getElementById('tvnoisebutton');
		addluminositybutton = document.getElementById('addluminositybutton');
		removeluminositybutton = document.getElementById('removeluminositybutton');
		mirrorbutton = document.getElementById('mirrorbutton');
		blurbutton = document.getElementById('blurbutton');
		frenchybutton = document.getElementById('frenchybutton');

		invertbutton.addEventListener('click', function(ev){
			myInvert();
			}, false);

		graybutton.addEventListener('click', function(ev){
			myGray();
			}, false);

		blackbutton.addEventListener('click', function(ev){
			myBlack();
			}, false);

		redcanalbutton.addEventListener('click', function(ev){
			myCanal();
			}, false);

		addnoisebutton.addEventListener('click', function(ev){
			myAddNoise();
			}, false);

		tvnoisebutton.addEventListener('click', function(ev){
			myTVNoise();
			}, false);

		addluminositybutton.addEventListener('click', function(ev){
			myAddLuminosity();
			}, false);

		removeluminositybutton.addEventListener('click', function(ev){
			myRemoveLuminosity();
			}, false);

		verticalmirrorbutton.addEventListener('click', function(ev){
			myVerticalMirror();
			}, false);

		horizontalmirrorbutton.addEventListener('click', function(ev){
			myHorizontalMirror();
			}, false);

		blurbutton.addEventListener('click', function(ev){
			myBlur();
			}, false);

		frenchybutton.addEventListener('click', function(ev){
			myFrenchy();
			}, false);

	}

	function getRandomIntInclusive(min, max) {
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min +1)) + min;
	}

	window.addEventListener('load', afterload, false);
})();
