const shapeDivTag = document.getElementsByClassName("shape")[0];
const textDivTag = document.getElementsByClassName("textbox")[0];
const BtnDivTag = document.getElementsByClassName("Btn")[0];

BtnDivTag.addEventListener("click", ()=>{
   shapeDivTag.classList.add("heart", "tranformshow");
   BtnDivTag.style.display = "none";
   textDivTag.classList.add("text");

})