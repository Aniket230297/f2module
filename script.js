document.getElementById("img1").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "flex";

})

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
})

document.querySelector("button").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
})




const name = document.getElementById("name");
const username = document.getElementById("username");
const btn = document.getElementById("btn");
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");

document.getElementById("img2").addEventListener("click", function () {
  document.querySelector(".userpopup").style.display = "flex";
  result1.innerHTML = name.value;
  result2.innerHTML= username.value;
})

document.querySelector(".close1").addEventListener("click", function () {
  document.querySelector(".userpopup").style.display = "none";
})


document.getElementById("img3").addEventListener("click", function () {
  document.querySelector(".dicepopup").style.display = "flex";

})

document.querySelector(".close2").addEventListener("click", function () {
  document.querySelector(".dicepopup").style.display = "none";
})