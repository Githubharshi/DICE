var random1=Math.floor(Math.random()*6)+1;
var image1="dice"+random1+".png";
document.querySelectorAll("img")[0].setAttribute("src",image1);

var random2=Math.floor(Math.random()*6)+1;
var image2="dice"+random2+".png";
document.querySelectorAll("img")[1].setAttribute("src",image2);

if(random1>random2){
  document.querySelector("h1").innerHTML="🎉Player 1 WINS🎉";
}
else if(random1<random2){
  document.querySelector("h1").innerHTML=" 🎉Players 2 WINS🎉";
}else{
  document.querySelector("h1").innerHTML=" DRAW🙌";
}
