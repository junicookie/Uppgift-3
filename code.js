const button = document.getElementById("myButton");
const changeGreeting = document.querySelector("h1", "#h1");

button.addEventListener("click", function() {
     changeGreeting.innerHTML = "Goodbye, World!";
     changeGreeting.style.color = "hotpink";
}
,false);
