// change hu to eng
let lang = navigator.language;
let l = lang.substring(0,2);


if(l == 'hu'){
  toHun();
}
else {
  toEng();
}

document.querySelector('.eng').addEventListener('click', toEng);
document.querySelector('.hun').addEventListener('click', toHun);


function toEng() {
  // let en = document.getElementsByClassName("en");
  // let hu = document.getElementsByClassName("hu");
  // en.classList.toggle("hide");
  // hu.classList.toggle("hide");
  let a =  document.querySelectorAll(".en");
  for( let i = 0; i < a.length; i++) {
    document.querySelectorAll(".en")[i].classList.remove("hide");
  }
  let b =  document.querySelectorAll(".hu");
  for( let i = 0; i < b.length; i++) {
    document.querySelectorAll(".hu")[i].classList.add("hide");
  }


}

function toHun() {

  let a =  document.querySelectorAll(".en");
  for( let i = 0; i < a.length; i++) {
    document.querySelectorAll(".en")[i].classList.add("hide");
  }
  let b =  document.querySelectorAll(".hu");
  for( let i = 0; i < b.length; i++) {
    document.querySelectorAll(".hu")[i].classList.remove("hide");
  }

}

// document.querySelector('.eng').onclick = function()  {
//   document.querySelector('h1').innerHTML = "Hello";
// }
