// Movement animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".title");
const cabinet = document.querySelector(".cabinet img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const colors = document.querySelector(".colors");

// moving animation event
container.addEventListener("mousemove", (e) => {
	let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
	let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
	card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
// animate in
container.addEventListener("mouseenter", (e) => {
	card.style.transition = "none";
	//Popout
	title.style.transform = "translateZ(150px)";
	cabinet.style.transform = "translateZ(100px) rotateX(-10deg) rotateY(10deg)" ;
	description.style.transform = "translateZ(125px)";
	colors.style.transform = "translateZ(100px)";
	purchase.style.transform = "translateZ(75px)";
});
// animate out
container.addEventListener("mouseleave", (e) => {
	card.style.transition = "all 0.5s ease";
	card.style.transform = `rotateY(0deg) rotateX(0deg)`;
	//Popback
	title.style.transform = "translateZ(0px)";
	cabinet.style.transform = "translateZ(0px) rotateZ(0deg)";
	description.style.transform = "translateZ(0px)";
	colors.style.transform = "translateZ(0px)";
	purchase.style.transform = "translateZ(0px)";
});
