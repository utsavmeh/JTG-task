var i = 0;
var images = [];
var link = [];
link[2] = "https://www.google.com/";
link[4] = "https://www.microsoft.com/en-in/";
link[1] = "https://www.fedex.com/en-in/home.html";
link[5] = "https://www.walmart.com/";
link[0] =
	"https://www.airbnb.co.in/?locale=en&_set_bev_on_new_domain=1626492092_MTg1Yzc0ZmJlZDY1";
link[3] = "https://www.hubspot.com/";

images[0] = "./logos/Logo Clouds/Airbnb Logo.png";
images[1] = "./logos/Logo Clouds/FedEx Logo.png";
images[2] = "./logos/Logo Clouds/Google Logo.png";
images[3] = "./logos/Logo Clouds/Hubspot Logo.png";
images[4] = "./logos/Logo Clouds/Microsoft Logo.png";
images[5] = "./logos/Logo Clouds/Walmart Logo.png";

function changeImg(j) {
	if (j == -1) {
		i += j;
		if (i == 0) {
			i = -1;
		}
		document.img1.src = images[((i % 6) + 6) % 6];
		// document.getElementById("firstlink").href = link[((i % 6) + 6) % 6];
		document.img2.src = images[((i % 6) + 7) % 6];
		// document.getElementById("secondlink").href = link[((i % 6) + 7) % 6];
		document.img3.src = images[((i % 6) + 8) % 6];
		// document.getElementById("thirdlink").href = link[((i % 6) + 8) % 6];
		document.img4.src = images[((i % 6) + 9) % 6];
		// document.getElementById("fourthlink").href = link[((i % 6) + 9) % 6];
		document.img5.src = images[((i % 6) + 10) % 6];
		// document.getElementById("fifthlink").href = link[((i % 6) + 10) % 6];
		document.img6.src = images[((i % 6) + 11) % 6];
		// document.getElementById("sixthlink").href = link[((i % 6) + 11) % 6];
	} else {
		i += j;
		document.img1.src = images[Math.abs((i + 0) % 6)];
		// document.getElementById("firstlink").href = link[Math.abs((i + 0) % 6)];
		document.img2.src = images[Math.abs((i + 1) % 6)];
		// document.getElementById("secondlink").href = link[Math.abs((i + 1) % 6)];
		document.img3.src = images[Math.abs((i + 2) % 6)];
		// document.getElementById("thirdlink").href = link[Math.abs((i + 2) % 6)];
		document.img4.src = images[Math.abs((i + 3) % 6)];
		// document.getElementById("fourthlink").href = link[Math.abs((i + 3) % 6)];
		document.img5.src = images[Math.abs((i + 4) % 6)];
		// document.getElementById("fifthlink").href = link[Math.abs((i + 4) % 6)];
		document.img6.src = images[Math.abs((i + 5) % 6)];
		// document.getElementById("sixthlink").href = link[Math.abs((i + 5) % 6)];
	}
}
if (i < images.length - 1) {
	i++;
} else {
	i = 0;
}
changeImg;
// window.onload = changeImg;
