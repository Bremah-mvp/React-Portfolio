// All images required for the Carousel
import code from "./images/code.jpg";
import refactor from "./images/refactor.jpg";
import dashb from "./images/dashb.png";
import two from "./images/two.png";
import annotation  from "./images/annotation.png";
import project from "./images/project.png";
import battle from "./images/battle.png";


const items = [
		{
		id: 1,
		src: code,
		altText: "My first ever Website",
		caption: "My first professional website. Created entirely by myself.",
		link: "https://github.com/Bremah-mvp/prework-about-me.git",
		live: "https://bremah-mvp.github.io/prework-about-me/"
	},
	{
		id: 2,
		src: refactor ,
		altText: "Static Website",
		caption: "This website is a static HTML website using semantic tags and minimal CSS",
		link: "https://bremah-mvp.github.io/code-refactor/",
		live: "https://github.com/Bremah-mvp/code-refactor.git"
	},
	{
		id: 3,
		src: dashb,
		altText: "Weather Dashboard",
		caption: " This is a weather application that lets you know the current and the next five days weather of any city in the world.",
		link: "https://bremah-mvp.github.io/Weather-Dashboard/",
		live: "https://github.com/Bremah-mvp/Weather-Dashboard.git"
	},
	{
		id: 4,
		src: two,
		altText: "JAVASCRIPT QUIZ ABOUT NBA BASKETBALL",
		caption: " This is a test quiz about users knowledge and familiarity about NBA basketball.",
		link: "https://bremah-mvp.github.io/Javascript-Quiz/",
		live: "https://github.com/Bremah-mvp/Javascript-Quiz.git"
	},
	{
		id: 5,
		src: annotation,
		altText: "HTML PAGE GENERATOR",
		caption: "Html page generator app This application helps users build a hustle free html page for their team or management.",
		link: "https://github.com/Bremah-mvp/Html-Generator.git",
		live: "https://drive.google.com/file/d/1yBxDyn0QHamQC50ZGOfHFcqpvUido-96/view"
	},
	{
		id: 6,
		src: project,
		altText: "Work_Bytes",
		caption: "This app is very similar to 'Which character are you most like?' quizzes that were popular during the Internet's first boom. I enjoyed making this as I got to utilise my favorite film series again - Lord of the Rings. The math required for this app to work properly was challenging but I'm glad to say I overcame it.",
		link: "https://github.com/Bremah-mvp/Work_Bytes.git",
		live: "https://relizabet.github.io/Work_Bytes/"
	},
	{
		id: 7,
		src: battle,
		altText: "Geo Battle",
		caption: "Geo-battle is an application where users can create their own customized player who can then battle multiple villains.",
		link: "https://github.com/Bremah-mvp/Geo-Battle.git",
		live: "https://lit-beyond-05882.herokuapp.com/"
	},

];

export default items;