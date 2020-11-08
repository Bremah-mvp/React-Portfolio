// All images required for the Carousel
import code from "./images/code.jpg";
import refactor from "./images/refactor.png";
import dashb from "./images/dashb.png";
import two from "./images/two.png";
import annotation  from "./images/annotation.png";
import project from "./images/project.png";
import battle from "./images/battle.png";
// import crystal from "./images/crystalcollector.png";
// import fridgeChef from "./images/fridgechef.png";
// import giftastic from "./images/giftastic.png";
// import liri from "./images/liri-node-app.png";
// import trainTimes from "./images/traintimes.png";
// import trivia from "./images/trivia.png";

const items = [
		{
		id: 1,
		src: code,
		altText: "My first ever Website",
		caption: "My first professional website. Created entirely by myself.",
		link: "https://bremah-mvp.github.io/prework-about-me/",
		live: "https://github.com/Bremah-mvp/prework-about-me.git"
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
// 	{
// 		id: 8,
// 		src: liri,
// 		altText: "LIRI - Node App",
// 		caption: "LIRI is much like the iPhone's SIRI, but it uses language interpretation rather than speech! LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies and will work through Node's command line input. This was my first, purely back-end application. It opened my eyes to a wider world of programming.",
// 		link: "https://github.com/Bremah-mvp/Geo-Battle.git",
// 		live: "https://lit-beyond-05882.herokuapp.com/"
// 	},
// 	{
// 		id: 9,
// 		src: fridgeChef,
// 		altText: "Fridge Chef",
// 		caption: "Project one, what a blast. Myself and three fellow programmers created this website in just two weeks. Working in our amazing group made the whole project an absolute joy. We set off with the desire to incorporate as many of the technologies we had learnt on our first 9 weeks in the bootcamp, and we are all very satisfied with the end result. I predominantly worked on the Ingredient Entry page and had a lot of fun utilising local storage, however we all were happy to help each other when required. This page lets the user select common ingredients from their fridge and the website returns a recipe.",
// 		link: "https://github.com/seanbelverstone/Fridge-Chef",
// 		live: "https://seanbelverstone.github.io/Fridge-Chef/"
// 	},
// 	{
// 		id: 10,
// 		src: trivia,
// 		altText: "Lord of the Rings Trivia",
// 		caption: "A Lord of the Rings trivia quiz. With dynamically appending questions, countdown timers and a rating screen at the end, this was one of my favorite projects to work on. Not just because of the theme used, but also because this project was the first one with full creative freedom. My favorite piece of feedback from this was: 'Your UI is beautiful' So proud!",
// 		link: "https://github.com/seanbelverstone/TriviaGame",
// 		live: "https://seanbelverstone.github.io/TriviaGame/"
// 	},
// 	{
// 		id: 11,
// 		src: trainTimes,
// 		altText: "Train Times",
// 		caption: "This project contains my first ever use of the back-end service, Firebase. I am quite fond of Firebase and its intricacies and it was extremely exciting to utilize a server for the first time. I designed this page in the colors of my grandfather's favorite style of train, the Southern Railway King Arthur - Sir Lamiel.",
// 		link: "https://github.com/seanbelverstone/Train-Times",
// 		live: "https://seanbelverstone.github.io/Train-Times/"
// 	},
// 	{
// 		id: 12,
// 		src: giftastic,
// 		altText: "GifTastic",
// 		caption: "This is a gif display website! Simply write in the name of a video game, click your shiny new button and an assortment of related gifs will display. I included an option for an amount of gifs to display for further functionality. This website required the use of APIs and AJAX calls, which were very exciting.",
// 		link: "https://github.com/seanbelverstone/Giftastic",
// 		live: "https://seanbelverstone.github.io/Giftastic/"
// 	},
// 	{
// 		id: 13,
// 		src: crystal,
// 		altText: "Crystal Collector",
// 		caption: "A simple, yet addictive Crystal Collector game, where the user has to carefully select the crystals to reach the target number. Each crystal contains a value that is intially hidden but reveals itself on the first click. I showed this to my family back in the UK and they had a blast!",
// 		link: "https://github.com/seanbelverstone/unit-4-game",
// 		live: "https://seanbelverstone.github.io/unit-4-game/"
// 	}
];

export default items;