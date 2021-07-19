//$('.close').click(function(){
//  $('.card').parent().slideUp();
//})

let btnI=document.querySelectorAll(".btni");
let btnD=document.querySelectorAll(".btnd");
let qteS=document.querySelectorAll(".qte");
let likebtn=document.querySelectorAll(".like");
let likeclr=document.querySelectorAll(".far");

 
//function calcul total
function calcul(){
    let totalvarr=0;
    let totalP=document.querySelector("#total");
    let cardPrice=document.querySelectorAll(".card-price");
    let qteS=document.querySelectorAll(".qte");
 
  for (let i=0 ; i<btnD.length;i++){
    totalvarr=totalvarr+(parseInt((qteS[i].innerHTML),10)*parseInt((cardPrice[i].innerHTML),10));
    totalP.innerHTML=totalvarr
  }
}
calcul();

for (let i=0 ; i<btnD.length;i++){
    let totalP=document.querySelector("#total");
    let cardPrice=document.querySelectorAll(".card-price");
    let qteS=document.querySelectorAll(".qte");
    let rmvBtn=document.querySelectorAll(".close");
//increment btn
 btnI[i].addEventListener("click" ,function () {
  qteS[i].innerHTML++;
  calcul();
});
//decrement btn
 btnD[i].addEventListener("click", function () {
  let qtee=parseInt((qteS[i].innerHTML),10);
    if (qtee>1){
  qteS[i].innerHTML--;}
  calcul();
});
//like btn
 likeclr[i].addEventListener("click", function(){
   if (likeclr[i].style.color === "grey"){
     likeclr[i].style.color="blue";
     likeclr[i].innerHTML++;
     }
     else 
          likeclr[i].style.color="grey";
          likeclr[i].innerHTML--;
 });
//  remove btn

 rmvBtn[i].addEventListener("click",function(){
  let totalP=document.querySelector("#total");
  totalP.innerHTML=totalP.innerHTML-(parseInt((qteS[i].innerHTML),10)*parseInt((cardPrice[i].innerHTML),10));
  rmvBtn[i].parentElement.remove();
})
}