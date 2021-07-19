let totalP=document.getElementById("total");
let btnI=document.querySelectorAll(".btni");
let btnD=document.querySelectorAll(".btnd");
let likebtn=document.querySelectorAll(".like");
let likeclr=document.querySelectorAll(".far");

let totalvar=0;
// function count
function count(priceU){
  totalvar=~~totalP.innerHTML
  totalvar=totalvar+priceU;
  totalP.innerHTML=totalvar;
}
// function change color btn
function likecolorfn(_this) {
  if(_this.style.color === "grey"){
  _this.style.color = "blue";
  }
  else _this.style.color = "grey";
}

for (let i=0 ; i<btnD.length;i++){
  let rmvBtn=document.querySelectorAll(".close");
  let cardPrices=document.querySelectorAll(".card-price");
  let qteS=document.querySelectorAll(".qte");
  let cardPrice=parseInt((cardPrices[i].innerHTML),10)
//increment btn
  btnI[i].addEventListener("click" ,function () {
  qteS[i].value++
  count(cardPrice);
});
//decrement btn
  btnD[i].addEventListener("click", function (e) {
  if (qteS[i].value>1){
    count(-cardPrice);
    qteS[i].value--;}
  });
//  remove btn
  rmvBtn[i].addEventListener("click",function(){
  totalvar=totalvar-(qteS[i].value*cardPrice);
  totalP.innerHTML=totalvar;
  rmvBtn[i].parentElement.remove();
});
}