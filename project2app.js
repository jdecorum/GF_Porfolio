// Movement animation to happen

const card = document.querySelector(".card");
const container = document.querySelector(".container");

// moving animation event

container.addEventListener("mousemove", () => {
	let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
	let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
	card.style.transform = `rotateY(${xAxis}deg), rotateX(${yAxis}deg)`;
});

// animate in
container.addEventListener("mouseenter", () => {
	card.style.transition = "none";
});

// animate out
container.addEventListener("mouseleave", () => {
	card.style.transition = "all 0.5s ease";
	card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
