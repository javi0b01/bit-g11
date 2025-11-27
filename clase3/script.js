// Comentario en JavaScript
/* Comentarios en JavaScript */

document.addEventListener("DOMContentLoaded", ()=>{
  console.log("DOM listo!")

  const mainSection = document.getElementById("main-section")
  console.log("sectión principal:", mainSection);

  const paramsName = document.getElementsByName("para-name")
  console.log("paramsName:", paramsName);

  const allButtons = document.getElementsByTagName("button")
  console.log("allButtons:", allButtons);

  const jsOnclickBtn = document.getElementById("js-onclick-btn")
  jsOnclickBtn.onclick = ()=>{
    alert('Hiciste click en el botón click JS onclick')
    console.log("Se hizo click sobre el botón JS onclick")
  }

})
